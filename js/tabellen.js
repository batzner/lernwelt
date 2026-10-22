(function () {
  "use strict";
  const missions = window.TableMissions;
  const KEY = "lernwelt-tabellen-v1";
  const $ = (id) => document.getElementById(id);
  const esc = (value) =>
    String(value ?? "").replace(
      /[&<>"']/g,
      (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c],
    );
  const fmt = (n) => new Intl.NumberFormat("de-DE").format(n);
  let all = read(KEY),
    profile = Rewards.active(),
    missionIndex = -1,
    stepIndex = 0,
    hintCount = 0,
    message = "",
    memoryOnly = false;
  function read(key) {
    try {
      const value = JSON.parse(localStorage.getItem(key) || "{}");
      return value && typeof value === "object" && !Array.isArray(value) ? value : {};
    } catch {
      return {};
    }
  }
  function write() {
    try {
      localStorage.setItem(KEY, JSON.stringify(all));
    } catch {
      memoryOnly = true;
    }
    $("storage-alert").hidden = !memoryOnly;
  }
  function mission() {
    return missions[missionIndex];
  }
  function step() {
    return mission().steps[stepIndex];
  }
  function rows(m) {
    return m.times.map((t) => {
      const a = (t * m.rates[0]) / m.interval,
        b = (t * m.rates[1]) / m.interval;
      return [t, a, b, a + b];
    });
  }
  function headers(m) {
    return [
      "Zeit",
      m.kind === "amount" ? m.names[0] : "Weg " + m.names[0],
      m.kind === "amount" ? m.names[1] : "Weg " + m.names[1],
      m.kind === "apart"
        ? "Abstand voneinander"
        : m.kind === "toward"
          ? "Beide Wege zusammen"
          : "Wasser zusammen",
    ];
  }
  function fieldsFor(m, s) {
    if (s.kind === "explain") return [];
    if (s.kind === "fill")
      return s.editableRows.flatMap((r) =>
        [1, 2, 3].map((c) => ({
          id: `${r}-${c}`,
          answer: rows(m)[r][c],
          label: `${m.times[r]} Minuten · ${headers(m)[c]}`,
          unit: m.unit,
          r,
          c,
        })),
      );
    return [
      {
        id: "answer",
        answer: s.kind === "cell" ? s.cell.join("-") : s.answer,
        label: s.label || "Deine Auswahl",
        unit: s.unit || "",
      },
    ];
  }
  function rawRecord(i, j) {
    return all[profile]?.[missions[i].id]?.[j] || {};
  }
  function record() {
    all[profile] ||= {};
    all[profile][mission().id] ||= {};
    let r = all[profile][mission().id][stepIndex];
    if (!r || typeof r !== "object" || Array.isArray(r)) r = {};
    r.fields = fieldsFor(mission(), step()).map((_, i) => {
      const f = r.fields?.[i] || {};
      return {
        value: typeof f.value === "string" ? f.value.slice(0, 30) : "",
        tries: Number.isInteger(f.tries) ? Math.max(0, Math.min(3, f.tries)) : 0,
        status: ["correct", "revealed"].includes(f.status) ? f.status : "pending",
      };
    });
    r.note = typeof r.note === "string" ? r.note.slice(0, 1200) : "";
    r.reviewShown = r.reviewShown === true;
    r.done = r.done === true;
    r.score = Number.isInteger(r.score) ? Math.max(0, Math.min(step().maxStars || 3, r.score)) : 0;
    all[profile][mission().id][stepIndex] = r;
    return r;
  }
  function best(i, j) {
    const n = read("lernwelt-extra-rewards")[profile]?.[`tables-${missions[i].id}-${j}`];
    return Number.isInteger(n) ? Math.max(0, Math.min(missions[i].steps[j].maxStars || 3, n)) : 0;
  }
  function stars(n, max = 3) {
    return `<span class="star-row" role="img" aria-label="${n} von ${max} Sternen">${Array.from({ length: max }, (_, i) => Rewards.star(i < n, 25)).join("")}</span>`;
  }
  function wallet() {
    $("table-wallet").innerHTML =
      Rewards.star(true, 24) + ` ${Rewards.balance(profile)} Sterne · Mein Avatar →`;
    $("table-profile").value = profile;
  }
  function top() {
    window.scrollTo?.({ top: 0, behavior: "instant" });
    $("table-title")?.focus({ preventScroll: true });
  }
  function home() {
    missionIndex = -1;
    const total = missions.reduce(
      (sum, m, i) => sum + m.steps.reduce((n, _, j) => n + best(i, j), 0),
      0,
    );
    const max = missions.reduce(
      (sum, m) => sum + m.steps.reduce((n, s) => n + (s.maxStars || 3), 0),
      0,
    );
    $("table-game").innerHTML =
      `<h1 id="table-title" tabindex="-1">📊 Tabellen auswerten</h1><section class="task"><h2>Deine Aufgabe</h2><p><strong>Wähle eine Übung.</strong> Finde Zahlen, ergänze Tabellen und rechne mit den Angaben.</p></section><aside class="card table-guide"><h2>So liest du eine Tabelle</h2><ol><li><strong>Lies die Überschriften</strong> oben.</li><li><strong>Suche die Zeit</strong> links.</li><li><strong>Lies die Zeile</strong> bis zur passenden Spalte.</li><li><strong>Prüfe die Einheit:</strong> m, km, min oder l.</li></ol></aside><p class="goal-progress"><strong>${total} von ${max} Sternen gesammelt</strong><br>Dein bester Versuch zählt. Du kannst Aufgaben wiederholen und weitere Sterne verdienen.</p><div class="grid">${missions.map((m, i) => `<button type="button" class="mission" data-mission="${i}"><span class="mission-icon" aria-hidden="true">${m.icon}</span><small>${esc(m.level)}</small><strong>${esc(m.title)}</strong><span class="mission-stars">${m.steps.map((s, j) => `<span><small>Aufgabe ${j + 1}</small>${stars(best(i, j), s.maxStars || 3)}</span>`).join("")}</span><small>${m.steps.filter((_, j) => rawRecord(i, j).done).length} von 3 Aufgaben bearbeitet</small><span class="start">Übung öffnen →</span></button>`).join("")}</div>`;
    $("table-game")
      .querySelectorAll("[data-mission]")
      .forEach((b) => b.addEventListener("click", () => start(Number(b.dataset.mission))));
    wallet();
    top();
  }
  function start(i) {
    if (!Number.isInteger(i) || !missions[i]) return;
    missionIndex = i;
    stepIndex = missions[i].steps.findIndex((_, j) => !rawRecord(i, j).done);
    if (stepIndex < 0) stepIndex = 0;
    message = "";
    hintCount = 0;
    render();
    top();
  }
  function answerText(f) {
    return step().kind === "clock"
      ? `${Math.floor(f.answer / 60)}:${String(f.answer % 60).padStart(2, "0")} Uhr`
      : `${typeof f.answer === "number" ? fmt(f.answer) : f.answer}${f.unit ? " " + f.unit : ""}`;
  }
  function fieldMessage(f, data) {
    if (data.status === "correct") return "✓ Richtig!";
    if (data.status === "revealed") return `Lösung nach 3 Versuchen: ${answerText(f)}.`;
    if (data.tries)
      return `✗ Noch nicht richtig. ${3 - data.tries} ${data.tries === 2 ? "Versuch bleibt" : "Versuche bleiben"}.`;
    return "";
  }
  function fieldMarkup(f, i, data, compact = false) {
    return `<div class="table-field ${compact ? "compact" : ""}"><label ${compact ? 'class="sr-only"' : ""} for="table-input-${i}">${esc(f.label)}${f.unit ? " (" + esc(f.unit) + ")" : ""}</label><div class="input-line"><input id="table-input-${i}" type="text" inputmode="${step().kind === "clock" ? "text" : "numeric"}" autocomplete="off" maxlength="30" value="${esc(data.value)}" ${step().kind === "clock" ? 'placeholder="z. B. 09:15"' : ""} ${data.status !== "pending" ? "disabled" : ""} ${data.status !== "pending" || data.tries ? `aria-invalid="${data.status !== "correct"}"` : ""} aria-describedby="table-result-${i}" data-input="${i}">${!compact && f.unit ? "<span>" + esc(f.unit) + "</span>" : ""}</div><p id="table-result-${i}" class="field-result ${data.status === "correct" ? "good" : data.tries ? "bad" : ""}" aria-live="polite">${esc(fieldMessage(f, data))}</p></div>`;
  }
  function tableMarkup(m, s, r) {
    const defs = fieldsFor(m, s);
    return `<p class="small table-scroll-note">Auf kleinen Bildschirmen: Wische die Tabelle seitlich.</p><div class="table-scroll" role="region" aria-label="Tabelle zu ${esc(m.title)}" tabindex="0"><table class="learning-table"><caption>${esc(m.title)} · ${m.unit === "l" ? "Wassermengen in Litern" : `Wege in ${m.unit === "m" ? "Metern" : "Kilometern"}`} und Zeit in Minuten</caption><thead><tr>${headers(
      m,
    )
      .map((h) => `<th scope="col">${esc(h)}${h === "Zeit" ? "" : " (" + esc(m.unit) + ")"}</th>`)
      .join("")}</tr></thead><tbody>${rows(m)
      .map(
        (row, ri) =>
          `<tr><th scope="row">${row[0]} min</th>${row
            .slice(1)
            .map((n, ci) => {
              const c = ci + 1,
                fi = defs.findIndex((f) => f.r === ri && f.c === c);
              if (s.kind === "fill" && fi >= 0)
                return `<td>${fieldMarkup(defs[fi], fi, r.fields[fi], true)}</td>`;
              if (s.kind === "cell") {
                const selected = r.fields[0].value === `${ri}-${c}`,
                  correct = r.done && s.cell[0] === ri && s.cell[1] === c;
                return `<td><button type="button" class="table-cell ${correct ? "cell-correct" : ""}" aria-label="${row[0]} Minuten, ${esc(headers(m)[c])}: ${fmt(n)} ${m.unit}" aria-pressed="${selected}" data-cell="${ri}-${c}" ${r.done ? "disabled" : ""}>${fmt(n)} ${esc(m.unit)}</button></td>`;
              }
              return `<td>${fmt(n)} ${esc(m.unit)}</td>`;
            })
            .join("")}</tr>`,
      )
      .join("")}</tbody></table></div>`;
  }
  function solution(m, s) {
    if (s.kind !== "fill") return s.solution;
    return rows(m)
      .filter((_, i) => s.editableRows.includes(i))
      .map(
        (row) =>
          `${row[0]} min: ${fmt(row[1])} ${m.unit} + ${fmt(row[2])} ${m.unit} = ${fmt(row[3])} ${m.unit}.`,
      )
      .join("\n");
  }
  function answerTable(m, s, r, def) {
    if (s.kind === "clock")
      return `<div class="table-scroll"><table class="learning-table"><caption>Trage die Uhrzeit in die Tabelle ein.</caption><thead><tr><th>Startzeit</th><th>Zeit bis zum Treffen</th><th>Uhrzeit beim Treffen</th></tr></thead><tbody><tr><td>10:10 Uhr</td><td>75 Minuten</td><td>${fieldMarkup(def, 0, r.fields[0], true)}</td></tr></tbody></table></div>`;
    const times = [6, 6, 6, 5, 30, 10],
      time = times[missionIndex];
    r.work ||= {};
    const labels = headers(m).slice(1);
    const finalIndex = m.kind === "toward" ? 3 : missionIndex === 0 ? 0 : 2;
    if (m.kind === "toward") labels.push("Übriger Abstand");
    const cells = labels
      .map((label, i) =>
        i === finalIndex
          ? `<td>${fieldMarkup(def, 0, r.fields[0], true)}</td>`
          : `<td><label class="sr-only" for="work-${i}">${esc(label)} nach ${time} Minuten</label><input class="work-input" id="work-${i}" data-work="${i}" inputmode="numeric" maxlength="30" value="${esc(r.work[i] || "")}" ${r.done ? "readonly" : ""}></td>`,
      )
      .join("");
    return `<p><strong>Nutze diese Tabellenzeile.</strong> Trage deine Antwort in das beschriftete Antwortfeld ein. Die anderen Felder helfen dir beim Rechnen und werden nicht bewertet.</p><div class="table-scroll"><table class="learning-table"><caption>Meine Rechentabelle · ${time} Minuten</caption><thead><tr><th>Zeit</th>${labels.map((label) => `<th>${esc(label)} (${m.unit})</th>`).join("")}</tr></thead><tbody><tr><th scope="row">${time} min</th>${cells}</tr></tbody></table></div>`;
  }
  function render() {
    const m = mission(),
      s = step(),
      r = record(),
      defs = fieldsFor(m, s);
    const inputUI = ["number", "clock"].includes(s.kind)
      ? answerTable(m, s, r, defs[0])
      : s.kind === "choice"
        ? `<div class="table-choices" role="group" aria-label="Antwort wählen">${s.options.map((option, i) => `<button type="button" data-choice="${i}" class="choice ${r.done && i === s.answer ? "choice-correct" : ""}" aria-pressed="${r.fields[0].value === String(i)}" ${r.done ? "disabled" : ""}>${esc(option)}</button>`).join("")}<p class="field-result ${r.fields[0].status === "correct" ? "good" : r.fields[0].tries ? "bad" : ""}">${r.fields[0].status === "revealed" ? "Lösung nach 3 Versuchen: " + esc(s.options[s.answer]) : esc(fieldMessage(defs[0], r.fields[0]))}</p></div>`
        : s.kind === "cell"
          ? `<p class="field-result ${r.fields[0].status === "correct" ? "good" : r.fields[0].tries ? "bad" : ""}">${r.fields[0].status === "revealed" ? "Die richtige Tabellenstelle ist grün markiert." : esc(fieldMessage(defs[0], r.fields[0]))}</p>`
          : "";
    let explainUI = "";
    if (s.kind === "explain")
      explainUI = `<label class="note-label" for="table-note">Meine Erklärung</label><textarea id="table-note" rows="3" maxlength="1200" ${r.done ? "readonly" : ""}>${esc(r.note)}</textarea><p class="small">Dein Satz wird nicht automatisch bewertet. Du vergleichst ihn selbst mit einem Beispiel.</p>${r.reviewShown ? `<div class="solution"><h3>Ein mögliches Beispiel</h3><p>${esc(s.solution)}</p><p><strong>Vergleiche:</strong> Nennst du die 10 Minuten, beide Wege zusammen und den ganzen Weg von 3.600 m?</p></div>` : ""}`;
    const feedbackClass = r.done
      ? r.score > 0
        ? "good"
        : "bad"
      : r.fields.some((f) => f.status === "pending" && f.tries)
        ? "bad"
        : "";
    $("table-game").innerHTML =
      `<p class="eyebrow">ÜBUNG ${missionIndex + 1} VON ${missions.length} · AUFGABE ${stepIndex + 1} VON ${m.steps.length}</p><section class="task" id="table-title" tabindex="-1"><h1>${esc(s.title)}</h1><p>${s.prompt}</p></section><section class="card"><h2>${m.icon} ${esc(m.title)}</h2><p class="problem">${m.story}</p><p class="direction">${m.kind === "apart" ? "← Start → · Beide entfernen sich voneinander." : m.kind === "toward" ? "Start → ← Start · Beide kommen einander näher." : "Beide Becken bekommen gleichzeitig Wasser."}</p>${m.kind === "toward" ? '<p class="table-rule"><strong>Wichtig:</strong> „Beide Wege zusammen“ ist der schon geschaffte Weg. Für den <strong>übrigen Abstand</strong> ziehst du diese Summe vom Weg am Anfang ab.</p>' : ""}${tableMarkup(m, s, r)}</section><section class="card table-answer"><h2>${s.kind === "fill" ? "Prüfe deine Tabelle" : s.kind === "explain" ? "Dein Satz" : "Deine Antwort"}</h2>${inputUI}${explainUI}<div class="tools"><button type="button" id="table-check" class="primary" ${r.done ? "disabled" : ""}>${s.kind === "explain" ? (r.reviewShown ? "Ich habe verglichen – fertig ✓" : "Beispiel anzeigen") : "Prüfen ✓"}</button><button type="button" id="table-tip-button" aria-expanded="false" aria-controls="table-hint">💡 Tipp öffnen</button></div><div id="table-hint" class="hint" hidden></div><p class="feedback ${feedbackClass}" id="table-feedback" role="status" aria-live="polite">${esc(message || (r.done ? (s.kind === "explain" ? "✓ Du hast deine Erklärung mit dem Beispiel verglichen." : r.score > 0 ? "✓ Alles richtig! Gut gemacht." : "Du hast die Lösungen gesehen. Schau dir den Rechenweg an.") : "Du hast für jedes Feld drei Versuche. Eine leere Eingabe zählt nicht als Versuch."))}</p>${r.done ? `<div class="step-reward">${stars(r.score, s.maxStars || 3)}<p><strong>${r.score} von ${s.maxStars || 3} Sternen in diesem Versuch.</strong> ${s.kind === "explain" ? "Ein Stern für deine eigene Erklärung und den Vergleich." : "Dein bester Versuch bleibt gespeichert."}</p><p>Bisher bester Stand: ${best(missionIndex, stepIndex)} ${best(missionIndex, stepIndex) === 1 ? "Stern" : "Sterne"}. Sterne zählen nicht doppelt.</p></div>${s.kind !== "explain" ? `<details class="solution"><summary>So kannst du lösen</summary><p class="solution-lines">${esc(solution(m, s))}</p></details>` : ""}` : ""}<div class="tools"><button type="button" id="table-back" ${stepIndex === 0 ? "disabled" : ""}>← Zurück</button><button type="button" id="table-next" class="primary forward" ${r.done ? "" : "disabled"}>${stepIndex === m.steps.length - 1 ? "Übung abschließen →" : "Weiter →"}</button></div><p class="small">${r.done ? "Tippe auf „" + (stepIndex === m.steps.length - 1 ? "Übung abschließen" : "Weiter") + "“." : "Bearbeite die Aufgabe. Danach geht es mit dem großen grünen Button weiter."}</p></section>`;
    $("table-check").addEventListener("click", check);
    $("table-next").addEventListener("click", next);
    $("table-back").addEventListener("click", () => {
      if (stepIndex > 0) {
        stepIndex--;
        message = "";
        hintCount = 0;
        render();
        top();
      }
    });
    $("table-tip-button").addEventListener("click", toggleHint);
    $("table-game")
      .querySelectorAll("[data-input]")
      .forEach((input) => {
        input.addEventListener("input", () => {
          r.fields[Number(input.dataset.input)].value = input.value;
          write();
        });
        input.addEventListener("keydown", (event) => {
          if (event.key === "Enter") {
            event.preventDefault();
            check();
          }
        });
      });
    for (const type of ["cell", "choice"])
      $("table-game")
        .querySelectorAll(`[data-${type}]`)
        .forEach((button) =>
          button.addEventListener("click", () => {
            if (r.done) return;
            r.fields[0].value = button.dataset[type];
            write();
            $("table-game")
              .querySelectorAll(`[data-${type}]`)
              .forEach((b) => b.setAttribute("aria-pressed", String(b === button)));
          }),
        );
    $("table-game")
      .querySelectorAll("[data-work]")
      .forEach((input) =>
        input.addEventListener("input", () => {
          r.work ||= {};
          r.work[input.dataset.work] = input.value.slice(0, 30);
          write();
        }),
      );
    $("table-note")?.addEventListener("input", (event) => {
      r.note = event.target.value.slice(0, 1200);
      write();
    });
    wallet();
  }
  function parseNumber(value) {
    const s = String(value).trim();
    if (!/^(?:\d{1,7}|\d{1,3}(?:\.\d{3})+|\d{1,3}(?:[ \u00a0\u202f]\d{3})+)$/.test(s)) return null;
    return Number(s.replace(/[. \u00a0\u202f]/g, ""));
  }
  function parseClock(value) {
    const m = String(value)
      .trim()
      .match(/^(\d{1,2})(?::|\.|\s*Uhr\s*)(\d{2})(?:\s*Uhr)?$/i);
    return m && Number(m[1]) < 24 && Number(m[2]) < 60 ? Number(m[1]) * 60 + Number(m[2]) : null;
  }
  function finish(r, score) {
    r.done = true;
    r.score = score;
    Rewards.extra(profile, `tables-${mission().id}-${stepIndex}`, score);
    write();
  }
  function check() {
    const r = record(),
      s = step();
    if (r.done) return;
    message = "";
    if (s.kind === "explain") {
      if (!r.note.trim()) {
        message = "Schreibe zuerst deinen eigenen Satz. Du kannst einen Tipp nutzen.";
        render();
        return;
      }
      if (!r.reviewShown) {
        r.reviewShown = true;
        message =
          "Lies das Beispiel. Vergleiche es mit deinem Satz. Danach kannst du die Aufgabe abschließen.";
        write();
        render();
        return;
      }
      finish(r, 1);
      render();
      return;
    }
    const defs = fieldsFor(mission(), s);
    let attempted = false;
    for (let i = 0; i < r.fields.length; i++) {
      const f = r.fields[i];
      if (f.status !== "pending" || !f.value.trim()) continue;
      attempted = true;
      f.tries++;
      const actual = ["cell", "choice"].includes(s.kind)
        ? f.value
        : s.kind === "clock"
          ? parseClock(f.value)
          : parseNumber(f.value);
      const expected = s.kind === "choice" ? String(defs[i].answer) : defs[i].answer;
      if (actual === expected) f.status = "correct";
      else if (f.tries >= 3) f.status = "revealed";
    }
    if (r.fields.every((f) => f.status !== "pending"))
      finish(
        r,
        r.fields.some((f) => f.status === "revealed")
          ? 0
          : 4 - Math.max(...r.fields.map((f) => f.tries)),
      );
    else
      message = !attempted
        ? "Wähle eine Antwort oder trage eine Zahl ein. Das zählt noch nicht als Versuch."
        : r.fields.some((f) => f.status === "pending" && f.tries)
          ? "✗ Schau auf die roten Hinweise. Du kannst noch einmal rechnen. Richtige Antworten bleiben stehen."
          : "✓ Deine bisherigen Antworten sind richtig. Ergänze die offenen Felder.";
    write();
    render();
  }
  function toggleHint() {
    const h = $("table-hint"),
      b = $("table-tip-button");
    if (!h.hidden) {
      h.hidden = true;
      b.setAttribute("aria-expanded", "false");
      b.textContent = "💡 Tipp öffnen";
      b.focus();
      return;
    }
    const m = mission(),
      s = step(),
      r = record();
    let text;
    if (s.kind === "fill") {
      const defs = fieldsFor(m, s),
        i = Math.max(
          0,
          r.fields.findIndex((f) => f.status === "pending"),
        ),
        f = defs[i],
        level = Math.min(2, Math.max(hintCount, r.fields[i]?.tries || 0));
      if (level === 0)
        text = `Beginne mit ${f.label}. Lies die Zeit links und die Überschrift oben.`;
      else if (f.c === 3)
        text = `In der Zeile „${m.times[f.r]} min“ addierst du ${fmt(rows(m)[f.r][1])} ${m.unit} und ${fmt(rows(m)[f.r][2])} ${m.unit}.`;
      else if (m.interval === 60) {
        const t = m.times[f.r];
        text =
          t === 30
            ? `30 Minuten sind die Hälfte von 60 Minuten. Teile ${m.rates[f.c - 1]} km durch 2.`
            : t === 15
              ? `15 Minuten sind ein Viertel von 60 Minuten. Teile ${m.rates[f.c - 1]} km durch 4.`
              : `75 Minuten sind 60 + 15 Minuten. Rechne ${m.rates[f.c - 1]} km + ${m.rates[f.c - 1] / 4} km.`;
      } else
        text = `${m.names[f.c - 1]} schafft in einer Minute ${m.rates[f.c - 1]} ${m.unit}. Rechne ${m.times[f.r]} × ${m.rates[f.c - 1]}.`;
      if (level === 2) text += ` Das Ergebnis ist ${fmt(f.answer)} ${m.unit}.`;
    } else
      text =
        s.hints[
          Math.min(s.hints.length - 1, Math.max(hintCount, ...r.fields.map((f) => f.tries), 0))
        ];
    hintCount++;
    h.innerHTML = `<div class="hint-head"><strong>Dein nächster Schritt</strong><button type="button" id="table-tip-close">✕ Tipp schließen</button></div><p>${esc(text)}</p>`;
    h.hidden = false;
    b.setAttribute("aria-expanded", "true");
    b.textContent = "Tipp schließen";
    $("table-tip-close").addEventListener("click", toggleHint);
  }
  function next() {
    if (!record().done) return;
    if (stepIndex + 1 < mission().steps.length) {
      stepIndex++;
      message = "";
      hintCount = 0;
      render();
      top();
      return;
    }
    summary();
  }
  function summary() {
    const m = mission(),
      score = m.steps.reduce((n, _, j) => n + best(missionIndex, j), 0),
      max = m.steps.reduce((n, s) => n + (s.maxStars || 3), 0);
    $("table-game").innerHTML =
      `<section class="task" id="table-title" tabindex="-1"><h1>✓ Übung geschafft!</h1><p>Du hast alle drei Aufgaben von <strong>${esc(m.title)}</strong> bearbeitet.</p></section><section class="card"><h2>Deine gesammelten Sterne</h2>${m.steps.map((s, j) => `<p>Aufgabe ${j + 1}: ${stars(best(missionIndex, j), s.maxStars || 3)}</p>`).join("")}<p><strong>${score} von ${max} Sternen</strong> · Dein bester Versuch zählt.</p><div class="tools"><button type="button" class="primary forward" id="summary-next">${missionIndex < missions.length - 1 ? "Nächste Übung →" : "Zur Übungsübersicht →"}</button><button type="button" id="summary-repeat">Noch einmal üben</button><a class="button" href="avatar.html">⭐ Avatar gestalten</a></div></section>`;
    $("summary-next").addEventListener("click", () =>
      missionIndex < missions.length - 1 ? start(missionIndex + 1) : home(),
    );
    $("summary-repeat").addEventListener("click", () => {
      all[profile] ||= {};
      all[profile][m.id] = {};
      write();
      stepIndex = 0;
      message = "";
      hintCount = 0;
      render();
      top();
    });
    wallet();
    top();
  }
  $("table-profile").innerHTML = Array.from(
    { length: 20 },
    (_, i) => `<option value="${i + 1}">Lernplatz ${i + 1}</option>`,
  ).join("");
  $("table-profile").addEventListener("change", (event) => {
    Rewards.setActive(event.target.value);
    profile = Rewards.active();
    home();
  });
  $("table-home").addEventListener("click", home);
  home();
})();
