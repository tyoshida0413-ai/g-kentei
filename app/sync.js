/* 端末間の共有（設計書 §4.5.1）：記録を GitHub の記録専用の非公開リポジトリに JSON で保存し、Mac と iPad で共有する。
   鍵はそのリポジトリだけに絞った Fine-grained トークン。各端末で1回入力し、このブラウザの中に保存する。
   保存の前に GitHub の記録を読み込んで統合してから書く（上書きしない）。間に別の端末が書いたときは sha の食い違いで分かるのでやり直す。 */
(function () {
  const REPO = "tyoshida0413-ai/g-kentei-records";
  const FILE = "records.json";
  const API = "https://api.github.com/repos/" + REPO + "/contents/" + FILE;
  const TOKEN_KEY = "gkentei.sync.token";
  const WAIT_MS = 30000;   // 変更のあと、まとめて保存するまでの時間

  const store = GK.store;
  let token = "";
  try { token = localStorage.getItem(TOKEN_KEY) || ""; } catch (e) { /* 保存できないブラウザ */ }

  let status = { kind: token ? "idle" : "off", msg: "", at: "" };
  let dirty = false, busy = false, again = false, timer = null, lastRun = 0;
  const statusFns = [], mergedFns = [];

  function setStatus(kind, msg) {
    status = { kind, msg: msg || "", at: kind === "ok" ? new Date().toISOString() : status.at };
    statusFns.forEach(f => f(status));
  }

  /* 送る記録：目次の開閉（ui）は端末ごとのものなので送らない */
  const payload = st => { const o = Object.assign({}, st); delete o.ui; return o; };
  /* キーの順番に左右されない比較用の文字列 */
  const canon = v => Array.isArray(v) ? "[" + v.map(canon).join(",") + "]"
    : v && typeof v === "object" ? "{" + Object.keys(v).sort().map(k => JSON.stringify(k) + ":" + canon(v[k])).join(",") + "}"
    : JSON.stringify(v === undefined ? null : v);

  const toB64 = str => {
    const bytes = new TextEncoder().encode(str);
    let bin = "";
    for (let i = 0; i < bytes.length; i += 0x8000) bin += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
    return btoa(bin);
  };
  const fromB64 = b64 => {
    const bin = atob(b64.replace(/\s/g, ""));
    const bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return new TextDecoder().decode(bytes);
  };

  function call(method, body, keepalive) {
    return fetch(API + (method === "GET" ? "?ref=main&t=" + Date.now() : ""), {
      method,
      cache: "no-store",
      keepalive: !!keepalive,
      headers: {
        "Authorization": "Bearer " + token,
        "Accept": "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
        ...(body ? { "Content-Type": "application/json" } : {})
      },
      body: body ? JSON.stringify(body) : undefined
    });
  }

  function why(res) {
    if (res.status === 401) return "トークンが無効か、期限が切れています。新しいトークンを入れてください";
    if (res.status === 403) return "トークンに書き込みの権限がありません（Contents を Read and write にしてください）";
    if (res.status === 404) return "記録用のリポジトリに届きません（トークンの対象リポジトリに " + REPO + " を選んでください）";
    return "GitHub への保存に失敗しました（" + res.status + "）";
  }

  async function run(keepalive) {
    if (!token) return;
    if (busy) { again = true; return; }
    if (typeof navigator !== "undefined" && navigator.onLine === false) { setStatus("offline", "オフラインです。つながったときに送ります"); return; }
    busy = true;
    lastRun = Date.now();
    clearTimeout(timer); timer = null;
    setStatus("busy");
    try {
      for (let attempt = 0; attempt < 3; attempt++) {
        const sent = dirty;
        dirty = false;
        const res = await call("GET");
        let remote = null, sha;
        if (res.ok) {
          const j = await res.json();
          sha = j.sha;
          remote = JSON.parse(fromB64(j.content));
          if (store.mergeRemote(remote)) mergedFns.forEach(f => f());
        } else if (res.status !== 404) {
          dirty = dirty || sent;
          setStatus("error", why(res));
          return;
        }
        const body = payload(store.state);
        if (remote && !sent && canon(body) === canon(payload(remote))) { setStatus("ok"); return; }
        const put = await call("PUT", {
          message: "記録の同期 " + new Date().toISOString(),
          content: toB64(JSON.stringify(body)),
          branch: "main",
          ...(sha ? { sha } : {})
        }, keepalive);
        if (put.ok) { setStatus("ok"); return; }
        dirty = dirty || sent;
        if (put.status !== 409 && put.status !== 422) { setStatus("error", why(put)); return; }
        // 間に別の端末が書いた：読み込み直して統合からやり直す
      }
      setStatus("error", "別の端末と同時に保存が重なりました。少し待ってからもう一度同期してください");
    } catch (e) {
      dirty = true;
      setStatus(navigator.onLine === false ? "offline" : "error",
        navigator.onLine === false ? "オフラインです。つながったときに送ります" : "GitHub につながりませんでした（" + e.message + "）");
    } finally {
      busy = false;
      if (again) { again = false; run(); }
      else if (dirty && !timer) timer = setTimeout(run, WAIT_MS);
    }
  }

  store.onChange(() => {
    dirty = true;
    if (token && !timer) timer = setTimeout(run, WAIT_MS);
  });
  document.addEventListener("visibilitychange", () => {
    if (!token) return;
    if (document.visibilityState === "hidden") { if (dirty) run(true); }
    else if (Date.now() - lastRun > 10000) run();   // 戻ってきたとき、別の端末の記録を取り込む
  });
  window.addEventListener("pagehide", () => { if (token && dirty) run(true); });
  window.addEventListener("online", () => { if (token) run(); });

  GK.sync = {
    repo: REPO,
    get on() { return !!token; },
    get status() { return status; },
    setToken(t) {
      token = (t || "").trim();
      try { if (token) localStorage.setItem(TOKEN_KEY, token); else localStorage.removeItem(TOKEN_KEY); } catch (e) { /* 保存できないブラウザ */ }
      setStatus(token ? "idle" : "off");
      if (token) { dirty = true; run(); }
    },
    now() { return run(); },
    onStatus(f) { statusFns.push(f); },
    onMerged(f) { mergedFns.push(f); },
    start() { if (token) run(); }
  };
})();
