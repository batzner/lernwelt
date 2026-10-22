"use strict";
(() => {
  const node = id => document.getElementById(id);
  let topic = 0, task = 0;
  const profile = node("profil"), tabs = node("themen"), panel = node("aufgabe");
  const button = (label, className = "") => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = className;
    b.textContent = label;
    return b;
  };
  function render(focus = false) {
    const [name, tasks] = matheThemen[topic];
    const [question, choices, answer, hint, explanation, rows] = tasks[task];
    const key = "mathe-entdecken-runde2-" + topic + "-" + task;
    let attempts = 0, finished = false;
    tabs.replaceChildren(...matheThemen.map(([title], i) => {
      const b = button(title, i === topic ? "primary" : "");
      if (i === topic) b.setAttribute("aria-current","step");
      b.onclick = () => { topic = i; task = 0; render(true); };
      return b;
    }));
    panel.innerHTML = '<p id="nummer"></p><h2 id="frage" tabindex="-1"></h2><div id="zahlen"></div><div id="antworten" class="actions choice-list"></div><details><summary>Tipp</summary><p id="tipp"></p></details><p id="meldung" role="status"></p><div id="weiter" class="actions"></div>';
    node("nummer").textContent = name + " · Aufgabe " + (task + 1) + " von " + tasks.length;
    node("frage").textContent = question;
    node("tipp").textContent = hint;
    if (rows) {
      const table = document.createElement("table");
      table.className = "mathe-werte";
      const head = table.createTHead().insertRow();
      for (const title of rows[0]) {
        const th = document.createElement("th");
        th.scope = "col";
        th.textContent = title;
        head.append(th);
      }
      const body = table.createTBody();
      for (const row of rows.slice(1)) {
        const tr = body.insertRow();
        for (const value of row) tr.insertCell().textContent = value;
      }
      node("zahlen").append(table);
    }
    const buttons = choices.map((choice, i) => {
      const b = button(choice);
      b.onclick = () => {
        if (finished || b.disabled) return;
        attempts++;
        const correct = i === answer;
        const status = node("meldung");
        status.className = correct ? "good" : "bad";
        if (correct || attempts === 3) {
          finished = true;
          const stars = correct ? 4 - attempts : 0;
          if (stars) Rewards.extra(profile.value, key, stars);
          buttons.forEach((other, idx) => {
            other.disabled = true;
            if (idx === answer) other.classList.add("good");
          });
          status.textContent = (correct ? "Richtig! " : "Schau dir die Lösung an. ") + explanation + " · " + "★".repeat(stars) + "☆".repeat(3 - stars) + " " + stars + " von 3 Sternen";
        } else {
          b.classList.add("bad");
          status.textContent = "Noch nicht richtig. Versuch es noch einmal.";
          buttons.find(other => !other.classList.contains("bad"))?.focus();
        }
      };
      return b;
    });
    node("antworten").append(...buttons);
    const previous = button("← Zurück");
    previous.disabled = task === 0;
    previous.onclick = () => { task--; render(true); };
    const last = task === tasks.length - 1;
    const next = button(last ? (topic === matheThemen.length - 1 ? "Zur Themenübersicht ↑" : "Nächstes Thema →") : "Weiter →", "primary");
    next.onclick = () => {
      if (last && topic === matheThemen.length - 1) tabs.firstElementChild.focus();
      else { if (last) { topic++; task = 0; } else task++; render(true); }
    };
    node("weiter").append(previous, next);
    if (focus) node("frage").focus();
  }
  for (let i = 1; i <= 20; i++) profile.add(new Option("Lernplatz " + i, String(i)));
  profile.value = Rewards.active();
  profile.onchange = () => { Rewards.setActive(profile.value); render(); };
  render();
})();
