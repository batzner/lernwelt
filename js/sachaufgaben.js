(function () {
  "use strict";
  const tasks = [
      {
        id: "v2-0",
        title: "Wimpel für das Schulfest",
        icon: "🚩",
        kind: "ratio",
        total: 192,
        text: "Für ein Schulfest hängen zusammen <strong>192 gelbe und blaue Wimpel</strong>. Es sind <strong>fünfmal so viele gelbe Wimpel wie blaue Wimpel</strong>. Wie viele Wimpel sind es von jeder Farbe?",
        fields: [
          { label: "Gelbe Wimpel", answer: 160, unit: "" },
          { label: "Blaue Wimpel", answer: 32, unit: "" },
        ],
        hints: [
          "Zeichne für Blaue Wimpel einen Teil. Zeichne für Gelbe Wimpel 5 gleich große Teile.",
          "Zusammen sind es 6 gleich große Teile. Teile 192 durch 6.",
          "Rechne zuerst 192 : 6. Das Ergebnis ist die kleinere Menge. Nimm diese Zahl dann 5-mal.",
        ],
        steps: [
          "Zusammen: 5 Teile + 1 Teil = 6 Teile.",
          "Ein Teil: 192 : 6 = 32.",
          "Gelbe Wimpel: 32 × 5 = 160.",
          "Probe: 160 + 32 = 192.",
        ],
        factor: 5,
      },
      {
        id: "v2-1",
        title: "Saft für das Fest",
        icon: "🧃",
        kind: "difference",
        total: 116,
        text: "Für ein Fest stehen zusammen <strong>116 Flaschen Apfelsaft und Orangensaft</strong> bereit. Es gibt <strong>24 Flaschen Apfelsaft mehr als Orangensaft</strong>. Wie viele Flaschen sind es von jeder Sorte?",
        fields: [
          { label: "Apfelsaft", answer: 70, unit: "Flaschen" },
          { label: "Orangensaft", answer: 46, unit: "Flaschen" },
        ],
        hints: [
          "Eine Menge ist um 24 größer. Zeichne zwei Balken: einen kurzen und einen längeren.",
          "Nimm den Unterschied 24 zuerst von der Gesamtzahl 116 weg. Der Rest besteht aus zwei gleich großen Mengen.",
          "Rechne (116 − 24) : 2. So findest du die kleinere Menge. Addiere dann 24 für die größere Menge.",
        ],
        steps: [
          "Unterschied wegnehmen: 116 − 24 = 92.",
          "Kleinere Menge: 92 : 2 = 46.",
          "Größere Menge: 46 + 24 = 70.",
          "Probe: 70 + 46 = 116; 70 − 46 = 24.",
        ],
        difference: 24,
      },
      {
        id: "v2-2",
        title: "Zwei Bastelgruppen",
        icon: "📿",
        kind: "difference",
        total: 174,
        text: "Zwei Bastelgruppen haben zusammen <strong>174 Perlen</strong>. Die Gruppe A hat <strong>38 Perlen mehr als die Gruppe B</strong>. Wie viele Perlen hat jede Gruppe?",
        fields: [
          { label: "Gruppe A", answer: 106, unit: "Perlen" },
          { label: "Gruppe B", answer: 68, unit: "Perlen" },
        ],
        hints: [
          "Eine Menge ist um 38 größer. Zeichne zwei Balken: einen kurzen und einen längeren.",
          "Nimm den Unterschied 38 zuerst von der Gesamtzahl 174 weg. Der Rest besteht aus zwei gleich großen Mengen.",
          "Rechne (174 − 38) : 2. So findest du die kleinere Menge. Addiere dann 38 für die größere Menge.",
        ],
        steps: [
          "Unterschied wegnehmen: 174 − 38 = 136.",
          "Kleinere Menge: 136 : 2 = 68.",
          "Größere Menge: 68 + 38 = 106.",
          "Probe: 106 + 68 = 174; 106 − 68 = 38.",
        ],
        difference: 38,
      },
      {
        id: "v2-3",
        title: "Pakete im Lager",
        icon: "📦",
        kind: "ratio",
        total: 84,
        text: "In einem Lager stehen zusammen <strong>84 kleine und große Pakete</strong>. Es gibt <strong>sechsmal so viele kleine Pakete wie große Pakete</strong>. Wie viele Pakete sind es von jeder Größe?",
        fields: [
          { label: "Kleine Pakete", answer: 72, unit: "" },
          { label: "Große Pakete", answer: 12, unit: "" },
        ],
        hints: [
          "Zeichne für Große Pakete einen Teil. Zeichne für Kleine Pakete 6 gleich große Teile.",
          "Zusammen sind es 7 gleich große Teile. Teile 84 durch 7.",
          "Rechne zuerst 84 : 7. Das Ergebnis ist die kleinere Menge. Nimm diese Zahl dann 6-mal.",
        ],
        steps: [
          "Zusammen: 6 Teile + 1 Teil = 7 Teile.",
          "Ein Teil: 84 : 7 = 12.",
          "Kleine Pakete: 12 × 6 = 72.",
          "Probe: 72 + 12 = 84.",
        ],
        factor: 6,
      },
      {
        title: "Zwei Sorten Sticker",
        icon: "🌟",
        kind: "ratio",
        total: 240,
        factor: 3,
        text: "Nora hat zusammen <strong>240 Sticker</strong> mit Sternen oder Herzen. Sie hat <strong>dreimal so viele Sternen-Sticker wie Herz-Sticker</strong>. Wie viele sind es von jeder Art?",
        fields: [
          { label: "Sternen-Sticker", answer: 180, unit: "" },
          { label: "Herz-Sticker", answer: 60, unit: "" },
        ],
        hints: [
          "Zeichne für Herz-Sticker einen Teil. Zeichne für Sternen-Sticker 3 gleich große Teile.",
          "Zusammen sind es 4 gleich große Teile. Teile 240 durch 4.",
          "Rechne zuerst 240 : 4. Das Ergebnis ist die kleine Menge. Nimm diese Zahl dann 3-mal.",
        ],
        steps: [
          "Zusammen: 3 Teile + 1 Teil = 4 Teile.",
          "Ein Teil: 240 : 4 = 60.",
          "Sternen-Sticker: 60 × 3 = 180.",
          "Probe: 180 + 60 = 240.",
        ],
      },
      {
        title: "Bausteine sortieren",
        icon: "🧱",
        kind: "ratio",
        total: 180,
        factor: 4,
        text: "In einer Kiste liegen zusammen <strong>180 rote und blaue Bausteine</strong>. Es sind <strong>viermal so viele rote Steine wie blaue Steine</strong>. Wie viele sind es von jeder Farbe?",
        fields: [
          { label: "Rote Steine", answer: 144, unit: "" },
          { label: "Blaue Steine", answer: 36, unit: "" },
        ],
        hints: [
          "Zeichne für Blaue Steine einen Teil. Zeichne für Rote Steine 4 gleich große Teile.",
          "Zusammen sind es 5 gleich große Teile. Teile 180 durch 5.",
          "Rechne zuerst 180 : 5. Das Ergebnis ist die kleine Menge. Nimm diese Zahl dann 4-mal.",
        ],
        steps: [
          "Zusammen: 4 Teile + 1 Teil = 5 Teile.",
          "Ein Teil: 180 : 5 = 36.",
          "Rote Steine: 36 × 4 = 144.",
          "Probe: 144 + 36 = 180.",
        ],
      },
      {
        title: "Bücher im Regal",
        icon: "📚",
        kind: "ratio",
        total: 96,
        factor: 5,
        text: "In einem Regal stehen zusammen <strong>96 Bücher</strong>: Geschichtenbücher und Comics. Es gibt <strong>fünfmal so viele Geschichtenbücher wie Comics</strong>. Wie viele stehen dort von jeder Art?",
        fields: [
          { label: "Geschichtenbücher", answer: 80, unit: "" },
          { label: "Comics", answer: 16, unit: "" },
        ],
        hints: [
          "Zeichne für Comics einen Teil. Zeichne für Geschichtenbücher 5 gleich große Teile.",
          "Zusammen sind es 6 gleich große Teile. Teile 96 durch 6.",
          "Rechne zuerst 96 : 6. Das Ergebnis ist die kleine Menge. Nimm diese Zahl dann 5-mal.",
        ],
        steps: [
          "Zusammen: 5 Teile + 1 Teil = 6 Teile.",
          "Ein Teil: 96 : 6 = 16.",
          "Geschichtenbücher: 16 × 5 = 80.",
          "Probe: 80 + 16 = 96.",
        ],
      },
      {
        title: "Bunte Murmeln",
        icon: "🔮",
        kind: "ratio",
        total: 144,
        factor: 7,
        text: "In einem Beutel liegen <strong>144 gelbe und grüne Murmeln</strong>. Es sind <strong>siebenmal so viele gelbe Murmeln wie grüne Murmeln</strong>. Wie viele sind es von jeder Farbe?",
        fields: [
          { label: "Gelbe Murmeln", answer: 126, unit: "" },
          { label: "Grüne Murmeln", answer: 18, unit: "" },
        ],
        hints: [
          "Zeichne für Grüne Murmeln einen Teil. Zeichne für Gelbe Murmeln 7 gleich große Teile.",
          "Zusammen sind es 8 gleich große Teile. Teile 144 durch 8.",
          "Rechne zuerst 144 : 8. Das Ergebnis ist die kleine Menge. Nimm diese Zahl dann 7-mal.",
        ],
        steps: [
          "Zusammen: 7 Teile + 1 Teil = 8 Teile.",
          "Ein Teil: 144 : 8 = 18.",
          "Gelbe Murmeln: 18 × 7 = 126.",
          "Probe: 126 + 18 = 144.",
        ],
      },
      {
        title: "Muscheln am Strand",
        icon: "🐚",
        kind: "ratio",
        total: 150,
        factor: 4,
        text: "Eine Gruppe sammelt <strong>150 braune und weiße Muscheln</strong>. Die Kinder haben <strong>viermal so viele braune Muscheln wie weiße Muscheln</strong>. Wie viele sind es von jeder Farbe?",
        fields: [
          { label: "Braune Muscheln", answer: 120, unit: "" },
          { label: "Weiße Muscheln", answer: 30, unit: "" },
        ],
        hints: [
          "Zeichne für Weiße Muscheln einen Teil. Zeichne für Braune Muscheln 4 gleich große Teile.",
          "Zusammen sind es 5 gleich große Teile. Teile 150 durch 5.",
          "Rechne zuerst 150 : 5. Das Ergebnis ist die kleine Menge. Nimm diese Zahl dann 4-mal.",
        ],
        steps: [
          "Zusammen: 4 Teile + 1 Teil = 5 Teile.",
          "Ein Teil: 150 : 5 = 30.",
          "Braune Muscheln: 30 × 4 = 120.",
          "Probe: 120 + 30 = 150.",
        ],
      },
      {
        title: "Karten für das Fest",
        icon: "🎟️",
        kind: "ratio",
        total: 324,
        factor: 3,
        text: "Für ein Fest werden zusammen <strong>324 Karten</strong> für Kinder und Erwachsene verkauft. Es sind <strong>dreimal so viele Kinderkarten wie Erwachsenenkarten</strong>. Wie viele Karten werden von jeder Art verkauft?",
        fields: [
          { label: "Kinderkarten", answer: 243, unit: "" },
          { label: "Erwachsenenkarten", answer: 81, unit: "" },
        ],
        hints: [
          "Zeichne für Erwachsenenkarten einen Teil. Zeichne für Kinderkarten 3 gleich große Teile.",
          "Zusammen sind es 4 gleich große Teile. Teile 324 durch 4.",
          "Rechne zuerst 324 : 4. Das Ergebnis ist die kleine Menge. Nimm diese Zahl dann 3-mal.",
        ],
        steps: [
          "Zusammen: 3 Teile + 1 Teil = 4 Teile.",
          "Ein Teil: 324 : 4 = 81.",
          "Kinderkarten: 81 × 3 = 243.",
          "Probe: 243 + 81 = 324.",
        ],
      },
      {
        title: "Stifte für die Klasse",
        icon: "✏️",
        kind: "difference",
        total: 138,
        difference: 26,
        text: "In zwei Schachteln liegen zusammen <strong>138 rote und blaue Stifte</strong>. Es gibt <strong>26 rote Stifte mehr als blaue Stifte</strong>. Wie viele sind es von jeder Farbe?",
        fields: [
          { label: "Rote Stifte", answer: 82, unit: "" },
          { label: "Blaue Stifte", answer: 56, unit: "" },
        ],
        hints: [
          "Eine Menge ist um 26 größer. Zeichne zwei Balken: einen kurzen und einen längeren.",
          "Nimm den Unterschied 26 zuerst von der Gesamtzahl 138 weg. Der Rest besteht aus zwei gleich großen Mengen.",
          "Rechne (138 − 26) : 2. So findest du die kleine Menge. Addiere dann 26 für die große Menge.",
        ],
        steps: [
          "Unterschied wegnehmen: 138 − 26 = 112.",
          "Kleine Menge: 112 : 2 = 56.",
          "Große Menge: 56 + 26 = 82.",
          "Probe: 82 + 56 = 138; 82 − 56 = 26.",
        ],
      },
      {
        title: "Pflanzen im Schulgarten",
        icon: "🌱",
        kind: "difference",
        total: 128,
        difference: 18,
        text: "Im Schulgarten wachsen zusammen <strong>128 große und kleine Pflanzen</strong>. Es gibt <strong>18 kleine Pflanzen weniger als große Pflanzen</strong>. Wie viele sind es von jeder Größe?",
        fields: [
          { label: "Große Pflanzen", answer: 73, unit: "" },
          { label: "Kleine Pflanzen", answer: 55, unit: "" },
        ],
        hints: [
          "Eine Menge ist um 18 größer. Zeichne zwei Balken: einen kurzen und einen längeren.",
          "Nimm den Unterschied 18 zuerst von der Gesamtzahl 128 weg. Der Rest besteht aus zwei gleich großen Mengen.",
          "Rechne (128 − 18) : 2. So findest du die kleine Menge. Addiere dann 18 für die große Menge.",
        ],
        steps: [
          "Unterschied wegnehmen: 128 − 18 = 110.",
          "Kleine Menge: 110 : 2 = 55.",
          "Große Menge: 55 + 18 = 73.",
          "Probe: 73 + 55 = 128; 73 − 55 = 18.",
        ],
      },
      {
        title: "Geld für einen Ausflug",
        icon: "🚌",
        kind: "difference",
        total: 186,
        difference: 42,
        text: "Zwei Klassen haben zusammen <strong>186 €</strong> für einen Ausflug gesammelt. Die Klasse 4a hat <strong>42 € mehr als die Klasse 4b</strong> gesammelt. Wie viel Geld hat jede Klasse?",
        fields: [
          { label: "Klasse 4a", answer: 114, unit: "€" },
          { label: "Klasse 4b", answer: 72, unit: "€" },
        ],
        hints: [
          "Eine Menge ist um 42 größer. Zeichne zwei Balken: einen kurzen und einen längeren.",
          "Nimm den Unterschied 42 zuerst von der Gesamtzahl 186 weg. Der Rest besteht aus zwei gleich großen Mengen.",
          "Rechne (186 − 42) : 2. So findest du die kleine Menge. Addiere dann 42 für die große Menge.",
        ],
        steps: [
          "Unterschied wegnehmen: 186 − 42 = 144.",
          "Kleine Menge: 144 : 2 = 72.",
          "Große Menge: 72 + 42 = 114.",
          "Probe: 114 + 72 = 186; 114 − 72 = 42.",
        ],
      },
      {
        title: "Bälle in der Turnhalle",
        icon: "🏀",
        kind: "difference",
        total: 76,
        difference: 30,
        text: "In der Turnhalle liegen zusammen <strong>76 große und kleine Bälle</strong>. Es gibt <strong>30 kleine Bälle weniger als große Bälle</strong>. Wie viele sind es von jeder Größe?",
        fields: [
          { label: "Große Bälle", answer: 53, unit: "" },
          { label: "Kleine Bälle", answer: 23, unit: "" },
        ],
        hints: [
          "Eine Menge ist um 30 größer. Zeichne zwei Balken: einen kurzen und einen längeren.",
          "Nimm den Unterschied 30 zuerst von der Gesamtzahl 76 weg. Der Rest besteht aus zwei gleich großen Mengen.",
          "Rechne (76 − 30) : 2. So findest du die kleine Menge. Addiere dann 30 für die große Menge.",
        ],
        steps: [
          "Unterschied wegnehmen: 76 − 30 = 46.",
          "Kleine Menge: 46 : 2 = 23.",
          "Große Menge: 23 + 30 = 53.",
          "Probe: 53 + 23 = 76; 53 − 23 = 30.",
        ],
      },
      {
        title: "Obst für das Frühstück",
        icon: "🍎",
        kind: "difference",
        total: 214,
        difference: 46,
        text: "Für ein Schulfrühstück liegen zusammen <strong>214 Äpfel und Birnen</strong> bereit. Es gibt <strong>46 Äpfel mehr als Birnen</strong>. Wie viele Früchte sind es von jeder Art?",
        fields: [
          { label: "Äpfel", answer: 130, unit: "" },
          { label: "Birnen", answer: 84, unit: "" },
        ],
        hints: [
          "Eine Menge ist um 46 größer. Zeichne zwei Balken: einen kurzen und einen längeren.",
          "Nimm den Unterschied 46 zuerst von der Gesamtzahl 214 weg. Der Rest besteht aus zwei gleich großen Mengen.",
          "Rechne (214 − 46) : 2. So findest du die kleine Menge. Addiere dann 46 für die große Menge.",
        ],
        steps: [
          "Unterschied wegnehmen: 214 − 46 = 168.",
          "Kleine Menge: 168 : 2 = 84.",
          "Große Menge: 84 + 46 = 130.",
          "Probe: 130 + 84 = 214; 130 − 84 = 46.",
        ],
      },
      {
        title: "Knöpfe in der Bastelkiste",
        icon: "🔵",
        kind: "difference",
        total: 114,
        difference: 18,
        text: "In einer Bastelkiste liegen zusammen <strong>114 blaue und rote Knöpfe</strong>. Es gibt <strong>18 rote Knöpfe weniger als blaue Knöpfe</strong>. Wie viele sind es von jeder Farbe?",
        fields: [
          { label: "Blaue Knöpfe", answer: 66, unit: "" },
          { label: "Rote Knöpfe", answer: 48, unit: "" },
        ],
        hints: [
          "Eine Menge ist um 18 größer. Zeichne zwei Balken: einen kurzen und einen längeren.",
          "Nimm den Unterschied 18 zuerst von der Gesamtzahl 114 weg. Der Rest besteht aus zwei gleich großen Mengen.",
          "Rechne (114 − 18) : 2. So findest du die kleine Menge. Addiere dann 18 für die große Menge.",
        ],
        steps: [
          "Unterschied wegnehmen: 114 − 18 = 96.",
          "Kleine Menge: 96 : 2 = 48.",
          "Große Menge: 48 + 18 = 66.",
          "Probe: 66 + 48 = 114; 66 − 48 = 18.",
        ],
      },
    ],
    KEY = "lernwelt-hard-wordproblems-v1";
  let profile = Rewards.active(),
    index = -1,
    fields = [],
    finished = false,
    hintLevel = 0,
    filter = "all";
  const $ = (id) => document.getElementById(id),
    esc = (s) =>
      String(s ?? "").replace(
        /[&<>"']/g,
        (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c],
      );
  function read() {
    try {
      const v = JSON.parse(localStorage.getItem(KEY) || "{}");
      return v && typeof v === "object" && !Array.isArray(v) ? v : {};
    } catch {
      return {};
    }
  }
  function taskId(i) {
    return tasks[i]?.id ?? String(i);
  }
  function rewardId(i) {
    return "math-hard-" + taskId(i);
  }
  function result(i) {
    return read()[profile]?.[taskId(i)] || {};
  }
  function save(patch) {
    const all = read();
    if (!all[profile] || typeof all[profile] !== "object") all[profile] = {};
    all[profile][taskId(index)] = { ...result(index), ...patch };
    try {
      localStorage.setItem(KEY, JSON.stringify(all));
      return true;
    } catch {
      return false;
    }
  }
  function best(i) {
    try {
      return Math.max(
        0,
        Math.min(
          3,
          Number(
            JSON.parse(localStorage.getItem("lernwelt-extra-rewards") || "{}")[profile]?.[
              rewardId(i)
            ],
          ) || 0,
        ),
      );
    } catch {
      return 0;
    }
  }
  function wallet() {
    $("hard-wallet").innerHTML =
      Rewards.star(true, 25) + " " + Rewards.balance(profile) + " Sterne · Mein Avatar →";
    $("hard-profile").value = profile;
  }
  function top() {
    const n = $("hard-title") || $("hard-game");
    n.focus?.({ preventScroll: true });
    n.scrollIntoView?.({ block: "start", behavior: "instant" });
  }
  function completed(i) {
    return ["richtig", "loesung_gesehen"].includes(result(i).status) || best(i) > 0;
  }
  function home() {
    index = -1;
    const done = tasks.filter((_, i) => completed(i)).length,
      total = tasks.reduce((s, _, i) => s + best(i), 0);
    $("hard-game").innerHTML =
      '<h1 id="hard-title" tabindex="-1">Knifflige Sachaufgaben</h1><section class="task"><h2>Deine Aufgabe</h2><p><strong>Wähle eine Aufgabe.</strong> Lies genau. <strong>Zeichne eine Skizze</strong> auf Papier oder nutze die Skizzen-Hilfe. Rechne und trage beide Antworten ein.</p></section><p>Manchmal ist eine Menge doppelt oder dreimal so groß. Manchmal sind es einige Dinge mehr oder weniger. Finde heraus, wie die Mengen zusammenpassen.</p><p class="goal-progress"><strong>' +
      done +
      " von " +
      tasks.length +
      " Aufgaben bearbeitet · " +
      total +
      " von " +
      tasks.length * 3 +
      ' Sternen</strong><br>Bereits verdiente Sterne zählen beim Wiederholen nicht doppelt. Eine bessere Lösung kann dir weitere Sterne bringen.</p><div class="tools filters" aria-label="Aufgaben auswählen">' +
      [
        ["all", "Alle Aufgaben"],
        ["ratio", "Doppelt und mehr"],
        ["difference", "Mehr und weniger"],
      ]
        .map(
          ([key, label]) =>
            `<button aria-pressed="${filter === key}" onclick="HardTasks.setFilter('${key}')">${label}</button>`,
        )
        .join("") +
      '</div><div class="grid">' +
      tasks
        .map((t, i) => ({ t, i }))
        .filter(({ t }) => filter === "all" || filter === t.kind)
        .map(
          ({ t, i }) =>
            `<button class="mission" onclick="HardTasks.start(${i})"><span style="font-size:34px" aria-hidden="true">${t.icon}</span><small>Aufgabe ${i + 1} · ${t.kind === "ratio" ? "Doppelt und mehr" : "Mehr und weniger"}</small><strong>${esc(t.title)}</strong>${Rewards.stars(best(i))}<small>${completed(i) ? "✓ Schon bearbeitet" : "Bereit zum Knobeln"}</small><span class="start">Aufgabe öffnen →</span></button>`,
        )
        .join("") +
      "</div>";
    wallet();
    top();
  }
  function diagram(t) {
    const a = t.fields[0].label,
      b = t.fields[1].label;
    if (t.kind === "ratio")
      return `<p><strong>${esc(a)}</strong> besteht aus ${t.factor} gleich großen Teilen. <strong>${esc(b)}</strong> ist ein solcher Teil. Zusammen sind es ${t.total}.</p><div class="bar-row"><strong>${esc(a)}</strong><div class="bar-parts">${Array.from({ length: t.factor }, () => '<span class="bar-part">?</span>').join("")}</div></div><div class="bar-row"><strong>${esc(b)}</strong><div class="bar-parts" style="width:${100 / t.factor}%"><span class="bar-part">?</span></div></div><p class="small">Jedes Kästchen steht für gleich viel.</p>`;
    return `<p><strong>${esc(a)}</strong> ist um ${t.difference} größer als <strong>${esc(b)}</strong>. Zusammen sind es ${t.total}.</p><div class="bar-row"><strong>${esc(a)}</strong><div class="bar-parts"><span class="bar-part" style="flex:7">?</span><span class="bar-part extra" style="flex:3">+ ${t.difference}</span></div></div><div class="bar-row"><strong>${esc(b)}</strong><div class="bar-parts" style="width:70%"><span class="bar-part">?</span></div></div><p class="small">Die blauen Teile sind gleich groß. Gelb zeigt den Unterschied. Diese Skizze zeigt keine genauen Größen.</p>`;
  }
  function start(i) {
    if (!Number.isInteger(i) || i < 0 || i >= tasks.length) return;
    index = i;
    fields = tasks[i].fields.map(() => ({ value: "", tries: 0, state: "pending" }));
    finished = false;
    hintLevel = 0;
    const t = tasks[i];
    $("hard-game").innerHTML =
      `<p class="eyebrow">AUFGABE ${i + 1} VON ${tasks.length} · ${t.kind === "ratio" ? "DOPPELT UND MEHR" : "MEHR UND WENIGER"}</p><section class="task" id="hard-title" tabindex="-1"><h2>Deine Aufgabe</h2><p><strong>Lies den Text.</strong> <strong>Finde beide Mengen.</strong> Trage in jedes Feld eine Zahl ein. Tippe auf <strong>Prüfen</strong>.</p></section><div class="layout"><section><div class="card"><h1>${t.icon} ${esc(t.title)}</h1><p class="problem">${t.text}</p><div class="tools"><button id="diagram-button" aria-controls="hard-diagram" aria-expanded="false" onclick="HardTasks.toggleDiagram()">Skizzen-Hilfe öffnen</button><button id="hint-button" aria-controls="hard-hint" aria-expanded="false" onclick="HardTasks.toggleHint()">💡 Tipp</button></div><div id="hard-diagram" class="diagram" hidden>${diagram(t)}<button onclick="HardTasks.closeDiagram()">✕ Skizzen-Hilfe schließen</button></div><div id="hard-hint" class="hint" hidden></div></div><section class="card"><label class="note-label" for="hard-note">Mein Rechenweg · freiwillig</label><p class="small">Schreibe deine Rechnung hier auf oder nutze Papier. Diese Notiz wird nicht als richtig oder falsch bewertet.</p><textarea id="hard-note" rows="4" maxlength="1200" oninput="HardTasks.note(this.value)">${esc(result(i).note || "")}</textarea></section></section><section class="card"><h2>Meine Antworten</h2>${t.fields.map((f, j) => `<div class="field"><label for="hard-input-${j}">${esc(f.label)}</label><div class="input-line"><input id="hard-input-${j}" type="text" inputmode="numeric" maxlength="16" autocomplete="off" aria-describedby="hard-result-${j}">${f.unit ? "<span>" + esc(f.unit) + "</span>" : ""}</div><p id="hard-result-${j}" class="field-result" aria-live="polite"></p></div>`).join("")}<p class="small">Für jedes Feld hast du drei Versuche. Eine richtige Antwort bleibt stehen.</p><button id="hard-check" class="primary" onclick="HardTasks.check()">Prüfen ✓</button><div id="hard-feedback" class="feedback" role="status" aria-live="polite">Rechne in Ruhe. Eine leere Eingabe zählt nicht als Versuch.</div><div id="hard-reward"></div><section id="hard-solution" class="solution" hidden></section><button id="hard-next" class="primary forward" onclick="HardTasks.next()" disabled>Weiter →</button><p id="hard-next-note" class="small">Löse beide Felder. Danach kannst du weitergehen.</p></section></div>`;
    wallet();
    top();
  }
  function number(value) {
    const s = String(value ?? "").trim();
    return /^\d{1,6}$/.test(s) ? Number(s) : null;
  }
  function solution(t) {
    return (
      "<h2>So kannst du rechnen</h2><ol>" +
      t.steps.map((s) => "<li>" + esc(s) + "</li>").join("") +
      "</ol><p><strong>Antwort:</strong> " +
      t.fields
        .map((f) => esc(f.label) + ": " + f.answer + (f.unit ? " " + esc(f.unit) : ""))
        .join(" · ") +
      "</p>"
    );
  }
  function check() {
    if (finished || index < 0) return;
    const t = tasks[index];
    let attempted = false;
    for (let j = 0; j < fields.length; j++) {
      const f = fields[j];
      if (f.state !== "pending") continue;
      const input = $("hard-input-" + j),
        value = String(input.value || "").trim(),
        message = $("hard-result-" + j);
      if (!value) {
        message.className = "field-result";
        message.textContent = "Trage hier noch eine Zahl ein.";
        continue;
      }
      attempted = true;
      f.value = value;
      f.tries++;
      if (number(value) === t.fields[j].answer) {
        f.state = "correct";
        input.disabled = true;
        input.setAttribute("aria-invalid", "false");
        message.className = "field-result good";
        message.textContent = "✓ Richtig! " + f.tries + " von 3 Versuchen.";
      } else {
        input.setAttribute("aria-invalid", "true");
        message.className = "field-result bad";
        if (f.tries >= 3) {
          f.state = "revealed";
          input.disabled = true;
          message.textContent =
            "✗ Nach drei Versuchen: Die Lösung ist " +
            t.fields[j].answer +
            (t.fields[j].unit ? " " + t.fields[j].unit : "") +
            ".";
        } else
          message.textContent =
            "✗ Noch nicht richtig. Versuch " + f.tries + " von 3. Rechne noch einmal.";
      }
    }
    const done = fields.every((f) => f.state !== "pending"),
      revealed = fields.some((f) => f.state === "revealed"),
      pending = fields.filter((f) => f.state === "pending").length;
    const feedback = $("hard-feedback");
    let score = 0;
    if (done) {
      finished = true;
      score = revealed ? 0 : 4 - Math.max(...fields.map((f) => f.tries));
      if (score > 0) Rewards.extra(profile, rewardId(index), score);
      feedback.className = "feedback " + (revealed ? "bad" : "good");
      feedback.textContent = revealed
        ? "Du hast die Lösung gesehen. Schau dir den Rechenweg an. Danach kannst du weitergehen."
        : "✓ Beide Antworten sind richtig! Gut gerechnet.";
      $("hard-check").disabled = true;
      $("hard-next").disabled = false;
      $("hard-next-note").textContent =
        index === tasks.length - 1
          ? "Tippe auf „Weiter“ für die Übersicht."
          : "Tippe auf „Weiter“ für die nächste Aufgabe.";
      $("hard-reward").innerHTML =
        '<div class="card">' +
        Rewards.stars(score) +
        "<p>" +
        score +
        ' von 3 Sternen in diesem Versuch</p><p class="small">Dein bisher bester Stand: ' +
        best(index) +
        " von 3 Sternen.</p></div>";
    } else {
      feedback.className =
        "feedback " + (fields.some((f) => f.state === "pending" && f.tries > 0) ? "bad" : "");
      feedback.textContent = !attempted
        ? "Trage zuerst eine Zahl ein. Das zählt noch nicht als Versuch."
        : pending === 1
          ? "Ein Feld ist noch offen. Deine fertige Antwort bleibt stehen."
          : "Prüfe die Hinweise bei den Feldern. Du darfst noch einmal rechnen.";
    }
    if (done || revealed) {
      $("hard-solution").innerHTML = solution(t);
      $("hard-solution").hidden = false;
    }
    save({
      status: done ? (revealed ? "loesung_gesehen" : "richtig") : "in_bearbeitung",
      fields,
      stars: score,
    });
    wallet();
  }
  function toggleHint() {
    const h = $("hard-hint");
    if (!h.hidden) {
      closeHint();
      return;
    }
    const t = tasks[index],
      level = Math.min(t.hints.length - 1, Math.max(hintLevel, ...fields.map((f) => f.tries)));
    h.innerHTML =
      '<div class="hint-head"><strong>Dein nächster Schritt</strong><button onclick="HardTasks.closeHint()">✕ Tipp schließen</button></div><p>' +
      esc(t.hints[level]) +
      "</p>";
    hintLevel = level + 1;
    h.hidden = false;
    $("hint-button").setAttribute("aria-expanded", "true");
  }
  function closeHint() {
    $("hard-hint").hidden = true;
    $("hint-button").setAttribute("aria-expanded", "false");
    $("hint-button").focus?.();
  }
  function toggleDiagram() {
    const d = $("hard-diagram");
    d.hidden = !d.hidden;
    $("diagram-button").setAttribute("aria-expanded", String(!d.hidden));
    $("diagram-button").textContent = d.hidden ? "Skizzen-Hilfe öffnen" : "Skizzen-Hilfe schließen";
  }
  function closeDiagram() {
    $("hard-diagram").hidden = true;
    $("diagram-button").setAttribute("aria-expanded", "false");
    $("diagram-button").textContent = "Skizzen-Hilfe öffnen";
    $("diagram-button").focus?.();
  }
  function note(text) {
    if (index >= 0) save({ note: String(text).slice(0, 1200) });
  }
  function next() {
    if (!finished) return;
    if (index + 1 < tasks.length) start(index + 1);
    else home();
  }
  function changeProfile(p) {
    if (!/^(?:[1-9]|1[0-9]|20)$/.test(String(p))) return;
    Rewards.setActive(p);
    profile = Rewards.active();
    home();
  }
  function setFilter(value) {
    if (!["all", "ratio", "difference"].includes(value)) return;
    filter = value;
    home();
  }
  window.HardTasks = {
    home,
    start,
    check,
    next,
    toggleHint,
    closeHint,
    toggleDiagram,
    closeDiagram,
    note,
    changeProfile,
    setFilter,
  };
  $("hard-profile").innerHTML = Array.from(
    { length: 20 },
    (_, i) => '<option value="' + (i + 1) + '">Lernplatz ' + (i + 1) + "</option>",
  ).join("");
  home();
})();
