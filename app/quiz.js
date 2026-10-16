/* 問題：節末の演習・模擬試験・間違えた問題の復習・公式例題 */
(function () {
  const L = ["A", "B", "C", "D"];
  const MOCK_SEC = 100 * 60;
  const h = (tag, cls, html) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  };
  const secOf = id => GK.syllabus.sections.find(s => s.id === id);
  const majorOf = id => { const s = secOf(id); return s ? GK.syllabus.majors.find(m => m.id === s.major) : null; };

  /* 1問のカード。opts.reveal に選んだ番号を渡すと、答えを開いた状態で表示する（模擬試験の結果用） */
  function card(q, opts) {
    opts = opts || {};
    const el = h("div", "qcard");
    el.dataset.sec = q.sec || "";
    const prev = GK.store.state.ans[q.id];
    const s = secOf(q.sec);
    let meta = q.id + (s ? "　" + q.sec + " " + s.title : "");
    if (opts.number) meta = opts.number + "　" + meta;
    if (prev && !opts.reveal && opts.reveal !== 0) meta += "　前回 " + (prev.ok ? "○" : "×");
    el.appendChild(h("div", "q-meta", "")).textContent = meta;
    el.appendChild(h("div", "q-stem", q.stem));
    const box = h("div", "q-choices");
    const btns = q.choices.map((c, i) => {
      const b = h("button", "q-choice", '<span class="c-l">' + L[i] + '</span><span class="c-t"></span>');
      b.type = "button";
      b.querySelector(".c-t").innerHTML = c;
      b.addEventListener("click", () => answer(i));
      box.appendChild(b);
      return b;
    });
    el.appendChild(box);
    const res = h("div", "q-result");
    res.hidden = true;
    el.appendChild(res);

    function answer(i, silent) {
      const ok = i === q.ans;
      btns.forEach((b, j) => {
        b.disabled = true;
        if (j === q.ans) b.classList.add("right");
        if (j === i && !ok) b.classList.add("wrong");
        if (j === i) b.classList.add("picked");
      });
      res.innerHTML = "";
      if (i == null || i < 0) res.appendChild(h("div", "verdict ng", "未回答　正解は " + L[q.ans]));
      else res.appendChild(h("div", "verdict " + (ok ? "ok" : "ng"), ok ? "正解" : "不正解　正解は " + L[q.ans]));
      if (q.exp) res.appendChild(h("p", "t-block", q.exp));
      if (q.why && q.why.length) {
        const ul = h("ul", "q-why");
        q.why.forEach((w, j) => {
          if (!w) return;
          const li = h("li", "", '<span class="c-l">' + L[j] + '</span><span></span>');
          li.lastChild.innerHTML = w;
          ul.appendChild(li);
        });
        res.appendChild(ul);
      }
      if (q.src && q.src.length) {
        const d = h("div", "q-src", "出典：");
        q.src.forEach((x, j) => {
          if (j) d.appendChild(document.createTextNode("／"));
          if (x.u) { const a = h("a"); a.href = x.u; a.target = "_blank"; a.rel = "noopener"; a.textContent = x.t; d.appendChild(a); }
          else d.appendChild(document.createTextNode(x.t));
        });
        res.appendChild(d);
      }
      if (!silent) {
        const again = h("button", "q-again", "もう一度解く");
        again.type = "button";
        again.addEventListener("click", () => {
          btns.forEach(b => { b.disabled = false; b.classList.remove("right", "wrong", "picked"); });
          res.hidden = true;
        });
        res.appendChild(again);
      }
      res.hidden = false;
      GK.terms.link(res);
      if (!silent && opts.record !== false) GK.store.recordAnswer(q.id, ok);
      if (!silent && opts.onAnswer) opts.onAnswer(q, i, ok);
    }
    if (opts.reveal !== undefined) answer(opts.reveal, true);
    return el;
  }

  /* ───── 模擬試験 ───── */
  let tick = null;
  function shuffle(a) {
    a = a.slice();
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  }
  const fmt = s => String(Math.floor(s / 60)).padStart(2, "0") + ":" + String(s % 60).padStart(2, "0");

  function renderMock(root) {
    clearInterval(tick);
    root.innerHTML = "";
    const pool = GK.questions.filter(q => q.set === "mock");
    const m = GK.store.state.mock;
    root.appendChild(h("h1", "page-title", "模擬試験"));
    if (!m || m.status === "idle") return mockIntro(root, pool);
    if (m.status === "running") return mockRun(root, pool, m);
    return mockResult(root, pool, m);
  }

  function mockIntro(root, pool) {
    root.appendChild(h("p", "page-sub", "本番と同じ " + pool.length + " 問・100分。途中でやめても、次に開いたときに続きから再開できます（閉じている間は時間が止まります）。"));
    if (pool.length < 145) root.appendChild(h("p", "note", "模擬試験の問題は作成中です（現在 " + pool.length + " 問／予定 145 問）。"));
    const row = h("div", "btn-row");
    const b = h("button", "btn primary", "始める");
    b.type = "button";
    b.disabled = pool.length === 0;
    b.addEventListener("click", () => {
      GK.store.setMock({ status: "running", order: shuffle(pool.map(q => q.id)), cur: 0, picks: {}, flags: {}, remain: MOCK_SEC, started: new Date().toISOString() });
      renderMock(root);
    });
    row.appendChild(b);
    root.appendChild(row);
  }

  function mockRun(root, pool, m) {
    const byId = new Map(pool.map(q => [q.id, q]));
    m.order = m.order.filter(id => byId.has(id));
    const bar = h("div", "mock-bar");
    const timer = h("span", "mock-timer", fmt(m.remain));
    const prog = h("span", "mock-prog");
    const prev = h("button", "btn", "前へ"), next = h("button", "btn", "次へ"), flag = h("button", "btn", "見直し印"), end = h("button", "btn primary", "終了して採点");
    [prev, next, flag, end].forEach(b => { b.type = "button"; });
    bar.append(timer, prog, prev, next, flag, end);
    root.appendChild(bar);
    const qbox = h("div");
    root.appendChild(qbox);
    const pal = h("div", "mock-palette");
    root.appendChild(pal);

    function draw() {
      const id = m.order[m.cur];
      const q = byId.get(id);
      qbox.innerHTML = "";
      const el = h("div", "qcard");
      el.appendChild(h("div", "q-meta", "")).textContent = "第 " + (m.cur + 1) + " 問 ／ " + m.order.length;
      el.appendChild(h("div", "q-stem", q.stem));
      const box = h("div", "q-choices");
      q.choices.forEach((c, i) => {
        const b = h("button", "q-choice" + (m.picks[id] === i ? " picked" : ""), '<span class="c-l">' + L[i] + '</span><span class="c-t"></span>');
        b.type = "button";
        b.querySelector(".c-t").innerHTML = c;
        b.addEventListener("click", () => { m.picks[id] = i; GK.store.setMock(m); draw(); });
        box.appendChild(b);
      });
      el.appendChild(box);
      qbox.appendChild(el);
      prog.textContent = "回答 " + Object.keys(m.picks).length + " ／ " + m.order.length;
      flag.textContent = m.flags[id] ? "見直し印を外す" : "見直し印";
      prev.disabled = m.cur === 0;
      next.disabled = m.cur === m.order.length - 1;
      pal.innerHTML = "";
      m.order.forEach((qid, i) => {
        const b = h("button", (m.picks[qid] !== undefined ? "ans " : "") + (m.flags[qid] ? "flag " : "") + (i === m.cur ? "cur" : ""), String(i + 1));
        b.type = "button";
        b.addEventListener("click", () => { m.cur = i; GK.store.setMock(m); draw(); });
        pal.appendChild(b);
      });
    }
    prev.addEventListener("click", () => { m.cur--; GK.store.setMock(m); draw(); });
    next.addEventListener("click", () => { m.cur++; GK.store.setMock(m); draw(); });
    flag.addEventListener("click", () => { const id = m.order[m.cur]; if (m.flags[id]) delete m.flags[id]; else m.flags[id] = true; GK.store.setMock(m); draw(); });
    end.addEventListener("click", () => {
      const left = m.order.length - Object.keys(m.picks).length;
      if (!confirm(left ? "未回答が " + left + " 問あります。終了して採点しますか？" : "終了して採点しますか？")) return;
      finish();
    });
    function finish() {
      clearInterval(tick);
      m.order.forEach(id => GK.store.recordAnswer(id, m.picks[id] === byId.get(id).ans));
      m.status = "done";
      m.finished = new Date().toISOString();
      GK.store.setMock(m);
      renderMock(root);
    }
    let n = 0;
    tick = setInterval(() => {
      if (!root.isConnected || root.hidden) { clearInterval(tick); GK.store.setMock(m); return; }
      m.remain = Math.max(0, m.remain - 1);
      timer.textContent = fmt(m.remain);
      timer.classList.toggle("low", m.remain <= 600);
      if (++n % 5 === 0) GK.store.setMock(m);
      if (m.remain === 0) { alert("時間になりました。採点します。"); finish(); }
    }, 1000);
    draw();
  }

  function mockResult(root, pool, m) {
    const byId = new Map(pool.map(q => [q.id, q]));
    const ids = m.order.filter(id => byId.has(id));
    const okIds = ids.filter(id => m.picks[id] === byId.get(id).ans);
    const pct = ids.length ? Math.round(okIds.length / ids.length * 1000) / 10 : 0;
    const used = MOCK_SEC - m.remain;
    root.appendChild(h("p", "page-sub", "結果（" + (m.finished || "").slice(0, 10) + "）　所要時間 " + fmt(used)));
    root.appendChild(h("div", "score-big", pct + "%"));
    root.appendChild(h("p", "note", okIds.length + " ／ " + ids.length + " 問正解。合格ラインは非公開です（民間の推定では正答率7割程度）。"));

    const rows = {};
    ids.forEach(id => {
      const mj = majorOf(byId.get(id).sec);
      const k = mj ? mj.id : "?";
      rows[k] = rows[k] || { title: mj ? mj.title : "不明", field: mj ? mj.field : "", n: 0, ok: 0 };
      rows[k].n++;
      if (m.picks[id] === byId.get(id).ans) rows[k].ok++;
    });
    const tb = h("table", "score-table");
    tb.innerHTML = "<tr><th>大項目</th><th>正解</th><th></th></tr>";
    Object.keys(rows).sort().forEach(k => {
      const r = rows[k], p = Math.round(r.ok / r.n * 100);
      const tr = h("tr", "", "<td>" + k + "　" + r.title + "</td><td class='num'>" + r.ok + "/" + r.n + "</td><td><span class='bar'><i style='width:" + p + "%'></i></span> " + p + "%</td>");
      tb.appendChild(tr);
    });
    root.appendChild(tb);

    const row = h("div", "btn-row");
    const again = h("button", "btn primary", "もう一度受ける");
    again.type = "button";
    again.addEventListener("click", () => { GK.store.setMock({ status: "idle" }); renderMock(root); });
    row.appendChild(again);
    root.appendChild(row);

    root.appendChild(h("div", "label", "問題ごとの結果（番号を押すと解説）"));
    const pal = h("div", "mock-palette");
    const detail = h("div");
    ids.forEach((id, i) => {
      const ok = m.picks[id] === byId.get(id).ans;
      const b = h("button", ok ? "r-ok" : "r-ng", String(i + 1));
      b.type = "button";
      b.addEventListener("click", () => {
        detail.innerHTML = "";
        const pick = m.picks[id] === undefined ? -1 : m.picks[id];
        detail.appendChild(card(byId.get(id), { reveal: pick, number: "第 " + (i + 1) + " 問" }));
      });
      pal.appendChild(b);
    });
    root.append(pal, detail);
  }

  /* ───── 間違えた問題の復習 ───── */
  function renderReview(root) {
    root.innerHTML = "";
    root.appendChild(h("h1", "page-title", "間違えた問題"));
    const order = new Map(GK.syllabus.sections.map((s, i) => [s.id, i]));
    const list = GK.questions.filter(q => { const a = GK.store.state.ans[q.id]; return a && a.ok === false; })
      .sort((a, b) => (order.get(a.sec) ?? 999) - (order.get(b.sec) ?? 999));
    root.appendChild(h("p", "page-sub", list.length
      ? "最後に解いたとき不正解だった問題が " + list.length + " 問あります。正解すると、次にこの画面を開いたときに一覧から外れます。"
      : "いまは間違えた問題がありません。"));
    list.forEach(q => root.appendChild(card(q)));
  }

  /* ───── 公式例題 ───── */
  function renderOfficial(root) {
    root.innerHTML = "";
    root.appendChild(h("h1", "page-title", "公式例題"));
    root.appendChild(h("p", "page-sub", 'JDLA が公開している例題20問の答え合わせと解説です。問題文と選択肢は JDLA の著作物のため、ここには載せていません。<a href="https://www.jdla.org/certificate/general/issues/" target="_blank" rel="noopener">公式ページ「G検定の例題・過去問」</a>を横に開いて解き、選んだ記号をここで押してください。解説はこのテキストで独自に作成したものです。'));
    const list = GK.questions.filter(q => q.set === "official");
    if (!list.length) root.appendChild(h("p", "note", "公式例題は作成中です。"));
    list.forEach((q, i) => root.appendChild(card(q, { number: "例題 " + (i + 1) })));
  }

  GK.quiz = { card, renderMock, renderReview, renderOfficial, stop: () => clearInterval(tick) };
})();
