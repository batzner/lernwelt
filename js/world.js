(function () {
  "use strict";
  const KEY = "lernwelt-world-v1",
    colors = ["#43869e", "#7a61a9", "#db7c38", "#399077"],
    skins = ["#edb998", "#b47752", "#754c34"];
  const catalog = [
    { id: "tree", name: "Apfelbaum", goal: 10, icon: "🌳" },
    { id: "flowers", name: "Blumenbeet", goal: 18, icon: "🌷" },
    { id: "pond", name: "Kleiner Teich", goal: 28, icon: "💧" },
    { id: "house", name: "Mein Zuhause", goal: 40, icon: "🏠" },
    { id: "bench", name: "Gartenbank", goal: 55, icon: "🪑" },
    { id: "cat", name: "Meine Katze", goal: 70, icon: "🐈" },
    { id: "friend1", name: "Eine weitere Figur", goal: 85, icon: "🧑" },
    { id: "lanterns", name: "Lichterkette", goal: 100, icon: "🏮" },
    { id: "bridge", name: "Holzbrücke", goal: 115, icon: "🌉" },
    { id: "robot", name: "Kleiner Roboter", goal: 130, icon: "🤖" },
    { id: "friend2", name: "Eine dritte Figur", goal: 150, icon: "🧑‍🤝‍🧑" },
    { id: "rocket", name: "Spiel-Rakete", goal: 170, icon: "🚀" },
    { id: "greenhouse", name: "Gewächshaus", goal: 190, icon: "🌱" },
    { id: "butterflies", name: "Schmetterlinge", goal: 210, icon: "🦋" },
    { id: "friend3", name: "Eine vierte Figur", goal: 230, icon: "👨‍👩‍👧‍👦" },
    { id: "castle", name: "Kleine Burg", goal: 250, icon: "🏰" },
    { id: "balloon", name: "Heißluftballon", goal: 275, icon: "🎈" },
    { id: "rainbow", name: "Regenbogen", goal: 300, icon: "🌈" },
  ];
  let profile = Rewards.active(),
    filter = "all",
    game = null;
  const $ = (id) => document.getElementById(id);
  function read() {
    try {
      const v = JSON.parse(localStorage.getItem(KEY) || "{}");
      return v && typeof v === "object" && !Array.isArray(v) ? v : {};
    } catch {
      return {};
    }
  }
  function state() {
    const v = read()[profile] || {};
    return {
      owned: Array.isArray(v.owned)
        ? [...new Set(v.owned)].filter((id) => catalog.some((x) => x.id === id))
        : [],
      hidden: Array.isArray(v.hidden)
        ? v.hidden.filter((id) => catalog.some((x) => x.id === id))
        : [],
      theme: ["meadow", "evening", "blue"].includes(v.theme) ? v.theme : "meadow",
      friends: [0, 1, 2].map((i) => {
        const f = Array.isArray(v.friends) ? v.friends[i] || {} : {};
        return {
          skin: skins.includes(f.skin) ? f.skin : skins[i],
          color: colors.includes(f.color) ? f.color : colors[(i + 1) % 4],
        };
      }),
    };
  }
  function save(s) {
    const all = read();
    all[profile] = s;
    try {
      localStorage.setItem(KEY, JSON.stringify(all));
      return true;
    } catch {
      return false;
    }
  }
  function say(text) {
    $("world-status").textContent = text;
  }
  function earned() {
    return Rewards.earned(profile);
  }
  function visible(s, id) {
    return s.owned.includes(id) && !s.hidden.includes(id);
  }
  function figure(x, y, skin, color, hat = "") {
    return `<g transform="translate(${x} ${y})"><path d="M-17 28Q-17 9 0 9T17 28V51H-17Z" fill="${color}"/><circle cy="-2" r="15" fill="${skin}"/><path d="M-15-5Q-14-24 0-20Q16-21 15-5L7-14-4-10-11-14Z" fill="#46382f"/><circle cx="-5" cy="-1" r="1.5" fill="#302e33"/><circle cx="5" cy="-1" r="1.5" fill="#302e33"/><path d="M-5 6Q0 10 5 6" fill="none" stroke="#74443c" stroke-width="2" stroke-linecap="round"/>${hat}</g>`;
  }
  function scene(s) {
    const has = (id) => visible(s, id),
      a = Rewards.avatar(profile),
      sky = s.theme === "evening" ? "#dfcff1" : s.theme === "blue" ? "#c7e4f7" : "#d9eff2";
    let art = `<rect width="800" height="460" rx="22" fill="${sky}"/><circle cx="710" cy="65" r="33" fill="${s.theme === "evening" ? "#fff2cc" : "#ffd879"}"/><path d="M0 245Q140 140 320 245T800 220V460H0Z" fill="#9cc7a0"/><path d="M0 330Q200 225 420 325T800 285V460H0Z" fill="#78b78d"/><path d="M310 460Q375 365 410 320" stroke="#e5d2a7" stroke-width="70" fill="none"/><g fill="white" opacity=".8"><ellipse cx="130" cy="73" rx="60" ry="18"/><ellipse cx="360" cy="105" rx="48" ry="14"/></g>`;
    if (has("rainbow"))
      art +=
        '<g fill="none" stroke-width="11" opacity=".85"><path d="M230 190A140 140 0 0 1 510 190" stroke="#e98a86"/><path d="M241 190A129 129 0 0 1 499 190" stroke="#f6d47d"/><path d="M252 190A118 118 0 0 1 488 190" stroke="#6ea7c9"/></g>';
    if (has("house"))
      art +=
        '<g stroke="#775f48" stroke-width="4" stroke-linejoin="round"><rect x="300" y="201" width="180" height="132" rx="9" fill="#fff2d6"/><path d="M280 205 390 123 500 205Z" fill="#bd6f62"/><rect x="369" y="262" width="40" height="71" rx="7" fill="#7e9e9b"/><g fill="#bddfe7"><rect x="322" y="230" width="29" height="32" rx="4"/><rect x="429" y="230" width="29" height="32" rx="4"/></g><circle cx="399" cy="299" r="2" fill="#f4d684"/></g>';
    if (has("castle"))
      art +=
        '<g stroke="#637c86" stroke-width="3" fill="#c5d3d4"><path d="M620 271V215H636V228H652V215H668V271H696V215H712V228H728V215H744V312H620Z"/><path d="M672 312V282Q681 267 690 282V312" fill="#637c86"/><path d="M637 211V179L663 190 637 199" fill="#c288b5"/></g>';
    if (has("tree"))
      art +=
        '<path d="M119 315V220" stroke="#806047" stroke-width="20"/><g fill="#4a9270"><circle cx="96" cy="202" r="37"/><circle cx="135" cy="205" r="37"/><circle cx="115" cy="171" r="38"/></g><g fill="#e49a7c"><circle cx="91" cy="197" r="6"/><circle cx="128" cy="173" r="6"/><circle cx="139" cy="215" r="6"/></g>';
    if (has("pond"))
      art +=
        '<ellipse cx="636" cy="389" rx="106" ry="38" fill="#91d4de" stroke="#528c9e" stroke-width="4"/><path d="M562 389Q593 379 620 389M646 402Q680 392 706 401" fill="none" stroke="#d6f5f5" stroke-width="4"/><ellipse cx="668" cy="378" rx="16" ry="8" fill="#569c74"/>';
    if (has("bridge"))
      art +=
        '<g fill="none" stroke="#aa8058" stroke-width="9"><path d="M553 391Q622 332 693 391M553 370Q622 311 693 370"/><path d="M559 365V395M589 347V374M620 341V365M651 348V375M687 366V394" stroke-width="5"/></g>';
    if (has("flowers"))
      art +=
        '<g><ellipse cx="159" cy="389" rx="79" ry="24" fill="#b8c99a"/>' +
        [105, 133, 162, 191, 214]
          .map(
            (x, i) =>
              `<path d="M${x} 386v-23" stroke="#408760" stroke-width="4"/><circle cx="${x}" cy="361" r="9" fill="${["#e6a0a2", "#f3d280", "#bd9bcf"][i % 3]}"/><circle cx="${x}" cy="361" r="3" fill="#fff0b8"/>`,
          )
          .join("") +
        "</g>";
    if (has("bench"))
      art +=
        '<g stroke="#795f48" stroke-width="5" fill="#c69b6b"><rect x="207" y="305" width="80" height="13" rx="3"/><rect x="207" y="325" width="80" height="12" rx="3"/><path d="M216 337v24M278 337v24"/></g>';
    if (has("greenhouse"))
      art +=
        '<g stroke="#6c9b8a" stroke-width="4" fill="#c9e8da"><path d="M18 305V247L65 209 112 247V305Z"/><path d="M65 210V305M19 247H111" fill="none"/><path d="M40 297V275M88 298V274" stroke="#468663"/><ellipse cx="34" cy="278" rx="10" ry="5" fill="#80b988"/><ellipse cx="82" cy="281" rx="10" ry="5" fill="#80b988"/></g>';
    if (has("lanterns"))
      art +=
        '<path d="M128 151Q390 227 644 145" fill="none" stroke="#7d796b" stroke-width="3"/>' +
        [180, 260, 340, 420, 500, 580]
          .map(
            (x, i) =>
              `<rect x="${x}" y="${i === 0 || i === 5 ? 166 : i === 1 || i === 4 ? 180 : 187}" width="15" height="21" rx="7" fill="${["#f4d682", "#e5a9b8", "#abc1e1"][i % 3]}"/>`,
          )
          .join("");
    if (has("rocket"))
      art +=
        '<g transform="translate(708 295)" stroke="#6f758d" stroke-width="3"><path d="M-14 0Q-23-46 0-70Q23-46 14 0Z" fill="#eee9ee"/><path d="M-14-25-27 4-14 0M14-25 27 4 14 0" fill="#c691aa"/><circle cy="-35" r="8" fill="#9ac9de"/></g>';
    if (has("balloon"))
      art +=
        '<g transform="translate(570 77)"><path d="M-32-5Q-30-48 0-48Q30-48 32-5Q29 16 12 30H-12Q-29 16-32-5Z" fill="#d8979d"/><path d="M-10-45Q-22-8-4 30M10-45Q22-8 4 30" fill="none" stroke="#f4d6a0" stroke-width="9"/><path d="M-12 30-8 44M12 30 8 44" stroke="#8b7560" stroke-width="2"/><rect x="-11" y="43" width="22" height="15" rx="3" fill="#bb9467"/></g>';
    if (has("butterflies"))
      art += [
        [230, 240],
        [517, 209],
        [540, 296],
      ]
        .map(
          ([x, y]) =>
            `<g transform="translate(${x} ${y})"><ellipse cx="-6" rx="7" ry="10" fill="#d6a0d7" transform="rotate(-25)"/><ellipse cx="6" rx="7" ry="10" fill="#e9b7b8" transform="rotate(25)"/><path d="M0-6V9" stroke="#77608b" stroke-width="3"/></g>`,
        )
        .join("");
    let hat = "";
    if (a.owned.includes("crown") && a.equipped.hat === "crown")
      hat = '<path d="M-14-17-3-13 0-24 6-13 14-18 11-8H-11Z" fill="#f3c658"/>';
    else if (a.owned.includes("cap") && a.equipped.hat === "cap")
      hat =
        '<path d="M-16-11Q-14-29 0-27T16-11H-16M3-11H23" fill="#db7c38" stroke="#975329" stroke-width="3"/>';
    art += figure(355, 359, a.skin, a.color, hat);
    for (let i = 0; i < 3; i++)
      if (has("friend" + (i + 1)))
        art += figure(
          [410, 459, 505][i],
          [365, 350, 367][i],
          s.friends[i].skin,
          s.friends[i].color,
        );
    if (has("cat"))
      art +=
        '<g transform="translate(285 397)" fill="#dbad79" stroke="#8d6c4c" stroke-width="2"><ellipse cy="5" rx="16" ry="12"/><path d="M-12-5-14-22-4-15 5-15 14-22 12-5"/><circle cy="-7" r="13"/><path d="M15 9Q35 5 26-10" fill="none" stroke-width="6"/><g fill="#4b5447" stroke="none"><circle cx="-4" cy="-9" r="2"/><circle cx="4" cy="-9" r="2"/></g></g>';
    if (has("robot"))
      art +=
        '<g transform="translate(207 363)" stroke="#597e91" stroke-width="3" fill="#b1ced8"><rect x="-13" width="26" height="23" rx="5"/><rect x="-15" y="-23" width="30" height="20" rx="5"/><path d="M0-23V-31M-8 23V31M8 23V31M-13 6-22 14M13 6 22 14"/><g fill="#497989" stroke="none"><circle cx="-6" cy="-14" r="3"/><circle cx="6" cy="-14" r="3"/></g></g>';
    const names = catalog.filter((x) => has(x.id)).map((x) => x.name);
    return `<svg viewBox="0 0 800 460" role="img" aria-labelledby="world-svg-title world-svg-desc"><title id="world-svg-title">Deine Avatar-Welt</title><desc id="world-svg-desc">Dein Avatar auf einer Wiese.${names.length ? " Aufgestellt: " + names.join(", ") + "." : ""}</desc>${art}</svg>`;
  }
  function render() {
    const s = state(),
      n = earned(),
      next = catalog.find((x) => !s.owned.includes(x.id) && x.goal > n),
      ready = catalog.filter((x) => !s.owned.includes(x.id) && x.goal <= n);
    $("world-profile").value = profile;
    $("world-stage").innerHTML = scene(s);
    $("world-earned").textContent = n + " Sterne insgesamt";
    $("world-count").textContent = s.owned.length + " von " + catalog.length + " Dingen gesammelt";
    $("world-goal").innerHTML = ready.length
      ? `<strong>${ready.length} neue Dinge sind bereit!</strong> Wähle unten „Aufstellen“.`
      : next
        ? `<strong>Dein nächstes Ziel: ${next.name}</strong><p>Noch ${next.goal - n} Sterne. Sammle insgesamt ${next.goal} Sterne.</p><progress max="${next.goal}" value="${n}" aria-label="Sterne bis zum nächsten Ziel"></progress>`
        : "<strong>Deine Sammlung ist vollständig!</strong> Gestalte deine Figuren und probiere andere Farben aus.";
    $("world-items").innerHTML =
      catalog
        .filter(
          (x) =>
            filter === "all" ||
            (filter === "ready" && x.goal <= n && !s.owned.includes(x.id)) ||
            (filter === "owned" && s.owned.includes(x.id)),
        )
        .map((x) => {
          const owned = s.owned.includes(x.id),
            on = visible(s, x.id),
            locked = !owned && n < x.goal;
          return `<article class="world-item ${locked ? "locked" : ""}"><span class="item-icon" aria-hidden="true">${x.icon}</span><h3>${x.name}</h3><p>${owned ? "✓ Gesammelt" : locked ? "Noch " + (x.goal - n) + " Sterne bis zum Ziel" : "✓ Dein Ziel ist erreicht"}</p><small>${x.goal} Sterne insgesamt</small><button id="build-${x.id}" type="button" ${locked ? "disabled" : ""} aria-label="${x.name}: ${locked ? "noch gesperrt" : owned ? (on ? "ausblenden" : "wieder aufstellen") : "aufstellen"}" onclick="World.build('${x.id}')">${locked ? "🔒 Noch gesperrt" : owned ? (on ? "Ausblenden" : "Wieder aufstellen") : "Aufstellen"}</button></article>`;
        })
        .join("") || "<p>Hier ist gerade nichts. Wähle „Alle Ziele“ oder sammle neue Sterne.</p>";
    for (const b of document.querySelectorAll("[data-world-filter]"))
      b.setAttribute("aria-pressed", String(b.dataset.worldFilter === filter));
    for (const b of document.querySelectorAll("[data-world-theme]"))
      b.setAttribute("aria-pressed", String(b.dataset.worldTheme === s.theme));
    $("world-friends").innerHTML =
      [0, 1, 2]
        .filter((i) => s.owned.includes("friend" + (i + 1)))
        .map(
          (i) =>
            `<article class="friend-card"><h3>Figur ${i + 2}</h3><p>Du entscheidest: Wer gehört zu deiner Welt?</p><fieldset><legend>Hautfarbe</legend><div class="world-palette">${skins.map((c, j) => `<button id="world-color-${i}-skin-${c.slice(1)}" style="background:${c}" aria-label="Figur ${i + 2}, Hautfarbe ${j + 1}" aria-pressed="${s.friends[i].skin === c}" onclick="World.color(${i},'skin','${c}')"></button>`).join("")}</div></fieldset><fieldset><legend>Kleidung</legend><div class="world-palette">${colors.map((c, j) => `<button id="world-color-${i}-color-${c.slice(1)}" style="background:${c}" aria-label="Figur ${i + 2}, Kleidungsfarbe ${j + 1}" aria-pressed="${s.friends[i].color === c}" onclick="World.color(${i},'color','${c}')"></button>`).join("")}</div></fieldset></article>`,
        )
        .join("") ||
      "<p>Ab 85 Sternen kommt eine weitere Figur dazu. Du kannst später insgesamt vier Figuren gestalten.</p>";
    $("memory-start").disabled = n < 80;
    $("memory-lock").textContent =
      n < 80
        ? "Noch " + (80 - n) + " Sterne bis zum Merkspiel."
        : "✓ Merkspiel freigeschaltet. Du kannst es jederzeit spielen.";
  }
  function build(id) {
    const item = catalog.find((x) => x.id === id);
    if (!item) return;
    const s = state();
    if (!s.owned.includes(id)) {
      if (earned() < item.goal) {
        say("Sammle zuerst insgesamt " + item.goal + " Sterne.");
        return;
      }
      s.owned.push(id);
    } else if (s.hidden.includes(id)) s.hidden = s.hidden.filter((x) => x !== id);
    else s.hidden.push(id);
    if (!save(s)) {
      say("Dein Browser konnte die Welt nicht speichern. Versuche es noch einmal.");
      return;
    }
    render();
    say(
      visible(s, id)
        ? item.name + " steht jetzt in deiner Welt. Deine Sterne bleiben erhalten."
        : item.name + " ist ausgeblendet. Du kannst es jederzeit wieder aufstellen.",
    );
    ($("build-" + id) || $("world-status"))?.focus();
  }
  function theme(value) {
    if (!["meadow", "evening", "blue"].includes(value)) return;
    const s = state();
    s.theme = value;
    if (save(s)) {
      render();
      say("Der Himmel wurde geändert.");
    } else say("Die Auswahl konnte nicht gespeichert werden.");
  }
  function color(i, part, value) {
    if (
      !Number.isInteger(i) ||
      i < 0 ||
      i > 2 ||
      !["skin", "color"].includes(part) ||
      !(part === "skin" ? skins : colors).includes(value)
    )
      return;
    const s = state();
    if (!s.owned.includes("friend" + (i + 1))) return;
    s.friends[i][part] = value;
    if (save(s)) {
      render();
      say("Die Farbe deiner Figur ist gespeichert.");
      $("world-color-" + i + "-" + part + "-" + value.slice(1))?.focus();
    } else say("Die Farbe konnte nicht gespeichert werden.");
  }
  function changeProfile(p) {
    if (!/^(?:[1-9]|1[0-9]|20)$/.test(String(p))) return;
    Rewards.setActive(p);
    profile = Rewards.active();
    filter = "all";
    game = null;
    $("memory-panel").hidden = true;
    render();
    say("Du gestaltest die Welt für Lernplatz " + profile + ".");
  }
  function setFilter(value) {
    if (!["all", "ready", "owned"].includes(value)) return;
    filter = value;
    render();
  }
  function startGame() {
    if (earned() < 80) {
      say("Sammle zuerst insgesamt 80 Sterne für das Merkspiel.");
      return;
    }
    const deck = [0, 1, 2, 3, 0, 1, 2, 3];
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    game = { deck, open: [], matched: [], moves: 0 };
    $("memory-panel").hidden = false;
    renderGame();
    $("memory-title").focus();
    $("memory-panel").scrollIntoView?.({ block: "start", behavior: "instant" });
  }
  function renderGame() {
    if (!game) return;
    const icons = ["🌳", "🏠", "🐈", "🚀"],
      finished = game.matched.length === 8;
    $("memory-grid").innerHTML = game.deck
      .map((v, i) => {
        const matched = game.matched.includes(i),
          shown = matched || game.open.includes(i);
        return `<button type="button" id="memory-${i}" class="memory-card ${matched ? "matched" : ""}" ${matched || game.open.includes(i) ? "disabled" : ""} aria-label="Karte ${i + 1}: ${shown ? ["Baum", "Haus", "Katze", "Rakete"][v] + (matched ? ", Paar gefunden" : "") : "verdeckt"}" onclick="World.flip(${i})">${shown ? icons[v] : "?"}</button>`;
      })
      .join("");
    $("memory-info").textContent = finished
      ? "Geschafft! Du hast alle vier Paare gefunden. " + game.moves + " Versuche."
      : game.open.length === 2
        ? "Diese Karten passen noch nicht. Tippe auf „Weiter spielen“."
        : game.matched.length / 2 + " von 4 Paaren gefunden · " + game.moves + " Versuche";
    $("memory-continue").hidden = game.open.length !== 2;
    $("memory-again").hidden = !finished;
  }
  function flip(i) {
    if (
      !game ||
      !Number.isInteger(i) ||
      i < 0 ||
      i > 7 ||
      game.open.length === 2 ||
      game.open.includes(i) ||
      game.matched.includes(i)
    )
      return;
    game.open.push(i);
    if (game.open.length === 2) {
      game.moves++;
      if (game.deck[game.open[0]] === game.deck[game.open[1]]) {
        game.matched.push(...game.open);
        game.open = [];
      }
    }
    renderGame();
    if (game.open.length === 2) $("memory-continue").focus();
    else {
      const next = game.deck.findIndex(
        (v, n) => !game.matched.includes(n) && !game.open.includes(n),
      );
      if (next >= 0) $("memory-" + next)?.focus();
      else $("memory-again").focus();
    }
  }
  function continueGame() {
    if (!game || game.open.length !== 2) return;
    const first = game.open[0];
    game.open = [];
    renderGame();
    $("memory-" + first)?.focus();
  }
  function closeGame() {
    game = null;
    $("memory-panel").hidden = true;
    $("memory-start").focus();
  }
  window.World = {
    catalog,
    build,
    theme,
    color,
    changeProfile,
    setFilter,
    startGame,
    flip,
    continueGame,
    closeGame,
    render,
  };
  $("world-profile").innerHTML = Array.from(
    { length: 20 },
    (_, i) => `<option value="${i + 1}">Lernplatz ${i + 1}</option>`,
  ).join("");
  render();
  window.addEventListener?.("storage", () => {
    game = null;
    $("memory-panel").hidden = true;
    render();
  });
})();
