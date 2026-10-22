(function () {
  const readingExtra = {
    strategies: [
      [
        {
          heading: "Ein Garten bietet Schutz und Nahrung",
          headings: [
            "Ein Garten bietet Schutz und Nahrung",
            "Warum jeder Garten ordentlich sein muss",
            "Nur die Farbe der Blätter",
          ],
          headingIndex: 0,
          keywords: ["Verstecke", "Nahrung"],
          words: ["Verstecke", "Gartenzaun", "Nahrung", "Winterschlaf"],
          wordIndices: [0, 2],
          summary: "Laub, Hecken und wilde Ecken bieten kleinen Tieren Verstecke und Nahrung.",
          summaries: [
            "Laub, Hecken und wilde Ecken bieten kleinen Tieren Verstecke und Nahrung.",
            "Im Garten liegen Blätter.",
            "Alle Tiere brauchen völlig aufgeräumte Gärten.",
          ],
          summaryIndex: 0,
        },
        {
          heading: "Igel brauchen Wege und Ruheplätze",
          headings: [
            "Igel schlafen immer nachts",
            "Igel brauchen Wege und Ruheplätze",
            "Gärten bestehen nur aus Zäunen",
          ],
          headingIndex: 1,
          keywords: ["Nacht", "Gartenverbindung"],
          words: ["Winter", "Blätterfarbe", "Nacht", "Gartenverbindung"],
          wordIndices: [2, 3],
          summary:
            "Igel suchen nachts Futter und können durch Zaunöffnungen zwischen Gärten wechseln.",
          summaries: [
            "Ein Gartenzaun ist oft sehr lang.",
            "Igel bleiben immer in einem einzigen Garten.",
            "Igel suchen nachts Futter und können durch Zaunöffnungen zwischen Gärten wechseln.",
          ],
          summaryIndex: 2,
        },
        {
          heading: "Ruhige Plätze für den Winter",
          headings: [
            "Wie Zweige wachsen",
            "Nur Igel leben in Gärten",
            "Ruhige Plätze für den Winter",
          ],
          headingIndex: 2,
          keywords: ["Winterschlaf", "Schutz"],
          words: ["Winterschlaf", "Fliegen", "Schutz", "Zaunöffnung"],
          wordIndices: [0, 2],
          summary:
            "Ruhige Laub- und Zweighaufen können Igeln als geschützte Plätze für den Winterschlaf dienen.",
          summaries: [
            "Igel finden nachts Nahrung.",
            "Ruhige Laub- und Zweighaufen können Igeln als geschützte Plätze für den Winterschlaf dienen.",
            "Jede Gartenecke muss gleich aussehen.",
          ],
          summaryIndex: 1,
        },
      ],
      [
        {
          heading: "Fliegende Säugetiere",
          headings: ["Fliegende Säugetiere", "Vögel mit Federn", "Nur das Wetter am Abend"],
          headingIndex: 0,
          keywords: ["Flughaut", "Säugetiere"],
          words: ["Federn", "Flughaut", "Säugetiere", "Quartiere"],
          wordIndices: [1, 2],
          summary:
            "Fledermäuse sind Säugetiere, die mit einer Flughaut fliegen und oft Insekten jagen.",
          summaries: [
            "Fledermäuse sind Säugetiere, die mit einer Flughaut fliegen und oft Insekten jagen.",
            "Alle Fledermäuse sind Vögel.",
            "Fledermäuse erscheinen manchmal am Himmel.",
          ],
          summaryIndex: 0,
        },
        {
          heading: "Mit Echos den Weg finden",
          headings: [
            "Menschen hören jeden Laut",
            "Mit Echos den Weg finden",
            "Wie eine Flughaut aussieht",
          ],
          headingIndex: 1,
          keywords: ["Echo", "Ortung"],
          words: ["Echo", "Federn", "Baumhöhle", "Ortung"],
          wordIndices: [0, 3],
          summary:
            "Viele Fledermäuse senden hohe Laute aus und nutzen deren Echos zur Orientierung.",
          summaries: [
            "Fledermäuse haben Finger.",
            "Viele Fledermäuse senden hohe Laute aus und nutzen deren Echos zur Orientierung.",
            "Alle Menschen können die Laute gut hören.",
          ],
          summaryIndex: 1,
        },
        {
          heading: "Geschützte Ruheplätze",
          headings: ["Jagd auf Insekten", "Die Form eines Vogelnests", "Geschützte Ruheplätze"],
          headingIndex: 2,
          keywords: ["Quartiere", "Baumhöhlen"],
          words: ["Flughaut", "Quartiere", "Echo", "Baumhöhlen"],
          wordIndices: [1, 3],
          summary:
            "Fledermäuse brauchen ungestörte Ruheplätze, zum Beispiel Baumhöhlen oder Gebäudespalten.",
          summaries: [
            "Fledermäuse brauchen ungestörte Ruheplätze, zum Beispiel Baumhöhlen oder Gebäudespalten.",
            "Jede Fledermaus wohnt in einem Vogelnest.",
            "Man kann abends zum Himmel schauen.",
          ],
          summaryIndex: 0,
        },
      ],
      [
        {
          heading: "Die flache Brücke gibt nach",
          headings: [
            "Die flache Brücke gibt nach",
            "Die Faltung macht Papier stärker",
            "Münzen werden gezählt",
          ],
          headingIndex: 0,
          keywords: ["flaches Papier", "Last"],
          words: ["gefaltet", "flaches Papier", "Wasser", "Last"],
          wordIndices: [1, 3],
          summary: "Die flache Papierbrücke biegt sich schon unter einer kleinen Last stark durch.",
          summaries: [
            "Bücher sind gleich hoch.",
            "Die flache Papierbrücke biegt sich schon unter einer kleinen Last stark durch.",
            "Die Brücke trägt unbegrenzt viele Münzen.",
          ],
          summaryIndex: 1,
        },
        {
          heading: "Faltung macht belastbarer",
          headings: [
            "Die Lücke wird größer",
            "Faltung macht belastbarer",
            "Münzen ändern ihre Farbe",
          ],
          headingIndex: 1,
          keywords: ["Faltung", "belastbarer"],
          words: ["Faltung", "dickeres Papier", "belastbarer", "Erinnerung"],
          wordIndices: [0, 2],
          summary:
            "Durch die Faltung verändert sich die Form des Papiers und die Brücke trägt mehr Münzen.",
          summaries: [
            "Das Papier wird durch die Faltung dicker hergestellt.",
            "Die Kinder benutzen ein zweites Blatt.",
            "Durch die Faltung verändert sich die Form des Papiers und die Brücke trägt mehr Münzen.",
          ],
          summaryIndex: 2,
        },
        {
          heading: "Einen fairen Vergleich durchführen",
          headings: [
            "Nur Münzen aufräumen",
            "Eine neue Papierart erfinden",
            "Einen fairen Vergleich durchführen",
          ],
          headingIndex: 2,
          keywords: ["gleiche Bedingungen", "Ergebnisse"],
          words: ["Regen", "gleiche Bedingungen", "Abend", "Ergebnisse"],
          wordIndices: [1, 3],
          summary:
            "Für einen fairen Vergleich bleiben Abstand und Materialien gleich und die Kinder notieren ihre Ergebnisse.",
          summaries: [
            "Für einen fairen Vergleich bleiben Abstand und Materialien gleich und die Kinder notieren ihre Ergebnisse.",
            "Ein Kind erinnert sich an ein Buch.",
            "Die Kinder verändern gleichzeitig alle Bedingungen.",
          ],
          summaryIndex: 0,
        },
      ],
      [
        {
          heading: "Wasser verdunstet",
          headings: ["Wasser verdunstet", "Wolken werden schwer", "Wasser versickert"],
          headingIndex: 0,
          keywords: ["Verdunstung", "Wasserdampf"],
          words: ["Schnee", "Verdunstung", "Wasserdampf", "Steine"],
          wordIndices: [1, 2],
          summary:
            "Wasser aus Pfützen und Gewässern gelangt durch Verdunstung als Wasserdampf in die Luft.",
          summaries: [
            "Nach Regen gibt es manchmal Pfützen.",
            "Wasser aus Pfützen und Gewässern gelangt durch Verdunstung als Wasserdampf in die Luft.",
            "Wasser verschwindet für immer.",
          ],
          summaryIndex: 1,
        },
        {
          heading: "Wolken und Niederschlag entstehen",
          headings: [
            "Wasser wird unsichtbar",
            "Wolken und Niederschlag entstehen",
            "Bäche fließen ins Meer",
          ],
          headingIndex: 1,
          keywords: ["Wassertröpfchen", "Niederschlag"],
          words: ["Boden", "Sonnenlicht", "Wassertröpfchen", "Niederschlag"],
          wordIndices: [2, 3],
          summary:
            "Beim Abkühlen entstehen Wolkentröpfchen, aus denen später Regen oder Schnee fallen kann.",
          summaries: [
            "Wasserdampf selbst ist unsichtbar.",
            "Beim Abkühlen entstehen Wolkentröpfchen, aus denen später Regen oder Schnee fallen kann.",
            "Jede Wolke bringt sofort Regen.",
          ],
          summaryIndex: 1,
        },
        {
          heading: "Wasser bewegt sich im Kreislauf",
          headings: [
            "Nur der Boden wird feucht",
            "Regen fällt nur einmal",
            "Wasser bewegt sich im Kreislauf",
          ],
          headingIndex: 2,
          keywords: ["versickern", "Kreislauf"],
          words: ["versickern", "Kreislauf", "Papier", "Echo"],
          wordIndices: [0, 1],
          summary: "Wasser versickert oder fließt in Gewässer und kann von dort erneut verdunsten.",
          summaries: [
            "Ein Bach enthält Wasser.",
            "Wasser beendet seinen Weg immer im Meer.",
            "Wasser versickert oder fließt in Gewässer und kann von dort erneut verdunsten.",
          ],
          summaryIndex: 2,
        },
      ],
      [
        {
          heading: "Müllquellen finden",
          headings: [
            "Müllquellen finden",
            "Nur die Größe des Mülleimers",
            "Eine Tabelle auswerten",
          ],
          headingIndex: 0,
          keywords: ["Verpackungen", "Müllmenge"],
          words: ["Trinkflaschen", "Verpackungen", "Müllmenge", "Tabelle"],
          wordIndices: [1, 2],
          summary:
            "Die Klasse untersucht Verpackungsmüll und sucht Möglichkeiten, seine Menge zu verringern.",
          summaries: [
            "Die Klasse untersucht Verpackungsmüll und sucht Möglichkeiten, seine Menge zu verringern.",
            "Die Klasse macht ihren Müll durch einen größeren Eimer weniger.",
            "Der Mülleimer ist nach der Pause voll.",
          ],
          summaryIndex: 0,
        },
        {
          heading: "Dosen und Flaschen lange nutzen",
          headings: [
            "Verpackungen zählen",
            "Dosen und Flaschen lange nutzen",
            "Alles nur einmal benutzen",
          ],
          headingIndex: 1,
          keywords: ["Wiederverwendung", "lange nutzen"],
          words: ["Wiederverwendung", "größerer Eimer", "lange nutzen", "Freitag"],
          wordIndices: [0, 2],
          summary:
            "Dosen und Trinkflaschen sollen lange wiederverwendet werden, weil auch ihre Herstellung Material benötigt.",
          summaries: [
            "Manche Kinder besitzen Dosen.",
            "Wiederverwendbare Dinge sollen nach einem Tag entsorgt werden.",
            "Dosen und Trinkflaschen sollen lange wiederverwendet werden, weil auch ihre Herstellung Material benötigt.",
          ],
          summaryIndex: 2,
        },
        {
          heading: "Ergebnisse fair vergleichen",
          headings: ["Neue Verpackungen kaufen", "Dosen herstellen", "Ergebnisse fair vergleichen"],
          headingIndex: 2,
          keywords: ["zählen", "vergleichen"],
          words: ["Herstellung", "zählen", "vergleichen", "Lieblingsfarbe"],
          wordIndices: [1, 2],
          summary:
            "Die Klasse zählt Verpackungen in vergleichbaren Wochen und hält die Ergebnisse in einer Tabelle fest.",
          summaries: [
            "Die Klasse zählt Verpackungen in vergleichbaren Wochen und hält die Ergebnisse in einer Tabelle fest.",
            "Die Klasse rät die Müllmenge.",
            "Eine einzelne Beobachtung ist immer ausreichend.",
          ],
          summaryIndex: 0,
        },
      ],
      [
        {
          heading: "Die Mondform bleibt gleich",
          headings: [
            "Die Mondform bleibt gleich",
            "Der Mond wird zu einer Sichel",
            "Die Sonne geht unter",
          ],
          headingIndex: 0,
          keywords: ["Kugelform", "beleuchtete Seite"],
          words: ["Kugelform", "Wolken", "beleuchtete Seite", "Datum"],
          wordIndices: [0, 2],
          summary:
            "Der Mond bleibt kugelförmig, aber wir sehen unterschiedlich viel von seiner beleuchteten Seite.",
          summaries: [
            "Der Mond bleibt kugelförmig, aber wir sehen unterschiedlich viel von seiner beleuchteten Seite.",
            "Am Himmel sieht man manchmal eine Sichel.",
            "Der Mond verändert jeden Abend seine Form.",
          ],
          summaryIndex: 0,
        },
        {
          heading: "So entstehen Mondphasen",
          headings: [
            "Im Mond brennt eine Lampe",
            "So entstehen Mondphasen",
            "Zeichnungen mit Datum",
          ],
          headingIndex: 1,
          keywords: ["Sonnenlicht", "Blickrichtung"],
          words: ["Sonnenlicht", "Baumhöhle", "Datum", "Blickrichtung"],
          wordIndices: [0, 3],
          summary:
            "Der Mond reflektiert Sonnenlicht und sein Umlauf verändert unsere Ansicht der beleuchteten Hälfte.",
          summaries: [
            "Der Mond leuchtet aus eigener Kraft.",
            "Der Mond reflektiert Sonnenlicht und sein Umlauf verändert unsere Ansicht der beleuchteten Hälfte.",
            "Die Sonne beleuchtet ungefähr die Hälfte des Mondes.",
          ],
          summaryIndex: 1,
        },
        {
          heading: "Beobachtungen planen und notieren",
          headings: [
            "Nur auf die Erinnerung vertrauen",
            "Die Mondoberfläche erklären",
            "Beobachtungen planen und notieren",
          ],
          headingIndex: 2,
          keywords: ["Beobachtung", "Notizen"],
          words: ["Beobachtung", "Flughaut", "Notizen", "Sonnenlicht"],
          wordIndices: [0, 2],
          summary:
            "Mehrwöchige Beobachtungen mit Datum und Wolkennotizen machen Mondphasen besser nachvollziehbar.",
          summaries: [
            "Mehrwöchige Beobachtungen mit Datum und Wolkennotizen machen Mondphasen besser nachvollziehbar.",
            "Ein Blick an einem Abend reicht für alle Mondphasen.",
            "Wolken können den Blick verdecken.",
          ],
          summaryIndex: 0,
        },
      ],
    ],
    basics: [
      {
        kind: "Wörter klären",
        prompt: "Was bedeutet „Lebensraum“ hier?",
        sentence: "Mehrere Gärten können zusammen einen größeren Lebensraum bilden.",
        options: [
          "Ein Raum mit einem Sofa.",
          "Ein Gebiet, in dem Tiere oder Pflanzen leben.",
          "Ein leerer Schrank.",
        ],
        correct: 1,
        explain: "„Lebensraum“ meint hier ein Gebiet, in dem Tiere leben können.",
      },
      {
        kind: "Bezüge verstehen",
        prompt: "Auf wen bezieht sich „sie“?",
        sentence: "Igel suchen nachts Futter. Tagsüber ruhen sie an einem geschützten Ort.",
        options: ["Auf die Igel.", "Auf die Gärten.", "Auf die Zäune."],
        correct: 0,
        explain: "„Sie“ ersetzt im zweiten Satz die Igel.",
      },
      {
        kind: "Sätze verbinden",
        prompt: "Warum kann die Fledermaus das Insekt finden?",
        sentence:
          "Die Fledermaus hört ein Echo. Dadurch erhält sie Informationen über den Ort des Insekts.",
        options: [
          "Weil das Insekt ihren Namen ruft.",
          "Weil sie Federn hat.",
          "Weil das Echo Informationen über den Ort liefert.",
        ],
        correct: 2,
        explain: "„Dadurch“ verbindet das Hören des Echos mit den Informationen über den Ort.",
      },
      {
        kind: "Wichtiges unterscheiden",
        prompt: "Welche Information erklärt, warum die Brücke mehr trägt?",
        sentence:
          "Die Kinder falten das Papier. Seine neue Form macht die Brücke belastbarer. Auf dem Tisch liegt ein roter Stift.",
        options: [
          "Der Stift ist rot.",
          "Die Faltung verändert die Form und macht die Brücke belastbarer.",
          "Das Papier liegt auf dem Tisch.",
        ],
        correct: 1,
        explain: "Die Faltung erklärt die Belastbarkeit. Die Farbe des Stifts ist dafür unwichtig.",
      },
      {
        kind: "Reihenfolge verstehen",
        prompt: "Was geschieht in diesem Beispiel zuletzt?",
        sentence:
          "Zuerst verdunstet Wasser. Danach bilden sich Wolkentröpfchen. Später fällt Regen.",
        options: ["Es fällt Regen.", "Wasser verdunstet.", "Es bilden sich Wolkentröpfchen."],
        correct: 0,
        explain: "Das Wort „später“ zeigt hier den letzten genannten Schritt.",
      },
      {
        kind: "Oberbegriffe finden",
        prompt: "Welcher Oberbegriff passt zu Dose und Trinkflasche?",
        sentence: "Eine Dose und eine Trinkflasche werden immer wieder benutzt.",
        options: ["Mondphasen", "Wiederverwendbare Behälter", "Waldtiere"],
        correct: 1,
        explain: "Beide sind Behälter, die mehrmals verwendet werden können.",
      },
    ],
    talks: [
      [
        "Welche Gartenecke würdest du für Tiere verändern? Begründe mit einer Textstelle.",
        "Erkläre deinem Partner, warum mehrere verbundene Gärten helfen können.",
        "Welche Frage zum Igel bleibt für dich offen?",
      ],
      [
        "Erkläre Echoortung jemandem, der den Text nicht gelesen hat.",
        "Was könnte passieren, wenn Ruheplätze verschwinden? Nutze den Text.",
        "Welche Frage würdest du einer Fledermausforscherin stellen?",
      ],
      [
        "Plant zu zweit einen fairen Papierbrückenversuch. Was bleibt gleich?",
        "Warum ist „mehr Münzen“ noch keine Erklärung? Erkläre die Rolle der Form.",
        "Vergleicht zwei Zusammenfassungen: Welche enthält die wichtigste Idee?",
      ],
      [
        "Erkläre den Wasserkreislauf mit den Wörtern „zuerst“, „danach“ und „wieder“.",
        "Warum ist Wasser aus einer trockenen Pfütze nicht einfach weg?",
        "Welche Frage könntet ihr durch eine Beobachtung untersuchen?",
      ],
      [
        "Welche Idee zur Müllvermeidung wäre für eure Klasse machbar? Begründe.",
        "Warum soll man in beiden Wochen auf ähnliche Kinderzahlen achten?",
        "Was müsste man noch wissen, bevor man ein Urteil über die Müllmenge fällt?",
      ],
      [
        "Erkläre den Unterschied zwischen der Mondform und dem sichtbaren beleuchteten Teil.",
        "Plant eine Beobachtung: Was schreibt ihr auf und warum?",
        "Welche falsche Erklärung für Mondphasen könnt ihr mit dem Text widerlegen?",
      ],
    ],
  };
  let trainingMode = "guided",
    trainingIndex = 0,
    trainingChoice = { heading: null, summary: null, keywords: new Set() },
    trainingDone = false,
    trainingTries = 0,
    trainingCompared = false,
    basicIndex = 0,
    basicChoice = null,
    basicDone = false;
  function strategyData() {
    return readingExtra.strategies[missionIndex][trainingIndex];
  }
  function drafts() {
    const key = "drafts-" + missionIndex;
    const v = mine()[key];
    if (!v || typeof v !== "object" || Array.isArray(v)) mine()[key] = {};
    return mine()[key];
  }
  function draft() {
    const key = String(trainingIndex),
      v = drafts()[key];
    if (!v || typeof v !== "object")
      drafts()[key] = { heading: "", keywords: "", summary: "", checks: [false, false, false] };
    return drafts()[key];
  }
  function storeDraft(name, text) {
    if (!["heading", "keywords", "summary"].includes(name)) return;
    draft()[name] = String(text).slice(0, 500);
    save();
  }
  function beginTraining(mode) {
    if (!["guided", "open"].includes(mode)) return;
    trainingMode = mode;
    trainingIndex = 0;
    resetTraining();
    phase = "strategy";
    render();
  }
  function resetTraining() {
    trainingChoice = { heading: null, summary: null, keywords: new Set() };
    trainingDone = false;
    trainingTries = 0;
    trainingCompared = false;
  }
  function trainingPick(kind, i) {
    if (trainingDone) return;
    const d = strategyData();
    if (kind === "keywords") {
      if (!Number.isInteger(i) || i < 0 || i >= d.words.length) return;
      trainingChoice.keywords.has(i)
        ? trainingChoice.keywords.delete(i)
        : trainingChoice.keywords.add(i);
    } else if (["heading", "summary"].includes(kind)) {
      trainingChoice[kind] = i;
    } else return;
    document.querySelectorAll("[data-training]").forEach((b) => {
      const [k, n] = b.dataset.training.split("-");
      const selected =
        k === "keywords" ? trainingChoice.keywords.has(+n) : trainingChoice[k] === +n;
      b.classList.toggle("selected", selected);
      b.setAttribute("aria-pressed", selected);
    });
  }
  function trainingOptions(kind, options) {
    return (
      '<div class="options">' +
      options
        .map(
          (x, i) =>
            `<button class="option ${kind === "keywords" ? (trainingChoice.keywords.has(i) ? "selected" : "") : trainingChoice[kind] === i ? "selected" : ""}" data-training="${kind}-${i}" aria-pressed="${kind === "keywords" ? trainingChoice.keywords.has(i) : trainingChoice[kind] === i}" onclick="learningApp.trainingPick('${kind}',${i})">${esc(x)}</button>`,
        )
        .join("") +
      "</div>"
    );
  }
  function renderTraining() {
    const d = strategyData(),
      p = current().paragraphs[trainingIndex];
    game.innerHTML =
      missionHeader() +
      `<div class="steps"><span class="step">1 · Leseziel</span><span class="step">2 · Lesen</span><span class="step current">3 · Absätze knacken</span><span class="step">4 · Fragen</span><span class="step">5 · Austauschen</span></div><p><b>${trainingMode === "guided" ? "Mit Auswahlhilfe" : "Selbst formulieren"} · Absatz ${trainingIndex + 1} von 3</b></p><div class="layout"><div class="card text"><span class="eyebrow">LIES DIESEN ABSATZ GENAU</span><div class="paragraph" style="font-size:${textSize}px"><span class="num">ABSATZ ${trainingIndex + 1}</span>${sentenceMarkup(trainingIndex)}</div>${glossaryMarkup()}<button onclick="learningApp.speakParagraph()">${hasRecording() ? "🎙️ Ganze Lehreraufnahme anhören" : "🔊 Diesen Absatz anhören"}</button></div><div class="card"><h2>Was ist hier wirklich wichtig?</h2>${trainingMode === "guided" ? `<h3>1 · Wähle <strong>eine Überschrift</strong> für den Absatz.</h3>${trainingOptions("heading", d.headings)}<h3>2 · Wähle <strong>zwei wichtige Wörter</strong>.</h3>${trainingOptions("keywords", d.words)}<h3>3 · Wähle <strong>einen kurzen Text</strong>. Er soll das Wichtigste sagen.</h3>${trainingOptions("summary", d.summaries)}<div class="tools"><button class="primary" onclick="learningApp.checkTraining()">Gedanken prüfen ✓</button><button data-hint-button aria-expanded="false" aria-controls="hint" onclick="learningApp.trainingHint()">💡 Tipp</button><button id="training-next" class="primary" data-continue onclick="learningApp.nextTraining()" disabled>Weiter →</button></div><div id="hint" class="hint" hidden></div><div id="task-reward"></div><div id="training-feedback" class="feedback" role="status" aria-live="polite">Finde das Wichtigste im Absatz. Tippe auf „Gedanken prüfen“. Danach kannst du weitergehen.</div>` : openTrainingMarkup(d)}</div></div>`;
  }
  function openTrainingMarkup(d) {
    const v = draft();
    return `<p>Schreibe mit <strong>deinen eigenen Worten</strong>. Es gibt mehrere passende Lösungen.</p><label for="draft-heading"><b>1 · Eine kurze Überschrift</b></label><input class="wide" id="draft-heading" maxlength="120" value="${esc(v.heading)}" oninput="learningApp.storeDraft('heading',this.value)"><label for="draft-keywords"><b>2 · Zwei wichtige Wörter</b></label><input class="wide" id="draft-keywords" maxlength="120" value="${esc(v.keywords)}" oninput="learningApp.storeDraft('keywords',this.value)"><label for="draft-summary"><b>3 · Das Wichtigste in einem Satz</b></label><textarea class="wide" id="draft-summary" maxlength="500" rows="4" oninput="learningApp.storeDraft('summary',this.value)">${esc(v.summary)}</textarea><div class="tools"><button class="primary" onclick="learningApp.compareTraining()">Mit Beispiel vergleichen</button><button data-hint-button aria-expanded="false" aria-controls="hint" onclick="learningApp.trainingHint()">💡 Tipp</button></div><div id="hint" class="hint" hidden></div><div id="task-reward"></div><div id="training-feedback" class="feedback" role="status" aria-live="polite">Deine Sätze werden gespeichert. Du kannst das Beispiel ansehen oder mit „Weiter“ weitergehen.</div><div id="training-example" hidden><div class="hint"><b>Ein mögliches Beispiel:</b><p>Überschrift: ${esc(d.heading)}<br>Begriffe: ${d.keywords.map(esc).join(", ")}<br>Zusammenfassung: ${esc(d.summary)}</p><p>Dein Satz darf anders klingen. Entscheidend ist, ob die wichtigste Aussage des Absatzes darin steckt.</p></div>${["Meine Überschrift passt zum ganzen Absatz.", "Meine Begriffe treffen das Thema.", "Mein Satz enthält die Hauptidee und keine erfundenen Informationen."].map((x, i) => `<label class="selfcheck"><input type="checkbox" id="self-${i}" ${v.checks?.[i] ? "checked" : ""} onchange="learningApp.selfCheck(${i},this.checked)"> ${x}</label>`).join("")}</div><p class="continue-help">Bist du fertig? Tippe auf „Weiter“. Du musst nicht alle Kästchen ankreuzen.</p><button id="training-next" class="primary" data-continue onclick="learningApp.nextTraining()">Weiter →</button>`;
  }
  function unusedTrainingHint() {
    document.getElementById("training-feedback").textContent =
      "Frage dich: Worum geht es im ganzen Absatz? Suche zwei passende Begriffe. Formuliere dann: „Der Absatz erklärt, dass …“. Lass Beispiele und unwichtige Einzelheiten weg.";
  }
  function evaluateTraining() {
    if (trainingDone) return;
    const d = strategyData(),
      c = trainingChoice,
      f = document.getElementById("training-feedback");
    if (c.heading === null || c.summary === null || c.keywords.size === 0) {
      f.textContent = "Wähle erst eine Überschrift, zwei Begriffe und eine Zusammenfassung.";
      return;
    }
    trainingTries++;
    const h = c.heading === d.headingIndex,
      k = c.keywords.size === 2 && d.wordIndices.every((i) => c.keywords.has(i)),
      s = c.summary === d.summaryIndex;
    if (h && k && s) {
      trainingDone = true;
      f.textContent = "✓ Gut verbunden! " + d.summary;
      document.getElementById("training-next").hidden = false;
    } else if (trainingTries < 3) {
      f.textContent =
        (h ? "✓ Überschrift passt. " : "Prüfe die Überschrift für den ganzen Absatz. ") +
        (k ? "✓ Begriffe passen. " : "Suche genau zwei passende Schlüsselbegriffe. ") +
        (s
          ? "✓ Zusammenfassung passt."
          : "Die Zusammenfassung soll die Hauptidee nennen, nicht nur ein Detail.");
    } else {
      trainingDone = true;
      f.textContent =
        "Ein passendes Beispiel: " +
        d.heading +
        ". Begriffe: " +
        d.keywords.join(", ") +
        ". " +
        d.summary;
      document.getElementById("training-next").hidden = false;
    }
    if (trainingDone)
      document.querySelectorAll("[data-training]").forEach((b) => (b.disabled = true));
  }
  function compareTraining() {
    const v = draft();
    for (const key of ["heading", "keywords", "summary"]) {
      const f = document.getElementById("draft-" + key);
      if (f) storeDraft(key, f.value);
    }
    if (["heading", "keywords", "summary"].some((k) => !String(v[k] || "").trim())) {
      document.getElementById("training-feedback").textContent =
        "Trage zuerst deine eigenen Gedanken in alle drei Felder ein.";
      return;
    }
    trainingCompared = true;
    document.getElementById("training-example").hidden = false;
    document.getElementById("training-feedback").textContent =
      "Vergleiche die Hauptidee mit dem Beispiel. Verbessere deinen Satz bei Bedarf und prüfe die drei Aussagen.";
    updateTrainingNext();
  }
  function selfCheck(i, yes) {
    if (i < 0 || i > 2) return;
    draft().checks[i] = !!yes;
    save();
    updateTrainingNext();
  }
  function updateTrainingNext() {
    const button = document.getElementById("training-next");
    const ready = trainingCompared && draft().checks.every(Boolean);
    if (button) {
      button.disabled = false;
      button.hidden = false;
    }
    if (ready) {
      Rewards.extra(String(profile), "reading-open-" + missionIndex + "-" + trainingIndex, 1);
      const n = document.getElementById("task-reward");
      if (n)
        n.innerHTML =
          '<div class="reward-card">' +
          Rewards.star(true, 36) +
          "<p><b>Ein Übungsstern für deine Selbstprüfung</b></p><p>Deine eigene Formulierung wird dabei nicht automatisch benotet.</p></div>";
      Feedback.avatarMini(profile);
    }
  }
  function nextTraining() {
    if (trainingMode === "open") {
      for (const key of ["heading", "keywords", "summary"]) {
        const field = document.getElementById("draft-" + key);
        if (field) storeDraft(key, field.value);
      }
    }
    if (trainingMode === "open" && trainingCompared && draft().checks.every(Boolean)) {
      Rewards.extra(String(profile), "reading-open-" + missionIndex + "-" + trainingIndex, 1);
      Feedback.avatarMini(profile);
    }
    if (trainingMode === "guided" && !trainingDone) return;
    stopAudio();
    if (trainingIndex < 2) {
      trainingIndex++;
      resetTraining();
      render();
    } else {
      mine()["strategy-" + missionIndex] = true;
      save();
      phase = "map";
      render();
    }
  }
  function speakParagraph() {
    if (hasRecording()) {
      playRecording(true);
      return;
    }
    speakText(current().paragraphs[trainingIndex]);
  }
  function mapDraft() {
    const key = "map-" + missionIndex,
      v = mine()[key];
    if (!v || typeof v !== "object" || Array.isArray(v))
      mine()[key] = { center: current().title, branches: ["", "", ""] };
    return mine()[key];
  }
  function mapInput(i, text) {
    const v = mapDraft();
    if (i === -1) v.center = String(text).slice(0, 120);
    else if (i >= 0 && i < 3) v.branches[i] = String(text).slice(0, 160);
    save();
  }
  function renderMap() {
    const d = readingExtra.strategies[missionIndex],
      v = mapDraft();
    game.innerHTML =
      missionHeader() +
      `<div class="card"><span class="eyebrow">GEDANKEN SICHTBAR MACHEN</span><h2>Deine Begriffskarte</h2><p>Ordne die drei Absätze als Äste um das Thema. ${trainingMode === "guided" ? "Die passenden Begriffe helfen dir dabei." : "Schreibe kurze Begriffe oder Überschriften – keine langen Texte."}</p><div class="concept-map"><div class="map-center">${trainingMode === "guided" ? esc(current().title) : `<label for="map-center">Thema</label><input id="map-center" maxlength="120" value="${esc(v.center)}" oninput="learningApp.mapInput(-1,this.value)">`}</div><div class="map-branches">${d.map((x, i) => `<div class="map-branch"><span class="small">ABSATZ ${i + 1}</span>${trainingMode === "guided" ? `<h3>${esc(x.heading)}</h3><p>${x.keywords.map(esc).join(" · ")}</p>` : `<label for="map-${i}">Mein Ast ${i + 1}</label><input id="map-${i}" maxlength="160" value="${esc(v.branches[i])}" oninput="learningApp.mapInput(${i},this.value)">`}</div>`).join("")}</div></div><p class="small">Die Äste zeigen, wie die Absätze zum gemeinsamen Thema gehören.</p><div class="tools"><button class="primary" data-continue onclick="learningApp.beginQuestions()">Weiter →</button><button onclick="learningApp.showMapExample()">Beispiel ansehen</button></div><div id="map-example" class="hint" hidden></div></div>`;
  }
  function showMapExample() {
    const n = document.getElementById("map-example");
    n.hidden = false;
    n.textContent = readingExtra.strategies[missionIndex]
      .map((d, i) => "Absatz " + (i + 1) + ": " + d.heading + " – " + d.keywords.join(", "))
      .join(" | ");
  }
  function renderTalk() {
    game.innerHTML =
      missionHeader() +
      `<div class="card"><span class="eyebrow">ÜBER DEN TEXT SPRECHEN</span><h2>Erklären. Begründen. Weiterdenken.</h2><p>Suche dir eine Frage aus und sprich mit einem anderen Kind. Wenn du allein übst, erkläre deine Antwort laut.</p>${readingExtra.talks[missionIndex].map((t, i) => `<div class="hint"><b>${i + 1}.</b> ${esc(t)}</div>`).join("")}<p><b>Satzanfänge:</b> „Ich denke …, weil im Text …“ · „Meine wichtigste Idee ist …“ · „Ich sehe das anders, weil …“</p><details><summary>Gesprächshilfe</summary><p>Erst erklärt ein Kind. Das andere fragt nach: „Welche Textstelle zeigt das?“ Dann tauscht ihr die Rollen. Vergleicht eure Zusammenfassungen und sucht gemeinsam die Hauptidee.</p></details><p class="continue-help">Habt ihr über den Text gesprochen? Tippe auf „Weiter“.</p><button class="primary" data-continue onclick="learningApp.afterTalk()">Weiter →</button></div>`;
  }
  function afterTalk() {
    phase = "reflection";
    render();
  }
  function startBasics() {
    basicRewardAttempts = 0;
    stopAudio();
    basicIndex = 0;
    basicChoice = null;
    basicDone = false;
    phase = "basics";
    render();
  }
  function basicsPick(i) {
    if (basicDone) return;
    basicChoice = i;
    document.querySelectorAll("[data-basic]").forEach((b) => {
      const yes = Number(b.dataset.basic) === i;
      b.classList.toggle("selected", yes);
      b.setAttribute("aria-pressed", yes);
    });
  }
  function renderBasics() {
    const b = readingExtra.basics[basicIndex];
    game.innerHTML = `<div class="card"><button onclick="learningApp.home()">← Lernübersicht</button><span class="eyebrow"> LESE-WARM-UP · ${basicIndex + 1} VON 6</span><h2>${esc(b.kind)}</h2><p class="text">${esc(b.sentence)}</p><p class="small">Lies zuerst selbst. Höre danach zu und lies leise mit.</p><button onclick="learningApp.readBasic()">🔊 Satz anhören und mitlesen</button><h3>${esc(b.prompt)}</h3><div class="options">${b.options.map((x, i) => `<button class="option" data-basic="${i}" aria-pressed="false" onclick="learningApp.basicsPick(${i})">${esc(x)}</button>`).join("")}</div><div class="tools"><button class="primary" onclick="learningApp.checkBasics()">Prüfen ✓</button><button id="basics-next" class="primary" data-continue onclick="learningApp.nextBasics()" disabled>Weiter →</button></div><div id="task-reward"></div><div id="basics-feedback" class="feedback" role="status" aria-live="polite">Hier übst du kleine Bausteine für das Textverstehen.</div></div>`;
  }
  function readBasic() {
    speakText(readingExtra.basics[basicIndex].sentence);
  }
  function evaluateBasics() {
    if (basicDone) return;
    const b = readingExtra.basics[basicIndex],
      f = document.getElementById("basics-feedback");
    if (basicChoice === null) {
      f.textContent = "Wähle zuerst eine Antwort.";
      return;
    }
    if (basicChoice === b.correct) {
      basicDone = true;
      f.textContent = "✓ " + b.explain;
      document.getElementById("basics-next").hidden = false;
      document.getElementById("basics-next").disabled = false;
    } else f.textContent = "Lies den kurzen Text noch einmal. " + b.explain;
  }
  function nextBasics() {
    basicRewardAttempts = 0;
    if (!basicDone) return;
    if (basicIndex < 5) {
      basicIndex++;
      basicChoice = null;
      basicDone = false;
      render();
    } else {
      mine().warmup = true;
      save();
      home();
    }
  }

  const teacherRecordings = [
    "audio/igel-matthias-27266963ac.mp3",
    "audio/fledermaeuse-matthias-fe325fd9b1.mp3",
    "audio/bruecke-matthias-b4f6760dfe.mp3",
    "audio/wasserkreislauf-matthias-0015fb235a.mp3",
    "audio/muell-matthias-134c06b844.mp3",
    "audio/mond-matthias-15a1876e1c.mp3",
  ];
  let recordingMission = -1;
  function hasRecording() {
    return !!teacherRecordings[missionIndex] && phase !== "home" && phase !== "basics";
  }
  function syncRecording() {
    const active = hasRecording(),
      panel = document.getElementById("recording-panel");
    if (panel) panel.hidden = !active;
    if (!active) return;
    const title = document.getElementById("recording-title");
    if (title) title.textContent = "🎙️ Dein Lehrer liest: " + current().title;
    const player = document.getElementById("teacher-audio");
    if (player && recordingMission !== missionIndex) {
      player.pause();
      player.src = teacherRecordings[missionIndex];
      player.load?.();
      recordingMission = missionIndex;
    }
  }
  function recordingStarted() {
    Voice.interrupt();
  }
  function recordingStop(reset = false) {
    const player = document.getElementById("teacher-audio");
    if (player) {
      player.pause();
      if (reset) player.currentTime = 0;
    }
  }
  function playRecording(restart = false) {
    voiceStop();
    syncRecording();
    const player = document.getElementById("teacher-audio");
    if (!player) return;
    if (restart || player.ended) player.currentTime = 0;
    player.playbackRate = Voice.rate();
    const request = player.play();
    if (request && request.catch)
      request.catch(() =>
        Voice.status("Tippe auf Play im Audio-Player, um die Aufnahme zu starten."),
      );
    Voice.status(
      "Dein Lehrer liest: " + current().title + ". Du kannst im Player pausieren und zurückspulen.",
    );
  }

  let hintOpens = {},
    basicRewardAttempts = 0;
  function adaptiveHint() {
    if (Feedback.closeIfOpen()) return;
    const q = question();
    let text;
    const key = missionIndex + "-" + qIndex + "-" + tries;
    const level = hintOpens[key] || 0;
    if (done) text = "Dieser Schritt ist fertig. Lies die Antwort. Tippe dann auf „Weiter“.";
    else {
      text = q.hint;
      if (tries > 0 || level > 0)
        text +=
          " Lies die passende Stelle im Text noch einmal. Prüfe dann deine Antwort. " +
          (q.type === "multi"
            ? "Mehrere Antworten können richtig sein."
            : "Nur eine Antwort passt zur Frage.");
      if (level > 1)
        text += " Sage mit deinen eigenen Worten: Worum geht es hier? Wähle dann deine Antwort.";
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
    Feedback.style("feedback", good ? "success" : attempted ? "error" : "neutral");
    if (!before && done) {
      const n = f.textContent.startsWith("✓") ? Math.max(1, 4 - tries) : 0;
      Feedback.taskReward(profile, n, Math.max(0, Rewards.earned(String(profile)) - wallet));
    }
  }
  function trainingHint() {
    if (Feedback.closeIfOpen()) return;
    const d = strategyData();
    let text;
    if (trainingMode === "open") {
      const v = draft();
      text = !v.heading.trim()
        ? "Beginne mit einer kurzen Überschrift: Worum geht es im ganzen Absatz?"
        : !v.keywords.trim()
          ? "Suche zwei wichtige Wörter. Sie sollen zum Thema passen. Kleine Beispiele kannst du weglassen."
          : !v.summary.trim()
            ? "Beginne so: „In dem Absatz geht es um …“. Schreibe das Wichtigste in einem Satz. Nutze dabei deine zwei Wörter."
            : "Lies deinen Satz noch einmal. Sagt er das Wichtigste? Schau dann in den Text. Steht dort auch, was du geschrieben hast?";
    } else if (trainingChoice.heading !== d.headingIndex)
      text =
        "Prüfe zuerst die Überschrift. Sie soll zum ganzen Absatz passen. Ein kleines Beispiel reicht nicht.";
    else if (
      trainingChoice.keywords.size !== 2 ||
      !d.wordIndices.every((i) => trainingChoice.keywords.has(i))
    )
      text =
        "Deine Überschrift passt. Suche jetzt zwei Schlüsselbegriffe. Das sind zwei wichtige Wörter zum Thema.";
    else
      text =
        "Überschrift und Wörter passen. Lies jetzt die kurzen Texte. Welcher Satz sagt das Wichtigste?";
    Feedback.showHint(text);
  }
  function scoreTraining() {
    const before = trainingDone;
    evaluateTraining();
    const d = strategyData(),
      c = trainingChoice;
    const good =
      trainingDone &&
      c.heading === d.headingIndex &&
      c.summary === d.summaryIndex &&
      c.keywords.size === 2 &&
      d.wordIndices.every((i) => c.keywords.has(i));
    Feedback.style("training-feedback", good ? "success" : trainingTries > 0 ? "error" : "neutral");
    if (!before && trainingDone) {
      const n = good ? Math.max(1, 4 - trainingTries) : 0;
      const add = Rewards.extra(
        String(profile),
        "reading-training-" + missionIndex + "-" + trainingIndex,
        n,
      );
      Feedback.taskReward(profile, n, add, "Dieses Absatztraining");
    }
  }
  function checkBasics() {
    if (!basicDone && basicChoice !== null) basicRewardAttempts++;
    const before = basicDone;
    evaluateBasics();
    Feedback.style(
      "basics-feedback",
      basicDone ? "success" : basicChoice === null ? "neutral" : "error",
    );
    if (!before && basicDone) {
      const n = Math.max(1, 4 - basicRewardAttempts),
        add = Rewards.extra(String(profile), "reading-warmup-" + basicIndex, n);
      Feedback.taskReward(profile, n, add, "Dieser Lesebaustein");
    }
  }

  const config = {
    id: "lesemissionen-klasse-vier",
    title: "Lesemissionen · Klasse 4",
    icon: "📖",
    eyebrow: "DEUTSCH · KLASSE 4",
    headline: "Lies genau.<br>Entdecke mehr.",
    intro:
      "Setze dein Leseziel. Kläre Wörter. Finde wichtige Stellen.<br>Verstehe Zusammenhänge und sammle Sterne.",
    home: "Sechs Sachtexte: Leseziel setzen, Absätze knacken, Gedanken ordnen, Fragen beantworten und miteinander sprechen.",
    accent: "#4c4b86",
    soft: "#eceaf7",
    teacher:
      "Orientiert am selbstregulierten Lesen von FiLBY-4: Leseziel setzen, Vorgehen planen, Wörter klären, wichtige Stellen markieren, Textverständnis prüfen und reflektieren. Deutsch 3/4: 2.3 Über Lesefähigkeiten verfügen und 2.4 Texte erschließen. Diese ergänzende Lern-App enthält eigene Sachtexte und Aufgaben; sie ist kein offizielles FiLBY-Angebot.",
    source: "https://www.lesen.bayern.de/filby4/sachtexttraining/",
  };

  // Read-aloud and the teacher's recordings must not play at the same time.
  function speakText(text) {
    recordingStop();
    Voice.speak(text);
  }
  function voiceStop() {
    recordingStop();
    Voice.stop();
  }
  function voiceContinue() {
    if (hasRecording()) playRecording(false);
    else {
      recordingStop();
      Voice.resume();
    }
  }

  const missions = [
    {
      title: "Der Garten wird zum Lebensraum",
      icon: "🦔",
      tag: "Natur · genau lesen",
      paragraphs: [
        "Ein ordentlich aufgeräumter Garten sieht für Menschen oft schön aus. Für viele Tiere bietet er aber nur wenige Verstecke. Ein Laubhaufen, eine wilde Ecke und ein Stück Hecke können das ändern. Dort finden kleine Tiere Schutz. Zwischen den Blättern leben außerdem Insekten und andere kleine Tiere. Einige davon dienen Igeln als Nahrung.",
        "Igel sind meistens in der Dämmerung und nachts unterwegs. Wenn wir längst schlafen, suchen sie nach Futter. Tagsüber ruhen sie an einem geschützten Ort. Ein Gartenzaun ohne Lücke kann ihre Suche erschweren. Eine kleine Öffnung am Boden ermöglicht ihnen den Weg in den Nachbargarten. So können mehrere Gärten zusammen einen größeren Lebensraum bilden.",
        "Im Herbst suchen Igel einen sicheren Platz für den Winterschlaf. Ein ruhiger Haufen aus Laub und Zweigen kann dafür geeignet sein. Wer den Garten pflegt, sollte solche Verstecke deshalb vorsichtig behandeln. Auch für andere Tiere ist ein Garten mit verschiedenen Pflanzen und geschützten Ecken nützlich. Es muss also nicht jede Ecke gleich aussehen.",
      ],
      glossary: [
        ["Dämmerung", "Die Zeit zwischen hellem Tag und dunkler Nacht."],
        ["Lebensraum", "Ein Gebiet, in dem Tiere oder Pflanzen leben."],
      ],
      questions: [
        {
          prompt: "Was bietet ein Laubhaufen kleinen Tieren?",
          type: "single",
          options: [
            "Nur einen Platz zum Sonnenbaden.",
            "Schutz und Verstecke.",
            "Eine fertige Wasserleitung.",
          ],
          correct: [1],
          hint: "Lies Absatz 1.",
          explain: "Absatz 1: Ein Laubhaufen kann Schutz bieten.",
        },
        {
          prompt: "Wann suchen Igel meistens nach Futter?",
          type: "single",
          options: [
            "Nur am frühen Mittag.",
            "Ausschließlich im Winter.",
            "In der Dämmerung und nachts.",
          ],
          correct: [2],
          hint: "Lies Absatz 2. Wann sind die Igel unterwegs?",
          explain: "Absatz 2: Igel sind meistens in der Dämmerung und nachts unterwegs.",
        },
        {
          prompt: "Warum hilft eine Öffnung unten im Zaun?",
          type: "single",
          options: [
            "Igel können zwischen Gärten wechseln.",
            "Sie macht das Gras kürzer.",
            "Sie hält alle Insekten fern.",
          ],
          correct: [0],
          hint: "Lies die letzten zwei Sätze in Absatz 2. Was erfährst du dort über die Gärten?",
          explain:
            "Eine Öffnung ermöglicht den Weg in den Nachbargarten. Zusammen entsteht ein größerer Lebensraum.",
        },
        {
          prompt: "Welche zwei Aussagen passen zum Text?",
          type: "multi",
          options: [
            "Igel ruhen tagsüber an geschützten Orten.",
            "Jeder Garten muss völlig aufgeräumt sein.",
            "Ein ruhiger Laubhaufen kann beim Winterschlaf helfen.",
            "Igel suchen nur am Tag Futter.",
          ],
          correct: [0, 2],
          hint: "Lies Absatz 2 und 3.",
          explain:
            "Absatz 2 nennt die Ruhe am Tag. Absatz 3 nennt einen möglichen Platz für den Winterschlaf.",
        },
        {
          prompt: "Welche Überschrift fasst den ganzen Text am besten zusammen?",
          type: "single",
          options: [
            "Warum alle Gartenzäune blau sein müssen.",
            "Wie ein Garten Tieren helfen kann.",
            "Wie Menschen im Winter schlafen.",
          ],
          correct: [1],
          hint: "Denke an alle drei Absätze.",
          explain:
            "Der gesamte Text beschreibt, wie Gärten Schutz, Nahrung und Wege für Tiere bieten.",
        },
      ],
    },
    {
      title: "Wie Fledermäuse sich orientieren",
      icon: "🦇",
      tag: "Natur · Zusammenhänge",
      paragraphs: [
        "Fledermäuse können fliegen, obwohl sie keine Vögel sind. Sie gehören zu den Säugetieren. Zwischen ihren verlängerten Fingern und dem Körper ist eine dünne Flughaut gespannt. Damit bewegen sie sich durch die Luft. Viele der Fledermäuse, die in Deutschland leben, jagen kleine Insekten. Besonders in der Dämmerung kann man sie manchmal am Himmel entdecken.",
        "Bei der Jagd hilft vielen Fledermäusen ein besonderer Trick: Sie senden sehr hohe Laute aus. Menschen können diese Laute meist nicht hören. Treffen die Schallwellen auf ein Hindernis oder ein Insekt, kommen sie als Echo zurück. Die Fledermaus hört das Echo. Daraus erhält sie Informationen darüber, wo sich etwas befindet. Dieses Verfahren nennt man Echoortung.",
        "Fledermäuse brauchen nicht nur Nahrung, sondern auch passende Ruheplätze. Je nach Art nutzen sie zum Beispiel Baumhöhlen oder Spalten an Gebäuden. Manche Tiere wechseln zwischen unterschiedlichen Quartieren. Alte Bäume mit Höhlen können deshalb wichtig für sie sein. Wer Fledermäuse beobachten möchte, kann in der Dämmerung aufmerksam zum Himmel schauen. Dabei sollte man ihre Ruheplätze ungestört lassen.",
      ],
      glossary: [
        ["Echo", "Schall, der zurückgeworfen wird."],
        ["Quartier", "Hier: ein Ruheplatz für Fledermäuse."],
      ],
      questions: [
        {
          prompt: "Zu welcher Tiergruppe gehören Fledermäuse?",
          type: "single",
          options: ["Zu den Vögeln.", "Zu den Säugetieren.", "Zu den Fischen."],
          correct: [1],
          hint: "Die Antwort steht in Absatz 1.",
          explain: "Absatz 1 nennt ausdrücklich die Säugetiere.",
        },
        {
          prompt: "Was passiert bei der Echoortung zuerst?",
          type: "single",
          options: [
            "Die Fledermaus hört ein zurückkehrendes Echo.",
            "Ein Mensch ruft ihren Namen.",
            "Die Fledermaus sendet hohe Laute aus.",
          ],
          correct: [2],
          hint: "Achte auf die Reihenfolge in Absatz 2.",
          explain: "Zuerst sendet die Fledermaus Laute aus. Danach kann ein Echo zurückkommen.",
        },
        {
          prompt: "Warum ist ein Echo bei der Jagd hilfreich?",
          type: "single",
          options: [
            "Es liefert Informationen über die Lage eines Insekts.",
            "Es verwandelt die Flughaut in Federn.",
            "Es macht alle Insekten unbeweglich.",
          ],
          correct: [0],
          hint: "Was erfährt die Fledermaus durch das Echo?",
          explain:
            "Absatz 2: Aus dem Echo erhält sie Informationen darüber, wo sich etwas befindet.",
        },
        {
          prompt: "Welche zwei Aussagen stimmen laut Text?",
          type: "multi",
          options: [
            "Alle Menschen hören die hohen Laute gut.",
            "Viele heimische Fledermäuse jagen Insekten.",
            "Fledermäuse haben Federn.",
            "Baumhöhlen können als Ruheplätze dienen.",
          ],
          correct: [1, 3],
          hint: "Vergleiche Absatz 1 und Absatz 3.",
          explain:
            "Viele Fledermäuse in Deutschland fressen Insekten. Manche nutzen Baumhöhlen als Ruheplatz.",
        },
        {
          prompt: "Welche Zusammenfassung passt am besten?",
          type: "single",
          options: [
            "Fledermäuse sind Vögel und bauen Nester.",
            "Fledermäuse fliegen, nutzen oft Echoortung und brauchen Ruheplätze.",
            "Fledermäuse leben nur unter Wasser.",
          ],
          correct: [1],
          hint: "Der kurze Text soll zu allen drei Absätzen passen.",
          explain: "Die Absätze erklären den Flug, die Echoortung und die Ruheplätze.",
        },
      ],
    },
    {
      title: "Eine Brücke aus Papier",
      icon: "🌉",
      tag: "Technik · Schlussfolgern",
      paragraphs: [
        "Zwei Kinder legen ein Blatt Papier zwischen zwei gleich hohe Bücher. Zwischen den Büchern bleibt eine Lücke. Das Papier soll wie eine Brücke über der Lücke liegen. Als die Kinder eine Münze in die Mitte legen, biegt es sich stark durch. Schon bei einer kleinen Last ist die flache Papierbrücke nicht besonders stabil.",
        "Nun nehmen die Kinder ein zweites, gleich großes Blatt. Sie falten es mehrfach hin und her, sodass es wie eine Ziehharmonika aussieht. Danach legen sie es über dieselbe Lücke. Dieses Mal können sie mehrere Münzen darauflegen, bevor die Brücke nachgibt. Das Papier ist noch immer dünn. Durch die Faltung hat es aber eine andere Form bekommen. Diese Form macht die Brücke in diesem Versuch belastbarer.",
        "Damit der Vergleich fair bleibt, verändern die Kinder nur die Form des Papiers. Der Abstand zwischen den Büchern bleibt gleich. Sie benutzen auch dieselbe Art von Papier und dieselben Münzen. Nach jedem Versuch schreiben sie auf, wie viele Münzen die Brücke getragen hat. So müssen sie sich nicht allein auf ihre Erinnerung verlassen. Ihre Ergebnisse können sie später miteinander vergleichen.",
      ],
      glossary: [
        ["Last", "Ein Gewicht, das auf etwas wirkt."],
        ["belastbar", "Kann ein bestimmtes Gewicht tragen."],
      ],
      questions: [
        {
          prompt: "Was passiert bei der flachen Papierbrücke?",
          type: "single",
          options: [
            "Sie verwandelt sich in ein Buch.",
            "Sie biegt sich unter einer Münze stark durch.",
            "Sie trägt unbegrenzt viele Münzen.",
          ],
          correct: [1],
          hint: "Lies Absatz 1.",
          explain: "Eine Münze in der Mitte lässt das flache Papier stark durchbiegen.",
        },
        {
          prompt: "Was verändern die Kinder beim zweiten Versuch?",
          type: "single",
          options: [
            "Die Höhe des Zimmers.",
            "Die Art der Münzen.",
            "Die Form des Papiers durch Falten.",
          ],
          correct: [2],
          hint: "Lies den Beginn von Absatz 2.",
          explain: "Sie falten ein gleich großes Blatt wie eine Ziehharmonika.",
        },
        {
          prompt: "Warum bleibt die Lücke zwischen den Büchern gleich groß?",
          type: "single",
          options: [
            "Damit die Formen fair verglichen werden können.",
            "Damit das Papier schwerer wird.",
            "Damit die Münzen ihre Farbe ändern.",
          ],
          correct: [0],
          hint: "Lies Absatz 3 und denke an einen fairen Versuch.",
          explain:
            "Wenn zusätzlich der Abstand verändert würde, wäre nicht klar, ob die Faltung den Unterschied macht.",
        },
        {
          prompt: "Welche zwei Dinge bleiben beim Vergleich gleich?",
          type: "multi",
          options: [
            "Die Form des Papiers.",
            "Der Abstand zwischen den Büchern.",
            "Die Anzahl der Faltungen.",
            "Die Art der Münzen.",
          ],
          correct: [1, 3],
          hint: "Lies Absatz 3. Was bleibt bei beiden Versuchen gleich?",
          explain: "Abstand, Papierart und Münzart bleiben gleich. Die Papierform wird verändert.",
        },
        {
          prompt: "Welche Schlussfolgerung passt zum Versuch?",
          type: "single",
          options: [
            "Nur dickes Papier kann eine Brücke bilden.",
            "Jede Papierbrücke trägt gleich viel.",
            "Auch die Form beeinflusst, wie viel Gewicht Papier trägt.",
          ],
          correct: [2],
          hint: "Das Papier ist gleich. Aber die Kinder falten es. Was ändert sich dadurch?",
          explain:
            "Die gefaltete Brücke trägt mehr Münzen. Die Form spielt in diesem Versuch eine wichtige Rolle.",
        },
      ],
    },
    {
      title: "Wasser ist unterwegs",
      icon: "💧",
      tag: "Umwelt · Reihenfolgen",
      paragraphs: [
        "Nach einem Regenschauer trocknet eine Pfütze oft langsam aus. Das Wasser ist dann nicht einfach verschwunden. Ein Teil wird zu Wasserdampf und gelangt in die Luft. Dies nennt man Verdunstung. Wärme kann diesen Vorgang beschleunigen. Auch von Seen, Flüssen und feuchtem Boden gelangt Wasser als Dampf in die Luft.",
        "Wasserdampf selbst ist unsichtbar. Wenn feuchte Luft abkühlt, können sehr kleine Wassertröpfchen entstehen. Viele solcher Tröpfchen bilden eine Wolke. Werden Tropfen in der Wolke groß und schwer genug, können sie als Regen zur Erde fallen. Ist es kalt genug, kann Niederschlag auch als Schnee ankommen. Nicht jede Wolke bringt sofort Regen.",
        "Auf der Erde nimmt das Wasser verschiedene Wege. Ein Teil versickert im Boden. Ein anderer Teil fließt über Bäche und Flüsse weiter. Wasser sammelt sich wieder in Seen oder im Meer. Von dort kann es erneut verdunsten. Diesen wiederkehrenden Weg nennt man Wasserkreislauf. Es ist also kein Weg mit einem festen Ende. Wasser kann immer wieder zwischen Boden, Gewässern und Luft wechseln.",
      ],
      glossary: [
        ["verdunsten", "Flüssiges Wasser wird zu Wasserdampf."],
        ["versickern", "Wasser dringt in den Boden ein."],
      ],
      questions: [
        {
          prompt: "Was passiert beim Verdunsten?",
          type: "single",
          options: [
            "Wasser wird zu Stein.",
            "Wasser wird zu Wasserdampf.",
            "Wasser wird immer zu Schnee.",
          ],
          correct: [1],
          hint: "Lies Absatz 1. Dort wird das Wort erklärt.",
          explain: "Beim Verdunsten gelangt Wasser als Wasserdampf in die Luft.",
        },
        {
          prompt: "Woraus besteht eine Wolke laut Text?",
          type: "single",
          options: [
            "Nur aus unsichtbarem Wasserdampf.",
            "Aus großen Blättern.",
            "Aus vielen sehr kleinen Wassertröpfchen.",
          ],
          correct: [2],
          hint: "Lies Absatz 2. Was kannst du sehen: Wasserdampf oder kleine Tropfen?",
          explain:
            "Wasserdampf ist unsichtbar. Die kleinen Wassertröpfchen können eine Wolke bilden.",
        },
        {
          prompt: "Welche Reihenfolge passt?",
          type: "single",
          options: [
            "Verdunstung → Wolkenbildung → Regen.",
            "Regen → Papierfaltung → Verdunstung.",
            "Wolkenbildung → Steine → Verdunstung.",
          ],
          correct: [0],
          hint: "Lies Absatz 1 und 2. Was passiert zuerst? Was passiert danach?",
          explain:
            "Wasser verdunstet. Beim Abkühlen können Wolkentröpfchen entstehen. Daraus kann später Regen fallen.",
        },
        {
          prompt: "Welche zwei Wege kann Wasser auf der Erde nehmen?",
          type: "multi",
          options: [
            "Im Boden versickern.",
            "Als Münze liegen bleiben.",
            "Über Bäche und Flüsse fließen.",
            "Sofort zu Glas werden.",
          ],
          correct: [0, 2],
          hint: "Suche die Wege in Absatz 3.",
          explain: "Wasser kann im Boden versickern oder über Bäche und Flüsse weiterfließen.",
        },
        {
          prompt: "Warum heißt der Vorgang Kreislauf?",
          type: "single",
          options: [
            "Weil jedes Wasserteilchen eine runde Form hat.",
            "Weil Wasser die Wege immer wieder durchlaufen kann.",
            "Weil Regen nur in Kreisen fällt.",
          ],
          correct: [1],
          hint: "Lies die letzten Sätze in Absatz 3.",
          explain:
            "Wasser kann wieder verdunsten und später zur Erde gelangen. Der Weg hat kein festes Ende.",
        },
      ],
    },
    {
      title: "Weniger Müll in der Pause",
      icon: "🥪",
      tag: "Alltag · Informationen prüfen",
      paragraphs: [
        "In einer Klasse quillt der Mülleimer nach der Pause oft über. Die Kinder wollen wissen, woher der Müll kommt. Sie schauen sich die Abfälle genauer an. Viele Verpackungen stammen von Snacks und Getränken. Die Klasse sammelt Ideen, wie sich ein Teil davon vermeiden lässt. Einfach nur einen größeren Mülleimer aufzustellen, würde die Menge des Mülls nicht verändern.",
        "Einige Kinder bringen ihre Brote nun in wiederverwendbaren Dosen mit. Andere nutzen Trinkflaschen, die sie immer wieder auffüllen können. Die Klasse achtet darauf, dass Dosen und Flaschen lange benutzt werden. Auch diese Gegenstände müssen schließlich hergestellt werden. Wenn eine Dose nur einmal verwendet und dann weggeworfen wird, geht der Vorteil der Wiederverwendung verloren.",
        "Um ihre Ideen zu prüfen, zählt die Klasse eine Woche lang die weggeworfenen Snackverpackungen. In einer späteren Woche zählt sie erneut. Dabei achtet sie darauf, dass ungefähr gleich viele Kinder anwesend sind. Die Ergebnisse werden in einer Tabelle notiert. So kann die Klasse vergleichen, ob weniger Verpackungen im Müll landen. Eine einzelne Beobachtung wäre dafür weniger aussagekräftig als mehrere vergleichbare Tage.",
      ],
      glossary: [
        ["wiederverwendbar", "Kann mehrmals benutzt werden."],
        ["aussagekräftig", "Liefert hilfreiche Informationen für eine Frage."],
      ],
      questions: [
        {
          prompt: "Woher stammen viele Abfälle in der Klasse?",
          type: "single",
          options: [
            "Von Snack- und Getränkeverpackungen.",
            "Nur von kaputten Tischen.",
            "Von den Schulbüchern.",
          ],
          correct: [0],
          hint: "Lies Absatz 1.",
          explain: "Viele Verpackungen stammen von Snacks und Getränken.",
        },
        {
          prompt: "Warum hilft ein größerer Mülleimer allein nicht beim Vermeiden von Müll?",
          type: "single",
          options: [
            "Er macht die Kinder kleiner.",
            "Die weggeworfene Müllmenge bleibt dadurch gleich.",
            "Er kann nicht in der Klasse stehen.",
          ],
          correct: [1],
          hint: "Ein größerer Eimer hat mehr Platz. Werfen die Kinder deshalb weniger Müll weg?",
          explain: "Ein größerer Mülleimer schafft mehr Platz. Er verhindert keine Verpackungen.",
        },
        {
          prompt: "Wann ist eine wiederverwendbare Dose besonders sinnvoll?",
          type: "single",
          options: [
            "Wenn sie nach einmaligem Gebrauch entsorgt wird.",
            "Wenn sie gar nicht benutzt wird.",
            "Wenn sie lange und häufig benutzt wird.",
          ],
          correct: [2],
          hint: "Lies Absatz 2.",
          explain:
            "Auch Dosen brauchen Material bei der Herstellung. Häufige Wiederverwendung ist wichtig.",
        },
        {
          prompt: "Welche zwei Dinge helfen bei einem fairen Vergleich?",
          type: "multi",
          options: [
            "Ungefähr gleich viele anwesende Kinder.",
            "In einer Woche nur einen Tag und in der anderen zehn Tage zählen.",
            "Ergebnisse in einer Tabelle festhalten.",
            "Die Ergebnisse nur raten.",
          ],
          correct: [0, 2],
          hint: "Lies Absatz 3. Worauf achtet die Klasse beim Zählen?",
          explain:
            "Die Klasse achtet auf ähnliche Kinderzahlen und hält ihre Beobachtungen in einer Tabelle fest.",
        },
        {
          prompt: "Welche Zusammenfassung passt am besten?",
          type: "single",
          options: [
            "Die Klasse kauft größere Mülleimer und hört auf zu zählen.",
            "Die Klasse sucht Müllquellen, erprobt Ideen und vergleicht Ergebnisse.",
            "Die Klasse entsorgt alle wiederverwendbaren Dosen sofort.",
          ],
          correct: [1],
          hint: "Was geschieht in Absatz 1, 2 und 3?",
          explain:
            "Die Absätze zeigen die Untersuchung, die Ideen zur Wiederverwendung und die Prüfung der Ergebnisse.",
        },
      ],
    },
    {
      title: "Warum der Mond anders aussieht",
      icon: "🌙",
      tag: "Weltraum · genau unterscheiden",
      paragraphs: [
        "Der Mond sieht am Himmel nicht jeden Abend gleich aus. Manchmal erkennen wir eine schmale Sichel. An anderen Tagen erscheint er fast rund. Trotzdem verändert der Mond dabei nicht seine Form. Er bleibt annähernd kugelförmig. Was sich verändert, ist der Teil seiner beleuchteten Seite, den wir von der Erde aus sehen können.",
        "Der Mond leuchtet nicht wie eine Lampe aus eigener Kraft. Sonnenlicht trifft auf seine Oberfläche und wird zurückgeworfen. Die Sonne beleuchtet immer ungefähr eine Hälfte des Mondes. Während der Mond um die Erde wandert, schauen wir aus unterschiedlichen Richtungen auf diese beleuchtete Hälfte. Deshalb sehen wir von ihr mal mehr und mal weniger. Diese verschiedenen Ansichten heißen Mondphasen.",
        "Wer die Mondphasen beobachten will, braucht Geduld. Ein Blick an einem einzigen Abend zeigt die Veränderung noch nicht. Man kann über mehrere Wochen Zeichnungen anfertigen und das Datum dazuschreiben. Wichtig ist auch, zu notieren, wenn Wolken den Blick verdecken. Dann weiß man später, warum eine Beobachtung fehlt. Solche Notizen helfen, die eigenen Beobachtungen zu ordnen, statt sich nur auf die Erinnerung zu verlassen.",
      ],
      glossary: [
        ["Oberfläche", "Die äußere Seite eines Körpers."],
        ["Mondphasen", "Die verschiedenen Ansichten der beleuchteten Mondseite."],
      ],
      questions: [
        {
          prompt: "Verändert der Mond bei den Mondphasen seine Form?",
          type: "single",
          options: [
            "Ja, er wird zu einem flachen Blatt.",
            "Nein, er bleibt annähernd kugelförmig.",
            "Ja, er wird jede Nacht kleiner.",
          ],
          correct: [1],
          hint: "Lies die letzten Sätze von Absatz 1.",
          explain:
            "Der Mond bleibt annähernd kugelförmig. Nur unsere Ansicht der beleuchteten Seite verändert sich.",
        },
        {
          prompt: "Woher kommt das Licht, das wir vom Mond sehen?",
          type: "single",
          options: [
            "Aus einer Lampe im Mond.",
            "Aus den Wolken.",
            "Von der Sonne; der Mond wirft es zurück.",
          ],
          correct: [2],
          hint: "Lies Absatz 2. Woher kommt das Licht?",
          explain: "Sonnenlicht trifft auf die Mondoberfläche und wird zurückgeworfen.",
        },
        {
          prompt: "Warum sehen wir mal mehr und mal weniger von der beleuchteten Seite?",
          type: "single",
          options: [
            "Der Mond wandert um die Erde, sodass sich unsere Blickrichtung ändert.",
            "Die Sonne wird jeden Abend ausgeschaltet.",
            "Der Mond verliert Stücke seiner Oberfläche.",
          ],
          correct: [0],
          hint: "Lies Absatz 2. Der Mond bewegt sich um die Erde. Was sehen wir dabei?",
          explain:
            "Beim Umlauf um die Erde ändert sich, wie wir auf die beleuchtete Hälfte schauen.",
        },
        {
          prompt: "Welche zwei Notizen helfen bei den Beobachtungen?",
          type: "multi",
          options: [
            "Das Datum einer Zeichnung.",
            "Die Lieblingsfarbe der beobachtenden Person.",
            "Ob Wolken den Blick verdeckt haben.",
            "Die Farbe des Schultisches.",
          ],
          correct: [0, 2],
          hint: "Lies die Hinweise in Absatz 3.",
          explain:
            "Datum und Wolken helfen, die Beobachtungen zeitlich zu ordnen und Lücken zu erklären.",
        },
        {
          prompt: "Welche Überschrift passt zu Absatz 3?",
          type: "single",
          options: [
            "So entsteht Sonnenlicht.",
            "Mondbeobachtungen planen und festhalten.",
            "Warum der Mond ein Würfel ist.",
          ],
          correct: [1],
          hint: "Absatz 3 beschreibt, wie man beobachten kann.",
          explain: "Der Absatz gibt Tipps für mehrwöchige Beobachtungen und hilfreiche Notizen.",
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
    highlighted = new Set(),
    done = false,
    tries = 0,
    phase = "home",
    goal = "",
    reflection = "",
    roundCorrect = 0,
    roundPoints = 0,
    textSize = 19;
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
    voiceStop();
    recordingStop(true);
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
    syncRecording();
    stats();
    game.innerHTML = `<h2>Wähle deine Mission</h2><p>${config.home}</p><div class="warmup"><b>🌱 Lese-Warm-up</b><p>Wörter, Verweiswörter, Satzverbindungen, Reihenfolgen und Oberbegriffe üben.</p><button onclick="learningApp.startBasics()">Kleine Bausteine trainieren →</button>${mine().warmup ? '<span class="badge">✓ Warm-up bearbeitet</span>' : ""}</div><div class="missions">${missions
      .map((m, i) => {
        let solved = 0;
        for (let q = 0; q < 5; q++) if (val(i, q)) solved++;
        return `<button class="mission" onclick="learningApp.startMission(${i})"><span class="icon">${m.icon}</span><span class="small">MISSION ${i + 1} · ${esc(m.tag)}</span><strong>${esc(m.title)}</strong>${missionProgress(i)}${mine()["strategy-" + i] ? '<span class="small">✓ Absatztraining bearbeitet</span>' : ""}</button>`;
      })
      .join(
        "",
      )}</div><div class="hint"><b>Deine Sammlung:</b> 15 Punkte beim ersten richtigen Versuch, 10 beim zweiten, 5 beim dritten. Wenn du alle fünf ${"Fragen"} einer Mission selbst gelöst hast, bekommst du 1 bis 3 Sterne. Tipps kosten keine Punkte. Wiederholen kann deinen Rekord verbessern. Bereits verdiente Punkte zählen nicht doppelt.</div>${allStars() >= 6 ? '<span class="badge">🏅 Sechs Sterne gesammelt!</span>' : ""}${allStars() === 18 ? '<span class="badge">🏆 Alle Missionen gemeistert!</span>' : ""}`;
  }
  function startMission(i) {
    if (!Number.isInteger(i) || i < 0 || i >= missions.length) return;
    stopAudio();
    missionIndex = i;
    qIndex = 0;
    selected = new Set();
    highlighted = new Set();
    done = false;
    tries = 0;
    goal = "";
    reflection = "";
    roundCorrect = 0;
    roundPoints = 0;
    phase = "plan";
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
    if (phase === "plan")
      return "<strong>Wähle ein Leseziel.</strong> Was möchtest du üben? Tippe auf ein Ziel. Tippe dann auf <strong>Weiter</strong>.";
    if (phase === "reading")
      return "<strong>Lies den Text.</strong> <strong>Markiere wichtige Sätze:</strong> Tippe auf einen Satz. Tippe noch einmal darauf, um die Markierung zu entfernen. Bist du fertig? Tippe auf <strong>Weiter</strong>.";
    if (phase === "strategy")
      return trainingMode === "guided"
        ? "<strong>Lies den Absatz und markiere wichtige Sätze.</strong> Wähle dann <strong>eine Überschrift</strong>, <strong>zwei wichtige Wörter</strong> und <strong>einen kurzen Text</strong>, der das Wichtigste sagt. Tippe auf <strong>Gedanken prüfen</strong>."
        : "<strong>Lies den Absatz und markiere wichtige Sätze.</strong> Schreibe <strong>eine Überschrift</strong>, <strong>zwei wichtige Wörter</strong> und <strong>einen Satz zum Inhalt</strong>. Bist du fertig? Tippe auf <strong>Weiter</strong>.";
    if (phase === "map")
      return trainingMode === "guided"
        ? "<strong>Schau dir die Karte an.</strong> In der Mitte steht das Thema. Die drei Äste zeigen wichtige Wörter aus den Absätzen. <strong>Lies die Wörter.</strong> Tippe dann auf <strong>Weiter</strong>."
        : "<strong>Fülle die Karte aus.</strong> In die Mitte kommt das <strong>Thema</strong>. Schreibe für jeden Absatz <strong>eine kurze Überschrift</strong> in einen Ast. Tippe dann auf <strong>Weiter</strong>.";
    if (phase === "talk")
      return "<strong>Wähle eine Frage.</strong> <strong>Sprich mit einem anderen Kind</strong> darüber. Zeige die passende Stelle im Text. Wenn du allein übst, sage deine Antwort laut. Tippe dann auf <strong>Weiter</strong>.";
    if (phase === "reflection")
      return "<strong>Denk kurz nach:</strong> Hat das Lesen gut geklappt? Du kannst <strong>eine Antwort wählen</strong>. Hier gibt es kein Richtig oder Falsch. Tippe dann auf <strong>Weiter</strong>.";
    if (phase === "finish")
      return "<strong>Schau dir deine Sterne an.</strong> Tippe auf <strong>Weiter zur Lernübersicht</strong>. Dort kannst du eine neue Mission wählen.";
    if (phase === "basics")
      return (
        "<strong>Lies den kurzen Text.</strong> " +
        esc(readingExtra.basics[basicIndex].prompt) +
        " <strong>Wähle eine Antwort.</strong> Tippe dann auf <strong>Prüfen</strong>."
      );
    const q = question();
    const title = '<span class="task-question">' + esc(q.prompt) + "</span> ";

    const count = q.correct.length,
      amount =
        count === 2 ? "zwei Antworten" : count === 3 ? "drei Antworten" : count + " Antworten";
    return (
      title +
      "<strong>Lies " +
      "die passende Stelle im Text" +
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
    syncRecording();
    if (phase === "strategy") {
      renderTraining();
      return;
    }
    if (phase === "map") {
      renderMap();
      return;
    }
    if (phase === "talk") {
      renderTalk();
      return;
    }
    if (phase === "basics") {
      renderBasics();
      return;
    }
    if (phase === "plan") {
      renderPlan();
      return;
    }
    if (phase === "reading") {
      renderReading();
      return;
    }
    if (phase === "reflection") {
      renderReflection();
      return;
    }
    if (phase === "finish") {
      renderFinish();
      return;
    }
    renderQuestion();
  }
  function setGoal(i) {
    goal = [
      "Ich finde die wichtigsten Informationen.",
      "Ich verstehe die Zusammenhänge.",
      "Ich fasse den Text zusammen.",
    ][i];
    renderPlan();
    showTaskInstruction();
  }
  function renderPlan() {
    game.innerHTML =
      missionHeader() +
      `<div class="card"><span class="eyebrow">VOR DEM LESEN</span><h2>Was ist dein Leseziel?</h2><p>Wähle ein Ziel. Dafür gibt es kein Richtig oder Falsch.</p>${["Ich finde die wichtigsten Informationen.", "Ich verstehe die Zusammenhänge.", "Ich fasse den Text zusammen."].map((x, i) => `<button class="goal ${goal === x ? "selected" : ""}" aria-pressed="${goal === x}" onclick="learningApp.setGoal(${i})">${esc(x)}</button>`).join("")}<p><b>Dein Plan:</b> Erst lesen. Unbekannte Wörter klären. Wichtige Stellen markieren. Dann die Fragen beantworten.</p><button class="primary" data-continue onclick="learningApp.beginReading()">Weiter →</button></div>`;
  }
  function beginReading() {
    if (!goal) goal = "Ich lese den Text genau.";
    phase = "reading";
    render();
  }
  function paragraphSentences(index) {
    const text = current().paragraphs[index];
    if (typeof Intl !== "undefined" && Intl.Segmenter)
      return Array.from(new Intl.Segmenter("de", { granularity: "sentence" }).segment(text), (x) =>
        x.segment.trim(),
      ).filter(Boolean);
    return (text.match(/[^.!?]+(?:[.!?]+|$)/g) || [text]).map((s) => s.trim()).filter(Boolean);
  }
  function sentenceMarkup(index) {
    return paragraphSentences(index)
      .map((sentence, j) => {
        const key = index + ":" + j;
        return `<button type="button" class="sentence ${highlighted.has(key) ? "selected" : ""}" data-sentence="${key}" aria-pressed="${highlighted.has(key)}" onclick="learningApp.highlight(${index},${j},this)">${esc(sentence)}</button>`;
      })
      .join(" ");
  }
  function paragraphMarkup() {
    return current()
      .paragraphs.map(
        (p, i) =>
          `<div class="paragraph" style="font-size:${textSize}px"><span class="num">ABSATZ ${i + 1}</span>${sentenceMarkup(i)}</div>`,
      )
      .join("");
  }

  function glossaryMarkup() {
    return `<details class="glossary"><summary>📖 Wörter klären</summary>${current()
      .glossary.map((x) => `<p><b>${esc(x[0])}:</b> ${esc(x[1])}</p>`)
      .join("")}</details>`;
  }
  function readingText() {
    return `<div class="card"><div class="top"><b>Dein Sachtext</b><div class="text-size"><button onclick="learningApp.fontChange(-2)" aria-label="Text kleiner">A−</button><button onclick="learningApp.fontChange(2)" aria-label="Text größer">A+</button></div></div><p class="small"><strong>Markiere wichtige Sätze.</strong> Tippe einen Satz an. Tippe noch einmal darauf, um die Markierung zu entfernen.</p><div id="paragraphs" class="text">${paragraphMarkup()}</div>${glossaryMarkup()}</div>`;
  }
  function highlight(paragraph, sentence, button) {
    if (
      !Number.isInteger(paragraph) ||
      paragraph < 0 ||
      paragraph >= current().paragraphs.length ||
      !Number.isInteger(sentence) ||
      sentence < 0 ||
      sentence >= paragraphSentences(paragraph).length
    )
      return;
    const key = paragraph + ":" + sentence;
    highlighted.has(key) ? highlighted.delete(key) : highlighted.add(key);
    button.classList.toggle("selected", highlighted.has(key));
    button.setAttribute("aria-pressed", highlighted.has(key));
  }
  function fontChange(n) {
    textSize = Math.min(29, Math.max(17, textSize + n));
    document.querySelectorAll(".paragraph").forEach((x) => (x.style.fontSize = textSize + "px"));
  }
  function renderReading() {
    game.innerHTML =
      missionHeader() +
      `<p>🎯 Dein Ziel: <b>${esc(goal)}</b></p>` +
      readingText() +
      `<div class="hint">Lies Absatz für Absatz. Kläre schwierige Wörter. Markiere wichtige Sätze. Bist du fertig? Tippe auf „Weiter“.</div><div class="tools"><button class="primary" data-continue onclick="learningApp.beginTraining('guided')">Weiter →</button><button onclick="learningApp.beginTraining('open')">🧠 Selbst formulieren</button><button onclick="learningApp.speak()">🔊 Noch einmal anhören</button></div>`;
  }
  function beginQuestions() {
    phase = "question";
    render();
  }
  function optionsMarkup(q) {
    return `<p class="small">${q.type === "multi" ? "Mehrere Antworten sind richtig. Wähle alle passenden Aussagen." : "Genau eine Antwort ist richtig."}</p><div class="options">${q.options.map((o, i) => `<button class="option" data-option="${i}" aria-pressed="false" onclick="learningApp.pick(${i},this)"><span class="choice-dot">${q.type === "multi" ? "□" : "○"}</span><span>${esc(o)}</span></button>`).join("")}</div>`;
  }
  function renderQuestion() {
    const q = question();
    game.innerHTML =
      missionHeader() +
      `<div class="bar"><div style="width:${(qIndex / 5) * 100}%"></div></div><p class="small">Frage ${qIndex + 1} von 5 · 🎯 ${esc(goal)}</p><div class="layout">${readingText()}<div class="card"><span class="eyebrow">TEXT VERSTEHEN</span><h2>${esc(q.prompt)}</h2>${optionsMarkup(q)}<div class="tools"><button class="primary" id="check" onclick="learningApp.check()">Prüfen ✓</button><button data-hint-button aria-expanded="false" aria-controls="hint" onclick="learningApp.hint()">💡 Tipp</button><button id="next" class="primary" data-continue onclick="learningApp.next()" disabled aria-describedby="continue-help">Weiter →</button></div><p id="continue-help" class="continue-help" role="status">Tippe zuerst auf „Prüfen“. Danach kannst du weitergehen.</p><div id="hint" class="hint" hidden></div><div id="task-reward"></div><div id="feedback" class="feedback" role="status" aria-live="polite">Lass dir Zeit. Du kannst jederzeit im Text nachsehen.</div></div></div>`;
  }
  function pick(i, node) {
    if (done) return;
    const q = question();
    if (q.type !== "multi") selected.clear();
    if (q.type === "multi" && selected.has(i)) selected.delete(i);
    else selected.add(i);
    document.querySelectorAll("[data-option]").forEach((x) => {
      const j = Number(x.dataset.option);
      x.classList.toggle("selected", selected.has(j));
      x.setAttribute("aria-pressed", selected.has(j));
    });
  }
  function hint() {
    adaptiveHint();
  }
  function evaluate() {
    if (done || phase !== "question") return;
    const q = question(),
      f = document.getElementById("feedback");
    let ok;
    if (!selected.size) {
      f.textContent =
        "Wähle zuerst eine Antwort oder markiere die wichtigen Angaben. Das zählt noch nicht als Versuch.";
      return;
    }
    ok = selected.size === q.correct.length && q.correct.every((i) => selected.has(i));
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

      document.querySelectorAll("[data-option]").forEach((x) => {
        const i = Number(x.dataset.option);
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
    document.querySelectorAll("[data-option]").forEach((x) => (x.disabled = true));
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
      phase = "talk";
      render();
    }
  }
  function setReflection(i) {
    reflection = [
      "Ich habe mein Ziel erreicht.",
      "Ich brauche noch einen zweiten Blick.",
      "Ich möchte den Text noch einmal lesen.",
    ][i];
    renderReflection();
    showTaskInstruction();
  }
  function renderReflection() {
    game.innerHTML =
      missionHeader() +
      `<div class="card"><span class="eyebrow">NACH DEM LESEN</span><h2>Wie hat dein Plan funktioniert?</h2><p>🎯 Dein Ziel war: <b>${esc(goal)}</b></p><p>Dieser Rückblick wird nicht bewertet. Sei ehrlich zu dir.</p>${["Ich habe mein Ziel erreicht.", "Ich brauche noch einen zweiten Blick.", "Ich möchte den Text noch einmal lesen."].map((x, i) => `<button class="goal ${reflection === x ? "selected" : ""}" aria-pressed="${reflection === x}" onclick="learningApp.setReflection(${i})">${esc(x)}</button>`).join("")}${reflection ? `<div class="hint">${reflection.startsWith("Ich habe") ? "Prima. Erkläre jemandem den wichtigsten Gedanken des Textes in eigenen Worten." : reflection.startsWith("Ich brauche") ? "Geh besonders zu den Absätzen zurück, die in den Lösungserklärungen genannt werden." : "Lies den Text nochmals Absatz für Absatz. Die Worterklärungen und die Vorlesefunktion können dir helfen."}</div>` : ""}<div class="tools"><button class="primary" data-continue onclick="learningApp.finishReading()">Weiter →</button></div></div>`;
  }
  function finishReading() {
    phase = "finish";
    render();
  }
  function renderFinish() {
    stats();
    const n = stars(missionIndex);
    game.innerHTML = `<div class="card finish"><div class="celebrate">${n ? "🎉" : "🔎"}</div><h2>Mission bearbeitet!</h2><p style="font-size:32px">${Rewards.stars(n)}</p><p><b>Dein bester Stand für diese Mission</b></p><p>In dieser Runde: ${roundCorrect} von 5 ${"Fragen"} selbst gelöst.<br>${roundPoints} neue Lernpunkte gesammelt.</p><p>${n === 3 ? "Alle drei Sterne sind in deiner Sammlung!" : n ? "Gut gemacht! Eine neue Runde kann deinen Rekord verbessern." : "Du hast dir die Lösungen angesehen. Löse in einer neuen Runde alle fünf selbst, um Sterne zu sammeln."}</p><div class="tools" style="justify-content:center"><button class="primary" data-continue onclick="learningApp.home()">Weiter zur Lernübersicht →</button><button onclick="learningApp.startMission(missionIndex)">Mission noch einmal</button></div></div>`;
  }
  function speak() {
    if (hasRecording()) {
      playRecording(true);
      return;
    }
    speakText(current().paragraphs.join(" "));
  }
  profile = Rewards.active();
  load();
  document.getElementById("profile").innerHTML = Array.from(
    { length: 20 },
    (_, i) => `<option value="${i + 1}">Lernplatz ${i + 1}</option>`,
  ).join("");

  function checkTraining() {
    scoreTraining();
    const forward = document.getElementById("training-next");
    if (forward) {
      forward.hidden = false;
      forward.disabled = !trainingDone;
    }
  }

  window.learningApp = {
    closeHint: Feedback.closeHint,
    recordingStarted,
    playRecording,
    recordingStop,
    voiceContinue,
    readBasic,
    changeVoice: Voice.changeVoice,
    changeRate: Voice.changeRate,
    previewVoice: () => {
      recordingStop();
      Voice.preview();
    },
    voiceStop,
    beginTraining,
    trainingPick,
    checkTraining,
    trainingHint,
    storeDraft,
    compareTraining,
    selfCheck,
    nextTraining,
    mapInput,
    showMapExample,
    speakParagraph,
    afterTalk,
    startBasics,
    basicsPick,
    checkBasics,
    nextBasics,
    beginQuestions,
    beginReading,
    changeProfile,
    check,
    finishReading,
    fontChange,
    highlight,
    hint,
    home,
    next,
    pick,
    setGoal,
    setReflection,
    speak,
    startMission,
    stopAudio,
  };
  document.getElementById("profile").value = String(profile);
  Voice.init(config.id + "-speech");
  home();
})();
