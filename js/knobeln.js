(function () {
  const puzzles = [
    {
      title: "Die Karten an der Kasse",
      icon: "🎟️",
      level: "Knobeln · Geld",
      sentences: [
        "Eine Kinderkarte kostet 3 €.",
        "Eine Erwachsenenkarte kostet 5 €.",
        "Fünf Personen kaufen je eine Karte.",
        "Zusammen bezahlen sie 19 €.",
      ],
      question: "Wie viele Kinder sind dabei?",
      options: ["1 Kind", "3 Kinder", "2 Kinder", "4 Kinder", "5 Kinder"],
      correct: 1,
      hints: [
        "Mache eine Tabelle. Probiere verschiedene Zahlen für die Kinder aus.",
        "Stell dir vor: Alle fünf Personen sind Erwachsene. Was kostet das? Eine Kinderkarte ist 2 € billiger.",
        "Fünf Erwachsenenkarten kosten 25 €. Es wurden aber 19 € bezahlt. Wie oft passen 2 € in den Unterschied?",
      ],
      plan: "Probiere Kinder und Erwachsene in einer Tabelle aus. Es müssen zusammen fünf Personen und 19 € sein.",
      explain:
        "Drei Kinder zahlen 3 × 3 € = 9 €. Zwei Erwachsene zahlen 2 × 5 € = 10 €. Zusammen sind es fünf Personen und 19 €. Also sind drei Kinder dabei.",
    },
    {
      title: "Die Schnecke auf dem Pfahl",
      icon: "🐌",
      level: "Knifflig · Schritt für Schritt",
      sentences: [
        "Eine Schnecke startet unten an einem 12 m hohen Pfahl.",
        "Am Tag klettert sie 3 m nach oben.",
        "In der Nacht rutscht sie 2 m zurück.",
        "Sobald sie oben ist, bleibt sie dort.",
      ],
      question: "An welchem Tag kommt die Schnecke oben an?",
      options: ["Am 8. Tag", "Am 9. Tag", "Am 11. Tag", "Am 12. Tag", "Am 10. Tag"],
      correct: 4,
      hints: [
        "Schreibe auf: Wo ist die Schnecke nach jedem Tag? Wo ist sie nach jeder Nacht?",
        "Nach einer Nacht ist sie insgesamt 1 m höher als am Morgen davor. Aber was passiert am letzten Tag?",
        "Nach neun Nächten ist sie bei 9 m. Am nächsten Tag klettert sie wieder 3 m hoch.",
      ],
      plan: "Male einen Pfahl. Zeichne die Wege am Tag und in der Nacht ein. Prüfe den letzten Tag extra.",
      explain:
        "Nach neun Nächten ist die Schnecke bei 9 m. Am 10. Tag klettert sie von 9 m bis 12 m. Sie ist oben und rutscht nicht mehr zurück. Die Antwort ist: am 10. Tag.",
    },
    {
      title: "Der Garten mit der fehlenden Ecke",
      icon: "🌿",
      level: "Knifflig · Formen",
      sentences: [
        "Ein Garten ist zuerst ein Rechteck: 4 m lang und 3 m breit.",
        "An einer Ecke fehlt ein Quadrat von 1 m mal 1 m.",
        "Ein Zaun soll genau am Rand des übrigen Gartens stehen.",
        "Ein Tor gibt es nicht.",
      ],
      question: "Wie viele Meter Zaun werden gebraucht?",
      options: ["14 m", "12 m", "13 m", "15 m", "16 m"],
      correct: 0,
      hints: [
        "Fahre den Rand mit dem Finger entlang. Ein kleines Kästchen im Bild ist 1 m breit.",
        "Zähle nur den äußeren Rand. Die Linien im Garten brauchen keinen Zaun.",
        "Die zwei Randstücke an der Ecke fallen weg. Dafür kommen zwei gleich lange Randstücke dazu.",
      ],
      plan: "Zeichne den Garten auf Kästchenpapier. Zähle die kurzen Stücke am Rand.",
      explain:
        "Gehe einmal außen herum: 3 + 1 + 1 + 2 + 4 + 3 = 14. Die fehlende Ecke macht den Rand nicht kürzer: Zwei Meter Rand fallen weg, zwei Meter kommen dazu. Es werden 14 m Zaun gebraucht.",
      diagram: "garden",
    },
    {
      title: "Die Kleidung mit einer Regel",
      icon: "👕",
      level: "Knifflig · Möglichkeiten",
      sentences: [
        "Mila hat drei T-Shirts: ein blaues, ein grünes und ein gelbes.",
        "Sie hat zwei Hosen: eine schwarze und eine weiße.",
        "Sie hat zwei Kappen: eine rote und eine graue.",
        "Sie wählt immer ein T-Shirt, eine Hose und eine Kappe.",
        "Zum blauen T-Shirt trägt sie nie die rote Kappe.",
      ],
      question: "Wie viele verschiedene Kombinationen kann Mila tragen?",
      options: ["8", "9", "11", "10", "12"],
      correct: 3,
      hints: [
        "Beginne mit einem T-Shirt. Welche Hosen und Kappen passen dazu?",
        "Ohne die Regel gäbe es 3 × 2 × 2 Möglichkeiten. Welche davon sind verboten?",
        "Blaues T-Shirt und rote Kappe geht mit keiner der beiden Hosen. Nimm diese zwei Möglichkeiten weg.",
      ],
      plan: "Mache für jedes T-Shirt eine Liste. Streiche die Möglichkeiten mit blauem T-Shirt und roter Kappe.",
      explain:
        "Zum grünen T-Shirt passen 2 × 2 = 4 Möglichkeiten. Zum gelben passen auch 4. Zum blauen passen nur die graue Kappe und zwei Hosen: 2 Möglichkeiten. Zusammen: 4 + 4 + 2 = 10.",
    },
    {
      title: "Der Zahlencode",
      icon: "🔐",
      level: "Sehr knifflig · Geordnet suchen",
      sentences: [
        "Ein Code besteht aus vier Ziffern.",
        "Die Ziffern sind 1, 2, 3 und 4. Jede kommt genau einmal vor.",
        "Die Zahl ist kleiner als 3000.",
        "Die Zahl ist gerade. Man kann sie ohne Rest durch 2 teilen.",
      ],
      question: "Wie viele Codes passen zu allen Regeln?",
      options: ["4", "8", "6", "10", "12"],
      correct: 2,
      hints: [
        "Welche Ziffer kann vorne stehen? Welche Ziffer kann hinten stehen?",
        "Vorne kann nur 1 oder 2 stehen. Hinten kann nur 2 oder 4 stehen. Jede Ziffer darf nur einmal vorkommen.",
        "Beginne mit 1. Suche erst alle passenden Zahlen. Beginne dann mit 2.",
      ],
      plan: "Schreibe die Codes geordnet auf. Prüfe bei jedem Code: vier verschiedene Ziffern, kleiner als 3000, gerade.",
      explain:
        "Mit 1 vorne passen: 1234, 1324, 1342 und 1432. Mit 2 vorne passen: 2134 und 2314. Das sind genau sechs Codes.",
    },
    {
      title: "Vier Kinder und eine Lampe",
      icon: "🔦",
      level: "Sehr knifflig · Wege planen",
      sentences: [
        "Vier Kinder wollen im Dunkeln über eine Brücke. Sie haben nur eine Lampe.",
        "Ein Kind oder zwei Kinder dürfen gleichzeitig über die Brücke gehen. Die Lampe muss immer mit.",
        "Ali braucht 1 Minute, Ben 3 Minuten, Cem 6 Minuten und Dana 8 Minuten.",
        "Gehen zwei zusammen, brauchen sie so lange wie das langsamere Kind.",
        "Die Lampe muss zurückgebracht werden, wenn noch Kinder auf der anderen Seite warten.",
      ],
      question: "Was ist die kürzeste Zeit, bis alle vier drüben sind?",
      options: ["16 Minuten", "18 Minuten", "17 Minuten", "19 Minuten", "20 Minuten"],
      correct: 1,
      hints: [
        "Schreibe jeden Weg auf: Wer geht hin? Wer bringt die Lampe zurück?",
        "Es muss nicht immer Ali die Lampe zurückbringen. Lohnt es sich, Cem und Dana zusammen gehen zu lassen?",
        "Schicke zuerst Ali und Ben hin. Ali kommt zurück. Dann gehen Cem und Dana zusammen. Wer kann nun die Lampe zurückbringen?",
      ],
      plan: "Male zwei Ufer. Lege vier Spielsteine für die Kinder und einen für die Lampe hin. Probiere mehrere Wege.",
      explain:
        "Ali und Ben gehen hin: 3 Minuten. Ali kommt zurück: 1 Minute. Cem und Dana gehen hin: 8 Minuten. Ben kommt zurück: 3 Minuten. Ali und Ben gehen hin: 3 Minuten. Zusammen: 3 + 1 + 8 + 3 + 3 = 18 Minuten. Das ist der schnellste Plan.",
    },
  ];
  let profile = Rewards.active(),
    index = 0,
    selected = null,
    tries = 0,
    done = false,
    marked = new Set(),
    hintLevel = 0;
  const $ = (id) => document.getElementById(id),
    esc = (s) =>
      String(s).replace(
        /[&<>"']/g,
        (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c],
      );
  function read(key) {
    try {
      return JSON.parse(localStorage.getItem(key) || "{}");
    } catch {
      return {};
    }
  }
  function best(i) {
    return Number(read("lernwelt-extra-rewards")[profile]?.["math-knobel-" + i]) || 0;
  }
  function work() {
    const all = read("lernwelt-knobel-work");
    return all[profile]?.[index] || { draft: "", status: "" };
  }
  function save(patch) {
    const all = read("lernwelt-knobel-work");
    all[profile] ??= {};
    all[profile][index] = { ...work(), ...patch };
    try {
      localStorage.setItem("lernwelt-knobel-work", JSON.stringify(all));
    } catch {}
  }
  function wallet() {
    $("wallet").innerHTML =
      Rewards.star(true, 28) + " " + Rewards.balance(profile) + " Sterne · Avatar →";
  }
  function top() {
    const go = () => {
      const n = $("task-title") || $("game");
      n.focus?.({ preventScroll: true });
      n.scrollIntoView?.({ block: "start", behavior: "instant" });
    };
    if (typeof requestAnimationFrame === "function") requestAnimationFrame(go);
    else go();
  }
  function home() {
    wallet();
    $("game").innerHTML =
      '<h1 tabindex="-1" id="task-title">Schon fertig? Knoble weiter!</h1><div class="task"><h2>Deine Aufgabe</h2><p><strong>Wähle ein Rätsel.</strong> Lies genau und probiere verschiedene Wege. <strong>LUFRA hilft dir.</strong> Du brauchst keine Stoppuhr.</p></div><p>Sechs Rätsel für schnelle Köpfe. Die letzten Aufgaben sind besonders schwer. Nimm dir ein Blatt zum Zeichnen und Rechnen.</p><div class="grid">' +
      puzzles
        .map(
          (q, i) =>
            `<button class="mission" onclick="Knobel.start(${i})"><span style="font-size:36px">${q.icon}</span><small>${esc(q.level)}</small><strong>${esc(q.title)}</strong>${Rewards.stars(best(i))}<small>${best(i) > 0 ? "✓ Selbst gelöst" : read("lernwelt-knobel-work")[profile]?.[i]?.status === "loesung_gesehen" ? "Lösung angesehen · Versuche es noch einmal" : "Bis zu 3 Sterne sammeln"}</small></button>`,
        )
        .join("") +
      "</div>";
    top();
  }
  function garden() {
    return '<svg class="garden" viewBox="0 0 330 260" role="img" aria-label="Garten auf einem Raster. Ein Kästchen ist 1 Meter breit. Vier Kästchen breit, drei hoch; oben rechts fehlt ein Kästchen."><defs><pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse" x="40" y="35"><path d="M60 0H0V60" fill="none" stroke="#90ad8d"/></pattern></defs><path d="M40 35H220V95H280V215H40Z" fill="#deedcf"/><path d="M40 35H220V95H280V215H40Z" fill="url(#grid)" stroke="#205f50" stroke-width="4"/><path d="M220 35H280V95" fill="none" stroke="#879783" stroke-dasharray="5 5"/><text x="160" y="244" text-anchor="middle">4 m</text><text x="19" y="135" text-anchor="middle" transform="rotate(-90 19 135)">3 m</text><text x="250" y="26" text-anchor="middle">1 m</text></svg>';
  }
  function start(i) {
    if (!Number.isInteger(i) || i < 0 || i >= puzzles.length) return;
    index = i;
    selected = null;
    tries = 0;
    done = false;
    marked = new Set();
    hintLevel = 0;
    const q = puzzles[index];
    $("game").innerHTML =
      `<p class="eyebrow">KNOBELAUFGABE ${index + 1} VON ${puzzles.length} · ${esc(q.level)}</p><section class="task" id="task-title" tabindex="-1"><h2>Deine Aufgabe</h2><p><strong>${esc(q.question)}</strong></p><p><strong>Lies</strong> den Text. <strong>Markiere wichtige Sätze.</strong> Rechne oder zeichne auf einem Blatt. <strong>Wähle eine Antwort</strong> und tippe auf <strong>Prüfen</strong>.</p></section><h1>${q.icon} ${esc(q.title)}</h1><div class="layout"><div><section class="card story"><h2>Dein Rätsel</h2><p class="small">Tippe auf wichtige Sätze. Tippe noch einmal, um die Markierung zu entfernen.</p>${q.sentences.map((s, j) => `<button id="sentence-${j}" aria-pressed="false" onclick="Knobel.mark(${j},this)">${esc(s)}</button>`).join("")}${q.diagram === "garden" ? garden() : ""}</section><details class="lufra"><summary>🧭 LUFRA · Hilfe in fünf Schritten</summary><ol><li><strong>L · Lesen:</strong> Lies den Text und die Frage noch einmal.</li><li><strong>U · Unterstreichen:</strong> Tippe auf die wichtigen Sätze. Markiere auch besondere Regeln.</li><li><strong>F · Fragen:</strong> Was suchst du? ${esc(q.question)}</li><li><strong>R · Rechnen:</strong> ${esc(q.plan)}</li><li><strong>A · Antworten:</strong> Prüfe: Passt dein Ergebnis zu allen Regeln? Sage einen ganzen Antwortsatz.</li></ol></details></div><section class="card"><h2>Wähle deine Antwort</h2><p>Genau <strong>eine Antwort</strong> ist richtig.</p><div class="answers">${q.options.map((o, j) => `<button data-answer="${j}" aria-pressed="false" onclick="Knobel.pick(${j})"><b>${"ABCDE"[j]}</b> ${esc(o)}</button>`).join("")}</div><div class="tools"><button class="primary" id="check" onclick="Knobel.check()">Prüfen ✓</button><button id="hint-button" aria-expanded="false" aria-controls="hint" onclick="Knobel.toggleHint()">💡 Tipp</button></div><div id="hint" class="hint" hidden></div><div id="feedback" class="feedback neutral" role="status" aria-live="polite">Du hast drei Versuche. Tipps kosten keine Sterne.</div><div id="reward"></div><button id="next" class="primary forward" onclick="Knobel.next()" disabled>Weiter →</button><p class="small" id="next-note">Prüfe zuerst deine Antwort. Danach kannst du weitergehen.</p><details><summary>✏️ Mein Denkweg · freiwillig</summary><p>Wie hast du die Lösung gefunden? Du kannst es hier aufschreiben.</p><textarea id="draft" maxlength="700" rows="4" oninput="Knobel.setDraft(this.value)">${esc(work().draft || "")}</textarea></details></section></div>`;
    wallet();
    top();
  }
  function setDraft(text) {
    save({ draft: String(text).slice(0, 700) });
  }
  function mark(j, button) {
    if (!Number.isInteger(j) || j < 0 || j >= puzzles[index].sentences.length) return;
    marked.has(j) ? marked.delete(j) : marked.add(j);
    button.classList.toggle("marked", marked.has(j));
    button.setAttribute("aria-pressed", marked.has(j));
  }
  function pick(j) {
    if (done || !Number.isInteger(j) || j < 0 || j > 4) return;
    selected = j;
    document.querySelectorAll("[data-answer]").forEach((b) => {
      const yes = Number(b.dataset.answer) === j;
      b.classList.toggle("picked", yes);
      b.setAttribute("aria-pressed", yes);
    });
  }
  function closeHint() {
    $("hint").hidden = true;
    $("hint-button").setAttribute("aria-expanded", "false");
  }
  function toggleHint() {
    if (!$("hint").hidden) {
      closeHint();
      return;
    }
    const q = puzzles[index];
    hintLevel = Math.max(hintLevel, tries);
    $("hint").innerHTML =
      '<div class="hint-head"><strong>Dein nächster Schritt</strong><button onclick="Knobel.closeHint()">✕ Tipp schließen</button></div><p>' +
      esc(q.hints[Math.min(hintLevel, 2)]) +
      "</p>";
    hintLevel++;
    $("hint").hidden = false;
    $("hint-button").setAttribute("aria-expanded", "true");
  }
  function check() {
    if (done) return;
    const q = puzzles[index],
      f = $("feedback");
    if (selected === null) {
      f.textContent = "Wähle zuerst eine Antwort. Das zählt noch nicht als Versuch.";
      return;
    }
    tries++;
    const correct = selected === q.correct;
    let stars = 0,
      status = "in_bearbeitung";
    if (correct) {
      done = true;
      stars = 4 - tries;
      status = "richtig";
      Rewards.extra(profile, "math-knobel-" + index, stars);
      f.className = "feedback good";
      f.innerHTML = "<strong>✓ Richtig!</strong><p>" + esc(q.explain) + "</p>";
    } else if (tries < 3) {
      f.className = "feedback bad";
      f.textContent =
        "✗ Das stimmt noch nicht. Versuch " +
        tries +
        " von 3. Ändere deine Antwort oder nutze einen Tipp.";
    } else {
      done = true;
      status = "loesung_gesehen";
      f.className = "feedback bad";
      f.innerHTML =
        "<strong>Die richtige Antwort ist: " +
        esc(q.options[q.correct]) +
        ".</strong><p>" +
        esc(q.explain) +
        "</p><p>Versuche das Rätsel später noch einmal.</p>";
    }
    if (done) {
      $("check").disabled = true;
      $("next").disabled = false;
      $("next").textContent = index === puzzles.length - 1 ? "Zur Knobelübersicht →" : "Weiter →";
      $("next-note").textContent = "Dieses Rätsel ist fertig. Tippe auf „Weiter“.";
      document.querySelectorAll("[data-answer]").forEach((b) => {
        b.disabled = true;
        b.classList.toggle("correct", Number(b.dataset.answer) === q.correct);
      });
      $("reward").innerHTML =
        '<div class="card">' +
        Rewards.stars(stars) +
        "<p>" +
        stars +
        " von 3 Sternen in diesem Versuch</p></div>";
      wallet();
    }
    save({ status });
  }
  function next() {
    if (!done) return;
    if (index < puzzles.length - 1) start(index + 1);
    else home();
  }
  function changeProfile(v) {
    if (!/^(?:[1-9]|1[0-9]|20)$/.test(v)) return;
    profile = v;
    Rewards.setActive(v);
    home();
  }
  $("profile").innerHTML = Array.from(
    { length: 20 },
    (_, i) => `<option value="${i + 1}">Lernplatz ${i + 1}</option>`,
  ).join("");
  $("profile").value = profile;
  window.Knobel = {
    home,
    start,
    pick,
    mark,
    check,
    next,
    toggleHint,
    closeHint,
    changeProfile,
    setDraft,
  };
  home();
})();
