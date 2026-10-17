/* 右のペイン：単語をクリックすると、本文を動かさずに右側で意味と解説を見せる（設計書 §10.1）。
   - 単語のクリック → 用語名・読み・意味と「詳しく」
   - 「詳しく」 → その語の解説の項目を本文から写して出す（項目がない語は、home の節でその語が出てくる項目）
   - ペインの中の単語もクリックでき、「← 戻る」で前の内容に戻る
   - 開閉で本文の幅が変わっても、画面上端の段落の位置を保つ */
(function () {
  const pane = document.getElementById("pane");
  const head = pane.querySelector(".pane-head");
  const body = pane.querySelector(".pane-body");
  const btnBack = pane.querySelector(".pane-back");
  const btnClose = pane.querySelector(".pane-close");
  const crumb = pane.querySelector(".pane-crumb");
  const NARROW = window.matchMedia("(max-width: 1000px)");
  let stack = [];   /* 表示の履歴：{ kind: "term" | "detail", id } */

  const h = (tag, cls, text) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  };
  const secTitle = id => {
    const s = GK.syllabus.sections.find(x => x.id === id);
    return s ? id + " " + s.title : id;
  };

  /* 開閉の前後で、画面上端にある本文の要素の位置を合わせる（本文の幅が変わって折り返しがずれるため） */
  function keepPlace(change) {
    if (NARROW.matches) { change(); return; }
    const main = document.getElementById("main");
    const x = main.getBoundingClientRect().left + 120;
    let anchor = null, top = 0;
    for (const y of [40, 90, 160, 240]) {
      const hit = document.elementFromPoint(x, y);
      const el = hit && main.contains(hit) ? hit.closest("[data-pid], h2, h3, .q-card, .item, .sec") || hit : null;
      if (el) { anchor = el; top = el.getBoundingClientRect().top; break; }
    }
    change();
    if (anchor && anchor.isConnected) window.scrollBy(0, anchor.getBoundingClientRect().top - top);
  }

  function setOpen(on) {
    if (document.body.classList.contains("pane-open") === on) return;
    keepPlace(() => {
      document.body.classList.toggle("pane-open", on);
      pane.hidden = !on;
    });
  }

  function close() {
    stack = [];
    setOpen(false);
  }

  /* 本文の項目を写す。id・栞用の段落番号は外し、用語の印は付け直す（ペインの中でも単語をクリックできるように） */
  function cloneItem(src, sec) {
    const c = src.cloneNode(true);
    c.removeAttribute("id");
    c.querySelectorAll("[id]").forEach(e => e.removeAttribute("id"));
    [c, ...c.querySelectorAll("[data-pid]")].forEach(e => { e.removeAttribute("data-pid"); e.classList.remove("bm-on"); });
    c.querySelectorAll(".term").forEach(t => t.replaceWith(document.createTextNode(t.textContent)));
    c.normalize();
    const wrap = h("div", "pane-item");
    wrap.dataset.sec = sec;
    wrap.appendChild(c);
    GK.terms.link(wrap);
    return wrap;
  }

  /* 語の解説の場所：自分の項目（#g-id）か、home の節でその語が最初に出てくる項目 */
  function findPlace(g) {
    const own = document.getElementById("g-" + g.id);
    if (own) return { el: own, own: true };
    const sec = document.getElementById("s-" + g.home);
    if (!sec) return null;
    const words = [g.term, g.abbr].concat(g.aliases || []).filter(Boolean);
    const blocks = sec.querySelectorAll(".lead, .item, .pitfalls");
    for (const b of blocks) {
      if (words.some(w => b.textContent.includes(w))) return { el: b, own: false };
    }
    return { el: null, own: false };
  }

  function drawTerm(g) {
    crumb.textContent = "用語";
    const t = h("div", "pane-term");
    t.appendChild(h("span", "p-term", GK.terms.display(g)));
    if (g.reading && /[一-鿿]/.test(g.term)) t.appendChild(h("span", "p-read", g.reading));
    body.appendChild(t);
    if (g.aliases && g.aliases.length) body.appendChild(h("div", "p-alias", "別の言い方：" + g.aliases.join("、")));
    body.appendChild(h("p", "p-short", g.short || "（意味は準備中）"));
    if (g.kw && g.kw.length) body.appendChild(h("div", "p-kw", "シラバスのキーワード：" + g.kw.join("、")));
    if (g.home) {
      const b = h("button", "pane-more", "詳しく：" + secTitle(g.home) + " →");
      b.type = "button";
      b.addEventListener("click", () => openDetail(g.id));
      body.appendChild(b);
    }
  }

  function drawDetail(g) {
    crumb.textContent = secTitle(g.home) + "　›　" + GK.terms.display(g);
    const place = findPlace(g);
    if (!place || !place.el) {
      body.appendChild(h("p", "p-short", g.short || ""));
      body.appendChild(h("p", "note", "本文にこの語の解説の箇所が見つかりませんでした。"));
      return;
    }
    if (!place.own) body.appendChild(h("p", "note", "この語の解説の項目はありません。この語が出てくる箇所を表示しています。"));
    const item = cloneItem(place.el, g.home);
    if (!place.own) {
      const hit = item.querySelector('.term[data-g="' + g.id + '"]');
      if (hit) hit.classList.add("pane-hit");
    }
    body.appendChild(item);
    const go = h("button", "pane-open-text", "本文で開く →");
    go.type = "button";
    const anchor = place.el.id || (place.el.closest(".sec") || {}).id;
    go.addEventListener("click", () => {
      const hash = place.own ? "#/text/" + g.home + "/" + place.el.id
        : place.el.dataset.pid ? "#/text/" + g.home + "/" + place.el.dataset.pid
        : "#/text/" + g.home + (anchor && anchor !== "s-" + g.home ? "/" + anchor : "");
      if (location.hash === hash) window.dispatchEvent(new HashChangeEvent("hashchange")); else location.hash = hash;
      /* 狭い画面ではペインが本文に重なるので、本文を見せるために閉じる */
      if (NARROW.matches) close();
    });
    body.appendChild(go);
  }

  function draw() {
    const cur = stack[stack.length - 1];
    body.innerHTML = "";
    btnBack.hidden = stack.length < 2;
    if (!cur) return;
    const g = GK.terms.get(cur.id);
    if (!g) return;
    if (cur.kind === "detail") drawDetail(g); else drawTerm(g);
    body.scrollTop = 0;
  }

  function push(kind, id) {
    const cur = stack[stack.length - 1];
    if (!(cur && cur.kind === kind && cur.id === id)) stack.push({ kind, id });
    GK.terms.hide();
    draw();
    setOpen(true);
  }
  function openTerm(id) { push("term", id); }
  function openDetail(id) { push("detail", id); }

  btnBack.addEventListener("click", () => { if (stack.length > 1) { stack.pop(); draw(); } });
  btnClose.addEventListener("click", close);
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && !pane.hidden && !document.querySelector("dialog[open]")) close();
  });
  /* ペインの中の「詳しくは …で解説 →」などの本文へのリンクは、ペインの中で開く */
  body.addEventListener("click", e => {
    const a = e.target.closest && e.target.closest('a[href^="#/text/"]');
    if (!a) return;
    const m = a.getAttribute("href").match(/\/g-([^/]+)$/);
    if (m && GK.terms.get(m[1])) { e.preventDefault(); openDetail(m[1]); }
  });
  body.addEventListener("scroll", () => GK.terms.hide(), { passive: true });

  GK.pane = { openTerm, openDetail, close, get isOpen() { return !pane.hidden; } };
})();
