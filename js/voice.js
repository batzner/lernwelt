// Read-aloud via the browser's speech synthesis. Shared by the learning pages, which expose
// these functions to their buttons. Speech runs locally in the browser; no text is uploaded
// by this code (some browsers may use online voices, which is outside our control).
window.Voice = (function () {
  const RATES = [0.8, 0.95, 1.1];
  let storageKey = "",
    choice = "",
    rate = 0.95,
    run = 0,
    session = null;

  function esc(v) {
    return String(v).replace(
      /[&<>"']/g,
      (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c],
    );
  }
  function germanVoices() {
    if (!("speechSynthesis" in window)) return [];
    return speechSynthesis.getVoices().filter((v) => /^de(?:[-_]|$)/i.test(v.lang));
  }
  function score(v) {
    let n = v.lang.toLowerCase() === "de-de" ? 10 : 0;
    if (/premium|enhanced|erweitert|natural|neural|siri/i.test(v.name)) n += 100;
    else if (/google|microsoft|anna|petra|katja/i.test(v.name)) n += 30;
    if (v.default) n += 5;
    return n;
  }
  function rankedVoices() {
    return germanVoices().sort((a, b) => score(b) - score(a));
  }
  function refresh() {
    const field = document.getElementById("voice-select");
    if (!field) return;
    const list = rankedVoices();
    field.innerHTML =
      '<option value="">Automatisch · beste verfügbare Stimme</option>' +
      list
        .map((v) => `<option value="${esc(v.voiceURI)}">${esc(v.name)} · ${esc(v.lang)}</option>`)
        .join("");
    field.value = list.some((v) => v.voiceURI === choice) ? choice : "";
    document.getElementById("voice-note").textContent = !("speechSynthesis" in window)
      ? "Dieser Browser unterstützt das Vorlesen nicht."
      : list.length
        ? "Wähle eine Stimme und höre die Probe. Die Auswahl hängt von deinem Gerät ab."
        : "Die Stimmen werden geladen. Falls keine Liste erscheint, tippe auf „Hörprobe“.";
  }
  function save() {
    try {
      localStorage.setItem(storageKey, JSON.stringify({ voice: choice, rate }));
    } catch {}
  }
  function changeVoice(v) {
    choice = v;
    save();
  }
  function changeRate(v) {
    const n = Number(v);
    if (RATES.includes(n)) {
      rate = n;
      save();
    }
  }
  function status(text) {
    const node = document.getElementById("audio-status") || document.getElementById("voice-note");
    if (node) node.textContent = text;
  }
  function stop() {
    const hadSession = !!session;
    run++;
    session = null;
    if ("speechSynthesis" in window) {
      const synth = speechSynthesis;
      if (hadSession || synth.speaking || synth.pending || synth.paused) synth.cancel();
    }
  }
  // Ends the current read-aloud session because other audio (e.g. a recording) takes over.
  function interrupt() {
    run++;
    session = null;
    if ("speechSynthesis" in window && (speechSynthesis.speaking || speechSynthesis.pending))
      speechSynthesis.cancel();
  }
  // Splits text into sentence-sized pieces; long utterances are cut off by some browsers.
  function chunks(text) {
    const normalized = String(text).trim();
    if (!normalized) return [];
    let sentences;
    if (typeof Intl !== "undefined" && Intl.Segmenter) {
      sentences = Array.from(
        new Intl.Segmenter("de", { granularity: "sentence" }).segment(normalized),
        (x) => x.segment.trim(),
      );
    } else sentences = normalized.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [normalized];
    const result = [];
    for (const sentence of sentences) {
      let piece = "";
      for (const word of sentence.trim().split(/\s+/)) {
        if (piece && piece.length + word.length + 1 > 180) {
          result.push(piece);
          piece = "";
        }
        piece += (piece ? " " : "") + word;
      }
      if (piece) result.push(piece);
    }
    return result;
  }
  function speak(text) {
    if (!("speechSynthesis" in window)) {
      status("Vorlesen ist in diesem Browser nicht verfügbar.");
      return;
    }
    const parts = chunks(text);
    if (!parts.length) return;
    stop();
    refresh();
    const list = rankedVoices();
    const chosen = list.find((v) => v.voiceURI === choice) || list[0],
      myRun = run;
    const mySession = { chunks: parts, index: 0, charIndex: 0, completed: 0, utterances: [] };
    session = mySession;
    const valid = () => myRun === run && session === mySession;
    status(
      (chosen ? "Stimme: " + chosen.name : "Standardstimme des Geräts") +
        " · Der ganze Text wird vorgelesen.",
    );
    // Retain every utterance and enqueue all of them in the initiating click. Native
    // playback continues even if a browser fails to emit an individual end event.
    mySession.utterances = parts.map((chunk, index) => {
      const u = new SpeechSynthesisUtterance(chunk);
      u.lang = chosen?.lang || "de-DE";
      if (chosen) u.voice = chosen;
      u.rate = rate;
      u.pitch = 1;
      u.onstart = () => {
        if (!valid()) return;
        mySession.index = index;
        mySession.charIndex = 0;
        mySession.completed = Math.max(mySession.completed, index);
        status("Vorlesen · Textteil " + (index + 1) + " von " + parts.length);
      };
      u.onboundary = (e) => {
        if (!valid()) return;
        if (Number.isInteger(e.charIndex)) {
          mySession.index = index;
          mySession.charIndex = Math.max(0, Math.min(chunk.length, e.charIndex));
        }
      };
      u.onend = () => {
        if (!valid()) return;
        mySession.completed = Math.max(mySession.completed, index + 1);
        if (index === parts.length - 1) {
          session = null;
          status("Fertig vorgelesen.");
        }
      };
      u.onerror = () => {
        if (!valid()) return;
        status(
          "Das Vorlesen wurde unterbrochen. Tippe auf „Weiter vorlesen“ oder wähle eine andere Stimme.",
        );
      };
      return u;
    });
    if (speechSynthesis.paused && typeof speechSynthesis.resume === "function")
      speechSynthesis.resume();
    for (const u of mySession.utterances) {
      if (!valid()) break;
      speechSynthesis.speak(u);
    }
  }
  // Resumes a paused session or re-speaks from the last reached position.
  function resume() {
    if (!("speechSynthesis" in window)) {
      status("Vorlesen ist in diesem Browser nicht verfügbar.");
      return;
    }
    if (speechSynthesis.paused && session && typeof speechSynthesis.resume === "function") {
      speechSynthesis.resume();
      status("Vorlesen wird fortgesetzt.");
      return;
    }
    if (!session) {
      status("Wähle zuerst einen Text mit „Vorlesen“ aus.");
      return;
    }
    const index = Math.max(session.index, session.completed);
    if (index >= session.chunks.length) {
      stop();
      status("Fertig vorgelesen.");
      return;
    }
    const offset = index === session.index ? session.charIndex : 0;
    speak([session.chunks[index].slice(offset), ...session.chunks.slice(index + 1)].join(" "));
  }
  function preview() {
    speak(
      "Hallo! Ich begleite dich beim Lesen. Lass dir Zeit und entdecke die wichtigsten Gedanken im Text.",
    );
  }
  function init(key) {
    storageKey = key;
    try {
      const x = JSON.parse(localStorage.getItem(storageKey) || "{}");
      choice = typeof x.voice === "string" ? x.voice : "";
      if (RATES.includes(x.rate)) rate = x.rate;
    } catch {}
    document.getElementById("voice-rate").value = String(rate);
    refresh();
    if ("speechSynthesis" in window) speechSynthesis.addEventListener("voiceschanged", refresh);
  }

  return {
    init,
    speak,
    stop,
    interrupt,
    resume,
    preview,
    changeVoice,
    changeRate,
    status,
    rate: () => rate,
  };
})();
