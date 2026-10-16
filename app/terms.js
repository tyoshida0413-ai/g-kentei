/* 用語：文中の自動検出と、マウスを置いたときの意味の表示。
   - 長い語を優先して当てる（「平均二乗誤差」の中の「平均」は当てない）
   - 英字の語は英数字の境目でだけ当てる（「CycleGAN」の中の「GAN」は当てない）
   - カタカナだけの語はカタカナの境目でだけ当てる（「キーワード」の中の「キー」は当てない）
   - 1つの段落で同じ語に印を付けるのは最初の1回だけ
   - 見出し・その語自身の解説・問題文と選択肢には付けない */
(function () {
  const byId = new Map();
  const bySurface = new Map();
  let re = null;

  const isAscii = s => /^[\x20-\x7E]+$/.test(s);
  const isKata = s => /^[゠-ヿ・]+$/.test(s);
  const kataCh = c => !!c && /[゠-ヿ]/.test(c);
  const alnumCh = c => !!c && /[A-Za-z0-9]/.test(c);
  const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  function display(g) {
    return g.abbr ? g.term + "（" + g.abbr + "）" : g.term;
  }

  function build() {
    GK.glossary.forEach(g => {
      byId.set(g.id, g);
      if (g.noAuto) return;
      const surfaces = new Set([g.term, g.abbr].concat(g.aliases || []).filter(Boolean));
      surfaces.forEach(s => {
        if (s.length < 2) return;
        if (!bySurface.has(s)) bySurface.set(s, []);
        bySurface.get(s).push(g);
      });
    });
    const list = [...bySurface.keys()].sort((a, b) => b.length - a.length);
    re = list.length ? new RegExp(list.map(esc).join("|"), "g") : null;
  }

  /* scope を持つ語は、その節の中でだけ当てる（同じ表記で意味が違う語の使い分け） */
  function pick(entries, sec) {
    const ok = entries.filter(g => !g.scope || g.scope.includes(sec));
    if (!ok.length) return null;
    return ok.find(g => g.scope && g.scope.includes(sec))
      || ok.find(g => g.home === sec) || ok[0];
  }

  const SKIP = "h1,h2,h3,a,button,code,script,style,input,textarea,svg,.term,.no-terms,.q-stem,.q-choices,.q-meta,.crumb,.label,.srcs,.kwline,.q-src";
  const BLOCK = "p,li,td,th,dd,figcaption,.exam,.t-block";

  function link(root) {
    if (!re) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(n) {
        if (!n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        const p = n.parentElement;
        if (!p || p.closest(SKIP)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    const used = new WeakMap();

    nodes.forEach(node => {
      const text = node.nodeValue;
      const el = node.parentElement;
      const block = el.closest(BLOCK) || el;
      const secEl = el.closest("[data-sec]");
      const sec = secEl ? secEl.dataset.sec : "";
      const selfEl = el.closest("[data-g]");
      const self = selfEl ? selfEl.dataset.g : "";
      if (!used.has(block)) used.set(block, new Set());
      const seen = used.get(block);

      const frag = document.createDocumentFragment();
      let last = 0, changed = false, m;
      re.lastIndex = 0;
      while ((m = re.exec(text))) {
        const s = m[0], i = m.index;
        const before = text[i - 1], after = text[i + s.length];
        let ok = true;
        if (isAscii(s) && (alnumCh(before) || alnumCh(after))) ok = false;
        if (ok && isKata(s) && (kataCh(before) || kataCh(after))) ok = false;
        const g = ok ? pick(bySurface.get(s), sec) : null;
        if (!g || g.id === self || seen.has(g.id)) { re.lastIndex = i + 1; continue; }
        seen.add(g.id);
        if (i > last) frag.appendChild(document.createTextNode(text.slice(last, i)));
        const span = document.createElement("span");
        span.className = "term";
        span.dataset.g = g.id;
        span.textContent = s;
        frag.appendChild(span);
        last = i + s.length;
        changed = true;
      }
      if (!changed) return;
      if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
      node.replaceWith(frag);
    });
  }

  /* ───── 意味の小窓 ───── */
  const tip = document.getElementById("tip");
  let showT = null, hideT = null, curEl = null;

  function secTitle(id) {
    const s = GK.syllabus.sections.find(x => x.id === id);
    return s ? id + " " + s.title : id;
  }

  function show(el) {
    const g = byId.get(el.dataset.g);
    if (!g) return;
    curEl = el;
    tip.innerHTML = "";
    const head = document.createElement("div");
    head.innerHTML = '<span class="t-term"></span><span class="t-read"></span>';
    head.querySelector(".t-term").textContent = display(g);
    if (g.reading && /[\u4e00-\u9fff]/.test(g.term)) head.querySelector(".t-read").textContent = g.reading;
    const body = document.createElement("div");
    body.className = "t-short";
    body.textContent = g.short || "（意味は準備中）";
    tip.append(head, body);
    if (g.home) {
      const a = document.createElement("a");
      a.className = "t-more";
      a.href = "#/text/" + g.home + "/g-" + g.id;
      a.textContent = "詳しく：" + secTitle(g.home) + " →";
      tip.appendChild(a);
    }
    tip.hidden = false;
    const r = el.getBoundingClientRect();
    const tw = tip.offsetWidth, th = tip.offsetHeight;
    let x = Math.min(Math.max(8, r.left), window.innerWidth - tw - 12);
    let y = r.bottom + 8;
    if (y + th > window.innerHeight - 8) y = r.top - th - 8;
    tip.style.left = x + "px";
    tip.style.top = Math.max(8, y) + "px";
  }
  function hide() { tip.hidden = true; curEl = null; }

  document.addEventListener("mouseover", e => {
    const t = e.target.closest && e.target.closest(".term");
    if (t) {
      clearTimeout(hideT);
      if (t !== curEl) { clearTimeout(showT); showT = setTimeout(() => show(t), 120); }
    } else if (e.target.closest && e.target.closest("#tip")) {
      clearTimeout(hideT);
    }
  });
  document.addEventListener("mouseout", e => {
    const t = e.target.closest && (e.target.closest(".term") || e.target.closest("#tip"));
    if (!t) return;
    clearTimeout(showT);
    clearTimeout(hideT);
    hideT = setTimeout(hide, 220);
  });
  document.addEventListener("click", e => {
    const t = e.target.closest && e.target.closest(".term");
    if (t) {
      const g = byId.get(t.dataset.g);
      if (g && g.home) location.hash = "#/text/" + g.home + "/g-" + g.id;
      hide();
    } else if (e.target.closest && e.target.closest("#tip a")) {
      hide();
    }
  });
  window.addEventListener("scroll", () => { if (!tip.hidden) hide(); }, { passive: true });

  /* ───── 検索 ───── */
  function search(q) {
    q = q.trim().toLowerCase();
    if (!q) return [];
    const hits = [];
    GK.glossary.forEach(g => {
      const keys = [g.term, g.abbr, g.reading].concat(g.aliases || []).filter(Boolean).map(s => s.toLowerCase());
      let score = -1;
      keys.forEach(k => {
        if (k === q) score = Math.max(score, 3);
        else if (k.startsWith(q)) score = Math.max(score, 2);
        else if (k.includes(q)) score = Math.max(score, 1);
      });
      if (score >= 0) hits.push({ g, score });
    });
    hits.sort((a, b) => b.score - a.score || (a.g.reading || a.g.term).localeCompare(b.g.reading || b.g.term, "ja"));
    return hits.slice(0, 40).map(h => h.g);
  }

  GK.terms = { build, link, search, display, get: id => byId.get(id), hide };
})();
