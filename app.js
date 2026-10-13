/*
 * Red Sox Vintage: app logic.
 * Plain JavaScript, no build step. Collection data lives in localStorage
 * under STORAGE_KEY as { "setId:cardNumber": { have, cond, notes } }.
 */
(function () {
  "use strict";

  const STORAGE_KEY = "rsv-collection-v1";
  const YEARS = Array.from({ length: 16 }, (_, i) => 1950 + i);
  const BRANDS = ["Bowman", "Topps"];
  const GRADES = [
    "", "PR 1", "FR 1.5", "GD 2", "VG 3", "VG-EX 4", "EX 5",
    "EX-MT 6", "NM 7", "NM-MT 8", "MT 9", "GEM MT 10", "Authentic"
  ];

  // ---------- Data ----------

  const sets = window.CHECKLISTS
    .map((s) => ({
      ...s,
      cards: s.cards.map(([num, player, note]) => ({
        num: String(num),
        player,
        note: note || "",
        key: `${s.id}:${num}`
      }))
    }))
    .sort((a, b) => a.year - b.year || a.brand.localeCompare(b.brand));

  const setById = Object.fromEntries(sets.map((s) => [s.id, s]));

  // Sets grouped by year + brand, which is one scoreboard cell.
  const groups = {};
  sets.forEach((s) => {
    const g = `${s.year}-${s.brand}`;
    (groups[g] = groups[g] || []).push(s);
  });

  // ---------- Storage ----------

  function loadCollection() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch (e) {
      return {};
    }
  }

  function saveCollection() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(collection));
    } catch (e) {
      toast("Couldn't save. Your browser may be blocking storage.");
    }
  }

  let collection = loadCollection();

  const entry = (key) => collection[key] || {};
  const isHave = (key) => !!entry(key).have;

  function setEntry(key, patch) {
    const next = { ...entry(key), ...patch };
    if (!next.have && !next.cond && !next.notes) delete collection[key];
    else collection[key] = next;
    saveCollection();
  }

  // ---------- State ----------

  const state = {
    setId: readHashSet() || sets[0].id,
    filter: "all",
    query: ""
  };

  function readHashSet() {
    const m = location.hash.match(/set=([\w-]+)/);
    return m && setById[m[1]] ? m[1] : null;
  }

  // ---------- Helpers ----------

  const $ = (sel) => document.querySelector(sel);

  const esc = (str) =>
    String(str).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));

  const ownedIn = (set) => set.cards.filter((c) => isHave(c.key)).length;

  const byNumber = (a, b) =>
    parseInt(a.num, 10) - parseInt(b.num, 10) || a.num.localeCompare(b.num);

  let toastTimer;
  function toast(msg) {
    const el = $("#toast");
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("show"), 2600);
  }

  // ---------- Scoreboard ----------

  function renderBoard() {
    const current = setById[state.setId];
    const currentGroup = `${current.year}-${current.brand}`;

    let html = "<thead><tr><th scope=\"col\" class=\"corner\"><span class=\"sr-only\">Brand</span></th>";
    YEARS.forEach((y) => {
      html += `<th scope="col" aria-label="${y}">${String(y).slice(2)}</th>`;
    });
    html += "<th class=\"gap-col\" aria-hidden=\"true\"></th><th scope=\"col\">Have</th><th scope=\"col\">Of</th></tr></thead><tbody>";

    BRANDS.forEach((brand) => {
      let have = 0;
      let total = 0;
      html += `<tr><th scope="row" class="row-label">${brand}</th>`;

      YEARS.forEach((y) => {
        const g = `${y}-${brand}`;
        const gSets = groups[g];
        if (!gSets) {
          html += "<td><span class=\"slab slab--empty\" aria-hidden=\"true\"></span></td>";
          return;
        }
        const gTotal = gSets.reduce((n, s) => n + s.cards.length, 0);
        const gHave = gSets.reduce((n, s) => n + ownedIn(s), 0);
        have += gHave;
        total += gTotal;

        const cls = [
          "slab",
          gHave === gTotal ? "slab--complete" : "",
          g === currentGroup && !state.query ? "slab--current" : ""
        ].join(" ");

        html += `<td><button type="button" class="${cls}" data-group="${g}"
          aria-label="${y} ${brand}: ${gHave} of ${gTotal} cards"
          title="${y} ${brand}: ${gHave} of ${gTotal}">${gHave}</button></td>`;
      });

      html += `<td class="gap-col"></td>
        <td><span class="slab slab--total" title="${brand} cards you have">${have}</span></td>
        <td><span class="slab slab--total" title="${brand} cards in the checklist">${total}</span></td></tr>`;
    });

    html += "</tbody>";
    $("#board").innerHTML = html;

    const all = sets.reduce((n, s) => n + s.cards.length, 0);
    const owned = sets.reduce((n, s) => n + ownedIn(s), 0);
    const pct = all ? Math.round((owned / all) * 100) : 0;
    $("#board-summary").textContent =
      `You have ${owned} of ${all} Red Sox cards (${pct}%). Pick a year to open its checklist.`;
  }

  // On narrow screens, slide the scoreboard so the open year is in view.
  function centerCurrentSlab() {
    const wrap = document.querySelector(".board-scroll");
    const cur = wrap && wrap.querySelector(".slab--current");
    if (!cur || wrap.scrollWidth <= wrap.clientWidth) return;
    const w = wrap.getBoundingClientRect();
    const c = cur.getBoundingClientRect();
    wrap.scrollLeft += (c.left + c.width / 2) - (w.left + w.width / 2);
  }

  function flipSlab(group) {
    const el = document.querySelector(`.slab[data-group="${group}"]`);
    if (!el) return;
    el.classList.remove("flip");
    void el.offsetWidth; // restart animation
    el.classList.add("flip");
  }

  // ---------- Rows ----------

  function rowHTML(card, setName) {
    const e = entry(card.key);
    const have = !!e.have;
    const label = `${card.player}, #${card.num}`;
    const options = GRADES.map(
      (g) => `<option value="${esc(g)}"${e.cond === g ? " selected" : ""}>${g ? esc(g) : "Condition"}</option>`
    ).join("");

    return `<li class="row${have ? " is-have" : ""}" data-key="${esc(card.key)}">
      <span class="tile" aria-hidden="true">${esc(card.num)}</span>
      <div class="who">
        <span class="player"><span class="sr-only">Card ${esc(card.num)}: </span>${esc(card.player)}</span>
        ${card.note ? `<span class="note">${esc(card.note)}</span>` : ""}
        ${setName ? `<span class="from">${esc(setName)}</span>` : ""}
      </div>
      <label class="have">
        <input type="checkbox" data-field="have" aria-label="I have ${esc(label)}"${have ? " checked" : ""}>
        <span>Have</span>
      </label>
      <div class="extra"${have ? "" : " hidden"}>
        <select data-field="cond" aria-label="Condition of ${esc(label)}">${options}</select>
        <input type="text" data-field="notes" value="${esc(e.notes || "")}"
          placeholder="Notes: grade, cert number, where you got it" aria-label="Notes for ${esc(label)}">
      </div>
    </li>`;
  }

  // ---------- Set view ----------

  function renderSet() {
    const set = setById[state.setId];
    const siblings = groups[`${set.year}-${set.brand}`];
    const owned = ownedIn(set);
    const total = set.cards.length;

    let cards = [...set.cards].sort(byNumber);
    if (state.filter === "have") cards = cards.filter((c) => isHave(c.key));
    if (state.filter === "need") cards = cards.filter((c) => !isHave(c.key));

    const tabs = siblings.length > 1
      ? `<div class="segmented" role="group" aria-label="Series">
          ${siblings.map((s) => `<button type="button" data-set="${s.id}" aria-pressed="${s.id === set.id}">${esc(s.name.replace(`${s.year} ${s.brand}`, "").trim() || s.name)}</button>`).join("")}
        </div>`
      : "<span></span>";

    const filters = ["all", "have", "need"].map((f) =>
      `<button type="button" data-filter="${f}" aria-pressed="${state.filter === f}">${f[0].toUpperCase() + f.slice(1)}</button>`
    ).join("");

    let empty = "";
    if (!cards.length) {
      empty = state.filter === "have"
        ? "<p class=\"empty\">No cards checked off in this set yet. Switch to All or Need and tick the ones you own.</p>"
        : "<p class=\"empty\">You have every card in this set. Nice work.</p>";
    }

    $("#main").innerHTML = `
      <section class="set" aria-labelledby="set-title">
        <header class="set-head">
          <div>
            <h2 class="set-title" id="set-title">${esc(set.name)}</h2>
            <p class="set-count" id="set-count">${owned} of ${total} Red Sox cards</p>
          </div>
          <div class="progress" role="progressbar" aria-label="Set progress"
            aria-valuemin="0" aria-valuemax="${total}" aria-valuenow="${owned}">
            <span id="set-bar" style="width:${total ? (owned / total) * 100 : 0}%"></span>
          </div>
        </header>
        <div class="set-controls">
          ${tabs}
          <div class="segmented" role="group" aria-label="Show">${filters}</div>
        </div>
        ${set.verify ? `<p class="verify">${esc(set.verify)}</p>` : ""}
        ${empty || `<ol class="checklist">${cards.map((c) => rowHTML(c)).join("")}</ol>`}
      </section>`;
  }

  function updateSetHeader() {
    const set = setById[state.setId];
    const count = $("#set-count");
    if (!count) return;
    const owned = ownedIn(set);
    const total = set.cards.length;
    count.textContent = `${owned} of ${total} Red Sox cards`;
    $("#set-bar").style.width = `${total ? (owned / total) * 100 : 0}%`;
    $(".progress").setAttribute("aria-valuenow", owned);
  }

  // ---------- Search view ----------

  function renderSearch() {
    const q = state.query.toLowerCase();
    const hits = [];
    sets.forEach((s) => s.cards.forEach((c) => {
      if (c.player.toLowerCase().includes(q) || c.note.toLowerCase().includes(q)) {
        hits.push({ card: c, set: s });
      }
    }));

    const haveCount = hits.filter((h) => isHave(h.card.key)).length;

    $("#main").innerHTML = `
      <section class="set" aria-labelledby="results-title">
        <header class="results-head">
          <h2 class="set-title" id="results-title">&ldquo;${esc(state.query)}&rdquo;</h2>
          <p class="set-count">${hits.length
            ? `${hits.length} card${hits.length === 1 ? "" : "s"}, you have ${haveCount}`
            : "No Red Sox cards match that name. Try a last name only."}</p>
        </header>
        ${hits.length ? `<ol class="checklist">${hits.map((h) => rowHTML(h.card, h.set.name)).join("")}</ol>` : ""}
      </section>`;
  }

  function renderMain() {
    if (state.query.length >= 2) renderSearch();
    else renderSet();
  }

  function renderAll() {
    renderBoard();
    renderMain();
  }

  // ---------- Events ----------

  $("#board").addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-group]");
    if (!btn) return;
    selectSet(groups[btn.dataset.group][0].id);
  });

  function selectSet(id) {
    state.setId = id;
    state.query = "";
    $("#search").value = "";
    history.replaceState(null, "", `#set=${id}`);
    renderAll();
    $("#main").focus({ preventScroll: true });
    $("#main").scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
  }

  $("#main").addEventListener("click", (e) => {
    const setBtn = e.target.closest("button[data-set]");
    if (setBtn) { selectSet(setBtn.dataset.set); return; }

    const filterBtn = e.target.closest("button[data-filter]");
    if (filterBtn) {
      state.filter = filterBtn.dataset.filter;
      renderSet();
      const again = document.querySelector(`button[data-filter="${state.filter}"]`);
      if (again) again.focus();
    }
  });

  $("#main").addEventListener("change", (e) => {
    const field = e.target.dataset.field;
    if (!field) return;
    const row = e.target.closest(".row");
    const key = row.dataset.key;

    if (field === "have") {
      const have = e.target.checked;
      setEntry(key, { have });
      row.classList.toggle("is-have", have);
      row.querySelector(".extra").hidden = !have;
      const set = setById[key.split(":")[0]];
      renderBoard();
      flipSlab(`${set.year}-${set.brand}`);
      updateSetHeader();
    } else if (field === "cond") {
      setEntry(key, { cond: e.target.value });
    }
  });

  // Notes save as you type, without re-rendering.
  $("#main").addEventListener("input", (e) => {
    if (e.target.dataset.field !== "notes") return;
    setEntry(e.target.closest(".row").dataset.key, { notes: e.target.value });
  });

  let searchTimer;
  $("#search").addEventListener("input", (e) => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      state.query = e.target.value.trim();
      renderAll();
    }, 150);
  });

  window.addEventListener("hashchange", () => {
    const id = readHashSet();
    if (id && id !== state.setId) { state.setId = id; renderAll(); }
  });

  // ---------- Print want list ----------

  $("#print-btn").addEventListener("click", () => {
    const needSets = sets
      .map((s) => ({ s, need: s.cards.filter((c) => !isHave(c.key)).sort(byNumber) }))
      .filter((x) => x.need.length);

    const count = needSets.reduce((n, x) => n + x.need.length, 0);
    if (!count) { toast("You have every card. Nothing to print."); return; }

    const today = new Date().toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
    $("#print-area").innerHTML = `
      <h1>Red Sox want list</h1>
      <p class="print-sub">${count} cards needed, as of ${esc(today)}</p>
      <div class="print-cols">
        ${needSets.map((x) => `<section><h2>${esc(x.s.name)}</h2><ul>${
          x.need.map((c) => `<li>#${esc(c.num)} ${esc(c.player)}${c.note ? ` (${esc(c.note)})` : ""}</li>`).join("")
        }</ul></section>`).join("")}
      </div>`;
    window.print();
  });

  // ---------- Back up and restore ----------

  $("#export-btn").addEventListener("click", () => {
    const payload = { app: "red-sox-vintage", version: 1, exported: new Date().toISOString(), collection };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `red-sox-vintage-backup-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    toast("Backup downloaded");
  });

  $("#import-btn").addEventListener("click", () => $("#import-file").click());

  $("#import-file").addEventListener("change", async (e) => {
    const file = e.target.files[0];
    e.target.value = "";
    if (!file) return;
    try {
      const data = JSON.parse(await file.text());
      const incoming = data.collection || data;
      if (typeof incoming !== "object" || Array.isArray(incoming)) throw new Error("bad shape");
      const n = Object.values(incoming).filter((v) => v && v.have).length;
      if (!confirm(`Replace your current collection with this backup (${n} cards marked as owned)?`)) return;
      collection = incoming;
      saveCollection();
      renderAll();
      toast("Collection restored");
    } catch (err) {
      toast("That file isn't a Red Sox Vintage backup.");
    }
  });

  // ---------- Start ----------

  renderAll();
  centerCurrentSlab();
})();
