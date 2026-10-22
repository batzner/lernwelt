// Feedback, hint and reward widgets shared by the learning pages (Lesemissionen, LUFRA,
// Satzdetektive). Expects Rewards (js/rewards.js) and elements with the ids used below.
window.Feedback = (function () {
  function escapeHtml(x) {
    return String(x).replace(
      /[&<>"']/g,
      (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c],
    );
  }
  function avatarMini(profile) {
    const node = document.getElementById("avatar-mini");
    if (!node) return;
    const p = String(profile);
    node.innerHTML = `
      <div class="portrait">${Rewards.svg(p)}</div>
      <div>
        <strong>Dein Lern-Avatar</strong>
        <p>${Rewards.earned(p)} Sterne verdient · ${Rewards.balance(p)} zum Gestalten verfügbar</p>
      </div>
      <a class="wallet" href="avatar.html">${Rewards.star(true, 24)} Avatar gestalten →</a>`;
  }
  // state: "success" | "error" | "neutral"
  function style(id, state) {
    const node = document.getElementById(id);
    if (!node) return;
    node.className = "feedback feedback-" + state;
    if (state === "error" && !node.textContent.startsWith("✗"))
      node.textContent = "✗ " + node.textContent;
  }
  function taskReward(profile, n, added = 0, label = "Diese Aufgabe") {
    const node = document.getElementById("task-reward");
    if (!node) return;
    const message =
      added > 0
        ? "+" + added + " neue Sterne für deinen Avatar!"
        : n
          ? "Dein bester Versuch zählt. Bereits gesammelte Sterne zählen nicht doppelt."
          : "Schau dir die Lösung an und probiere es später noch einmal.";
    node.innerHTML = `
      <div class="reward-card">
        ${Rewards.stars(n)}
        <p><b>${escapeHtml(label)}: ${n} von 3 Sternen</b></p>
        <p>${message}</p>
        <a href="avatar.html">Zu deinem Avatar →</a>
      </div>`;
    avatarMini(profile);
  }
  function closeHint() {
    const n = document.getElementById("hint");
    if (n) n.hidden = true;
    document
      .querySelectorAll("[data-hint-button]")
      .forEach((b) => b.setAttribute("aria-expanded", "false"));
  }
  // Returns true if the hint was open and got closed (hint buttons toggle).
  function closeIfOpen() {
    const n = document.getElementById("hint");
    if (!n || n.hidden) return false;
    closeHint();
    return true;
  }
  function showHint(text) {
    const n = document.getElementById("hint");
    if (!n) return;
    n.hidden = false;
    n.innerHTML = `
      <div class="hint-head">
        <strong>💡 Dein nächster Schritt</strong>
        <button onclick="learningApp.closeHint()" aria-label="Tipp schließen">✕ Tipp schließen</button>
      </div>
      <p>${escapeHtml(text)}</p>`;
    document
      .querySelectorAll("[data-hint-button]")
      .forEach((b) => b.setAttribute("aria-expanded", "true"));
  }

  return { escapeHtml, avatarMini, style, taskReward, closeHint, closeIfOpen, showHint };
})();
