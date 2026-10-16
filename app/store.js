/* 記録の保存：栞・読了・解答結果・模擬試験の途中経過。
   ブラウザ内（localStorage）に保存し、JSON での書き出し・読み込みでバックアップする。 */
(function () {
  const KEY = "gkentei.v1";
  const blank = () => ({ v: 1, lastPos: null, read: {}, bms: [], ans: {}, mock: null, ui: { open: {} } });
  let state = blank();
  let available = true;

  try {
    const raw = localStorage.getItem(KEY);
    if (raw) state = Object.assign(blank(), JSON.parse(raw));
  } catch (e) {
    available = false;
  }

  let timer = null;
  function save(now) {
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
      if (on) state.read[sec] = stamp(); else delete state.read[sec];
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

    setMock(m) { state.mock = m; save(); },
    setOpen(majorId, open) { state.ui.open[majorId] = open; save(); },

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

    importJSON(text) {
      const obj = JSON.parse(text);
      if (!obj || obj.v !== 1 || typeof obj.read !== "object" || !Array.isArray(obj.bms)) {
        throw new Error("このアプリの記録ファイルではありません");
      }
      state = Object.assign(blank(), obj);
      save(true);
    },

    reset() { state = blank(); save(true); }
  };
})();
