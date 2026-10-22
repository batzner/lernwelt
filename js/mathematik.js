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
          : "Schau auf die Angaben im Text und auf dein Ergebnis aus dem Feld davor, falls du schon eines hast. Welche Rechnung passt? Die Einheit ist " + f[2] + ".");
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

  const missions =[
  {
    "title": "Mit dem Zug zum Puppentheater",
    "icon": "🎭",
    "tag": "Geld · 2 Rechenschritte",
    "chunks": [
      "23 Kinder besuchen ein Puppentheater.",
      "Eine Karte kostet pro Kind 5 €.",
      "Die Gruppe bezahlt zusätzlich insgesamt 69 € für die Zugfahrt.",
      "Die Vorstellung beginnt um 10 Uhr.",
      "Wie viel kosten die Karten und die Zugfahrt zusammen?"
    ],
    "questions": [
      {
        "prompt": "Was sollst du herausfinden?",
        "type": "single",
        "options": [
          "Die Kosten für Karten und Zugfahrt.",
          "Die Dauer der Vorstellung.",
          "Die Zahl der Sitzplätze."
        ],
        "correct": [
          0
        ],
        "hint": "Lies die Frage am Ende des Textes noch einmal.",
        "explain": "Gesucht sind die gesamten Kosten für Karten und Zugfahrt."
      },
      {
        "prompt": "Markiere alle Angaben, die du für die Rechnung brauchst.",
        "type": "multi",
        "options": [],
        "correct": [
          0,
          1,
          2
        ],
        "hint": "Prüfe jeden Satz: Hilft dir diese Angabe bei der Frage?",
        "explain": "Diese Angaben brauchst du: 23 Kinder besuchen ein Puppentheater. Eine Karte kostet pro Kind 5 €. Die Gruppe bezahlt zusätzlich insgesamt 69 € für die Zugfahrt."
      },
      {
        "prompt": "Welcher Rechenplan passt?",
        "type": "single",
        "options": [
          "Die Startzeit und die Kinderzahl addieren.",
          "Zuerst die Karten für alle Kinder berechnen. Dann den Preis der Zugfahrt addieren.",
          "Nur den Preis für eine Karte berechnen."
        ],
        "correct": [
          1
        ],
        "hint": "Welche Kosten fallen für jedes Kind an? Welche Kosten werden nur einmal bezahlt?",
        "explain": "Zuerst die Karten für alle Kinder berechnen. Dann den Preis der Zugfahrt addieren."
      },
      {
        "prompt": "Rechne Schritt für Schritt. Trage die Ergebnisse ein.",
        "type": "number",
        "fields": [
          [
            "Karten für alle Kinder",
            115,
            "€",
            "23 × 5"
          ],
          [
            "Karten und Zugfahrt zusammen",
            184,
            "€",
            "115 + 69"
          ]
        ],
        "hint": "Welche Kosten fallen für jedes Kind an? Welche Kosten werden nur einmal bezahlt?",
        "explain": "23 × 5 € = 115 €. 115 € + 69 € = 184 €."
      },
      {
        "prompt": "Wähle den passenden Antwortsatz.",
        "type": "single",
        "options": [
          "Der Ausflug dauert 184 Minuten.",
          "Die Karten allein kosten 184 €.",
          "Karten und Zugfahrt kosten zusammen 184 €."
        ],
        "correct": [
          2
        ],
        "hint": "Vergleiche die Frage, die Einheit und dein letztes Ergebnis.",
        "explain": "Karten und Zugfahrt kosten zusammen 184 €."
      }
    ]
  },
  {
    "title": "Ein Fernglas für Nele",
    "icon": "🔭",
    "tag": "Geld · 2 Rechenschritte",
    "chunks": [
      "Nele hat bereits 73 € gespart.",
      "Ein Fernglas kostet 127 €.",
      "Sie spart jede Woche 9 €.",
      "Das Fernglas hat einen grünen Gurt.",
      "Nach wie vielen Wochen hat Nele genug Geld?"
    ],
    "questions": [
      {
        "prompt": "Was sollst du herausfinden?",
        "type": "single",
        "options": [
          "Die Farbe des Gurts.",
          "Die Zahl der Wochen bis zum Kauf.",
          "Die Zahl der Vögel im Garten."
        ],
        "correct": [
          1
        ],
        "hint": "Lies die Frage am Ende des Textes noch einmal.",
        "explain": "Gesucht ist die Zahl der Wochen, die Nele noch sparen muss."
      },
      {
        "prompt": "Markiere alle Angaben, die du für die Rechnung brauchst.",
        "type": "multi",
        "options": [],
        "correct": [
          0,
          1,
          2
        ],
        "hint": "Prüfe jeden Satz: Hilft dir diese Angabe bei der Frage?",
        "explain": "Diese Angaben brauchst du: Nele hat bereits 73 € gespart. Ein Fernglas kostet 127 €. Sie spart jede Woche 9 €."
      },
      {
        "prompt": "Welcher Rechenplan passt?",
        "type": "single",
        "options": [
          "Zuerst das fehlende Geld berechnen. Dann durch die Sparsumme pro Woche teilen.",
          "Preis und Erspartes addieren.",
          "Die beiden Preise verdoppeln."
        ],
        "correct": [
          0
        ],
        "hint": "Vergleiche zuerst den Preis mit dem Ersparten. Nutze danach die Sparsumme pro Woche.",
        "explain": "Zuerst das fehlende Geld berechnen. Dann durch die Sparsumme pro Woche teilen."
      },
      {
        "prompt": "Rechne Schritt für Schritt. Trage die Ergebnisse ein.",
        "type": "number",
        "fields": [
          [
            "Geld, das noch fehlt",
            54,
            "€",
            "127 − 73"
          ],
          [
            "Benötigte Wochen",
            6,
            "Wochen",
            "54 : 9"
          ]
        ],
        "hint": "Vergleiche zuerst den Preis mit dem Ersparten. Nutze danach die Sparsumme pro Woche.",
        "explain": "127 € − 73 € = 54 €. 54 € : 9 € pro Woche = 6 Wochen."
      },
      {
        "prompt": "Wähle den passenden Antwortsatz.",
        "type": "single",
        "options": [
          "Nele muss noch 54 Wochen sparen.",
          "Nele muss noch 6 Wochen sparen.",
          "Nele muss noch 6 € sparen."
        ],
        "correct": [
          1
        ],
        "hint": "Vergleiche die Frage, die Einheit und dein letztes Ergebnis.",
        "explain": "Nele muss noch 6 Wochen sparen."
      }
    ]
  },
  {
    "title": "Mit dem Rad zum See",
    "icon": "🚲",
    "tag": "Strecken · 3 Rechenschritte",
    "chunks": [
      "Eine Radgruppe fährt 3200 m bis zu einer Mühle.",
      "Danach fährt sie noch 1800 m bis zum See.",
      "Zurück fährt sie denselben Weg.",
      "Am See macht sie 25 Minuten Pause.",
      "Wie viele Kilometer fährt die Gruppe insgesamt?"
    ],
    "questions": [
      {
        "prompt": "Was sollst du herausfinden?",
        "type": "single",
        "options": [
          "Nur die Strecke zur Mühle.",
          "Die Dauer der Pause.",
          "Die gesamte Strecke in Kilometern."
        ],
        "correct": [
          2
        ],
        "hint": "Lies die Frage am Ende des Textes noch einmal.",
        "explain": "Gesucht ist der gesamte Hin- und Rückweg in Kilometern."
      },
      {
        "prompt": "Markiere alle Angaben, die du für die Rechnung brauchst.",
        "type": "multi",
        "options": [],
        "correct": [
          0,
          1,
          2
        ],
        "hint": "Prüfe jeden Satz: Hilft dir diese Angabe bei der Frage?",
        "explain": "Diese Angaben brauchst du: Eine Radgruppe fährt 3200 m bis zu einer Mühle. Danach fährt sie noch 1800 m bis zum See. Zurück fährt sie denselben Weg."
      },
      {
        "prompt": "Welcher Rechenplan passt?",
        "type": "single",
        "options": [
          "Die Pausenzeit verdoppeln.",
          "Die Teilstrecken addieren, den Hinweg verdoppeln und in Kilometer umrechnen.",
          "Den Hinweg halbieren."
        ],
        "correct": [
          1
        ],
        "hint": "Zeichne den Hinweg und den Rückweg. 1000 m sind 1 km.",
        "explain": "Die Teilstrecken addieren, den Hinweg verdoppeln und in Kilometer umrechnen."
      },
      {
        "prompt": "Rechne Schritt für Schritt. Trage die Ergebnisse ein.",
        "type": "number",
        "fields": [
          [
            "Hinweg bis zum See",
            5000,
            "m",
            "3200 + 1800"
          ],
          [
            "Gesamter Hin- und Rückweg",
            10000,
            "m",
            "5000 × 2"
          ],
          [
            "Gesamte Strecke in Kilometern",
            10,
            "km",
            "10000 : 1000"
          ]
        ],
        "hint": "Zeichne den Hinweg und den Rückweg. 1000 m sind 1 km.",
        "explain": "3200 m + 1800 m = 5000 m. 2 × 5000 m = 10000 m = 10 km."
      },
      {
        "prompt": "Wähle den passenden Antwortsatz.",
        "type": "single",
        "options": [
          "Die Gruppe fährt insgesamt 10 km.",
          "Die Gruppe fährt insgesamt 5 km.",
          "Die Gruppe fährt insgesamt 10 m."
        ],
        "correct": [
          0
        ],
        "hint": "Vergleiche die Frage, die Einheit und dein letztes Ergebnis.",
        "explain": "Die Gruppe fährt insgesamt 10 km."
      }
    ]
  },
  {
    "title": "Töpfern mit Jona",
    "icon": "🏺",
    "tag": "Zeit · 2 Rechenschritte",
    "chunks": [
      "Der Töpferkurs beginnt um 15:45 Uhr.",
      "Der Kurs dauert 40 Minuten.",
      "Danach braucht Jona 20 Minuten zum Aufräumen.",
      "Seine Schürze ist rot.",
      "Um wie viel Uhr ist Jona fertig?"
    ],
    "questions": [
      {
        "prompt": "Was sollst du herausfinden?",
        "type": "single",
        "options": [
          "Wann Jona mit allem fertig ist.",
          "Welche Farbe die Schürze hat.",
          "Wie teuer der Ton ist."
        ],
        "correct": [
          0
        ],
        "hint": "Lies die Frage am Ende des Textes noch einmal.",
        "explain": "Gesucht ist die Uhrzeit nach dem Kurs und dem Aufräumen."
      },
      {
        "prompt": "Markiere alle Angaben, die du für die Rechnung brauchst.",
        "type": "multi",
        "options": [],
        "correct": [
          0,
          1,
          2
        ],
        "hint": "Prüfe jeden Satz: Hilft dir diese Angabe bei der Frage?",
        "explain": "Diese Angaben brauchst du: Der Töpferkurs beginnt um 15:45 Uhr. Der Kurs dauert 40 Minuten. Danach braucht Jona 20 Minuten zum Aufräumen."
      },
      {
        "prompt": "Welcher Rechenplan passt?",
        "type": "single",
        "options": [
          "40 − 20 rechnen.",
          "Die Kurszeit zur Startzeit addieren, dann die Zeit zum Aufräumen addieren.",
          "Stunden und Minuten multiplizieren."
        ],
        "correct": [
          1
        ],
        "hint": "Zeichne einen Zeitstrahl. Rechne erst bis zur vollen Stunde und dann weiter.",
        "explain": "Die Kurszeit zur Startzeit addieren, dann die Zeit zum Aufräumen addieren."
      },
      {
        "prompt": "Trage die Uhrzeiten ein, zum Beispiel 13:10.",
        "type": "time",
        "fields": [
          [
            "Ende des Kurses",
            "16:25",
            "Uhr",
            "15:45 + 40 Minuten"
          ],
          [
            "Fertig nach dem Aufräumen",
            "16:45",
            "Uhr",
            "16:25 + 20 Minuten"
          ]
        ],
        "hint": "Zeichne einen Zeitstrahl. Rechne erst bis zur vollen Stunde und dann weiter.",
        "explain": "15:45 Uhr + 40 Minuten = 16:25 Uhr. Weitere 20 Minuten ergeben 16:45 Uhr."
      },
      {
        "prompt": "Wähle den passenden Antwortsatz.",
        "type": "single",
        "options": [
          "Jona ist um 16:05 Uhr fertig.",
          "Jona ist um 16:25 Uhr fertig.",
          "Jona ist um 16:45 Uhr fertig."
        ],
        "correct": [
          2
        ],
        "hint": "Vergleiche die Frage, die Einheit und dein letztes Ergebnis.",
        "explain": "Jona ist um 16:45 Uhr fertig."
      }
    ]
  },
  {
    "title": "Material für die Drachenwerkstatt",
    "icon": "🪁",
    "tag": "Geld · 3 Rechenschritte",
    "chunks": [
      "Für eine Drachenwerkstatt werden 7 Rollen Schnur gekauft.",
      "Jede Rolle kostet 2,40 €.",
      "Dazu kommt ein Paket Drachenpapier für 11,60 €.",
      "Die Kursleiterin bezahlt mit einem 50-€-Schein.",
      "Die Werkstatt findet am Samstag statt.",
      "Wie viel Rückgeld bekommt die Kursleiterin?"
    ],
    "questions": [
      {
        "prompt": "Was sollst du herausfinden?",
        "type": "single",
        "options": [
          "Die Zahl der Samstage.",
          "Das Rückgeld beim Bezahlen.",
          "Die Länge einer Schnur."
        ],
        "correct": [
          1
        ],
        "hint": "Lies die Frage am Ende des Textes noch einmal.",
        "explain": "Gesucht ist das Rückgeld nach dem Einkauf."
      },
      {
        "prompt": "Markiere alle Angaben, die du für die Rechnung brauchst.",
        "type": "multi",
        "options": [],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "hint": "Prüfe jeden Satz: Hilft dir diese Angabe bei der Frage?",
        "explain": "Diese Angaben brauchst du: Für eine Drachenwerkstatt werden 7 Rollen Schnur gekauft. Jede Rolle kostet 2,40 €. Dazu kommt ein Paket Drachenpapier für 11,60 €. Die Kursleiterin bezahlt mit einem 50-€-Schein."
      },
      {
        "prompt": "Welcher Rechenplan passt?",
        "type": "single",
        "options": [
          "50 € + 11,60 € + 2,40 €.",
          "50 € − 7 €.",
          "7 × 2,40 €, dann 11,60 € addieren, dann die Summe von 50 € abziehen."
        ],
        "correct": [
          2
        ],
        "hint": "Berechne erst die Kosten für alle Rollen. Addiere das Papier. Vergleiche dann mit dem bezahlten Geld.",
        "explain": "7 × 2,40 €, dann 11,60 € addieren, dann die Summe von 50 € abziehen."
      },
      {
        "prompt": "Rechne Schritt für Schritt. Trage die Ergebnisse ein.",
        "type": "number",
        "fields": [
          [
            "Schnur insgesamt",
            16.8,
            "€",
            "7 × 2,40"
          ],
          [
            "Gesamter Einkauf",
            28.4,
            "€",
            "16,80 + 11,60"
          ],
          [
            "Rückgeld",
            21.6,
            "€",
            "50 − 28,40"
          ]
        ],
        "hint": "Berechne erst die Kosten für alle Rollen. Addiere das Papier. Vergleiche dann mit dem bezahlten Geld.",
        "explain": "7 × 2,40 € = 16,80 €. 16,80 € + 11,60 € = 28,40 €. 50 € − 28,40 € = 21,60 €."
      },
      {
        "prompt": "Wähle den passenden Antwortsatz.",
        "type": "single",
        "options": [
          "Die Kursleiterin bekommt 28,40 € zurück.",
          "Die Kursleiterin bekommt 21,60 € zurück.",
          "Die Kursleiterin bekommt 16,80 € zurück."
        ],
        "correct": [
          1
        ],
        "hint": "Vergleiche die Frage, die Einheit und dein letztes Ergebnis.",
        "explain": "Die Kursleiterin bekommt 21,60 € zurück."
      }
    ]
  },
  {
    "title": "Samentüten für die Gartengruppen",
    "icon": "🌻",
    "tag": "Mengen · Knobelmission",
    "chunks": [
      "Ein Gartenverein bekommt 7 Kartons mit jeweils 28 Samentüten.",
      "28 Samentüten werden für ein Fest zurückgelegt.",
      "Die übrigen Tüten werden gleichmäßig auf 6 Gartengruppen verteilt.",
      "Auf allen Tüten sind Blumen abgebildet.",
      "Wie viele Samentüten bekommt jede Gartengruppe?"
    ],
    "questions": [
      {
        "prompt": "Was sollst du herausfinden?",
        "type": "single",
        "options": [
          "Die Tütenzahl für jede Gruppe.",
          "Die Farbe der Blumen.",
          "Die Zahl der Samen in einer Tüte."
        ],
        "correct": [
          0
        ],
        "hint": "Lies die Frage am Ende des Textes noch einmal.",
        "explain": "Gesucht ist die Zahl der Samentüten für jede Gartengruppe."
      },
      {
        "prompt": "Markiere alle Angaben, die du für die Rechnung brauchst.",
        "type": "multi",
        "options": [],
        "correct": [
          0,
          1,
          2
        ],
        "hint": "Prüfe jeden Satz: Hilft dir diese Angabe bei der Frage?",
        "explain": "Diese Angaben brauchst du: Ein Gartenverein bekommt 7 Kartons mit jeweils 28 Samentüten. 28 Samentüten werden für ein Fest zurückgelegt. Die übrigen Tüten werden gleichmäßig auf 6 Gartengruppen verteilt."
      },
      {
        "prompt": "Welcher Rechenplan passt?",
        "type": "single",
        "options": [
          "28 : 7, dann 28 addieren.",
          "7 × 28, dann 28 abziehen, dann durch 6 teilen.",
          "7 × 28, dann mit 6 multiplizieren."
        ],
        "correct": [
          1
        ],
        "hint": "Berechne erst alle Tüten. Ziehe die zurückgelegten Tüten ab. Teile den Rest gleich auf.",
        "explain": "7 × 28, dann 28 abziehen, dann durch 6 teilen."
      },
      {
        "prompt": "Rechne Schritt für Schritt. Trage die Ergebnisse ein.",
        "type": "number",
        "fields": [
          [
            "Samentüten insgesamt",
            196,
            "Tüten",
            "7 × 28"
          ],
          [
            "Samentüten zum Verteilen",
            168,
            "Tüten",
            "196 − 28"
          ],
          [
            "Samentüten für jede Gruppe",
            28,
            "Tüten",
            "168 : 6"
          ]
        ],
        "hint": "Berechne erst alle Tüten. Ziehe die zurückgelegten Tüten ab. Teile den Rest gleich auf.",
        "explain": "7 × 28 = 196. 196 − 28 = 168. 168 : 6 = 28."
      },
      {
        "prompt": "Wähle den passenden Antwortsatz.",
        "type": "single",
        "options": [
          "Jede Gruppe bekommt 168 Samentüten.",
          "Jede Gruppe bekommt 32 Samentüten.",
          "Jede Gruppe bekommt 28 Samentüten."
        ],
        "correct": [
          2
        ],
        "hint": "Vergleiche die Frage, die Einheit und dein letztes Ergebnis.",
        "explain": "Jede Gruppe bekommt 28 Samentüten."
      }
    ]
  }
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
    storageKey = config.id + "-runde2";
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
      ? "Fortschritt nur in diesem Browser: Nutze zum Weiterüben denselben Browser auf demselben Gerät. Auf einem anderen Gerät beginnt die Sammlung neu."
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
    Rewards.extra(String(profile), "lufra-runde2-" + missionIndex + "-" + qIndex, v);
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
    game.innerHTML = `<h2>Wähle deine Mission</h2><p>${config.home}</p><a class="knobel-link" href="power.html"><strong>⚡ Schon fertig? Probiere die Power-Transferaufgaben!</strong>Schwere Denkaufgaben für Mathe-Brains →</a><div class="missions">${missions
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
    game.innerHTML = `<div class="card finish"><div class="celebrate">${n ? "🎉" : "🔎"}</div><h2>Mission bearbeitet!</h2><a class="knobel-link" href="power.html"><strong>⚡ Lust auf eine schwere Aufgabe?</strong>Weiter zu den Power-Transferaufgaben →</a><p style="font-size:32px">${Rewards.stars(n)}</p><p><b>Dein bester Stand für diese Mission</b></p><p>In dieser Runde: ${roundCorrect} von 5 ${"Schritten"} selbst gelöst.<br>${roundPoints} neue Lernpunkte gesammelt.</p><p>${n === 3 ? "Alle drei Sterne sind in deiner Sammlung!" : n ? "Gut gemacht! Eine neue Runde kann deinen Rekord verbessern." : "Du hast dir die Lösungen angesehen. Löse in einer neuen Runde alle fünf selbst, um Sterne zu sammeln."}</p><div class="tools" style="justify-content:center"><button class="primary" data-continue onclick="learningApp.home()">Weiter zur Lernübersicht →</button><button onclick="learningApp.startMission(missionIndex)">Mission noch einmal</button></div></div>`;
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
