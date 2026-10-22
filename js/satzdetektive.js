(function () {
  const data = [
    ["Der kleine Hund bellt im Garten.", [0, 1, 2], [3]],
    ["Mia liest ein spannendes Buch.", [0], [1]],
    ["Auf dem Schulhof spielen die Kinder Fußball.", [4, 5], [3]],
    ["Heute malt mein Bruder ein Bild.", [2, 3], [1]],
    ["Die bunten Blätter fallen auf den Weg.", [0, 1, 2], [3]],
    ["Im Wald entdeckt unsere Klasse einen Fuchs.", [3, 4], [2]],
    ["Du hast die Aufgabe gelöst.", [0], [1, 4]],
    ["Am Morgen zieht Lena ihre Jacke an.", [3], [2, 6]],
    ["Die beiden Freunde wollen zusammen schwimmen.", [0, 1, 2], [3, 5]],
    ["Gestern hat der Hausmeister die Tür geöffnet.", [2, 3], [1, 6]],
    ["Nach der Pause räumen wir das Zimmer auf.", [4], [3, 7]],
    ["Unser Klassenhamster ist sehr müde.", [0, 1], [2]],
  ];
  let pack = 0,
    profile = "1",
    progress = {},
    storageOK = true;
  let mode = "s",
    idx = 0,
    marks = {},
    brush = "s",
    done = false,
    tries = 0,
    score = 0,
    missed = [],
    round = data.map((_, i) => i);
  const el = document.getElementById("game");
  function start(m, review = false) {
    Voice.stop();
    mode = m;
    idx = 0;
    marks = {};
    done = false;
    tries = 0;
    score = 0;
    brush = m === "p" ? "p" : "s";
    round = review ? [...missed] : Array.from({ length: 6 }, (_, i) => pack * 6 + i);
    missed = [];
    document
      .querySelectorAll("#nav button")
      .forEach((b, i) => b.classList.toggle("active", ["s", "p", "b"][i] === mode));
    render();
  }
  function current() {
    return data[round[idx]];
  }
  function render() {
    const d = current();
    el.innerHTML = `<div class="top"><button onclick="learningApp.home()">← Lernübersicht</button><b>Fall ${idx + 1} von ${round.length}</b><button onclick="learningApp.speak()" aria-label="Satz vorlesen">🔊 Vorlesen</button></div><div class="bar"><div style="width:${(idx / round.length) * 100}%"></div></div><h2>${mode === "s" ? "Wer oder was?" : mode === "p" ? "Was geschieht?" : "Zwei Spuren – ein Satz."}</h2><p class="small">${mode === "b" ? "Markiere das Subjekt blau und das Prädikat orange." : "Markiere alle Wörter des " + (mode === "s" ? "Subjekts." : "Prädikats.")}</p>${mode === "b" ? '<div id="brush"><button class="active" onclick="learningApp.setBrush(\'s\',this)">🔵 Subjekt</button><button onclick="learningApp.setBrush(\'p\',this)">🟠 Prädikat</button></div>' : ""}<div class="words">${d[0]
      .split(" ")
      .map(
        (w, i) =>
          `<button class="word" aria-pressed="false" data-i="${i}" onclick="learningApp.mark(${i},this)">${w}</button>`,
      )
      .join(
        "",
      )}</div><div class="tools"><button class="primary" id="check" onclick="learningApp.check()">Prüfen ✓</button><button data-hint-button aria-expanded="false" aria-controls="hint" onclick="learningApp.hint()">💡 Tipp</button><button onclick="learningApp.reset()">Zurücksetzen</button><button id="next" onclick="learningApp.next()" hidden>Weiter →</button></div><div id="hint" class="hint" hidden></div><div id="task-reward"></div><div id="feedback" class="feedback" role="status" aria-live="polite">Du kannst den Satz auch erst anhören.</div>`;
  }
  function setBrush(b, node) {
    brush = b;
    document
      .querySelectorAll("#brush button")
      .forEach((x) => x.classList.toggle("active", x === node));
  }
  function mark(i, node) {
    if (done) return;
    const m = mode === "b" ? brush : mode;
    marks[i] = marks[i] === m ? undefined : m;
    node.className = "word " + (marks[i] || "");
    node.setAttribute("aria-pressed", !!marks[i]);
  }
  function reset() {
    if (done) return;
    marks = {};
    document.querySelectorAll(".word").forEach((x) => {
      x.className = "word";
      x.setAttribute("aria-pressed", "false");
    });
  }
  function hint() {
    adaptiveHint();
  }

  function expected() {
    let r = {};
    const d = current();
    if (mode !== "p") d[1].forEach((i) => (r[i] = "s"));
    if (mode !== "s") d[2].forEach((i) => (r[i] = "p"));
    return r;
  }
  function evaluate() {
    if (done) return;
    tries++;
    let ex = expected(),
      ok = current()[0]
        .split(" ")
        .every((_, i) => marks[i] === ex[i]);
    let f = document.getElementById("feedback");
    if (ok) {
      done = true;
      if (tries === 1) score++;
      else missed.push(round[idx]);
      const gain = reward(Math.max(1, 4 - tries));
      f.textContent =
        "✓ Genau! " + explain() + (gain ? " +" + gain + " Lernpunkte!" : " Gut geübt!");
      finishButtons();
    } else if (tries < 3) {
      f.textContent =
        "Noch nicht ganz. " +
        (mode === "s"
          ? "Achte auf das vollständige Subjekt."
          : mode === "p"
            ? "Prüfe auch, ob das Prädikat aus zwei Teilen besteht."
            : "Prüfe beide Farben und alle Teile der Satzglieder.") +
        " Versuche es erneut oder nutze den Tipp.";
    } else {
      done = true;
      missed.push(round[idx]);
      document.querySelectorAll(".word").forEach((x) => {
        let i = x.dataset.i;
        x.className = "word " + (ex[i] || "");
        x.setAttribute("aria-pressed", !!ex[i]);
      });
      f.textContent = "Schau dir die Lösung an. " + explain();
      finishButtons();
    }
  }
  function explain() {
    const d = current(),
      w = d[0].split(" ");
    return (
      (mode !== "p"
        ? "Subjekt: „" + d[1].map((i) => w[i].replace(/[.!?]$/, "")).join(" ") + "“. "
        : "") +
      (mode !== "s"
        ? "Prädikat: „" + d[2].map((i) => w[i].replace(/[.!?]$/, "")).join(" … ") + "“."
        : "")
    );
  }
  function finishButtons() {
    document.getElementById("check").disabled = true;
    document.getElementById("next").hidden = false;
  }
  function next() {
    if (!done) return;
    if (idx + 1 < round.length) {
      idx++;
      marks = {};
      tries = 0;
      done = false;
      render();
    } else {
      el.innerHTML = `<div class="finish"><div style="font-size:60px">🎉</div><h2>Mission geschafft!</h2><p style="font-size:30px">${Rewards.stars(missionStars(mode, pack))}</p><p>Du hast ${round.length} Sätze untersucht.<br><b>${score}</b> davon hast du gleich beim ersten Versuch gelöst.</p><p>Üben hilft dir, Satzglieder immer sicherer zu erkennen.</p>${missed.length ? `<button class="primary" onclick="learningApp.start(mode,true)">${missed.length} Sätze noch einmal üben</button>` : "<p>⭐ Alle beim ersten Versuch richtig!</p>"} <button onclick="learningApp.start(mode)">Noch einmal</button><button class="primary" onclick="learningApp.home()">⌂ Zur Lernübersicht</button></div>`;
    }
  }
  function speak() {
    Voice.speak(current()[0]);
  }

  let hintOpens = {};
  function adaptiveHint() {
    if (Feedback.closeIfOpen()) return;
    const key = mode + "-" + round[idx] + "-" + tries;
    const level = hintOpens[key] || 0;
    const d = current(),
      ex = expected(),
      words = d[0].split(" ");
    const wantSubject = mode === "s" || (mode === "b" && d[1].some((i) => marks[i] !== "s"));
    let wrong = 0,
      missing = 0;
    words.forEach((_, i) => {
      if (marks[i] && marks[i] !== ex[i]) wrong++;
      if (ex[i] && !marks[i]) missing++;
    });
    let text = done
      ? "Du kannst mit „Weiter“ zum nächsten Satz gehen."
      : wrong
        ? "Eine Markierung passt noch nicht. Prüfe die Farbe. Frage dann: Wer oder was? Was tut jemand? Was passiert?"
        : wantSubject
          ? d[1].length > 1
            ? "Das Subjekt hat hier mehrere Wörter. Frage: „Wer oder was …?“ Markiere auch Wörter wie „der“, „die“ oder „das“, wenn sie dazugehören."
            : "Frage „Wer oder was …?“ Hier ist das Subjekt ein einzelnes Wort."
          : d[2].length > 1
            ? "Das Prädikat hat hier zwei Teile. Suche das Verb. Schau auch an das Ende des Satzes. Dort kann der zweite Teil stehen."
            : "Suche das Verb. Es sagt, was jemand tut oder was passiert.";
    if (tries > 0 && !wrong && missing) text += " Es fehlen noch passende Wörter.";
    if (level > 0 && !done)
      text +=
        " Schau auf das Wort „" +
        words[d[2][0]].replace(/[.!?]$/, "") +
        "“. Es hilft dir bei der Suche.";
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

  const storageKey = "satzdetektive-v1";
  function loadProgress() {
    try {
      let obj = JSON.parse(localStorage.getItem(storageKey) || "{}");
      progress = obj && typeof obj === "object" && !Array.isArray(obj) ? obj : {};
    } catch {
      storageOK = false;
      progress = {};
    }
  }
  function saveProgress() {
    try {
      localStorage.setItem(storageKey, JSON.stringify(progress));
    } catch {
      storageOK = false;
    }
    stats();
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
  function value(key) {
    const v = mine()[key];
    return Number.isInteger(v) && v >= 0 && v <= 3 ? v : 0;
  }
  function total() {
    let n = 0;
    for (const m of ["s", "p", "b"]) for (let i = 0; i < 12; i++) n += value(m + "-" + i) * 5;
    return n;
  }
  function missionStars(m, p) {
    let pts = 0,
      completed = 0;
    for (let i = p * 6; i < p * 6 + 6; i++) {
      const v = value(m + "-" + i);
      pts += v;
      if (v > 0) completed++;
    }
    return completed < 6 ? 0 : pts >= 16 ? 3 : pts >= 12 ? 2 : 1;
  }
  function starTotal() {
    let n = 0;
    for (const m of ["s", "p", "b"]) for (let p = 0; p < 2; p++) n += missionStars(m, p);
    return n;
  }
  function baseStats() {
    document.getElementById("stats").innerHTML =
      '<div class="stat">Lernpunkte<b>✦ ' +
      total() +
      '</b></div><div class="stat">Für deinen Avatar<b>' +
      Rewards.balance(String(profile)) +
      ' Sterne</b></div><div class="stat">Dein Rang<b style="font-size:20px">' +
      (total() >= 450 ? "Meisterdetektiv" : total() >= 180 ? "Spürnase" : "Spurensucher") +
      "</b></div>";
  }
  function reward(v) {
    let key = mode + "-" + round[idx],
      old = value(key);
    if (v > old) {
      mine()[key] = v;
      saveProgress();
      return (v - old) * 5;
    }
    return 0;
  }
  function changeProfile(v) {
    Rewards.setActive(v);
    if (!/^(?:[1-9]|1[0-9]|20)$/.test(v)) return;
    profile = v;
    home();
  }
  function choose(m, p) {
    pack = p;
    start(m);
  }
  function home() {
    Voice.stop();
    done = false;
    stats();
    let cards = "";
    for (const [m, label, icon] of [
      ["s", "Subjekt", "🔵"],
      ["p", "Prädikat", "🟠"],
      ["b", "Beide Satzglieder", "🔎"],
    ])
      for (let p = 0; p < 2; p++) {
        const stars = missionStars(m, p);
        let solved = 0;
        for (let i = p * 6; i < p * 6 + 6; i++) if (value(m + "-" + i) > 0) solved++;
        cards += `<button class="mission" onclick="learningApp.choose('${m}',${p})"><span>${icon} ${p === 0 ? "Grundtraining" : "Knobeltraining"}</span><strong>${label}</strong><span class="mission-progress" role="img" aria-label="${solved} von 6 Sätzen richtig gelöst"><span class="progress-stars" aria-hidden="true">${Array.from({ length: 6 }, (_, i) => Rewards.star(value(m + "-" + (p * 6 + i)) > 0, 32)).join("")}</span><span class="progress-label">${solved} von 6 Sätzen gelöst</span></span><span class="small">${p === 0 ? "Kurze Sätze & ganze Satzglieder" : "Mehrteilige Prädikate & neue Satzanfänge"}</span></button>`;
      }
    el.innerHTML =
      '<h2>Wähle deine Mission</h2><p>Sechs Sätze pro Runde. Sammle Sterne und verbessere deinen eigenen Rekord!</p><div class="missions">' +
      cards +
      '</div><div class="hint"><b>So sammelst du:</b> 15 Punkte beim ersten, 10 beim zweiten und 5 beim dritten richtigen Versuch. Jede Mission hat bis zu drei Sterne. Wiederholen verbessert deinen Rekord; bereits verdiente Punkte zählen nicht doppelt. Tipps sind immer erlaubt.</div><p class="small">' +
      (storageOK
        ? "Dein Fortschritt wird in diesem Browser gespeichert. Wähle auf gemeinsam genutzten iPads immer denselben Lernplatz. Auf einem anderen Gerät beginnt die Sammlung neu."
        : "Dieser Browser kann den Fortschritt gerade nicht speichern. Er bleibt nur bis zum Schließen der Seite erhalten.") +
      "</p>" +
      (starTotal() >= 6 ? '<span class="badge">🏅 Erste sechs Sterne!</span>' : "") +
      (starTotal() >= 18 ? '<span class="badge">🏆 Alle Missionen gemeistert!</span>' : "");
  }
  profile = Rewards.active();
  loadProgress();
  document.getElementById("profile").innerHTML = Array.from(
    { length: 20 },
    (_, i) => '<option value="' + (i + 1) + '">Lernplatz ' + (i + 1) + "</option>",
  ).join("");
  document.getElementById("record").innerHTML = data.map((d) => "<li>" + d[0] + "</li>").join("");

  window.learningApp = {
    closeHint: Feedback.closeHint,
    voiceContinue: Voice.resume,
    changeVoice: Voice.changeVoice,
    changeRate: Voice.changeRate,
    previewVoice: Voice.preview,
    voiceStop: Voice.stop,
    changeProfile,
    check,
    choose,
    hint,
    home,
    mark,
    next,
    reset,
    setBrush,
    speak,
    start,
  };
  document.getElementById("profile").value = String(profile);
  Voice.init("satzdetektive-speech");
  home();
})();
