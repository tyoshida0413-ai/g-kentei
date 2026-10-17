/* 画面全体：目次と現在位置・本文の組み立て・栞・画面の切り替え・用語索引・記録 */
(function () {
  const SY = GK.syllabus;
  const store = GK.store;
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => [...(r || document).querySelectorAll(s)];
  const h = (tag, cls, html) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  };
  const secById = new Map(SY.sections.map(s => [s.id, s]));
  const majorById = new Map(SY.majors.map(m => [m.id, m]));
  const views = ["text", "index", "mock", "review", "official", "flash", "data"];

  GK.terms.build();

  /* ───────── 目次 ───────── */
  const toc = $("#toc");
  function renderTOC() {
    toc.innerHTML = "";
    let field = "";
    SY.majors.forEach(m => {
      if (m.field !== field) {
        field = m.field;
        toc.appendChild(h("div", "toc-field", field + "分野"));
      }
      const box = h("div", "toc-major");
      box.dataset.major = m.id;
      const btn = h("button", "", '<span class="m-no">' + m.id + '</span><span class="m-title"></span><span class="m-pct"></span>');
      btn.type = "button";
      btn.querySelector(".m-title").textContent = m.title;
      btn.addEventListener("click", () => {
        box.classList.toggle("open");
        store.setOpen(m.id, box.classList.contains("open"));
      });
      const ul = h("ul", "toc-secs");
      SY.sections.filter(s => s.major === m.id).forEach(s => {
        const li = h("li");
        const a = h("a", GK.texts[s.id] ? "" : "empty", '<span class="s-no">' + s.id + '</span><span class="s-title"></span><span class="s-mark"></span>');
        a.href = "#/text/" + s.id;
        a.dataset.sec = s.id;
        a.querySelector(".s-title").textContent = s.title;
        a.addEventListener("click", e => { e.preventDefault(); go("#/text/" + s.id); });
        li.appendChild(a);
        ul.appendChild(li);
      });
      box.append(btn, ul);
      if (store.state.ui.open[m.id]) box.classList.add("open");
      toc.appendChild(box);
    });
    refreshRead();
  }

  function refreshRead() {
    SY.majors.forEach(m => {
      const secs = SY.sections.filter(s => s.major === m.id);
      const done = secs.filter(s => store.state.read[s.id]).length;
      const el = $('.toc-major[data-major="' + m.id + '"] .m-pct');
      if (el) {
        el.textContent = done ? (done === secs.length ? "読了" : Math.round(done / secs.length * 100) + "%") : "";
        el.classList.toggle("done", done === secs.length);
      }
    });
    $$(".toc-secs a").forEach(a => { a.querySelector(".s-mark").textContent = store.state.read[a.dataset.sec] ? "✓" : ""; });
    $$(".read-toggle").forEach(b => {
      const at = store.state.read[b.dataset.sec];
      b.classList.toggle("done", !!at);
      b.textContent = at ? "読了（取り消す）" : "この節を読み終えた";
      const d = b.nextElementSibling;
      if (d) d.textContent = at ? at.slice(0, 10) + " 読了" : "";
    });
  }

  let currentSec = null;
  function setCurrent(sec) {
    if (sec === currentSec) return;
    currentSec = sec;
    $$(".toc-secs a.current").forEach(a => a.classList.remove("current"));
    $$(".toc-major.has-current").forEach(b => b.classList.remove("has-current"));
    const a = $('.toc-secs a[data-sec="' + sec + '"]');
    if (!a) return;
    a.classList.add("current");
    const box = a.closest(".toc-major");
    box.classList.add("has-current");
    if (!box.classList.contains("open")) box.classList.add("open");
    const r = a.getBoundingClientRect(), tr = toc.getBoundingClientRect();
    if (r.top < tr.top + 30 || r.bottom > tr.bottom - 30) toc.scrollTop += r.top - tr.top - tr.height / 3;
  }

  /* ───────── 本文 ───────── */
  const vText = $("#view-text");

  function srcList(list) {
    const ol = h("ol");
    list.forEach(x => {
      const li = h("li");
      if (x.u) { const a = h("a"); a.href = x.u; a.target = "_blank"; a.rel = "noopener"; a.textContent = x.t; li.appendChild(a); }
      else li.textContent = x.t;
      ol.appendChild(li);
    });
    return ol;
  }

  function renderSection(s) {
    const t = GK.texts[s.id];
    const m = majorById.get(s.major);
    const sec = h("section", "sec");
    sec.id = "s-" + s.id;
    sec.dataset.sec = s.id;
    sec.appendChild(h("div", "crumb", "")).textContent = m.field + "分野　›　" + m.id + " " + m.title;
    const h2 = h("h2", "", '<span class="sec-no">' + s.id + "</span>");
    h2.appendChild(document.createTextNode(s.title));
    sec.appendChild(h2);

    sec.appendChild(h("div", "label", "学習目標"));
    const goals = h("div", "goals");
    const gul = h("ul");
    s.goals.forEach(g => { gul.appendChild(h("li")).textContent = g; });
    goals.appendChild(gul);
    sec.appendChild(goals);

    sec.appendChild(h("div", "label", "キーワード（シラバス）"));
    const kwl = h("div", "kwline");
    const anchorOf = kw => {
      if (!t) return null;
      const it = (t.items || []).find(i => (i.kw || []).includes(kw));
      return it ? (it.ref ? "r-" + s.id + "-" + it.g : "g-" + it.g) : null;
    };
    s.keywords.forEach((kw, i) => {
      if (i) kwl.appendChild(h("span", "sep", "／"));
      const an = anchorOf(kw);
      if (an) {
        const a = h("a");
        a.href = "#/text/" + s.id + "/" + an;
        a.textContent = kw;
        a.addEventListener("click", e => { e.preventDefault(); go(a.getAttribute("href")); });
        kwl.appendChild(a);
      } else kwl.appendChild(h("span")).textContent = kw;
    });
    sec.appendChild(kwl);

    if (!t) {
      sec.appendChild(h("p", "pending", "この節の本文は準備中です。"));
    } else {
      if (t.lead) sec.appendChild(h("div", "lead body", t.lead));
      (t.items || []).forEach(it => {
        const g = GK.terms.get(it.g);
        const art = h("article", "item" + (it.ref ? " ref" : ""));
        art.id = it.ref ? "r-" + s.id + "-" + it.g : "g-" + it.g;
        art.dataset.g = it.g;
        const h3 = h("h3");
        h3.textContent = it.title || (g ? GK.terms.display(g) : it.g);
        art.appendChild(h3);
        art.appendChild(h("div", "body", it.body || ""));
        if (it.ref && g && g.home && g.home !== s.id) {
          const hs = secById.get(g.home);
          const p = h("p", "ref-link");
          const a = h("a");
          a.href = "#/text/" + g.home + "/g-" + g.id;
          a.textContent = "詳しくは " + g.home + "「" + (hs ? hs.title : "") + "」で解説 →";
          p.appendChild(a);
          art.appendChild(p);
        }
        if (it.exam) art.appendChild(h("p", "exam", it.exam));
        sec.appendChild(art);
      });
      if (t.pitfalls && t.pitfalls.length) {
        sec.appendChild(h("div", "label", "混同しやすい点"));
        const pd = h("div", "pitfalls body");
        const ul = h("ul");
        t.pitfalls.forEach(p => { ul.appendChild(h("li", "", p)); });
        pd.appendChild(ul);
        sec.appendChild(pd);
      }
      if (t.sources && t.sources.length) {
        sec.appendChild(h("div", "label", "出典"));
        const sd = h("div", "srcs");
        sd.appendChild(srcList(t.sources));
        sec.appendChild(sd);
      }
    }

    const qs = GK.questions.filter(q => q.set === "section" && q.sec === s.id);
    if (qs.length) {
      const d = h("div", "drill");
      d.appendChild(h("div", "label", "節末の演習（" + qs.length + "問）"));
      qs.forEach(q => d.appendChild(GK.quiz.card(q, { onAnswer: () => {} })));
      sec.appendChild(d);
    }

    const end = h("div", "sec-end");
    const rb = h("button", "read-toggle");
    rb.type = "button";
    rb.dataset.sec = s.id;
    rb.addEventListener("click", () => { store.setRead(s.id, !store.state.read[s.id]); refreshRead(); });
    end.append(rb, h("span", "read-date"));
    sec.appendChild(end);

    let n = 0;
    $$(".goals, .lead > *, .item > h3, .item > .body > *, .item > .exam, .pitfalls li", sec).forEach(b => {
      b.dataset.pid = s.id + "." + (++n);
    });
    return sec;
  }

  function renderText() {
    vText.innerHTML = "";
    let field = "", major = "";
    SY.sections.forEach(s => {
      const m = majorById.get(s.major);
      if (m.field !== field) { field = m.field; vText.appendChild(h("div", "field-head", field + "分野")); }
      if (m.id !== major) {
        major = m.id;
        const mh = h("div", "major-head", '<span class="mh-no">' + m.id + '</span><span class="mh-title"></span>');
        mh.id = "m-" + m.id;
        mh.querySelector(".mh-title").textContent = m.title;
        vText.appendChild(mh);
      }
      vText.appendChild(renderSection(s));
    });
    /* 用語の印は、節が画面に近づいたときに付ける（最初の表示を軽くするため） */
    const io = new IntersectionObserver(ents => {
      ents.forEach(e => {
        if (e.isIntersecting && !e.target.dataset.linked) {
          e.target.dataset.linked = "1";
          GK.terms.link(e.target);
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: "800px 0px" });
    $$(".sec", vText).forEach(s => io.observe(s));
    refreshRead();
    markBookmarks();
  }

  /* ───────── 現在位置（目次の強調）と自動記録 ───────── */
  let raf = 0, posTimer = null;
  function probeX() { return vText.getBoundingClientRect().left + 150; }
  function onScroll() {
    if (currentView !== "text") return;
    if (!raf) raf = requestAnimationFrame(() => {
      raf = 0;
      const el = document.elementFromPoint(probeX(), window.innerHeight * 0.25);
      const sec = el && el.closest(".sec");
      if (sec) setCurrent(sec.dataset.sec);
      else if (window.scrollY < 200) setCurrent(SY.sections[0].id);
    });
    clearTimeout(posTimer);
    posTimer = setTimeout(() => {
      if (currentView !== "text") return;
      let el = null;
      for (const y of [70, 110, 160, 220]) {
        const hit = document.elementFromPoint(probeX(), y);
        el = hit && vText.contains(hit) ? hit.closest("[data-pid]") : null;
        if (el && el.closest(".sec")) break;
        el = null;
      }
      if (el) store.setLastPos(el.closest(".sec").dataset.sec, el.dataset.pid);
      $("#btn-resume").disabled = !store.state.lastPos;
    }, 600);
  }
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ───────── 栞 ───────── */
  const pin = $("#bm-pin");
  let pinTarget = null;
  const bmOf = pid => store.state.bms.find(b => b.pid === pid);

  vText.addEventListener("mouseover", e => {
    const b = e.target.closest("[data-pid]");
    if (!b || b === pinTarget) return;
    pinTarget = b;
    const r = b.getBoundingClientRect();
    pin.textContent = bmOf(b.dataset.pid) ? "外す" : "栞";
    pin.style.left = (window.scrollX + vText.getBoundingClientRect().left + 34) + "px";
    pin.style.top = (window.scrollY + r.top + 4) + "px";
    pin.hidden = false;
  });
  vText.addEventListener("mouseleave", e => { if (e.relatedTarget !== pin) { pin.hidden = true; pinTarget = null; } });
  /* ボタンから本文の外へ動いたときも消す（本文に戻らないとボタンが出たままになっていたため） */
  pin.addEventListener("mouseleave", e => { if (!vText.contains(e.relatedTarget)) { pin.hidden = true; pinTarget = null; } });

  const dlg = $("#bm-dialog");
  pin.addEventListener("click", () => {
    if (!pinTarget) return;
    const pid = pinTarget.dataset.pid;
    const ex = bmOf(pid);
    if (ex) {
      store.removeBookmark(ex.id);
      afterBookmarkChange();
      pin.textContent = "栞";
      return;
    }
    const snip = pinTarget.textContent.replace(/\s+/g, " ").trim().slice(0, 90);
    $("#bm-snip").textContent = snip;
    $("#bm-memo").value = "";
    /* data-pid にすると本文の段落向けの CSS（[data-pid] { position: relative; }）が当たり、モーダルの固定配置が崩れてページ先頭に出るため、別名にする */
    dlg.dataset.bmPid = pid;
    dlg.dataset.sec = pinTarget.closest(".sec").dataset.sec;
    dlg.dataset.snip = snip;
    /* showModal() で本文が先頭まで戻るブラウザがあるため、位置を保存して戻す */
    const y = window.scrollY;
    dlg.showModal();
    window.scrollTo(0, y);
    $("#bm-memo").focus({ preventScroll: true });
  });
  /* close イベントが発生しないブラウザがあるため、ボタンと Enter キーで直接処理する */
  function closeDlg(ok) {
    const y = window.scrollY;
    if (dlg.open) dlg.close();
    window.scrollTo(0, y);
    if (!ok) return;
    store.addBookmark({ sec: dlg.dataset.sec, pid: dlg.dataset.bmPid, memo: $("#bm-memo").value.trim(), snip: dlg.dataset.snip });
    afterBookmarkChange();
    toast("栞を挟みました");
  }
  $("form", dlg).addEventListener("submit", e => {
    e.preventDefault();
    closeDlg(!!(e.submitter && e.submitter.value === "ok"));
  });
  $("#bm-memo").addEventListener("keydown", e => {
    if (e.key === "Enter" && !e.isComposing) { e.preventDefault(); closeDlg(true); }
  });

  function markBookmarks() {
    $$(".bm-on", vText).forEach(e => e.classList.remove("bm-on"));
    store.state.bms.forEach(b => {
      const el = vText.querySelector('[data-pid="' + b.pid + '"]');
      if (el) el.classList.add("bm-on");
    });
  }
  function renderBmPanel() {
    const p = $("#bm-panel");
    $("#bm-count").textContent = store.state.bms.length ? store.state.bms.length : "";
    if (p.hidden) return;
    p.innerHTML = "";
    if (!store.state.bms.length) { p.appendChild(h("div", "bm-empty", "栞はまだありません。本文の段落の左にマウスを置くと「栞」が出ます。")); return; }
    const order = new Map(SY.sections.map((s, i) => [s.id, i]));
    store.state.bms.slice().sort((a, b) => order.get(a.sec) - order.get(b.sec) || a.pid.localeCompare(b.pid, "en", { numeric: true })).forEach(b => {
      const row = h("div", "bm-row");
      const go_ = h("button", "bm-go");
      go_.type = "button";
      const s = secById.get(b.sec);
      go_.appendChild(h("span", "bm-sec")).textContent = b.sec + " " + (s ? s.title : "");
      if (b.memo) go_.appendChild(h("span", "bm-memo")).textContent = b.memo;
      go_.appendChild(h("span", "bm-snip")).textContent = b.snip || "";
      go_.addEventListener("click", () => go("#/text/" + b.sec + "/" + b.pid));
      const del = h("button", "bm-del", "削除");
      del.type = "button";
      del.addEventListener("click", () => { store.removeBookmark(b.id); afterBookmarkChange(); });
      row.append(go_, del);
      p.appendChild(row);
    });
  }
  function afterBookmarkChange() { markBookmarks(); renderBmPanel(); }
  $("#btn-bms").addEventListener("click", () => { const p = $("#bm-panel"); p.hidden = !p.hidden; renderBmPanel(); });

  $("#btn-resume").addEventListener("click", () => {
    const lp = store.state.lastPos;
    if (lp) go("#/text/" + lp.sec + "/" + lp.pid);
  });

  /* ───────── 検索 ───────── */
  const qIn = $("#q"), qRes = $("#q-results");
  let qSel = 0, qHits = [];
  function drawHits() {
    qRes.innerHTML = "";
    if (!qIn.value.trim()) { qRes.hidden = true; return; }
    qHits = GK.terms.search(qIn.value);
    if (!qHits.length) qRes.appendChild(h("div", "r-none", "見つかりません"));
    qHits.forEach((g, i) => {
      const b = h("button", i === qSel ? "sel" : "");
      b.type = "button";
      b.textContent = GK.terms.display(g);
      if (g.home) b.appendChild(h("span", "r-sec")).textContent = g.home;
      b.addEventListener("mousedown", e => { e.preventDefault(); pickHit(g); });
      qRes.appendChild(b);
    });
    qRes.hidden = false;
  }
  function pickHit(g) {
    qIn.value = "";
    qRes.hidden = true;
    if (g.home) go("#/text/" + g.home + "/g-" + g.id);
  }
  qIn.addEventListener("input", () => { qSel = 0; drawHits(); });
  qIn.addEventListener("keydown", e => {
    if (e.key === "ArrowDown") { qSel = Math.min(qSel + 1, qHits.length - 1); drawHits(); e.preventDefault(); }
    else if (e.key === "ArrowUp") { qSel = Math.max(qSel - 1, 0); drawHits(); e.preventDefault(); }
    else if (e.key === "Enter" && qHits[qSel]) pickHit(qHits[qSel]);
    else if (e.key === "Escape") { qIn.value = ""; qRes.hidden = true; }
  });
  qIn.addEventListener("blur", () => setTimeout(() => { qRes.hidden = true; }, 150));

  /* ───────── 用語索引 ───────── */
  function kanaRow(r) {
    const c = (r || "").normalize("NFD")[0] || "";
    const rows = [["あ", "ぁ-お"], ["か", "か-ご"], ["さ", "さ-ぞ"], ["た", "た-ど"], ["な", "な-の"], ["は", "は-ぽ"], ["ま", "ま-も"], ["や", "ゃ-よ"], ["ら", "ら-ろ"], ["わ", "ゎ-ん"]];
    for (const [name, range] of rows) if (new RegExp("[" + range + "]").test(c)) return name;
    return null;
  }
  function renderIndex(root) {
    root.innerHTML = "";
    root.appendChild(h("h1", "page-title", "用語索引"));
    root.appendChild(h("p", "page-sub", "全 " + GK.glossary.length + " 語。＊はシラバスのキーワード。語を押すと解説へ移動します。"));
    const inp = h("input", "idx-search");
    inp.type = "search";
    inp.placeholder = "絞り込み";
    root.appendChild(inp);
    const box = h("div");
    root.appendChild(box);
    function draw() {
      const q = inp.value.trim().toLowerCase();
      box.innerHTML = "";
      const groups = new Map();
      GK.glossary.forEach(g => {
        if (q && ![g.term, g.abbr, g.reading].concat(g.aliases || []).filter(Boolean).some(s => s.toLowerCase().includes(q))) return;
        const first = g.term[0];
        let key = /[A-Za-z]/.test(first) ? first.toUpperCase() : (/[0-9]/.test(first) ? "0-9" : kanaRow(g.reading) || "記号");
        if (!groups.has(key)) groups.set(key, []);
        groups.get(key).push(g);
      });
      const keyOrder = k => /^[A-Z]$/.test(k) ? "0" + k : (k === "0-9" ? "00" : k === "記号" ? "9" : "1" + "あかさたなはまやらわ".indexOf(k));
      [...groups.keys()].sort((a, b) => keyOrder(a).localeCompare(keyOrder(b))).forEach(k => {
        const grp = h("div", "idx-group");
        grp.appendChild(h("h3", "", "")).textContent = k;
        const list = h("div", "idx-list");
        groups.get(k).sort((a, b) => (a.reading || a.term).localeCompare(b.reading || b.term, "ja")).forEach(g => {
          const a = h("a");
          a.href = g.home ? "#/text/" + g.home + "/g-" + g.id : "#/index";
          a.textContent = GK.terms.display(g);
          if (g.kw && g.kw.length) a.appendChild(h("span", "i-syl", "＊"));
          if (g.home) a.appendChild(h("span", "i-sec")).textContent = g.home;
          a.title = g.short || "";
          list.appendChild(a);
        });
        grp.appendChild(list);
        box.appendChild(grp);
      });
      if (!groups.size) box.appendChild(h("p", "note", "該当する用語がありません。"));
    }
    inp.addEventListener("input", draw);
    draw();
  }

  /* ───────── 記録 ───────── */
  function renderData(root) {
    root.innerHTML = "";
    root.appendChild(h("h1", "page-title", "記録"));
    const st = store.state;
    const answered = Object.keys(st.ans).length;
    const okN = Object.values(st.ans).filter(a => a.ok).length;
    root.appendChild(h("p", "page-sub", "栞・読了・解答の結果は、このブラウザの中に保存されています。ブラウザを変えると引き継がれず、ブラウザのデータを消すと消えます。ときどき書き出してバックアップしてください。"));
    if (!store.available) root.appendChild(h("p", "note", "このブラウザでは記録を保存できない設定になっています。画面を閉じると記録は消えます。"));
    const tb = h("table", "score-table");
    tb.innerHTML = "<tr><td>読了した節</td><td class='num'>" + Object.keys(st.read).length + " ／ " + SY.sections.length + "</td></tr>"
      + "<tr><td>栞</td><td class='num'>" + st.bms.length + "</td></tr>"
      + "<tr><td>解いた問題</td><td class='num'>" + answered + "</td></tr>"
      + "<tr><td>最後に正解した問題</td><td class='num'>" + okN + "</td></tr>"
      + "<tr><td>覚えた用語（フラッシュカード）</td><td class='num'>" + Object.keys(st.known || {}).length + " ／ " + GK.glossary.length + "</td></tr>";
    root.appendChild(tb);
    const row = h("div", "btn-row");
    const ex = h("button", "btn primary", "記録を書き出す（JSON）");
    ex.type = "button";
    ex.addEventListener("click", () => store.exportJSON());
    const file = h("input");
    file.type = "file";
    file.accept = ".json,application/json";
    file.hidden = true;
    const im = h("button", "btn", "記録を読み込む");
    im.type = "button";
    im.addEventListener("click", () => file.click());
    file.addEventListener("change", () => {
      const f = file.files[0];
      if (!f) return;
      const r = new FileReader();
      r.onload = () => {
        try {
          if (!confirm("今の記録を、読み込んだファイルの内容で置き換えます。よろしいですか？")) return;
          store.importJSON(r.result);
          afterImport();
          toast("記録を読み込みました");
          renderData(root);
        } catch (err) { alert("読み込めませんでした：" + err.message); }
      };
      r.readAsText(f);
    });
    const rs = h("button", "btn", "記録をすべて消す");
    rs.type = "button";
    rs.addEventListener("click", () => {
      if (!confirm("栞・読了・解答・覚えた用語の記録をすべて消します。元に戻せません。よろしいですか？")) return;
      store.reset();
      afterImport();
      renderData(root);
    });
    row.append(ex, im, rs, file);
    root.appendChild(row);
    root.appendChild(h("p", "note", "出題範囲：" + SY.source + "（" + SY.revised + " 改訂、" + SY.applies + "）"));
  }
  function afterImport() {
    renderTOC();
    renderText();
    renderBmPanel();
    $("#btn-resume").disabled = !store.state.lastPos;
  }

  /* ───────── 画面の切り替え ───────── */
  let currentView = "text";
  let textScroll = 0;
  function go(hash) {
    if (location.hash === hash) route(); else location.hash = hash;
  }
  function scrollToEl(el) {
    if (!el) return;
    const sec = el.closest(".sec");
    if (sec && !sec.dataset.linked) { sec.dataset.linked = "1"; GK.terms.link(sec); }
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 24 });
    if (sec) setCurrent(sec.dataset.sec);
  }
  function route() {
    GK.terms.hide();
    const parts = (location.hash || "#/text").replace(/^#\/?/, "").split("/");
    const v = views.includes(parts[0]) ? parts[0] : "text";
    if (currentView === "text" && v !== "text") textScroll = window.scrollY;
    views.forEach(name => { $("#view-" + name).hidden = name !== v; });
    $$(".side-views a").forEach(a => a.classList.toggle("on", a.dataset.view === v));
    const prevView = currentView;
    currentView = v;
    pin.hidden = true;
    if (v !== "mock") GK.quiz.stop();
    if (v === "text") {
      const [, sec, anchor] = parts;
      if (anchor) {
        const el = anchor.includes(".") ? vText.querySelector('[data-pid="' + anchor + '"]') : document.getElementById(anchor);
        scrollToEl(el || document.getElementById("s-" + sec));
      } else if (sec) {
        scrollToEl(document.getElementById("s-" + sec));
      } else if (prevView !== "text") {
        window.scrollTo({ top: textScroll });
      }
      return;
    }
    window.scrollTo({ top: 0 });
    const root = $("#view-" + v);
    if (v === "index") renderIndex(root);
    else if (v === "mock") GK.quiz.renderMock(root);
    else if (v === "review") GK.quiz.renderReview(root);
    else if (v === "official") GK.quiz.renderOfficial(root);
    else if (v === "flash") GK.flash.render(root);
    else if (v === "data") renderData(root);
  }
  window.addEventListener("hashchange", route);

  /* ───────── トースト ───────── */
  let toastT = null;
  function toast(msg, action) {
    const t = $("#toast");
    t.innerHTML = "";
    t.appendChild(h("span")).textContent = msg;
    if (action) {
      const b = h("button", "", "");
      b.type = "button";
      b.textContent = action.label;
      b.addEventListener("click", () => { t.hidden = true; action.run(); });
      t.appendChild(b);
    }
    t.hidden = false;
    clearTimeout(toastT);
    toastT = setTimeout(() => { t.hidden = true; }, action ? 9000 : 2500);
  }

  /* ───────── 起動 ───────── */
  renderTOC();
  renderText();
  renderBmPanel();
  $("#btn-resume").disabled = !store.state.lastPos;
  route();
  if (!location.hash && store.state.lastPos) {
    const lp = store.state.lastPos, s = secById.get(lp.sec);
    toast("前回は " + lp.sec + "「" + (s ? s.title : "") + "」まで読みました", { label: "続きから", run: () => go("#/text/" + lp.sec + "/" + lp.pid) });
  }
  if (!location.hash) setCurrent(SY.sections[0].id);
  if (!store.available) toast("このブラウザでは記録を保存できません（栞・読了は画面を閉じると消えます）");
})();
