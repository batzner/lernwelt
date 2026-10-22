(function () {
  const missions = [
    {
      title: "Schleusen – ein Aufzug aus Wasser",
      icon: "🚢",
      sectionTitles: [
        "Zwei Wasserhöhen",
        "Die Kammer",
        "Ein Schiff fährt nach oben",
        "Ein Schiff fährt nach unten",
      ],
      paragraphs: [
        [
          "Auf einem Kanal fahren Schiffe auf dem Wasser.",
          "Nicht alle Teile eines Kanals liegen gleich hoch.",
          "Eine Schleuse hilft Schiffen, einen solchen Höhenunterschied zu überwinden.",
          "Sie hebt oder senkt ein Schiff mithilfe von Wasser.",
        ],
        [
          "Der wichtigste Teil einer Schleuse ist die Kammer, ein großer Raum für Wasser und Schiffe.",
          "An jedem Ende der Kammer gibt es ein Tor.",
          "Kleine Öffnungen lassen Wasser in die Kammer hinein oder aus ihr heraus.",
          "Wenn sich die Wassermenge in der Kammer ändert, ändert sich auch die Höhe der Wasseroberfläche.",
        ],
        [
          "Will ein Schiff nach oben fahren, hat das Wasser in der Kammer zuerst dieselbe Höhe wie im unteren Kanalteil.",
          "Das Schiff fährt durch das offene Tor in die Kammer.",
          "Dann wird das Tor geschlossen und Wasser aus dem oberen Kanalteil fließt durch die kleinen Öffnungen hinein.",
          "Mit dem steigenden Wasser steigt auch das Schiff nach oben.",
        ],
        [
          "Erst wenn das Wasser in der Kammer so hoch steht wie im oberen Kanalteil, kann das obere Tor geöffnet werden.",
          "Das Schiff fährt nun aus der Kammer in den oberen Kanalteil.",
          "Für die Fahrt nach unten wird dagegen Wasser aus der geschlossenen Kammer in den unteren Kanalteil gelassen.",
          "Dabei sinkt das Schiff mit dem Wasser, bis es auf der unteren Seite ausfahren kann.",
        ],
      ],
      questions: [
        {
          type: "single",
          prompt: "Wobei hilft eine Schleuse einem Schiff?",
          options: [
            "Sie macht das Schiff schneller.",
            "Sie hilft ihm über einen Höhenunterschied.",
            "Sie nimmt die Ladung aus dem Schiff.",
          ],
          correct: [1],
          hints: [
            "Lies den ersten Absatz.",
            "Achte auf die Wörter „gleich hoch“ und „hebt oder senkt“.",
          ],
          explain: "Die Schleuse hebt oder senkt das Schiff zwischen zwei Wasserhöhen.",
        },
        {
          type: "truth",
          prompt: "Entscheide bei jeder Aussage: richtig oder falsch?",
          rows: [
            "Die Kammer hat an jedem Ende ein Tor.",
            "Zum Heben des Schiffs fließt Wasser aus der Kammer heraus.",
            "Das Schiff steigt zusammen mit dem Wasser.",
            "Das obere Tor kann bei jeder Wasserhöhe geöffnet werden.",
          ],
          options: [
            "Die Kammer hat an jedem Ende ein Tor. — richtig",
            "Die Kammer hat an jedem Ende ein Tor. — falsch",
            "Zum Heben des Schiffs fließt Wasser aus der Kammer heraus. — richtig",
            "Zum Heben des Schiffs fließt Wasser aus der Kammer heraus. — falsch",
            "Das Schiff steigt zusammen mit dem Wasser. — richtig",
            "Das Schiff steigt zusammen mit dem Wasser. — falsch",
            "Das obere Tor kann bei jeder Wasserhöhe geöffnet werden. — richtig",
            "Das obere Tor kann bei jeder Wasserhöhe geöffnet werden. — falsch",
          ],
          correct: [0, 3, 4, 7],
          hints: [
            "Prüfe jede Aussage einzeln am Text.",
            "Lies die Sätze 6, 11, 12 und 13. Achte auf „hinein“ und „erst wenn“.",
          ],
          explain:
            "Die Kammer hat zwei Tore. Beim Heben fließt Wasser hinein. Das obere Tor öffnet erst bei gleicher Wasserhöhe.",
          revision: "g",
        },
        {
          type: "evidence",
          prompt: "Welcher Satz erklärt, warum das Schiff beim Füllen der Kammer steigt?",
          options: ["Satz 6", "Satz 10", "Satz 12", "Satz 14"],
          correct: [2],
          hints: ["Lies den dritten Absatz.", "Suche den Satz mit „steigenden Wasser“."],
          explain: "Satz 12 verbindet das steigende Wasser mit dem steigenden Schiff.",
        },
        {
          type: "crossout",
          prompt: "Vergleiche den Satz unten mit dem Text. Streiche nur die zusätzlichen Wörter.",
          options: [
            "Das",
            "große",
            "Schiff",
            "fährt",
            "langsam",
            "durch",
            "das",
            "offene",
            "Tor",
            "in",
            "die",
            "Kammer.",
          ],
          correct: [1, 4],
          hints: [
            "Suche den ähnlichen Satz im dritten Absatz.",
            "Vergleiche Satz 10 Wort für Wort. Es sind zwei Wörter zu viel.",
          ],
          explain: "In Satz 10 steht: Das Schiff fährt durch das offene Tor in die Kammer.",
          revision: "g",
        },
        {
          type: "word",
          prompt:
            "Finde im Text ein Wort mit ähnlicher Bedeutung wie „große Tür“. Schreibe das Wort und die Satznummer auf.",
          word: "Tor",
          sentence: 6,
          options: ["Tor · Satz 6, 10, 11 oder 13"],
          correct: [0],
          hints: [
            "Suche im zweiten Absatz.",
            "In Satz 6 steht das gesuchte Wort. Es hat drei Buchstaben.",
          ],
          explain:
            "„Tor“ bedeutet hier eine große Tür. Du findest das Wort in den Sätzen 6, 10, 11 und 13.",
          revision: "g",
          sentences: [6, 10, 11, 13],
          acceptedWords: ["Tor"],
        },
        {
          type: "single",
          prompt: "Warum wurde dieser Text geschrieben?",
          options: [
            "Er soll erklären, wie eine Schleuse arbeitet.",
            "Er soll eine spannende Schiffsreise erzählen.",
            "Er soll für ein bestimmtes Schiff werben.",
          ],
          correct: [0],
          hints: [
            "Überlege, was du durch den Text erfährst.",
            "Die Absätze erklären Teile einer Schleuse und ihren Ablauf.",
          ],
          explain: "Der Sachtext erklärt, wie Wasser ein Schiff nach oben oder unten bringt.",
          revision: "g",
        },
        {
          type: "open",
          prompt:
            "Schreibe eine eigene Frage mit „Was“. Der Text muss sie beantworten. Schreibe die Antwort und eine passende Satznummer dazu.",
          example:
            "Was geschieht bei der Fahrt nach unten mit dem Wasser in der Kammer? Es wird in den unteren Kanalteil gelassen. Das steht in Satz 15.",
          checks: [
            "Beginnt meine Frage mit „Was“ und endet sie mit einem Fragezeichen?",
            "Passt meine Antwort zur Frage und zur genannten Textstelle?",
          ],
          hints: [],
          explain: "",
          revision: "g",
        },
        {
          type: "open",
          prompt:
            "Erkläre einem anderen Kind: Warum heißt der Text „ein Aufzug aus Wasser“? Nutze eine Stelle aus dem Text.",
          example:
            "Wie ein Aufzug bringt die Schleuse etwas nach oben oder unten. In Satz 12 steht, dass das Schiff mit dem Wasser steigt.",
          checks: [
            "Habe ich erklärt, was sich nach oben oder unten bewegt?",
            "Habe ich eine passende Stelle aus dem Text genannt?",
          ],
          hints: [],
          explain: "",
        },
      ],
    },
    {
      title: "Wie aus Altpapier neues Papier wird",
      icon: "📄",
      sectionTitles: [
        "Papier ein zweites Mal nutzen",
        "Aus Papier wird Brei",
        "Aus dem Brei wird eine Bahn",
        "Papier bewusst nutzen",
      ],
      paragraphs: [
        [
          "Für viele neue Papierprodukte wird gebrauchtes Papier gesammelt.",
          "Dieses gebrauchte Papier heißt Altpapier.",
          "Es enthält Fasern, also sehr kleine, längliche Teile.",
          "Aus diesen Fasern lässt sich wieder Papier herstellen.",
        ],
        [
          "In einer Papierfabrik wird das Altpapier mit Wasser vermischt.",
          "Dabei löst sich das Papier in einzelne Fasern auf und es entsteht ein dünner Brei.",
          "Siebe helfen, störende Dinge aus dem Brei zu entfernen.",
          "Für helles Papier wird auch möglichst viel von der alten Druckfarbe entfernt.",
        ],
        [
          "Der gereinigte Faserbrei kommt auf ein breites Sieb.",
          "Ein Teil des Wassers läuft durch das Sieb ab und die Fasern bleiben darauf liegen.",
          "Pressen drücken weiteres Wasser heraus, danach wird die Papierbahn getrocknet.",
          "Das fertige Papier kann aufgerollt oder in passende Stücke geschnitten werden.",
        ],
        [
          "Papier aus Altpapier nennt man Recyclingpapier.",
          "Seine Herstellung braucht meist weniger Wasser und Energie als Papier aus frischen Holzfasern.",
          "Die Fasern können mehrfach genutzt werden, aber nicht unbegrenzt.",
          "Deshalb ist es auch bei Recyclingpapier sinnvoll, nur so viel Papier zu verbrauchen, wie man braucht.",
        ],
      ],
      questions: [
        {
          type: "single",
          prompt: "Was ist Altpapier?",
          options: [
            "Papier, das noch nie benutzt wurde.",
            "Gebrauchtes Papier, das wieder genutzt werden kann.",
            "Nur Papier, das braun ist.",
          ],
          correct: [1],
          hints: ["Lies den ersten Absatz.", "Der zweite Satz erklärt das Wort."],
          explain: "Altpapier ist gebrauchtes Papier. Seine Fasern lassen sich wieder nutzen.",
        },
        {
          type: "multi",
          prompt: "Welche Fragen beantwortet der Text? Wähle die zwei passenden Fragen.",
          options: [
            "Wie wird aus Altpapier ein Brei?",
            "Wie viele Papierfabriken gibt es in Deutschland?",
            "Was passiert nach dem Pressen mit der Papierbahn?",
            "Wie viel kostet eine Rolle Recyclingpapier?",
          ],
          correct: [0, 2],
          hints: [
            "Suche zu jeder Frage eine Antwort im Text.",
            "In Satz 5 und Satz 11 findest du Antworten. Preise und die Zahl der Fabriken fehlen.",
          ],
          explain:
            "Der Text erklärt das Mischen mit Wasser und das Trocknen nach dem Pressen. Preise und die Zahl der Fabriken nennt er nicht.",
          revision: "g",
        },
        {
          type: "crossout",
          prompt: "Vergleiche den Satz unten mit dem Text. Streiche nur die zusätzlichen Wörter.",
          options: [
            "In",
            "einer",
            "großen",
            "Papierfabrik",
            "wird",
            "das",
            "alte",
            "Altpapier",
            "mit",
            "warmem",
            "Wasser",
            "vermischt.",
          ],
          correct: [2, 6, 9],
          hints: [
            "Suche den passenden Satz im zweiten Absatz.",
            "Vergleiche Satz 5 Wort für Wort. Drei Wörter wurden ergänzt.",
          ],
          explain:
            "In Satz 5 steht: In einer Papierfabrik wird das Altpapier mit Wasser vermischt.",
          revision: "g",
        },
        {
          type: "truth",
          prompt: "Entscheide bei jeder Aussage: richtig oder falsch?",
          rows: [
            "Fasern bleiben auf dem breiten Sieb liegen.",
            "Nach dem Pressen wird die Papierbahn getrocknet.",
            "Papierfasern können ohne Ende wiederverwendet werden.",
            "Recyclingpapier braucht bei der Herstellung gar kein Wasser.",
          ],
          options: [
            "Fasern bleiben auf dem breiten Sieb liegen. — richtig",
            "Fasern bleiben auf dem breiten Sieb liegen. — falsch",
            "Nach dem Pressen wird die Papierbahn getrocknet. — richtig",
            "Nach dem Pressen wird die Papierbahn getrocknet. — falsch",
            "Papierfasern können ohne Ende wiederverwendet werden. — richtig",
            "Papierfasern können ohne Ende wiederverwendet werden. — falsch",
            "Recyclingpapier braucht bei der Herstellung gar kein Wasser. — richtig",
            "Recyclingpapier braucht bei der Herstellung gar kein Wasser. — falsch",
          ],
          correct: [0, 2, 5, 7],
          hints: [
            "Suche für jede Aussage eine passende Stelle.",
            "Lies die Sätze 10, 11, 14 und 15. „Weniger“ bedeutet nicht „gar kein“.",
          ],
          explain:
            "Fasern bleiben auf dem Sieb. Die Bahn wird getrocknet. Fasern sind nicht unbegrenzt nutzbar; auch Recyclingpapier braucht Wasser.",
          revision: "g",
        },
        {
          type: "single",
          prompt: "Welche Überschrift passt zum ganzen Text?",
          options: [
            "So entstehen besonders bunte Bilder.",
            "Warum Papier immer neu aus Holz gemacht wird.",
            "Der Weg vom gebrauchten Papier zum neuen Papier.",
          ],
          correct: [2],
          hints: [
            "Überlege, was alle vier Absätze verbindet.",
            "Es geht um das Wiederverwenden von Papierfasern.",
          ],
          explain: "Der Text erklärt den Weg des Altpapiers bis zum neuen Papier.",
        },
        {
          type: "word",
          prompt:
            "Finde im Text ein Wort mit ähnlicher Bedeutung wie „benutztes“. Schreibe das Wort und die Satznummer auf.",
          word: "gebrauchtes",
          sentence: 1,
          options: ["gebrauchtes · Satz 1 oder gebrauchte · Satz 2"],
          correct: [0],
          hints: [
            "Suche im ersten Absatz.",
            "In Satz 1 steht ein Wort, das beschreibt, dass das Papier schon benutzt wurde.",
          ],
          explain:
            "„gebrauchtes“ in Satz 1 und „gebrauchte“ in Satz 2 bedeuten hier, dass das Papier schon benutzt wurde.",
          revision: "g",
          sentences: [1, 2],
          acceptedWords: ["gebrauchtes", "gebrauchte"],
        },
        {
          type: "open",
          prompt: "Fasse den Absatz „Aus dem Brei wird eine Bahn“ in einem Satz zusammen.",
          example:
            "Aus dem Brei wird eine Papierbahn, indem Wasser erst abläuft und dann durch Pressen und Trocknen entfernt wird.",
          checks: [
            "Habe ich erklärt, wie Wasser aus dem Brei kommt?",
            "Habe ich die wichtigsten Schritte mit eigenen Worten verbunden?",
          ],
          hints: [],
          explain: "",
        },
        {
          type: "open",
          prompt:
            "Findest du es sinnvoll, auch mit Recyclingpapier sparsam umzugehen? Begründe deine Meinung mit einem Beispiel aus dem Text.",
          example:
            "Ja. Auch Recyclingpapier braucht bei der Herstellung Wasser und Energie. Außerdem können Fasern nicht unbegrenzt genutzt werden. Das steht in den Sätzen 14 und 15.",
          checks: [
            "Habe ich meine Meinung mit einem Grund erklärt?",
            "Habe ich eine passende Information aus dem Text als Beispiel genutzt?",
          ],
          hints: [],
          explain: "",
          revision: "g",
        },
      ],
    },
    {
      title: "Warum Hefeteig aufgeht",
      icon: "🍞",
      sectionTitles: [
        "Ein winziges Lebewesen",
        "Gas im Teig",
        "Zeit zum Wachsen",
        "Vom Teig zum Gebäck",
      ],
      paragraphs: [
        [
          "Hefe wird zum Backen von Brot, Brötchen und anderem Gebäck genutzt.",
          "Sie besteht aus winzigen Lebewesen, die zu den Pilzen gehören.",
          "Einzelne Hefezellen sind so klein, dass man sie ohne Hilfsmittel nicht erkennen kann.",
          "Beim Backen verwendet man zum Beispiel frische Hefe oder trockene Hefe.",
        ],
        [
          "In einem feuchten Teig findet die Hefe Zucker als Nahrung.",
          "Dieser Zucker muss nicht extra zugegeben werden, denn er kann auch aus Stoffen im Mehl entstehen.",
          "Wenn Hefe Zucker verarbeitet, entsteht unter anderem das Gas Kohlendioxid.",
          "Das Gas sammelt sich in kleinen Blasen im Teig.",
        ],
        [
          "Die Gasblasen brauchen Platz und machen den Teig größer.",
          "Wenn ein Rezept sagt, dass der Teig „gehen“ soll, ist genau dieses Größerwerden gemeint.",
          "Dazu lässt man den Teig eine Zeit lang ruhen.",
          "Wärme unterstützt die Arbeit der Hefe, aber zu große Hitze schadet ihr.",
        ],
        [
          "Beim Backen wird aus dem weichen Teig festes Gebäck.",
          "Die kleinen Hohlräume im fertigen Gebäck zeigen, wo vorher Gasblasen waren.",
          "So hilft die Hefe dabei, dass das Innere eines Brötchens locker wird.",
          "Wie lange ein Teig ruhen muss, hängt unter anderem von der Wärme und der verwendeten Menge Hefe ab.",
        ],
      ],
      questions: [
        {
          type: "single",
          prompt: "Was ist Hefe?",
          options: [
            "Ein kleines Stück Mehl.",
            "Ein Gas, das man in den Teig pustet.",
            "Ein winziges Lebewesen aus der Gruppe der Pilze.",
          ],
          correct: [2],
          hints: ["Lies den ersten Absatz.", "Achte auf den zweiten Satz."],
          explain: "Hefe besteht aus winzigen Lebewesen, die zu den Pilzen gehören.",
        },
        {
          type: "truth",
          prompt: "Entscheide bei jeder Aussage: richtig oder falsch?",
          rows: [
            "Hefe gehört zu den Pilzen.",
            "Für Hefeteig muss immer extra Zucker zugegeben werden.",
            "Die Gasblasen machen den Teig größer.",
            "Sehr große Hitze hilft der Hefe besonders gut.",
          ],
          options: [
            "Hefe gehört zu den Pilzen. — richtig",
            "Hefe gehört zu den Pilzen. — falsch",
            "Für Hefeteig muss immer extra Zucker zugegeben werden. — richtig",
            "Für Hefeteig muss immer extra Zucker zugegeben werden. — falsch",
            "Die Gasblasen machen den Teig größer. — richtig",
            "Die Gasblasen machen den Teig größer. — falsch",
            "Sehr große Hitze hilft der Hefe besonders gut. — richtig",
            "Sehr große Hitze hilft der Hefe besonders gut. — falsch",
          ],
          correct: [0, 3, 4, 7],
          hints: [
            "Prüfe jede Aussage einzeln.",
            "Lies die Sätze 2, 6, 9 und 12. Achte auf „nicht“ und „schadet“.",
          ],
          explain:
            "Hefe gehört zu den Pilzen. Zucker kann auch aus Stoffen im Mehl entstehen. Gasblasen vergrößern den Teig; zu viel Hitze schadet der Hefe.",
          revision: "g",
        },
        {
          type: "crossout",
          prompt: "Vergleiche den Satz unten mit dem Text. Streiche nur die zusätzlichen Wörter.",
          options: [
            "Das",
            "warme",
            "Gas",
            "sammelt",
            "sich",
            "schnell",
            "in",
            "kleinen",
            "runden",
            "Blasen",
            "im",
            "Teig.",
          ],
          correct: [1, 5, 8],
          hints: [
            "Suche den Satz mit den Blasen im zweiten Absatz.",
            "Vergleiche Satz 8 Wort für Wort. Drei Wörter sind zusätzlich im Satz.",
          ],
          explain: "In Satz 8 steht: Das Gas sammelt sich in kleinen Blasen im Teig.",
          revision: "g",
        },
        {
          type: "word",
          prompt:
            "Finde im Text ein Wort mit ähnlicher Bedeutung wie „sehr kleinen“. Schreibe das Wort und die Satznummer auf.",
          word: "winzigen",
          sentence: 2,
          options: ["winzigen · Satz 2"],
          correct: [0],
          hints: [
            "Suche im ersten Absatz.",
            "In Satz 2 beschreibt ein Wort, wie klein die Lebewesen sind.",
          ],
          explain: "„winzigen“ steht in Satz 2 und passt zur gesuchten Bedeutung.",
          revision: "g",
          sentences: [2],
          acceptedWords: ["winzigen"],
        },
        {
          type: "single",
          prompt: "Welche Überschrift passt zum dritten Absatz?",
          options: [
            "Warum der Teig Ruhe braucht.",
            "Wie man fertige Brötchen aufbewahrt.",
            "Welche Farbe ein Pilz hat.",
          ],
          correct: [0],
          hints: [
            "Überlege, welche Information in diesem Absatz im Mittelpunkt steht.",
            "Es geht um Gasblasen, Größerwerden und Ruhezeit.",
          ],
          explain: "Der Absatz erklärt das Größerwerden des Teigs während der Ruhezeit.",
        },
        {
          type: "multi",
          prompt: "Welche Fragen beantwortet der Text? Wähle die zwei passenden Fragen.",
          options: [
            "Welches Gas entsteht bei der Arbeit der Hefe?",
            "Wie viele Minuten muss jeder Hefeteig ruhen?",
            "Was bedeutet „den Teig gehen lassen“?",
            "Wie viel Hefe braucht man für jedes Brot?",
          ],
          correct: [0, 2],
          hints: [
            "Suche zu jeder Frage eine Textstelle.",
            "Satz 7 nennt das Gas. Die Sätze 10 und 11 erklären „gehen“. Genaue Mengen und Zeiten fehlen.",
          ],
          explain:
            "Kohlendioxid wird genannt. „Gehen“ bedeutet, den Teig zum Größerwerden ruhen zu lassen. Eine feste Zeit und eine Menge für jedes Brot stehen nicht im Text.",
          revision: "g",
        },
        {
          type: "open",
          prompt:
            "Schreibe eine eigene Frage mit „Wie“. Der Text muss sie beantworten. Schreibe die Antwort und eine passende Satznummer dazu.",
          example:
            "Wie kann man frühere Gasblasen im fertigen Gebäck erkennen? Man sieht dort kleine Hohlräume. Das steht in Satz 14.",
          checks: [
            "Beginnt meine Frage mit „Wie“ und endet sie mit einem Fragezeichen?",
            "Passt meine Antwort zur Frage und zur genannten Textstelle?",
          ],
          hints: [],
          explain: "",
          revision: "g",
        },
        {
          type: "open",
          prompt:
            "Ein Kind sagt: „Ohne extra Zucker kann ein Hefeteig nicht größer werden.“ Antworte dem Kind und nenne eine passende Stelle aus dem Text.",
          example:
            "Doch, Zucker kann auch aus Stoffen im Mehl entstehen. Das steht in Satz 6. Die Hefe kann diesen Zucker nutzen und Gas bilden.",
          checks: [
            "Habe ich dem Kind meine Antwort erklärt?",
            "Habe ich eine passende Stelle aus dem Text genannt?",
          ],
          hints: [],
          explain: "",
        },
      ],
    },
  ];
  let profile = Rewards.active(),
    mission = 0,
    task = -1,
    selected = new Set(),
    marks = new Set(),
    tries = 0,
    done = false,
    hintLevel = 0;
  const $ = (id) => document.getElementById(id),
    esc = (s) =>
      String(s ?? "").replace(
        /[&<>"']/g,
        (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c],
      );
  function parse(key) {
    try {
      return JSON.parse(localStorage.getItem(key) || "{}");
    } catch {
      return {};
    }
  }
  function taskKey(m = mission, t = task) {
    return (missions[m].questions[t]?.revision === "g" ? "g" : "") + m + "-" + t;
  }
  function rewardKey(m = mission, t = task) {
    return (
      (missions[m].questions[t]?.revision === "g" ? "reading-practice-" : "reading-facts-") +
      m +
      "-" +
      t
    );
  }
  function result(m = mission, t = task) {
    return (
      parse("lernwelt-sachwerkstatt-v1")[profile]?.[taskKey(m, t)] || {
        best: 0,
        status: "",
        answer: "",
      }
    );
  }
  function best(m, t) {
    return Math.max(
      result(m, t).best || 0,
      Number(parse("lernwelt-extra-rewards")[profile]?.[rewardKey(m, t)]) || 0,
    );
  }
  function save(patch) {
    const all = parse("lernwelt-sachwerkstatt-v1");
    all[profile] ??= {};
    all[profile][taskKey()] = { ...result(), ...patch };
    try {
      localStorage.setItem("lernwelt-sachwerkstatt-v1", JSON.stringify(all));
    } catch {}
  }
  function wallet() {
    $("wallet").innerHTML =
      Rewards.star(true, 26) + " " + Rewards.balance(profile) + " Sterne · Avatar →";
  }
  function top() {
    const move = () => {
      const n = $("task-title") || $("game");
      n.focus?.({ preventScroll: true });
      n.scrollIntoView?.({ block: "start", behavior: "instant" });
    };
    if (typeof requestAnimationFrame === "function") requestAnimationFrame(move);
    else move();
  }
  function headline(text) {
    return (
      '<section class="task" id="task-title" tabindex="-1"><h2>Deine Aufgabe</h2><p>' +
      text +
      "</p></section>"
    );
  }
  function completed(m, t) {
    return (
      best(m, t) > 0 ||
      ["bearbeitet", "richtig", "selbst_geprueft", "loesung_gesehen"].includes(result(m, t).status)
    );
  }
  function home() {
    wallet();
    $("game").innerHTML =
      '<h1 tabindex="-1" id="task-title">Die Lesewerkstatt</h1>' +
      headline(
        "<strong>Wähle einen Sachtext.</strong> Lies genau. Finde passende Stellen im Text. <strong>Erkläre deine Gedanken.</strong>",
      ) +
      '<p>Drei Sachtexte über Technik und Alltag. Zu jedem Text gibt es acht Aufgaben. Du kannst Antworten auswählen und eigene Sätze schreiben.</p><div class="grid">' +
      missions
        .map((m, i) => {
          let count = 0;
          for (let j = 0; j < 8; j++) if (completed(i, j)) count++;
          return `<button class="mission" onclick="Lesewerkstatt.start(${i})"><span style="font-size:36px">${m.icon}</span><strong>${esc(m.title)}</strong><span class="task-stars" role="img" aria-label="${Array.from({ length: 8 }, (_, j) => best(i, j) > 0).filter(Boolean).length} von 8 Aufgaben mit Stern">${Array.from({ length: 8 }, (_, j) => Rewards.star(best(i, j) > 0, 30)).join("")}</span><small>${count} von 8 Aufgaben bearbeitet</small><span>Sachtext öffnen →</span></button>`;
        })
        .join("") +
      '</div><div class="card"><strong>So sammelst du Sterne:</strong><p>Bei Aufgaben mit einer Lösung bekommst du bis zu drei Sterne. Für einen eigenen Text kannst du einen Übungsstern bekommen, wenn du ihn selbst am Text geprüft hast. Das ist keine automatische Note.</p></div>';
    top();
  }
  function textMarkup() {
    let id = 0;
    return (
      '<section class="card story"><h2>' +
      esc(missions[mission].title) +
      '</h2><p class="small">Die Zahlen helfen dir, Sätze zu finden. Du kannst wichtige Sätze antippen.</p>' +
      missions[mission].paragraphs
        .map(
          (paragraph, p) =>
            '<div class="text-paragraph"><h3>Absatz ' +
            (p + 1) +
            " · " +
            esc(missions[mission].sectionTitles[p]) +
            "</h3>" +
            paragraph
              .map((sentence) => {
                const number = ++id;
                return `<button id="sentence-${number}" class="${marks.has(number) ? "marked" : ""}" aria-pressed="${marks.has(number)}" onclick="Lesewerkstatt.mark(${number},this)"><span class="sentence-number">${number}</span><span>${esc(sentence)}</span></button>`;
              })
              .join("") +
            "</div>",
        )
        .join("") +
      "</section>"
    );
  }
  function mark(number, button) {
    if (
      !Number.isInteger(number) ||
      number < 1 ||
      number > missions[mission].paragraphs.flat().length
    )
      return;
    marks.has(number) ? marks.delete(number) : marks.add(number);
    button.classList.toggle("marked", marks.has(number));
    button.setAttribute("aria-pressed", marks.has(number));
  }
  function start(i) {
    if (!Number.isInteger(i) || i < 0 || i >= missions.length) return;
    mission = i;
    task = -1;
    marks = new Set();
    readText();
  }
  function readText() {
    task = -1;
    const m = missions[mission];
    $("game").innerHTML =
      '<p class="eyebrow">LESEN · SACHTEXT ' +
      (mission + 1) +
      " VON 3</p>" +
      headline(
        "<strong>Lies den Sachtext.</strong> <strong>Markiere wichtige Sätze.</strong> Tippe auf einen Satz. Tippe noch einmal darauf, um die Markierung zu entfernen. Bist du fertig? Tippe auf <strong>Weiter</strong>.",
      ) +
      textMarkup() +
      '<button class="primary forward" onclick="Lesewerkstatt.showTask(0)">Weiter →</button>';
    wallet();
    top();
  }
  function amount(n) {
    return n === 2 ? "zwei" : n === 3 ? "drei" : String(n);
  }
  function showTask(i) {
    if (!Number.isInteger(i) || i < 0 || i > 7) return;
    task = i;
    selected = new Set();
    tries = 0;
    done = false;
    hintLevel = 0;
    const q = missions[mission].questions[task],
      open = q.type === "open",
      multi = q.correct?.length > 1;
    let action =
      q.type === "truth"
        ? "<strong>Lies jede Aussage.</strong> Wähle in jeder Zeile <strong>richtig</strong> oder <strong>falsch</strong>. Tippe auf <strong>Prüfen</strong>."
        : q.type === "crossout"
          ? "<strong>Suche den Satz im Text.</strong> Tippe unten nur auf die <strong>zusätzlichen Wörter</strong>. Sie werden durchgestrichen. Tippe noch einmal, um ein Wort zurückzunehmen. Tippe auf <strong>Prüfen</strong>."
          : q.type === "word"
            ? "<strong>Suche das passende Wort im Text.</strong> Schreibe das <strong>Wort</strong> und die <strong>Satznummer</strong> in die zwei Felder. Tippe auf <strong>Prüfen</strong>."
            : open
              ? "<strong>Schreibe mit eigenen Worten.</strong> Du kannst danach ein Beispiel ansehen. <strong>Prüfe deine Antwort am Text.</strong> Bist du fertig? Tippe auf <strong>Weiter</strong>."
              : q.type === "evidence"
                ? "<strong>Suche passende Sätze im Text.</strong> Wähle " +
                  (multi
                    ? "<strong>" + amount(q.correct.length) + " Satznummern</strong>"
                    : "<strong>eine Satznummer</strong>") +
                  ". Tippe auf <strong>Prüfen</strong>."
                : "<strong>Lies die passende Stelle im Text.</strong> " +
                  (multi
                    ? "<strong>Wähle " + amount(q.correct.length) + " Antworten.</strong>"
                    : "<strong>Wähle eine Antwort.</strong>") +
                  " Tippe auf <strong>Prüfen</strong>.";
    $("game").innerHTML =
      '<p class="eyebrow">' +
      esc(missions[mission].title) +
      " · AUFGABE " +
      (task + 1) +
      " VON 8</p>" +
      headline('<span class="task-question">' + esc(q.prompt) + "</span>" + action) +
      '<div class="tools"><button onclick="Lesewerkstatt.readText()">← Sachtext noch einmal lesen</button><a class="button" href="#answer-card">Zur Antwort ↓</a></div><div class="layout">' +
      textMarkup() +
      `<section class="card" id="answer-card"><h2>${open ? "Deine Gedanken" : "Deine Antwort"}</h2>` +
      (open
        ? openMarkup(q)
        : `${answerMarkup(q, multi)}<div class="tools"><button class="primary" id="check" onclick="Lesewerkstatt.check()">Prüfen ✓</button><button id="hint-button" aria-controls="hint" aria-expanded="false" onclick="Lesewerkstatt.toggleHint()">💡 Tipp</button></div><div id="hint" class="hint" hidden></div><div id="feedback" class="feedback neutral" role="status" aria-live="polite">Du hast drei Versuche. Du darfst immer im Text nachsehen.</div><div id="reward"></div><button id="next" class="primary forward" onclick="Lesewerkstatt.next()" disabled>Weiter →</button><p class="small" id="next-note">Tippe zuerst auf „Prüfen“. Danach kannst du weitergehen.</p>`) +
      "</section></div>";
    wallet();
    top();
  }
  function answerMarkup(q, multi) {
    if (q.type === "truth")
      return (
        '<div class="truth-rows">' +
        q.rows
          .map(
            (s, r) =>
              "<fieldset><legend>" +
              esc(s) +
              '</legend><div class="tools">' +
              ["Richtig", "Falsch"]
                .map(
                  (label, c) =>
                    `<button type="button" data-answer="${r * 2 + c}" aria-pressed="false" onclick="Lesewerkstatt.pick(${r * 2 + c})">${label}</button>`,
                )
                .join("") +
              "</div></fieldset>",
          )
          .join("") +
        "</div>"
      );
    if (q.type === "crossout")
      return (
        '<p class="small">Zusätzliche Wörter sind durchgestrichen. Die anderen Wörter bleiben stehen.</p><div class="word-strip">' +
        q.options
          .map(
            (s, j) =>
              `<button class="word-token" data-answer="${j}" aria-pressed="false" onclick="Lesewerkstatt.pick(${j})">${esc(s)}</button>`,
          )
          .join("") +
        "</div>"
      );
    if (q.type === "word")
      return '<div class="word-fields"><label for="word-answer"><strong>Wort aus dem Text</strong></label><input id="word-answer" type="text" autocomplete="off" autocapitalize="none" spellcheck="false" maxlength="60" aria-describedby="word-feedback"><p id="word-feedback" class="field-feedback" aria-live="polite"></p><label for="sentence-answer"><strong>Satznummer</strong></label><input id="sentence-answer" type="text" inputmode="numeric" maxlength="20" aria-describedby="sentence-feedback"><p id="sentence-feedback" class="field-feedback" aria-live="polite"></p></div>';
    return `<p>${multi ? "Wähle genau " + amount(q.correct.length) + " Antworten." : "Genau eine Antwort ist richtig."}</p><div class="answers">${q.options.map((s, j) => `<button data-answer="${j}" aria-pressed="false" onclick="Lesewerkstatt.pick(${j})">${multi ? "□" : "○"} ${esc(s)}</button>`).join("")}</div>`;
  }
  function normalized(s) {
    return String(s || "")
      .trim()
      .toLocaleLowerCase("de-DE")
      .replace(/[.,!?;:]+$/, "");
  }
  function openMarkup(q) {
    return `<label for="answer"><strong>Schreibe hier:</strong></label><textarea id="answer" maxlength="800" rows="6" oninput="Lesewerkstatt.setDraft(this.value)">${esc(result().answer || "")}</textarea><p class="small">Deine eigene Formulierung wird gespeichert. Sie wird nicht automatisch als richtig oder falsch bewertet.</p><div class="tools"><button onclick="Lesewerkstatt.example()">Beispiel ansehen</button></div><div id="example" class="hint" hidden><strong>Eine mögliche Antwort</strong><p>${esc(q.example)}</p><p>Deine Antwort darf anders sein.</p></div><div class="self-check"><strong>Prüfe deine Antwort:</strong><ul>${q.checks.map((x) => "<li>" + esc(x) + "</li>").join("")}</ul><label><input id="self-check" type="checkbox"> Ich habe meine Antwort am Text geprüft.</label></div><p class="small" role="status" id="open-note">Für deine Selbstprüfung kannst du einen Übungsstern bekommen. Du kannst auch ohne Häkchen weitergehen.</p><button class="primary forward" onclick="Lesewerkstatt.next()">Weiter →</button>`;
  }
  function setDraft(value) {
    save({ answer: String(value).slice(0, 800) });
    const c = $("self-check");
    if (c) c.checked = false;
  }
  function example() {
    $("example").hidden = !$("example").hidden;
  }
  function pick(i) {
    if (
      done ||
      !Number.isInteger(i) ||
      i < 0 ||
      i >= missions[mission].questions[task].options.length
    )
      return;
    const q = missions[mission].questions[task];
    if (q.type === "truth") {
      selected.delete(Math.floor(i / 2) * 2);
      selected.delete(Math.floor(i / 2) * 2 + 1);
      selected.add(i);
    } else if (q.type === "crossout" || q.correct.length > 1)
      selected.has(i) ? selected.delete(i) : selected.add(i);
    else selected = new Set([i]);
    document.querySelectorAll("[data-answer]").forEach((b) => {
      const yes = selected.has(Number(b.dataset.answer));
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
    const q = missions[mission].questions[task];
    hintLevel = Math.max(hintLevel, tries);
    $("hint").innerHTML =
      '<div class="hint-head"><strong>Dein nächster Schritt</strong><button onclick="Lesewerkstatt.closeHint()">✕ Tipp schließen</button></div><p>' +
      esc(q.hints[Math.min(hintLevel, q.hints.length - 1)]) +
      "</p>";
    hintLevel++;
    $("hint").hidden = false;
    $("hint-button").setAttribute("aria-expanded", "true");
  }
  function sentenceNumber(value) {
    const match = String(value || "")
      .normalize("NFKC")
      .trim()
      .match(/^(?:(?:satznummer|satz|nr\.?)\s*)?0*(\d{1,2})\.?$/i);
    return match ? Number(match[1]) : null;
  }
  function wordState(q) {
    const word = normalized($("word-answer").value).replace(/^[„“"'‚‘’]+|[„“"'‚‘’]+$/g, ""),
      number = sentenceNumber($("sentence-answer").value);
    return {
      word: (q.acceptedWords || [q.word]).some((w) => normalized(w) === word),
      number: q.sentences.includes(number),
    };
  }
  function showWordState(q) {
    const result = wordState(q);
    for (const [part, input, label] of [
      ["word", "word-answer", "Wort"],
      ["number", "sentence-answer", "Satznummer"],
    ]) {
      const target = $(part === "word" ? "word-feedback" : "sentence-feedback"),
        hasValue = !!$(input).value.trim();
      target.className = "field-feedback " + (hasValue ? (result[part] ? "good" : "bad") : "");
      target.textContent = hasValue
        ? result[part]
          ? "✓ " + label + " richtig."
          : "✗ " + label + " noch einmal prüfen."
        : "";
      $(input).setAttribute("aria-invalid", hasValue && !result[part] ? "true" : "false");
    }
    return result;
  }
  function check() {
    if (done) return;
    const q = missions[mission].questions[task];
    if (q.type === "open") return;
    const f = $("feedback");
    if (q.type === "word") {
      showWordState(q);
      if (!$("word-answer").value.trim() || !$("sentence-answer").value.trim()) {
        f.textContent =
          "Trage zuerst ein Wort und eine Satznummer ein. Das zählt noch nicht als Versuch.";
        return;
      }
    } else if (q.type === "truth" && selected.size !== q.rows.length) {
      f.textContent = "Wähle in jeder Zeile richtig oder falsch. Das zählt noch nicht als Versuch.";
      return;
    } else if (!selected.size) {
      f.textContent = "Wähle zuerst eine Antwort. Das zählt noch nicht als Versuch.";
      return;
    }
    tries++;
    const correct =
      q.type === "word"
        ? wordState(q).word && wordState(q).number
        : selected.size === q.correct.length && q.correct.every((i) => selected.has(i));
    let status = "in_bearbeitung",
      stars = 0;
    if (correct) {
      status = "richtig";
      done = true;
      stars = 4 - tries;
      Rewards.extra(profile, rewardKey(), stars);
      f.className = "feedback good";
      f.innerHTML = "<strong>✓ Richtig!</strong><p>" + esc(q.explain) + "</p>";
    } else if (tries < 3) {
      f.className = "feedback bad";
      f.textContent =
        (q.type === "word"
          ? wordState(q).number
            ? "✓ Deine Satznummer ist richtig. Prüfe noch das Wort. "
            : wordState(q).word
              ? "✓ Dein Wort ist richtig. Prüfe noch die Satznummer. "
              : "✗ Prüfe das Wort und die Satznummer. "
          : "✗ Das passt noch nicht. ") +
        "Versuch " +
        tries +
        " von 3. Lies noch einmal im Text nach.";
    } else {
      status = "loesung_gesehen";
      done = true;
      f.className = "feedback bad";
      f.innerHTML =
        "<strong>Hier ist die Lösung:</strong><p>" +
        (q.type === "crossout" ? "Streiche: " : "") +
        q.correct.map((i) => esc(q.options[i])).join(" · ") +
        "</p><p>" +
        esc(q.explain) +
        "</p>";
    }
    save({ status, best: Math.max(best(mission, task), stars), stars, tries });
    if (done) {
      $("check").disabled = true;
      if (q.type === "word") {
        $("word-answer").disabled = true;
        $("sentence-answer").disabled = true;
      }
      $("next").disabled = false;
      $("next-note").textContent = "Dieser Schritt ist fertig. Tippe auf „Weiter“.";
      $("reward").innerHTML =
        '<div class="card">' +
        Rewards.stars(stars) +
        "<p>" +
        stars +
        " von 3 Sternen in diesem Versuch</p></div>";
      document.querySelectorAll("[data-answer]").forEach((b) => {
        b.disabled = true;
        b.classList.toggle(
          "correct",
          q.type !== "crossout" && q.correct.includes(Number(b.dataset.answer)),
        );
      });
      wallet();
    }
  }
  function next() {
    if (task < 0) {
      showTask(0);
      return;
    }
    const q = missions[mission].questions[task];
    if (q.type === "open") {
      const answer = String($("answer").value || "").trim(),
        checked = !!$("self-check").checked && answer.length > 0;
      save({
        answer,
        status: checked ? "selbst_geprueft" : answer ? "bearbeitet" : "gestartet",
        best: Math.max(best(mission, task), checked ? 1 : 0),
      });
      tries = 0;
      if (checked) Rewards.extra(profile, rewardKey(), 1);
    } else if (!done) return;
    if (task < 7) showTask(task + 1);
    else finish();
  }
  function finish() {
    let n = 0;
    for (let t = 0; t < 8; t++) n += best(mission, t);
    $("game").innerHTML =
      headline(
        "<strong>Du bist am Ende des Sachtextes.</strong> Schau dir deine Sterne an. Tippe auf <strong>Weiter zur Übersicht</strong>, um einen anderen Text zu wählen.",
      ) +
      '<div class="card"><h1>' +
      esc(missions[mission].title) +
      '</h1><div class="stars">' +
      Rewards.star(true, 48) +
      "<strong>" +
      n +
      ' Sterne für diesen Sachtext</strong></div><p>Das ist dein bisher bester Stand. Beim Wiederholen zählen bereits verdiente Sterne nicht doppelt.</p><button class="primary forward" onclick="Lesewerkstatt.home()">Weiter zur Übersicht →</button></div>';
    wallet();
    top();
  }
  function changeProfile(v) {
    if (!/^(?:[1-9]|1[0-9]|20)$/.test(v)) return;
    profile = v;
    Rewards.setActive(v);
    home();
  }
  $("profile").innerHTML = Array.from(
    { length: 20 },
    (_, i) => '<option value="' + (i + 1) + '">Lernplatz ' + (i + 1) + "</option>",
  ).join("");
  $("profile").value = profile;
  window.Lesewerkstatt = {
    home,
    start,
    readText,
    showTask,
    mark,
    pick,
    check,
    next,
    changeProfile,
    setDraft,
    example,
    toggleHint,
    closeHint,
  };
  home();
})();
