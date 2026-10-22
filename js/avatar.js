(function () {
  let profile = Rewards.active();
  const el = (id) => document.getElementById(id);
  function render() {
    el("avatar-profile").value = profile;
    el("avatar-portrait").innerHTML = Rewards.svg(profile);
    el("shop-summary").innerHTML =
      "<div>Zum Gestalten verfügbar<b>" +
      Rewards.balance(profile) +
      " Sterne</b></div><div>Insgesamt verdient<b>" +
      Rewards.earned(profile) +
      " Sterne</b></div>";
    const a = Rewards.avatar(profile);
    el("shop-items").innerHTML = Rewards.catalog
      .map((item) => {
        const owned = a.owned.includes(item.id),
          equipped = a.equipped[item.slot] === item.id;
        return `<article class="shop-item"><h3>${item.name}</h3><p>${owned ? "✓ Bereits freigeschaltet" : item.cost + " Sterne"}</p><button class="${equipped ? "primary" : ""}" ${!owned && Rewards.balance(profile) < item.cost ? "disabled" : ""} onclick="AvatarShop.choose('${item.id}')">${equipped ? "Ausziehen" : owned ? "Anziehen" : item.cost + " Sterne · Freischalten"}</button></article>`;
      })
      .join("");
    el("skin-colors").innerHTML = ["#edb998", "#b47752", "#754c34"]
      .map(
        (c, i) =>
          `<button style="background:${c}" aria-label="Hautfarbe ${i + 1}" aria-pressed="${a.skin === c}" onclick="AvatarShop.color('skin','${c}')"></button>`,
      )
      .join("");
    el("shirt-colors").innerHTML = ["#43869e", "#7a61a9", "#db7c38", "#399077"]
      .map(
        (c, i) =>
          `<button style="background:${c}" aria-label="Kleidungsfarbe ${i + 1}" aria-pressed="${a.color === c}" onclick="AvatarShop.color('color','${c}')"></button>`,
      )
      .join("");
  }
  function changeProfile(p) {
    Rewards.setActive(p);
    profile = Rewards.active();
    render();
    el("shop-status").textContent = "Du gestaltest den Avatar für Lernplatz " + profile + ".";
  }
  function choose(id) {
    const a = Rewards.avatar(profile),
      owned = a.owned.includes(id);
    if (owned) {
      el("shop-status").textContent = Rewards.equip(profile, id)
        ? "Dein Look wurde gespeichert."
        : "Deine Auswahl konnte nicht gespeichert werden.";
    } else el("shop-status").textContent = Rewards.buy(profile, id);
    render();
  }
  function color(type, c) {
    el("shop-status").textContent = Rewards.color(profile, type, c)
      ? "Deine Farbe wurde gespeichert."
      : "Die Farbe konnte nicht gespeichert werden.";
    render();
  }
  window.AvatarShop = { changeProfile, choose, color };
  el("avatar-profile").innerHTML = Array.from(
    { length: 20 },
    (_, i) => '<option value="' + (i + 1) + '">Lernplatz ' + (i + 1) + "</option>",
  ).join("");
  render();
})();
