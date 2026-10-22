/* 記録の保存：栞・読了・解答結果・模擬試験の途中経過。
   ブラウザ内（localStorage）に保存し、JSON での書き出し・読み込みでバックアップする。
   端末間の共有（app/sync.js、設計書 §4.5.1）のため、2つの記録を統合できるようにする。
   消した印は tomb に消した時刻を残し、「記録をすべて消す」は base（その時刻より前の記録を捨てる）で表す。 */
(function () {
  const KEY = "gkentei.v1";
  const blank = () => ({ v: 1, lastPos: null, read: {}, bms: [], ans: {}, mock: null, mockAt: "", known: {},
    tomb: { read: {}, known: {}, bms: {} }, base: "", ui: { open: {} } });
  const fill = obj => {
    const st = Object.assign(blank(), obj);
    st.tomb = Object.assign({ read: {}, known: {}, bms: {} }, st.tomb);
    if (!st.ui || !st.ui.open) st.ui = { open: {} };
    if (st.mock && !st.mockAt) st.mockAt = "1970-01-01T00:00:00.000Z";   // 2026-10-22 より前の記録（時刻なし）
    return st;
  };
  let state = blank();
  let available = true;

  try {
    const raw = localStorage.getItem(KEY);
    if (raw) state = fill(JSON.parse(raw));
  } catch (e) {
    available = false;
  }

  const listeners = [];
  let timer = null;
  function save(now, quiet) {
    if (!quiet) listeners.forEach(f => f());
    if (!available) return;
    const run = () => {
      try { localStorage.setItem(KEY, JSON.stringify(state)); }
      catch (e) { available = false; }
    };
    clearTimeout(timer);
    if (now) run(); else timer = setTimeout(run, 300);
  }
  window.addEventListener("pagehide", () => save(true));

  const stamp = () => new Date().toISOString();
  const later = (a, b) => ((a || "") >= (b || "") ? a : b);

  /* 2つの記録を統合した新しい記録を返す。どちらも書き換えない。ui（目次の開閉）は a のものを使う */
  function merge(a, b) {
    a = fill(a); b = fill(b);
    const base = later(a.base, b.base) || "";
    const out = blank();
    out.base = base;
    out.ui = a.ui;
    ["read", "known"].forEach(k => {
      const tomb = {};
      Object.keys(Object.assign({}, a.tomb[k], b.tomb[k])).forEach(id => {
        const t = later(a.tomb[k][id], b.tomb[k][id]);
        if (t > base) tomb[id] = t;
      });
      Object.keys(Object.assign({}, a[k], b[k])).forEach(id => {
        const v = later(a[k][id], b[k][id]);
        if (v > base && v > (tomb[id] || "")) out[k][id] = v;
      });
      out.tomb[k] = tomb;
    });
    Object.keys(Object.assign({}, a.tomb.bms, b.tomb.bms)).forEach(id => {
      const t = later(a.tomb.bms[id], b.tomb.bms[id]);
      if (t > base) out.tomb.bms[id] = t;
    });
    const bms = new Map();
    a.bms.concat(b.bms).forEach(x => {
      const cur = bms.get(x.id);
      if (!cur || (x.at || "") > (cur.at || "")) bms.set(x.id, x);
    });
    out.bms = [...bms.values()].filter(x => (x.at || "") > base && (x.at || "") > (out.tomb.bms[x.id] || ""));
    Object.keys(Object.assign({}, a.ans, b.ans)).forEach(id => {
      const x = a.ans[id], y = b.ans[id];
      const v = !x ? y : !y ? x : ((y.at || "") > (x.at || "") ? y : x);
      if ((v.at || "") > base) out.ans[id] = v;
    });
    const lp = !a.lastPos ? b.lastPos : !b.lastPos ? a.lastPos : ((b.lastPos.at || "") > (a.lastPos.at || "") ? b.lastPos : a.lastPos);
    out.lastPos = lp && (lp.at || "") > base ? lp : null;
    const m = (b.mockAt || "") > (a.mockAt || "") ? b : a;
    out.mockAt = m.mockAt > base ? m.mockAt : "";
    out.mock = out.mockAt ? m.mock : null;
    return out;
  }

  GK.store = {
    get available() { return available; },
    get state() { return state; },

    setLastPos(sec, pid) {
      if (!sec) return;
      const cur = state.lastPos;
      if (cur && cur.sec === sec && cur.pid === pid) return;
      state.lastPos = { sec, pid, at: stamp() };
      save();
    },

    setRead(sec, on) {
      if (on) state.read[sec] = stamp(); else { delete state.read[sec]; state.tomb.read[sec] = stamp(); }
      save();
    },

    addBookmark(b) {
      const id = "b" + Date.now().toString(36);
      state.bms.push(Object.assign({ id, at: stamp() }, b));
      save();
      return id;
    },
    removeBookmark(id) {
      state.bms = state.bms.filter(b => b.id !== id);
      state.tomb.bms[id] = stamp();
      save();
    },

    recordAnswer(qid, ok) {
      const a = state.ans[qid] || { n: 0, ng: 0 };
      a.n += 1;
      if (!ok) a.ng += 1;
      a.ok = ok;
      a.at = stamp();
      state.ans[qid] = a;
      save();
    },

    setMock(m) { state.mock = m; state.mockAt = stamp(); save(); },

    /* フラッシュカードで「覚えた」語（設計書 §10.2） */
    setKnown(id, on) {
      if (on) state.known[id] = stamp(); else { delete state.known[id]; state.tomb.known[id] = stamp(); }
      save();
    },
    setOpen(majorId, open) { state.ui.open[majorId] = open; save(false, true); },

    exportJSON() {
      const blob = new Blob([JSON.stringify(state, null, 1)], { type: "application/json" });
      const a = document.createElement("a");
      const d = new Date();
      const ymd = d.getFullYear() + String(d.getMonth() + 1).padStart(2, "0") + String(d.getDate()).padStart(2, "0");
      a.href = URL.createObjectURL(blob);
      a.download = "G検定学習_記録_" + ymd + ".json";
      document.body.appendChild(a);
      a.click();
      setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
    },

    /* 読み込んだ記録を今の記録に統合する（2026-10-22 から置き換えではなく統合。設計書 §4.5.1） */
    importJSON(text) {
      const obj = JSON.parse(text);
      if (!obj || obj.v !== 1 || typeof obj.read !== "object" || !Array.isArray(obj.bms)) {
        throw new Error("このアプリの記録ファイルではありません");
      }
      // 「記録をすべて消す」より前の時刻の記録も戻せるよう、その時刻以前のものは読み込んだ時刻に付け替える
      const base = state.base, now = stamp(), fix = v => (v && v <= base ? now : v);
      const src = fill(JSON.parse(JSON.stringify(obj)));
      src.base = "";
      if (base) {
        ["read", "known"].forEach(k => Object.keys(src[k]).forEach(id => { src[k][id] = fix(src[k][id]); }));
        src.bms.forEach(x => { x.at = fix(x.at); });
        Object.values(src.ans).forEach(x => { x.at = fix(x.at); });
        if (src.lastPos) src.lastPos.at = fix(src.lastPos.at);
        src.mockAt = fix(src.mockAt);
      }
      state = merge(state, src);
      save(true);
    },

    /* 共有先の記録を統合する（app/sync.js）。変わったときだけ true を返す */
    mergeRemote(obj) {
      const next = merge(state, obj);
      if (JSON.stringify(next) === JSON.stringify(state)) return false;
      state = next;
      save(true, true);
      return true;
    },
    onChange(f) { listeners.push(f); },

    reset() { const base = stamp(); state = blank(); state.base = base; save(true); }
  };
})();
