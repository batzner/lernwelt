(function () {
  let calculationAttempts = [],
    calculationState = [];
  function checkCalculation() {
    if (done || phase !== "question") return;
    const q = question(),
      feedback = document.getElementById("feedback");
    if (!q.fields) return;
    if (calculationAttempts.length !== q.fields.length) {
      calculationAttempts = q.fields.map(() => 0);
      calculationState = q.fields.map(() => null);
    }
    const results = numericAnswers(q);
    let checked = 0;
    for (let i = 0; i < q.fields.length; i++) {
      if (calculationState[i]) continue;
      const input = document.getElementById("answer-" + i),
        note = document.getElementById("result-" + i),
        field = q.fields[i];
      if (!input.value.trim()) {
        note.textContent =
          "Trage hier noch ein Ergebnis ein. Leere Felder zählen nicht als Versuch.";
        continue;
      }
      checked++;
      calculationAttempts[i]++;
      if (results[i]) {
        calculationState[i] = "correct";
        input.disabled = true;
        input.setAttribute("aria-invalid", "false");
        note.textContent = "✓ Richtig! Dein Ergebnis bleibt stehen.";
      } else if (calculationAttempts[i] < 3) {
        input.setAttribute("aria-invalid", "true");
        note.textContent =
          "Noch nicht richtig. Versuch " +
          calculationAttempts[i] +
          " von 3 · Du kannst noch " +
          (3 - calculationAttempts[i]) +
          "-mal rechnen.";
      } else {
        calculationState[i] = "revealed";
        input.disabled = true;
        input.setAttribute("aria-invalid", "true");
        note.textContent =
          "Nach 3 falschen Versuchen: " +
          field[3] +
          " = " +
          String(field[1]).replace(".", ",") +
          " " +
          field[2] +
          ". Vergleiche die Lösung mit deiner Eingabe.";
      }
    }
    if (calculationState.every(Boolean)) {
      done = true;
      const solved = calculationState.every((s) => s === "correct");
      if (solved) {
        roundCorrect++;
        const gain = reward(Math.max(1, 4 - Math.max(...calculationAttempts)));
        roundPoints += gain;
        feedback.textContent =
          "✓ Alle Rechenergebnisse stimmen! " +
          q.explain +
          (gain ? " +" + gain + " Lernpunkte." : " Dein Rekord bleibt erhalten.");
      } else
        feedback.textContent =
          "Hier ist der vollständige Rechenweg: " +
          q.explain +
          " Deine richtigen Ergebnisse und deine letzten Eingaben bleiben zum Vergleichen stehen.";
      finishButtons();
    } else {
      document.getElementById("check").textContent = "Ergebnisse erneut prüfen ✓";
      feedback.textContent = checked
        ? "Richtige Ergebnisse sind mit ✓ markiert. Rechne bei den roten Feldern noch einmal. Jedes Feld hat drei eigene Versuche."
        : "Trage ein Ergebnis ein. Leere Felder zählen nicht als Versuch.";
    }
  }

  let hintOpens = {};
  function adaptiveHint() {
    if (Feedback.closeIfOpen()) return;
    const q = question();
    let text;
    let key = missionIndex + "-" + qIndex + "-" + tries;
    let level = hintOpens[key] || 0;
    if (done) text = "Dieser Schritt ist fertig. Lies die Antwort. Tippe dann auf „Weiter“.";
    else if (q.fields) {
      let index = q.fields.findIndex((_, i) => !calculationState[i]);
      if (index < 0) index = 0;
      const f = q.fields[index];
      key += "-field-" + index;
      level = hintOpens[key] || 0;
      text =
        "Arbeite jetzt an „" +
        f[0] +
        "“. " +
        (level === 0
          ? "Welche Zahlen brauchst du jetzt? " + q.hint
          : "Für dieses Feld rechnest du: " + f[3] + ". Schreibe dazu: " + f[2] + ".");
      if (level > 1)
        text +=
          " Rechne auf einem Blatt. Schreibe jeden Schritt auf. Prüfe dann: Kann das Ergebnis stimmen?";
      document
        .querySelectorAll(".field")
        .forEach((node, i) => node.classList.toggle("show", i === index));
    } else {
      text = q.hint;
      if (qIndex === 1)
        text +=
          " Du hast bisher " +
          selected.size +
          " Stellen markiert. Prüfe jede Stelle: Brauche ich diese Zahl oder diese Information für die Rechnung?";
      else if (tries > 0 || level > 0)
        text += " Lies die Frage am Ende noch einmal. Passt deine Antwort dazu?";
    }
    hintOpens[key] = level + 1;
    Feedback.showHint(text);
  }

  function stats() {
    baseStats();
    Feedback.avatarMini(profile);
  }
  function check() {
    const before = done;
    const wallet = Rewards.earned(String(profile));
    evaluate();
    const f = document.getElementById("feedback");
    let good = done && f.textContent.startsWith("✓");
    let attempted = tries > 0;
    if (question().fields) {
      attempted = calculationAttempts.some((n) => n > 0);
      good =
        calculationState.some((s) => s === "correct") &&
        !calculationState.some((s, i) => s === "revealed" || (!s && calculationAttempts[i] > 0));
    }
    if (good && !done)
      f.textContent = "✓ Dieses Teilergebnis stimmt! Rechne jetzt im nächsten offenen Feld weiter.";
    Feedback.style("feedback", good ? "success" : attempted ? "error" : "neutral");
    if (!before && done) {
      const n = f.textContent.startsWith("✓")
        ? question().fields
          ? Math.max(1, 4 - Math.max(...calculationAttempts))
          : Math.max(1, 4 - tries)
        : 0;
      Feedback.taskReward(profile, n, Math.max(0, Rewards.earned(String(profile)) - wallet));
    }
  }

  const config = {
    id: "lufra-klasse-vier",
    title: "LUFRA · Mathemissionen",
    icon: "🧭",
    eyebrow: "MATHEMATIK · KLASSE 4",
    headline: "Große Aufgaben.<br>Fünf klare Schritte.",
    intro:
      "Lesen. Unterstreichen. Fragen. Rechnen. Antworten.<br>Knacke Sachaufgaben und sammle deine Sterne.",
    home: "Sechs Sachaufgaben aus deinem Alltag. LUFRA begleitet dich vom Text bis zum Antwortsatz.",
    accent: "#205f50",
    soft: "#e3eee5",
    teacher:
      "Mathematik 3/4, 1.3: Sachsituationen und Mathematik in Beziehung setzen. Die Aufgaben trainieren das Entnehmen relevanter Angaben, mehrschrittige Rechenwege, Geld, Zeit und Strecken. LUFRA dient hier als Lösungsstrategie.",
    source: "https://www.lehrplanplus.bayern.de/fachlehrplan/grundschule/4/mathematik",
  };

  const missions = [
    {
      title: "Ausflug ins Museum",
      icon: "🚌",
      tag: "Geld · 2 Rechenschritte",
      chunks: [
        "19 Kinder besuchen ein Museum.",
        "Der Eintritt kostet pro Kind 4 €.",
        "Die Klasse bezahlt zusätzlich insgesamt 76 € für den Bus.",
        "Der Bus fährt um 8 Uhr ab.",
        "Wie viel kosten Eintritt und Bus zusammen?",
      ],
      questions: [
        {
          prompt: "Worum geht es in dieser Aufgabe?",
          type: "single",
          options: [
            "Um die gesamten Kosten des Ausflugs.",
            "Um die Dauer der Busfahrt.",
            "Um die Größe des Museums.",
          ],
          correct: [0],
          hint: "Achte auf den letzten Satz.",
          explain: "Gesucht sind die Kosten für Eintritt und Bus.",
        },
        {
          prompt: "Unterstreiche im Text alle Angaben, die du für die Rechnung brauchst.",
          type: "multi",
          options: [],
          correct: [0, 1, 2],
          hint: "Wie viele Kinder fahren mit? Was kostet der Eintritt für ein Kind? Was kostet der Bus?",
          explain:
            "19 Kinder, 4 € je Kind und insgesamt 76 € für den Bus sind wichtig. Die Abfahrtszeit wird nicht gebraucht.",
        },
        {
          prompt: "Welche Zwischenfrage hilft dir zuerst?",
          type: "single",
          options: [
            "Wie alt sind die Kinder?",
            "Was kostet der Eintritt für alle Kinder?",
            "Wann kommt der Bus an?",
          ],
          correct: [1],
          hint: "Was kostet der Eintritt für alle Kinder zusammen?",
          explain: "Berechne zuerst den Eintritt für 19 Kinder und addiere dann den Buspreis.",
        },
        {
          prompt: "Rechne Schritt für Schritt. Trage die Ergebnisse ein.",
          type: "number",
          fields: [
            ["Eintritt für alle Kinder", 76, "€", "19 × 4"],
            ["Eintritt und Bus zusammen", 152, "€", "76 + 76"],
          ],
          hint: "Rechne 19 × 4. Rechne danach 76 € dazu.",
          explain: "19 × 4 € = 76 €. Dann: 76 € + 76 € = 152 €.",
        },
        {
          prompt: "Wähle den passenden Antwortsatz.",
          type: "single",
          options: [
            "Der Ausflug dauert 152 Minuten.",
            "Der Eintritt kostet insgesamt 152 €.",
            "Eintritt und Bus kosten zusammen 152 €.",
          ],
          correct: [2],
          hint: "Nenne die Kosten für Eintritt und Bus zusammen. Schreibe auch € dazu.",
          explain: "Eintritt und Bus kosten zusammen 152 €.",
        },
      ],
    },
    {
      title: "Sparen fürs Fahrrad",
      icon: "🚲",
      tag: "Geld · 2 Rechenschritte",
      chunks: [
        "Lena hat bereits 85 € gespart.",
        "Ein Fahrrad kostet 149 €.",
        "Sie spart jede Woche 8 €.",
        "Das Fahrrad hat zwei Räder.",
        "Nach wie vielen Wochen hat Lena genug Geld?",
      ],
      questions: [
        {
          prompt: "Was möchte Lena herausfinden?",
          type: "single",
          options: [
            "Wie viele Räder das Fahrrad hat.",
            "Wie viele Wochen sie noch sparen muss.",
            "Wie viel sie jeden Tag verdient.",
          ],
          correct: [1],
          hint: "Lies die Frage am Ende.",
          explain: "Gesucht ist die Anzahl der Wochen bis zum Kauf.",
        },
        {
          prompt: "Unterstreiche die Angaben für die Rechnung.",
          type: "multi",
          options: [],
          correct: [0, 1, 2],
          hint: "Welche Zahlen mit € brauchst du?",
          explain: "Du brauchst 85 € Erspartes, den Preis von 149 € und die 8 € pro Woche.",
        },
        {
          prompt: "Was solltest du zuerst berechnen?",
          type: "single",
          options: [
            "Wie viel Geld noch fehlt.",
            "Wie schnell Lena fährt.",
            "Wie viel zwei Fahrräder kosten.",
          ],
          correct: [0],
          hint: "Rechne: Preis für das Fahrrad minus das Geld, das Lena schon hat.",
          explain: "Erst fehlendes Geld berechnen, dann durch die wöchentliche Sparsumme teilen.",
        },
        {
          prompt: "Rechne Schritt für Schritt. Trage die Ergebnisse ein.",
          type: "number",
          fields: [
            ["Geld, das noch fehlt", 64, "€", "149 − 85"],
            ["Benötigte Wochen", 8, "Wochen", "64 : 8"],
          ],
          hint: "Rechne zuerst 149 − 85. So viel Geld fehlt noch. Teile das Ergebnis dann durch 8.",
          explain: "149 € − 85 € = 64 €. 64 € : 8 € pro Woche = 8 Wochen.",
        },
        {
          prompt: "Welche Antwort stimmt?",
          type: "single",
          options: [
            "Lena muss noch 64 Wochen sparen.",
            "Lena muss noch 8 Wochen sparen.",
            "Lena muss noch 8 € sparen.",
          ],
          correct: [1],
          hint: "Die Frage beginnt mit „Nach wie vielen Wochen …?“",
          explain: "Nach 8 Wochen hat Lena genau 149 € und kann das Fahrrad kaufen.",
        },
      ],
    },
    {
      title: "Der Wandertag",
      icon: "🥾",
      tag: "Strecken · 3 Rechenschritte",
      chunks: [
        "Eine Klasse wandert 2400 m bis zum Waldspielplatz.",
        "Danach geht sie noch 1600 m zum Aussichtspunkt.",
        "Zurück zur Schule nimmt sie denselben Weg.",
        "Die Klasse macht eine 20 Minuten lange Pause.",
        "Wie viele Kilometer legt sie insgesamt zurück?",
      ],
      questions: [
        {
          prompt: "Was ist gesucht?",
          type: "single",
          options: [
            "Nur die Länge des Hinwegs.",
            "Die Dauer der Pause.",
            "Die gesamte Strecke in Kilometern.",
          ],
          correct: [2],
          hint: "„Insgesamt“ meint Hinweg und Rückweg.",
          explain: "Gesucht ist die gesamte Hin- und Rückstrecke, umgerechnet in Kilometer.",
        },
        {
          prompt: "Unterstreiche alle Angaben zur gesuchten Strecke.",
          type: "multi",
          options: [],
          correct: [0, 1, 2],
          hint: "Auch der Satz zum Rückweg ist wichtig.",
          explain:
            "2400 m, 1600 m und derselbe Rückweg bestimmen die Gesamtstrecke. Die Pausenzeit brauchst du nicht.",
        },
        {
          prompt: "Welche Reihenfolge passt?",
          type: "single",
          options: [
            "Pausenzeit verdoppeln und Meter addieren.",
            "Hinweg addieren, verdoppeln, in Kilometer umrechnen.",
            "Hinweg durch zwei teilen.",
          ],
          correct: [1],
          hint: "Der Rückweg ist genauso lang wie der Hinweg.",
          explain:
            "Erst beide Teilstrecken addieren. Dann den Hinweg verdoppeln und Meter in Kilometer umrechnen.",
        },
        {
          prompt: "Rechne Schritt für Schritt. Trage die Ergebnisse ein.",
          type: "number",
          fields: [
            ["Hinweg bis zum Aussichtspunkt", 4000, "m", "2400 + 1600"],
            ["Gesamter Hin- und Rückweg", 8000, "m", "4000 × 2"],
            ["Gesamte Strecke in Kilometern", 8, "km", "8000 : 1000"],
          ],
          hint: "1000 m sind 1 km.",
          explain: "2400 m + 1600 m = 4000 m. Zweimal 4000 m = 8000 m = 8 km.",
        },
        {
          prompt: "Welcher Antwortsatz passt?",
          type: "single",
          options: [
            "Die Klasse geht insgesamt 8 km.",
            "Die Klasse geht insgesamt 4 km.",
            "Die Klasse geht insgesamt 8 m.",
          ],
          correct: [0],
          hint: "Zähle auch den Rückweg dazu. Schreibe km hinter die Zahl.",
          explain: "Die Klasse legt insgesamt 8 km zurück.",
        },
      ],
    },
    {
      title: "Schwimmen am Nachmittag",
      icon: "🏊",
      tag: "Zeit · 2 Rechenschritte",
      chunks: [
        "Das Schwimmtraining beginnt um 14:35 Uhr.",
        "Das Training dauert 50 Minuten.",
        "Danach braucht Amir noch 15 Minuten zum Umziehen.",
        "Sein Handtuch ist blau.",
        "Um wie viel Uhr ist Amir fertig?",
      ],
      questions: [
        {
          prompt: "Was sollst du herausfinden?",
          type: "single",
          options: [
            "Wann Amir nach Training und Umziehen fertig ist.",
            "Welche Farbe sein Handtuch hat.",
            "Wie teuer das Schwimmbad ist.",
          ],
          correct: [0],
          hint: "Die Umziehzeit gehört dazu.",
          explain: "Gesucht ist die Uhrzeit nach dem Training und dem Umziehen.",
        },
        {
          prompt: "Unterstreiche die wichtigen Zeitangaben.",
          type: "multi",
          options: [],
          correct: [0, 1, 2],
          hint: "Wann beginnt das Training? Wie lange dauert es? Wie lange dauert das Umziehen?",
          explain: "14:35 Uhr, 50 Minuten Training und 15 Minuten Umziehen sind wichtig.",
        },
        {
          prompt: "Wie kannst du vorgehen?",
          type: "single",
          options: [
            "50 − 15 rechnen.",
            "50 Minuten zur Startzeit addieren, dann noch 15 Minuten.",
            "Die Stunden und Minuten miteinander multiplizieren.",
          ],
          correct: [1],
          hint: "Rechne zuerst bis 15:00 Uhr. Rechne dann die übrigen Minuten dazu.",
          explain:
            "Von 14:35 Uhr führen 50 Minuten zu 15:25 Uhr. Danach kommen noch 15 Minuten hinzu.",
        },
        {
          prompt: "Trage die Uhrzeiten ein, zum Beispiel 15:25.",
          type: "time",
          fields: [
            ["Ende des Trainings", "15:25", "Uhr", "14:35 + 50 Minuten"],
            ["Fertig nach dem Umziehen", "15:40", "Uhr", "15:25 + 15 Minuten"],
          ],
          hint: "Von 14:35 bis 15:00 sind es 25 Minuten. Danach fehlen noch 25 Minuten Training.",
          explain: "14:35 Uhr + 50 Minuten = 15:25 Uhr. Weitere 15 Minuten führen zu 15:40 Uhr.",
        },
        {
          prompt: "Welche Antwort passt?",
          type: "single",
          options: [
            "Amir ist um 14:50 Uhr fertig.",
            "Amir ist um 15:25 Uhr fertig.",
            "Amir ist um 15:40 Uhr fertig.",
          ],
          correct: [2],
          hint: "Er ist erst nach dem Umziehen fertig.",
          explain: "Amir ist um 15:40 Uhr fertig.",
        },
      ],
    },
    {
      title: "Einkaufen fürs Klassenfest",
      icon: "🍎",
      tag: "Geld · 3 Rechenschritte",
      chunks: [
        "Für das Klassenfest werden 6 Flaschen Saft gekauft.",
        "Jede Flasche kostet 1,80 €. Pfand fällt nicht an.",
        "Dazu kommt eine Obstkiste für 12,50 €.",
        "Die Lehrerin bezahlt mit einem 50-€-Schein.",
        "Das Fest beginnt am Freitag.",
        "Wie viel Rückgeld bekommt sie?",
      ],
      questions: [
        {
          prompt: "Worum geht es bei der Frage?",
          type: "single",
          options: [
            "Um die Anzahl der Freitage.",
            "Um das Rückgeld beim Bezahlen.",
            "Um den Preis einer einzelnen Flasche.",
          ],
          correct: [1],
          hint: "Rückgeld ist das Geld, das du an der Kasse zurückbekommst.",
          explain: "Gesucht ist, wie viel von den 50 € nach dem Einkauf übrig bleibt.",
        },
        {
          prompt: "Unterstreiche alle Angaben für die Rechnung.",
          type: "multi",
          options: [],
          correct: [0, 1, 2, 3],
          hint: "Wie viele Flaschen sind es? Was kosten die Sachen? Mit wie viel Geld wird bezahlt?",
          explain:
            "Du brauchst 6 Flaschen, 1,80 € je Flasche, 12,50 € für die Obstkiste und den 50-€-Schein.",
        },
        {
          prompt: "Welcher Rechenplan passt?",
          type: "single",
          options: [
            "50 € + 12,50 € + 1,80 €.",
            "50 € − 6 €.",
            "6 × 1,80 €, dann 12,50 € dazu, dann von 50 € abziehen.",
          ],
          correct: [2],
          hint: "Was kostet alles zusammen? Rechne dann aus, wie viel Geld zurückkommt.",
          explain: "Berechne den Saftpreis und den Gesamtpreis. Ziehe den Gesamtpreis von 50 € ab.",
        },
        {
          prompt: "Rechne Schritt für Schritt. Trage die Ergebnisse ein.",
          type: "number",
          fields: [
            ["Kosten des Safts", 10.8, "€", "6 × 1,80"],
            ["Gesamter Einkauf", 23.3, "€", "10,80 + 12,50"],
            ["Rückgeld", 26.7, "€", "50 − 23,30"],
          ],
          hint: "Du kannst auch in Cent rechnen: 6 × 180 Cent.",
          explain: "6 × 1,80 € = 10,80 €. Zusammen 23,30 €. Rückgeld: 50 € − 23,30 € = 26,70 €.",
        },
        {
          prompt: "Welcher Antwortsatz ist richtig?",
          type: "single",
          options: [
            "Die Lehrerin bekommt 23,30 € zurück.",
            "Die Lehrerin bekommt 26,70 € zurück.",
            "Die Lehrerin bekommt 10,80 € zurück.",
          ],
          correct: [1],
          hint: "23,30 € sind die Kosten, nicht das Rückgeld.",
          explain: "Die Lehrerin bekommt 26,70 € Rückgeld.",
        },
      ],
    },
    {
      title: "Bücher für die Leseecke",
      icon: "📚",
      tag: "Mengen · Knobelmission",
      chunks: [
        "Die Schule bekommt 8 Kisten mit jeweils 24 Büchern.",
        "36 Bücher davon kommen in die Schulbücherei.",
        "Die übrigen Bücher werden gleichmäßig auf 6 Klassen verteilt.",
        "Alle Bücher haben bunte Umschläge.",
        "Wie viele Bücher bekommt jede Klasse?",
      ],
      questions: [
        {
          prompt: "Was möchtest du berechnen?",
          type: "single",
          options: [
            "Die Bücherzahl für jede Klasse.",
            "Die Farbe der Umschläge.",
            "Die Anzahl der Seiten in jedem Buch.",
          ],
          correct: [0],
          hint: "Wie viele Bücher bekommt eine Klasse?",
          explain: "Du suchst, wie viele Bücher jede der sechs Klassen erhält.",
        },
        {
          prompt: "Unterstreiche alle nötigen Mengenangaben.",
          type: "multi",
          options: [],
          correct: [0, 1, 2],
          hint: "Beachte auch die Bücher, die vorher weggelegt werden.",
          explain:
            "8 Kisten mit je 24 Büchern, 36 Bücher für die Bücherei und 6 Klassen bestimmen das Ergebnis.",
        },
        {
          prompt: "Was ist der richtige Rechenplan?",
          type: "single",
          options: [
            "24 : 8, dann 36 addieren.",
            "8 × 24, dann 36 abziehen, dann durch 6 teilen.",
            "8 × 24, dann mit 6 multiplizieren.",
          ],
          correct: [1],
          hint: "Nur die übrigen Bücher werden verteilt.",
          explain: "Berechne alle Bücher, ziehe 36 ab und verteile den Rest auf 6 Klassen.",
        },
        {
          prompt: "Rechne Schritt für Schritt. Trage die Ergebnisse ein.",
          type: "number",
          fields: [
            ["Bücher insgesamt", 192, "Bücher", "8 × 24"],
            ["Bücher zum Verteilen", 156, "Bücher", "192 − 36"],
            ["Bücher für jede Klasse", 26, "Bücher", "156 : 6"],
          ],
          hint: "Rechne zuerst 120 : 6. Rechne dann 36 : 6. Zähle beide Ergebnisse zusammen.",
          explain: "8 × 24 = 192. 192 − 36 = 156. 156 : 6 = 26.",
        },
        {
          prompt: "Welche Antwort stimmt?",
          type: "single",
          options: [
            "Jede Klasse bekommt 156 Bücher.",
            "Jede Klasse bekommt 32 Bücher.",
            "Jede Klasse bekommt 26 Bücher.",
          ],
          correct: [2],
          hint: "Die letzte Rechnung verteilt die Bücher auf die Klassen.",
          explain: "Jede Klasse bekommt 26 Bücher.",
        },
      ],
    },
  ];

  let profile = "1",
    progress = {},
    storageOK = true,
    missionIndex = 0,
    qIndex = 0,
    selected = new Set(),
    underlined = new Set(),
    done = false,
    tries = 0,
    phase = "home",
    roundCorrect = 0,
    roundPoints = 0;
  const game = document.getElementById("game"),
    storageKey = config.id + "-v1";
  function esc(v) {
    return String(v).replace(
      /[&<>"']/g,
      (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c],
    );
  }
  function load() {
    try {
      let obj = JSON.parse(localStorage.getItem(storageKey) || "{}");
      progress = obj && typeof obj === "object" && !Array.isArray(obj) ? obj : {};
    } catch {
      storageOK = false;
      progress = {};
    }
  }
  function mine() {
    if (
      !progress[profile] ||
      typeof progress[profile] !== "object" ||
      Array.isArray(progress[profile])
    )
      progress[profile] = {};
    return progress[profile];
  }
  function val(m, q) {
    const v = mine()[m + "-" + q];
    return Number.isInteger(v) && v >= 0 && v <= 3 ? v : 0;
  }
  function stars(m) {
    let sum = 0;
    for (let q = 0; q < 5; q++) {
      const v = val(m, q);
      if (!v) return 0;
      sum += v;
    }
    return sum >= 13 ? 3 : sum >= 10 ? 2 : 1;
  }
  function total() {
    let sum = 0;
    for (let m = 0; m < missions.length; m++) for (let q = 0; q < 5; q++) sum += val(m, q) * 5;
    return sum;
  }
  function allStars() {
    return missions.reduce((n, _, m) => n + stars(m), 0);
  }
  function baseStats() {
    document.getElementById("stats").innerHTML =
      `<div class="stat">Lernpunkte<b>✦ ${total()}</b></div><div class="stat">Für deinen Avatar<b class="reward-stat">${Rewards.star(true, 28)} ${Rewards.balance(String(profile))}</b></div><div class="stat">Dein Rang<b style="font-size:20px">${total() >= 360 ? "Missionsprofi" : total() >= 150 ? "Spürnase" : "Entdecker"}</b></div>`;
    document.getElementById("storage-note").textContent = storageOK
      ? "Fortschritt nur in diesem Browser: Nutze denselben Lernplatz auf demselben iPad. Auf einem anderen Gerät beginnt die Sammlung neu."
      : "Der Browser kann gerade nicht speichern. Dein Fortschritt bleibt nur bis zum Schließen der Seite erhalten.";
  }
  function save() {
    try {
      localStorage.setItem(storageKey, JSON.stringify(progress));
    } catch {
      storageOK = false;
    }
    stats();
  }
  function reward(v) {
    const old = val(missionIndex, qIndex);
    if (v <= old) return 0;
    mine()[missionIndex + "-" + qIndex] = v;
    save();
    return (v - old) * 5;
  }
  function stopAudio() {
    Voice.stop();
  }
  function changeProfile(v) {
    Rewards.setActive(v);
    if (!/^(?:[1-9]|1[0-9]|20)$/.test(v)) return;
    profile = v;
    home();
  }
  function missionProgress(index) {
    let solved = 0;
    const icons = Array.from({ length: 5 }, (_, q) => {
      const on = val(index, q) > 0;
      if (on) solved++;
      return Rewards.star(on, 38);
    }).join("");
    return `<span class="mission-progress" role="img" aria-label="${solved} von 5 Aufgaben richtig gelöst"><span class="progress-stars" aria-hidden="true">${icons}</span><span class="progress-track" aria-hidden="true"><i style="width:${solved * 20}%"></i></span><span class="progress-label">${solved === 5 ? "✓ Alle Aufgaben gelöst" : solved + " von 5 Aufgaben gelöst"}</span></span>`;
  }
  function homeBeforeTask() {
    stopAudio();
    phase = "home";
    stats();
    game.innerHTML = `<h2>Wähle deine Mission</h2><p>${config.home}</p><a class="knobel-link" href="knobeln.html"><strong>💡 Schon fertig? Komm auf die Knobelinsel!</strong>Sechs neue Rätsel · Fünf Antworten · LUFRA hilft dir →</a><div class="missions">${missions
      .map((m, i) => {
        let solved = 0;
        for (let q = 0; q < 5; q++) if (val(i, q)) solved++;
        return `<button class="mission" onclick="learningApp.startMission(${i})"><span class="icon">${m.icon}</span><span class="small">MISSION ${i + 1} · ${esc(m.tag)}</span><strong>${esc(m.title)}</strong>${missionProgress(i)}</button>`;
      })
      .join(
        "",
      )}</div><div class="hint"><b>Deine Sammlung:</b> 15 Punkte beim ersten richtigen Versuch, 10 beim zweiten, 5 beim dritten. Wenn du alle fünf ${"Schritte"} einer Mission selbst gelöst hast, bekommst du 1 bis 3 Sterne. Tipps kosten keine Punkte. Wiederholen kann deinen Rekord verbessern. Bereits verdiente Punkte zählen nicht doppelt.</div>${allStars() >= 6 ? '<span class="badge">🏅 Sechs Sterne gesammelt!</span>' : ""}${allStars() === 18 ? '<span class="badge">🏆 Alle Missionen gemeistert!</span>' : ""}`;
  }
  function startMission(i) {
    if (!Number.isInteger(i) || i < 0 || i >= missions.length) return;
    stopAudio();
    missionIndex = i;
    qIndex = 0;
    selected = new Set();
    underlined = new Set();
    done = false;
    tries = 0;
    roundCorrect = 0;
    roundPoints = 0;
    phase = "question";
    render();
  }
  function current() {
    return missions[missionIndex];
  }
  function question() {
    return current().questions[qIndex];
  }

  let taskWasVisited = false;
  function taskInstruction() {
    if (phase === "home")
      return "<strong>Wähle eine Mission.</strong> Tippe auf den Text oder die Matheaufgabe, die du üben möchtest.";
    if (phase === "finish")
      return "<strong>Schau dir deine Sterne an.</strong> Tippe auf <strong>Weiter zur Lernübersicht</strong>. Dort kannst du eine neue Mission wählen.";
    const q = question();
    const title = '<span class="task-question">' + esc(q.prompt) + "</span> ";
    if (qIndex === 1)
      return (
        title +
        "<strong>Lies die Aufgabe.</strong> <strong>Tippe auf die Angaben</strong>, die du zum Rechnen brauchst. Tippe noch einmal darauf, um eine Markierung zu entfernen. Tippe dann auf <strong>Prüfen</strong>."
      );
    if (q.fields)
      return (
        title +
        "<strong>Rechne Schritt für Schritt.</strong> <strong>Schreibe deine Ergebnisse in die Felder.</strong> Tippe dann auf <strong>Prüfen</strong>. Für jedes Feld hast du <strong>drei Versuche</strong>."
      );
    const count = q.correct.length,
      amount =
        count === 2 ? "zwei Antworten" : count === 3 ? "drei Antworten" : count + " Antworten";
    return (
      title +
      "<strong>Lies " +
      "die Aufgabe" +
      ".</strong> <strong>Wähle " +
      (q.type === "multi" ? amount : "eine Antwort") +
      ".</strong> Tippe dann auf <strong>Prüfen</strong>."
    );
  }
  function showTaskInstruction() {
    game.innerHTML =
      '<section class="task-instruction" id="task-instruction" tabindex="-1" aria-labelledby="task-instruction-title"><h2 id="task-instruction-title">Deine Aufgabe</h2><p>' +
      taskInstruction() +
      "</p></section>" +
      game.innerHTML;
  }
  function goTaskTop() {
    const move = () => {
      const target = document.getElementById("task-instruction") || game;
      target.focus?.({ preventScroll: true });
      target.scrollIntoView?.({ block: "start", behavior: "instant" });
    };
    if (typeof requestAnimationFrame === "function") requestAnimationFrame(move);
    else move();
  }
  function render() {
    renderStage();
    showTaskInstruction();
    taskWasVisited = true;
    goTaskTop();
  }
  function home() {
    homeBeforeTask();
    showTaskInstruction();
    if (taskWasVisited) goTaskTop();
  }

  function missionHeader() {
    return `<div class="top"><button onclick="learningApp.home()">← Lernübersicht</button><span class="eyebrow">MISSION ${missionIndex + 1} · ${esc(current().tag)}</span><button onclick="learningApp.speak()" aria-label="Text vorlesen">🔊 Vorlesen</button></div><h2>${current().icon} ${esc(current().title)}</h2>`;
  }
  function renderStage() {
    if (phase === "finish") {
      renderFinish();
      return;
    }
    renderQuestion();
  }
  function mathText() {
    const active = qIndex === 1 && !done;
    return `<div class="card"><h3>Die Sachaufgabe</h3><div class="text">${current()
      .chunks.map((c, i) =>
        active
          ? `<button class="chunk ${selected.has(i) ? "selected" : ""}" data-chunk="${i}" aria-pressed="${selected.has(i)}" onclick="learningApp.pick(${i},this)">${esc(c)}</button>`
          : `<p class="chunk ${underlined.has(i) ? "selected" : ""}">${esc(c)}</p>`,
      )
      .join(
        "",
      )}</div>${active ? '<p class="small">Tippe die nötigen Angaben direkt im Text an. Du kannst mehrere Sätze unterstreichen.</p>' : ""}</div>`;
  }
  function stepLabels() {
    const names = ["L · Lesen", "U · Unterstreichen", "F · Fragen", "R · Rechnen", "A · Antworten"];
    return `<div class="steps">${names.map((n, i) => `<span class="step ${qIndex === i ? "current" : ""}">${n}</span>`).join("")}</div>`;
  }
  function optionsMarkup(q) {
    if (qIndex === 1)
      return "<p>👈 Markiere die Angaben in der Sachaufgabe. Auf kleinen Bildschirmen findest du den Text weiter oben.</p>";
    if (q.type === "number" || q.type === "time")
      return q.fields
        .map(
          (f, i) =>
            `<div class="field" id="field-${i}"><label for="answer-${i}">${esc(f[0])}</label><input id="answer-${i}" autocomplete="off" ${q.type === "number" ? 'inputmode="decimal"' : 'inputmode="text"'} placeholder="${q.type === "time" ? "__:__" : "Ergebnis"}" aria-describedby="result-${i}" onkeydown="if(event.key==='Enter')learningApp.check()"><span>${esc(f[2])}</span><span class="number-hint">Rechenhilfe: ${esc(f[3])}</span><div id="result-${i}" class="field-result" aria-live="polite"></div></div>`,
        )
        .join("");
    return `<p class="small">${q.type === "multi" ? "Mehrere Antworten sind richtig. Wähle alle passenden Aussagen." : "Genau eine Antwort ist richtig."}</p><div class="options">${q.options.map((o, i) => `<button class="option" data-option="${i}" aria-pressed="false" onclick="learningApp.pick(${i},this)"><span class="choice-dot">${q.type === "multi" ? "□" : "○"}</span><span>${esc(o)}</span></button>`).join("")}</div>`;
  }
  function renderQuestion() {
    const q = question();
    calculationAttempts = [];
    calculationState = [];
    game.innerHTML =
      missionHeader() +
      `<div class="bar"><div style="width:${(qIndex / 5) * 100}%"></div></div>${stepLabels()}<div class="layout">${mathText()}<div class="card"><span class="eyebrow">${["LESEN", "UNTERSTREICHEN", "FRAGEN", "RECHNEN", "ANTWORTEN"][qIndex]}</span><h2>${esc(q.prompt)}</h2>${optionsMarkup(q)}<div class="tools"><button class="primary" id="check" onclick="learningApp.check()">Prüfen ✓</button><button data-hint-button aria-expanded="false" aria-controls="hint" onclick="learningApp.hint()">💡 Tipp</button><button id="next" class="primary" data-continue onclick="learningApp.next()" disabled aria-describedby="continue-help">Weiter →</button></div><p id="continue-help" class="continue-help" role="status">Tippe zuerst auf „Prüfen“. Danach kannst du weitergehen.</p><div id="hint" class="hint" hidden></div><div id="task-reward"></div><div id="feedback" class="feedback" role="status" aria-live="polite">${q.type === "time" ? "Schreibe die Uhrzeit mit Doppelpunkt, z. B. 15:25." : q.type === "number" ? "Jedes Feld hat 3 Versuche. Bei Geld sind Komma und Punkt möglich, z. B. 10,80 oder 10.80." : "Lass dir Zeit. Du kannst jederzeit im Text nachsehen."}</div></div></div>`;
  }
  function pick(i, node) {
    if (done) return;
    const q = question();
    if (q.type !== "multi") selected.clear();
    if (q.type === "multi" && selected.has(i)) selected.delete(i);
    else selected.add(i);
    document.querySelectorAll("[data-option], [data-chunk]").forEach((x) => {
      const j = Number(x.dataset.option ?? x.dataset.chunk);
      x.classList.toggle("selected", selected.has(j));
      x.setAttribute("aria-pressed", selected.has(j));
    });
  }
  function parseNumber(v) {
    v = v.trim().replace(",", ".");
    if (!/^\d+(?:\.\d{1,2})?$/.test(v)) return NaN;
    return Number(v);
  }
  function parseTime(v) {
    const m = v.trim().match(/^(\d{1,2})[:.](\d{2})$/);
    if (!m || +m[1] > 23 || +m[2] > 59) return NaN;
    return +m[1] * 60 + +m[2];
  }
  function numericAnswers(q) {
    return q.fields.map((f, i) => {
      const value = document.getElementById("answer-" + i).value;
      return q.type === "time"
        ? parseTime(value) === parseTime(f[1])
        : Math.abs(parseNumber(value) - f[1]) < 1e-7;
    });
  }
  function hint() {
    adaptiveHint();
  }
  function evaluate() {
    if (done || phase !== "question") return;
    if (question().fields) {
      checkCalculation();
      return;
    }
    const q = question(),
      f = document.getElementById("feedback");
    let ok;
    if (q.type === "number" || q.type === "time") {
      if (q.fields.some((_, i) => !document.getElementById("answer-" + i).value.trim())) {
        f.textContent =
          "Trage zuerst in jedes Feld ein Ergebnis ein. Das zählt noch nicht als Versuch.";
        return;
      }
      const results = numericAnswers(q);
      results.forEach((r, i) => {
        document.getElementById("answer-" + i).setAttribute("aria-invalid", !r);
        document.getElementById("result-" + i).textContent = r
          ? "✓ Dieses Ergebnis stimmt."
          : "Prüfe dieses Ergebnis noch einmal.";
      });
      ok = results.every(Boolean);
    } else {
      if (!selected.size) {
        f.textContent =
          "Wähle zuerst eine Antwort oder markiere die wichtigen Angaben. Das zählt noch nicht als Versuch.";
        return;
      }
      ok = selected.size === q.correct.length && q.correct.every((i) => selected.has(i));
    }
    tries++;
    if (ok) {
      done = true;
      roundCorrect++;
      const gain = reward(4 - tries);
      roundPoints += gain;
      f.textContent =
        "✓ Genau! " +
        q.explain +
        (gain ? " +" + gain + " Lernpunkte." : " Dein Rekord bleibt erhalten.");
      if (qIndex === 1) underlined = new Set(q.correct);
      finishButtons();
    } else if (tries < 3) {
      f.textContent =
        "Noch nicht ganz. Schau im Text nach oder nutze den Tipp. Du kannst deine Auswahl ändern.";
    } else {
      done = true;
      f.textContent =
        "Hier ist die Lösung: " +
        q.explain +
        " Übe diesen Schritt später noch einmal, um Punkte zu sammeln.";
      if (qIndex === 1) underlined = new Set(q.correct);
      if (q.type === "number" || q.type === "time")
        q.fields.forEach((field, i) => {
          document.getElementById("answer-" + i).value = String(field[1]).replace(".", ",");
          document.getElementById("result-" + i).textContent = "Lösung zum Nachvollziehen.";
          document.getElementById("answer-" + i).removeAttribute("aria-invalid");
        });
      else
        document.querySelectorAll("[data-option], [data-chunk]").forEach((x) => {
          const i = Number(x.dataset.option ?? x.dataset.chunk);
          x.classList.toggle("correct", q.correct.includes(i));
          x.classList.toggle("selected", q.correct.includes(i));
          x.setAttribute("aria-pressed", q.correct.includes(i));
        });
      finishButtons();
    }
  }
  function finishButtons() {
    document.getElementById("check").disabled = true;
    document.getElementById("next").hidden = false;
    document.getElementById("next").disabled = false;
    const help = document.getElementById("continue-help");
    if (help) help.textContent = "Dieser Schritt ist fertig. Tippe auf „Weiter“.";
    document
      .querySelectorAll("[data-option], [data-chunk], .field input")
      .forEach((x) => (x.disabled = true));
  }
  function next() {
    if (!done) return;
    stopAudio();
    if (qIndex < 4) {
      qIndex++;
      selected = new Set();
      done = false;
      tries = 0;
      render();
    } else {
      phase = "finish";
      render();
    }
  }
  function renderFinish() {
    stats();
    const n = stars(missionIndex);
    game.innerHTML = `<div class="card finish"><div class="celebrate">${n ? "🎉" : "🔎"}</div><h2>Mission bearbeitet!</h2><a class="knobel-link" href="knobeln.html"><strong>💡 Lust auf eine schwere Aufgabe?</strong>Weiter zur Knobelinsel →</a><p style="font-size:32px">${Rewards.stars(n)}</p><p><b>Dein bester Stand für diese Mission</b></p><p>In dieser Runde: ${roundCorrect} von 5 ${"Schritten"} selbst gelöst.<br>${roundPoints} neue Lernpunkte gesammelt.</p><p>${n === 3 ? "Alle drei Sterne sind in deiner Sammlung!" : n ? "Gut gemacht! Eine neue Runde kann deinen Rekord verbessern." : "Du hast dir die Lösungen angesehen. Löse in einer neuen Runde alle fünf selbst, um Sterne zu sammeln."}</p><div class="tools" style="justify-content:center"><button class="primary" data-continue onclick="learningApp.home()">Weiter zur Lernübersicht →</button><button onclick="learningApp.startMission(missionIndex)">Mission noch einmal</button></div></div>`;
  }
  function speak() {
    Voice.speak(current().chunks.join(" "));
  }
  profile = Rewards.active();
  load();
  document.getElementById("profile").innerHTML = Array.from(
    { length: 20 },
    (_, i) => `<option value="${i + 1}">Lernplatz ${i + 1}</option>`,
  ).join("");

  window.learningApp = {
    closeHint: Feedback.closeHint,
    voiceContinue: Voice.resume,
    changeVoice: Voice.changeVoice,
    changeRate: Voice.changeRate,
    previewVoice: Voice.preview,
    voiceStop: Voice.stop,
    changeProfile,
    check,
    hint,
    home,
    next,
    pick,
    speak,
    startMission,
    stopAudio,
  };
  document.getElementById("profile").value = String(profile);
  Voice.init(config.id + "-speech");
  home();
})();
