(function () {
  "use strict";
  const KEY = "lernwelt-datenschutzhinweis-2026-10-20-zuhause";
  function init() {
    if (document.getElementById("privacy-notice")) return;
    const style = document.createElement("style");
    style.textContent = `
      #privacy-notice {
        width: min(620px, calc(100% - 28px));
        max-height: 88dvh;
        overflow: auto;
        border: 2px solid #789885;
        border-radius: 24px;
        padding: 24px;
        color: #183e40;
        background: #fffdf6;
        font:
          17px/1.55 system-ui,
          sans-serif;
        box-shadow: 0 18px 80px #132f3555;
      }
      #privacy-notice::backdrop {
        background: #153c4470;
      }
      #privacy-notice h2 {
        font-size: 27px;
        line-height: 1.2;
        margin: 0 42px 20px 0;
      }
      #privacy-notice p {
        font-size: 17px;
        line-height: 1.55;
        margin: 14px 0;
      }
      #privacy-notice .privacy-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        margin-top: 20px;
      }
      #privacy-notice button,
      #privacy-notice .privacy-actions a,
      .privacy-footer a,
      .privacy-footer button {
        font:
          700 17px/1.3 system-ui,
          sans-serif;
        min-height: 48px;
        padding: 13px 16px;
        border: 2px solid #789885;
        border-radius: 12px;
        background: white;
        color: #183e40;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        cursor: pointer;
      }
      #privacy-notice #privacy-agree {
        background: #205f50;
        border-color: #205f50;
        color: white;
      }
      #privacy-notice .privacy-close {
        position: absolute;
        top: 12px;
        right: 12px;
        padding: 10px;
        min-width: 44px;
      }
      #privacy-notice .privacy-note {
        font-size: 14px;
      }
      #privacy-notice p a {
        color: #205f50;
      }
      #privacy-notice :focus-visible,
      .privacy-footer :focus-visible {
        outline: 3px solid #965500;
        outline-offset: 3px;
      }
      .privacy-footer {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 12px;
        padding: 24px;
        margin-top: 24px;
        border-top: 1px solid #b7cbbd;
        background: #edf2eb;
      }
      .privacy-footer a,
      .privacy-footer button {
        background: transparent;
        font-size: 16px;
      }
      .privacy-footer .ki-notice {
        flex-basis: 100%;
        margin: 0 0 8px;
        text-align: center;
        font:
          16px/1.6 system-ui,
          sans-serif;
        color: #183e40;
      }
      @media (max-width: 420px) {
        #privacy-notice {
          padding: 20px;
        }
        #privacy-notice h2 {
          font-size: 23px;
        }
      }
    `;
    document.head.appendChild(style);
    const footer = document.createElement("footer");
    footer.className = "privacy-footer";
    footer.setAttribute("aria-label", "Datenschutz und Impressum");
    footer.innerHTML = `
      <p class="ki-notice">
        Diese Lernwelt wurde mit Unterstützung künstlicher Intelligenz entwickelt.<br>
        Fachlich geprüft durch Matthias Batzner · Stand: 20.10.2026.
      </p>
      <button type="button" id="privacy-reopen">Hinweis öffnen</button>
      <a href="datenschutz.html">Datenschutz</a>
      <a href="cookie-richtlinie.html">Cookie-Richtlinie</a>
      <a href="impressum.html">Impressum</a>
    `;
    document.body.appendChild(footer);
    const dialog = document.createElement("dialog");
    dialog.id = "privacy-notice";
    dialog.setAttribute("aria-labelledby", "privacy-title");
    dialog.innerHTML = `
      <h2 id="privacy-title">Kurz erklärt: deine Lernwelt</h2>
      <p>
        🌱 <strong>Zu Hause üben:</strong> Die Lernwelt ist ein frei zugängliches Angebot von
        Matthias Batzner. Du übst freiwillig. Die Nutzung wird nicht kontrolliert. Wenn du hier
        nicht übst, hast du keine Nachteile.
      </p>
      <p>
        ⭐ <strong>Dein Gerät merkt sich</strong> Übungen, Antworten, Sterne und deinen Avatar. Diese
        Angaben verlassen dein Gerät nicht. Auf einem gemeinsamen Gerät können andere sie sehen.
      </p>
      <p>
        🌐 <strong>Hosting:</strong> Die Website liegt bei GitHub Pages. GitHub erhält beim Aufruf
        technisch bedingt Daten wie die IP-Adresse. Mehr dazu in der
        <a href="datenschutz.html">Datenschutzerklärung</a>.
      </p>
      <p>
        Fragen? <a href="impressum.html">Kontakt zu Matthias Batzner</a>.
      </p>
      <p class="privacy-note">
        Mit „Hinweis bestätigen – weiter“ bestätigst du, dass du diesen Hinweis und die
        <a href="datenschutz.html">Datenschutzerklärung</a> zur Kenntnis genommen hast.
      </p>
      <div class="privacy-actions">
        <button type="button" id="privacy-agree">Hinweis bestätigen – weiter</button>
        <button type="button" id="privacy-leave">Seite verlassen</button>
        <a href="datenschutz.html">Datenschutz im Detail</a>
      </div>
    `;
    document.body.appendChild(dialog);
    let lastFocus = null;
    const close = () => {
      try {
        sessionStorage.setItem(KEY, "gelesen");
      } catch {}
      if (typeof dialog.close === "function") dialog.close();
      else dialog.removeAttribute("open");
      lastFocus?.focus?.();
    };
    const open = () => {
      lastFocus = document.activeElement;
      if (typeof dialog.showModal === "function") {
        if (!dialog.open) dialog.showModal();
      } else {
        dialog.setAttribute("open", "");
        dialog.setAttribute("role", "dialog");
        dialog.setAttribute("aria-modal", "true");
      }
      document.getElementById("privacy-agree").focus();
    };
    document.getElementById("privacy-agree").addEventListener("click", close);
    document
      .getElementById("privacy-leave")
      .addEventListener("click", () => location.replace("about:blank"));
    document.getElementById("privacy-reopen").addEventListener("click", open);
    dialog.addEventListener("cancel", (event) => {
      event.preventDefault();
    });
    let seen = false;
    try {
      seen = sessionStorage.getItem(KEY) === "gelesen";
    } catch {}
    if (!seen && !/\/(impressum|datenschutz|cookie-richtlinie)\.html$/.test(location.pathname))
      open();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
