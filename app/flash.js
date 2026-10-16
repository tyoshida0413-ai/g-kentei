/* フラッシュカード（設計書 §10.2）。DS検定・生成AIパスポートの学習サイトの作り（設定 → カード → 終了）にならう。
   - 範囲：大項目・節を選ぶ（その節を home とする用語）。出題順：ランダム／収録順。「まだ覚えていない語だけ」
   - 表：用語名。裏：読み・意味・節・「詳しく」（右のペイン）。裏で「覚えた／まだ」を記録する
   - キーボード：Space でめくる、← → で前後 */
(function () {
  const store = GK.store;
  const SY = GK.syllabus;
  const h = (tag, cls, text) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  };
  const btn = (cls, text, fn) => {
    const b = h("button", cls, text);
    b.type = "button";
    b.addEventListener("click", fn);
    return b;
  };
  const shuffle = a => {
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  };
  const secTitle = id => {
    const s = SY.sections.find(x => x.id === id);
    return s ? id + " " + s.title : id;
  };

  /* 設定は画面を切り替えても残す（記録には入れない） */
  const sel = { secs: new Set(SY.sections.map(s => s.id)), order: "shuffle", onlyNew: false };
  let root = null, deck = [], idx = 0, flipped = false, seen = new Set(), stage = "setup";

  const pool = () => GK.glossary.filter(g => g.home && sel.secs.has(g.home) && (!sel.onlyNew || !store.state.known[g.id]));

  function render(r) {
    root = r;
    if (stage === "play" && deck.length) drawPlay();
    else if (stage === "done") drawDone();
    else drawSetup();
  }

  function drawSetup() {
    stage = "setup";
    root.innerHTML = "";
    root.appendChild(h("h1", "page-title", "フラッシュカード"));
    const known = Object.keys(store.state.known).length;
    root.appendChild(h("p", "page-sub", "表に用語、裏に意味が出ます。めくって覚えたかどうかを記録できます。覚えた語：" + known + " ／ " + GK.glossary.length));

    root.appendChild(h("div", "label", "範囲（大項目・節）"));
    const box = h("div", "fc-range");
    const allRow = h("div", "fc-all");
    allRow.append(
      btn("btn small", "すべて選ぶ", () => { SY.sections.forEach(s => sel.secs.add(s.id)); drawSetup(); }),
      btn("btn small", "すべて外す", () => { sel.secs.clear(); drawSetup(); })
    );
    box.appendChild(allRow);
    SY.majors.forEach(m => {
      const secs = SY.sections.filter(s => s.major === m.id);
      const grp = h("div", "fc-major");
      const ml = h("label", "fc-mlabel");
      const mc = h("input");
      mc.type = "checkbox";
      const on = secs.filter(s => sel.secs.has(s.id)).length;
      mc.checked = on === secs.length;
      mc.indeterminate = on > 0 && on < secs.length;
      mc.addEventListener("change", () => { secs.forEach(s => mc.checked ? sel.secs.add(s.id) : sel.secs.delete(s.id)); drawSetup(); });
      ml.append(mc, h("span", "fc-mno", m.id), h("span", "", m.title));
      grp.appendChild(ml);
      const list = h("div", "fc-secs");
      secs.forEach(s => {
        const l = h("label", "fc-sec");
        const c = h("input");
        c.type = "checkbox";
        c.checked = sel.secs.has(s.id);
        c.addEventListener("change", () => { c.checked ? sel.secs.add(s.id) : sel.secs.delete(s.id); drawSetup(); });
        const n = GK.glossary.filter(g => g.home === s.id).length;
        l.append(c, h("span", "fc-sno", s.id), h("span", "", s.title + "（" + n + "）"));
        list.appendChild(l);
      });
      grp.appendChild(list);
      box.appendChild(grp);
    });
    root.appendChild(box);

    root.appendChild(h("div", "label", "出題順"));
    const ord = h("div", "fc-opts");
    [["shuffle", "ランダム"], ["order", "収録順"]].forEach(([v, t]) => {
      const l = h("label");
      const r = h("input");
      r.type = "radio";
      r.name = "fc-order";
      r.checked = sel.order === v;
      r.addEventListener("change", () => { sel.order = v; });
      l.append(r, document.createTextNode(" " + t));
      ord.appendChild(l);
    });
    const nl = h("label");
    const nc = h("input");
    nc.type = "checkbox";
    nc.checked = sel.onlyNew;
    nc.addEventListener("change", () => { sel.onlyNew = nc.checked; drawSetup(); });
    nl.append(nc, document.createTextNode(" まだ覚えていない語だけ"));
    ord.appendChild(nl);
    root.appendChild(ord);

    const n = pool().length;
    const row = h("div", "btn-row");
    const start = btn("btn primary", n + " 枚で始める", () => startDeck(pool()));
    start.disabled = !n;
    row.appendChild(start);
    root.appendChild(row);
    if (!n) root.appendChild(h("p", "note", sel.secs.size ? "選んだ範囲に、まだ覚えていない語はありません。" : "範囲を1つ以上選んでください。"));
  }

  function startDeck(list) {
    deck = sel.order === "shuffle" ? shuffle(list.slice()) : list.slice();
    idx = 0; flipped = false; seen = new Set(); stage = "play";
    drawPlay();
  }

  function drawPlay() {
    stage = "play";
    const g = deck[idx];
    seen.add(g.id);
    root.innerHTML = "";
    const top = h("div", "fc-top");
    top.append(h("span", "fc-count", (idx + 1) + " ／ " + deck.length), btn("btn small", "設定に戻る", drawSetup));
    root.appendChild(top);
    const bar = h("div", "fc-progress");
    const fill = h("i");
    fill.style.width = Math.round((idx + 1) / deck.length * 100) + "%";
    bar.appendChild(fill);
    root.appendChild(bar);

    const card = h("div", "fc-card" + (flipped ? " flipped" : ""));
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", flipped ? "カードの裏" : "カードの表。押すとめくる");
    const front = h("div", "fc-front", GK.terms.display(g));
    card.appendChild(front);
    if (store.state.known[g.id]) card.appendChild(h("div", "fc-known", "覚えた"));
    if (!flipped) {
      card.appendChild(h("div", "fc-hint", "押す（Space）とめくる"));
    } else {
      if (g.reading && /[一-鿿]/.test(g.term)) front.appendChild(h("span", "fc-read", g.reading));
      card.appendChild(h("div", "fc-back", g.short || "（意味は準備中）"));
      const more = btn("fc-more", "詳しく：" + secTitle(g.home) + " →", e => { e.stopPropagation(); GK.pane && GK.pane.openDetail(g.id); });
      card.appendChild(more);
    }
    card.addEventListener("click", () => { if (!flipped) flip(); });
    root.appendChild(card);

    const nav = h("div", "fc-nav");
    const prev = btn("btn", "← 前へ", () => move(-1));
    prev.disabled = idx === 0;
    if (!flipped) {
      nav.append(prev, btn("btn primary", "めくる", flip), btn("btn", "次へ →", () => move(1)));
    } else {
      nav.append(prev,
        btn("btn fc-ng", "まだ", () => mark(false)),
        btn("btn primary fc-ok", "覚えた", () => mark(true)));
    }
    root.appendChild(nav);
    root.appendChild(h("p", "note", "キーボード：Space でめくる、← → で前後。"));
  }

  function flip() { flipped = !flipped; drawPlay(); }
  function move(d) {
    const n = idx + d;
    if (n < 0) return;
    if (n >= deck.length) { drawDone(); return; }
    idx = n; flipped = false; drawPlay();
  }
  function mark(ok) {
    store.setKnown(deck[idx].id, ok);
    move(1);
  }

  function drawDone() {
    stage = "done";
    root.innerHTML = "";
    root.appendChild(h("h1", "page-title", "フラッシュカード"));
    const ok = deck.filter(g => store.state.known[g.id]).length;
    root.appendChild(h("div", "score-big", String(seen.size)));
    root.appendChild(h("p", "page-sub", "枚を確認しました（このデッキ " + deck.length + " 枚のうち、覚えた " + ok + "・まだ " + (deck.length - ok) + "）"));
    const row = h("div", "btn-row");
    row.appendChild(btn("btn primary", "同じ範囲でもう一度", () => startDeck(deck)));
    const rest = deck.filter(g => !store.state.known[g.id]);
    const again = btn("btn", "まだの語だけでもう一度（" + rest.length + "）", () => startDeck(rest));
    again.disabled = !rest.length;
    row.appendChild(again);
    row.appendChild(btn("btn", "設定に戻る", drawSetup));
    root.appendChild(row);
  }

  document.addEventListener("keydown", e => {
    if (!root || root.hidden || stage !== "play") return;
    if (e.target.closest && e.target.closest("input, textarea, select, dialog, button, #pane")) return;
    if (e.key === " " || e.key === "Spacebar") { e.preventDefault(); flip(); }
    else if (e.key === "ArrowRight") { e.preventDefault(); move(1); }
    else if (e.key === "ArrowLeft") { e.preventDefault(); move(-1); }
  });

  GK.flash = { render };
})();
