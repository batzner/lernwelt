(function () {
  const catalog = [
    { id: "game-lights", name: "Lichterrätsel", cost: 40, slot: "game" },
    { id: "game-slide", name: "Schiebepuzzle", cost: 70, slot: "game" },
    { id: "game-code", name: "Codeknacker", cost: 100, slot: "game" },
    { id: "cap", name: "Kappe", cost: 4, slot: "hat" },
    { id: "crown", name: "Sternenkrone", cost: 12, slot: "hat" },
    { id: "glasses", name: "Brille", cost: 3, slot: "glasses" },
    { id: "scarf", name: "Halstuch", cost: 5, slot: "scarf" },
    { id: "space", name: "Sternenhimmel", cost: 6, slot: "background" },
    { id: "medal", name: "Sternenmedaille", cost: 8, slot: "medal" },
  ];
  function read(k) {
    try {
      const v = JSON.parse(localStorage.getItem(k) || "{}");
      return v && typeof v === "object" && !Array.isArray(v) ? v : {};
    } catch {
      return {};
    }
  }
  function active() {
    try {
      const p = localStorage.getItem("lernwelt-active-profile");
      return /^(?:[1-9]|1[0-9]|20)$/.test(p) ? p : "1";
    } catch {
      return "1";
    }
  }
  function setActive(p) {
    if (!/^(?:[1-9]|1[0-9]|20)$/.test(String(p))) return;
    try {
      localStorage.setItem("lernwelt-active-profile", String(p));
    } catch {}
  }
  function earned(p) {
    let n = 0;
    for (const key of [
      "lesemissionen-klasse-vier-v1",
      "lufra-klasse-vier-v1",
      "satzdetektive-v1",
    ]) {
      const data = read(key)[p] || {};
      for (const [k, v] of Object.entries(data)) {
        const allowed =
          key === "satzdetektive-v1" ? /^[spb]-(?:[0-9]|1[01])$/.test(k) : /^[0-5]-[0-4]$/.test(k);
        if (allowed && Number.isInteger(v) && v > 0 && v <= 3) n += v;
      }
    }
    const extra = read("lernwelt-extra-rewards")[p] || {};
    for (const v of Object.values(extra)) if (Number.isInteger(v) && v > 0 && v <= 3) n += v;
    return n;
  }
  function extra(p, key, n) {
    n = Math.max(0, Math.min(3, Math.floor(n)));
    const all = read("lernwelt-extra-rewards");
    if (!all[p] || typeof all[p] !== "object") all[p] = {};
    const old = Number(all[p][key]) || 0;
    if (n <= old) return 0;
    all[p][key] = n;
    try {
      localStorage.setItem("lernwelt-extra-rewards", JSON.stringify(all));
      return n - old;
    } catch {
      return 0;
    }
  }
  const hairColors = [["#46382f","Braun"],["#202027","Schwarz"],["#e6bc65","Blond"],["#ac5032","Rot"],["#b8bdc6","Silber"],["#b45c96","Rosa"],["#6359b2","Lila"],["#428fa1","Blau"]];
  function hair(p, type, value) {
    const allowed = {hairColor: hairColors.map(([c])=>c), hairLength:["short","medium","long"], hairStyle:["straight","curls","spikes","ponytail","bun","none"]};
    if (!allowed[type]?.includes(value)) return false;
    const a=avatar(p);a[type]=value;return writeAvatar(p,a);
  }
  function hairSvg(a, back=false) {
    if(a.hairStyle==="none")return "";
    const c=a.hairColor, bottom={short:112,medium:151,long:197}[a.hairLength];
    if(back) {
      let path='<path d="M59 99Q54 29 120 35Q186 29 181 99V'+bottom+'Q163 '+(bottom+12)+' 158 '+(bottom-8)+'V83H82V'+(bottom-8)+'Q67 '+(bottom+12)+' 59 '+bottom+'Z"/>';
      if(a.hairStyle==="ponytail")path+='<path d="M164 58Q215 30 210 '+bottom+'Q184 '+(bottom-20)+' 184 93Z"/>';
      if(a.hairStyle==="bun")path+='<circle cx="120" cy="30" r="24"/>';
      return '<g fill="'+c+'">'+path+'</g>';
    }
    let shape=a.hairStyle==="spikes"
      ?'<path d="M61 94 65 58 83 64 85 33 108 49 124 23 139 49 161 35 163 65 179 62 180 96 155 71 135 79 112 67 88 80Z"/>'
      :a.hairStyle==="curls"
      ?'<path d="M61 96Q53 39 120 36Q185 37 180 96L157 76 133 80 108 72 85 85Z"/>'+[65,85,105,125,145,165].map((x,i)=>'<circle cx="'+x+'" cy="'+(i===0||i===5?68:51)+'" r="17"/>').join("")
      :'<path d="M61 96Q54 33 120 36Q186 32 180 96L163 72Q139 83 117 63Q101 84 78 80Z"/>';
    return '<g fill="'+c+'">'+shape+'</g>';
  }
  function headSvg(a) {
    return hairSvg(a,true)+'<ellipse cx="120" cy="105" rx="58" ry="65" fill="'+a.skin+'"/>'+hairSvg(a);
  }
  function avatar(p) {
    const all = read("lernwelt-avatars-v1"),
      a = all[p] || {};
    return {
      hairColor: hairColors.some(([c]) => c === a.hairColor) ? a.hairColor : "#46382f",
      hairLength: ["short","medium","long"].includes(a.hairLength) ? a.hairLength : "short",
      hairStyle: ["straight","curls","spikes","ponytail","bun","none"].includes(a.hairStyle) ? a.hairStyle : "straight",
      skin: ["#edb998", "#b47752", "#754c34"].includes(a.skin) ? a.skin : "#edb998",
      color: ["#43869e", "#7a61a9", "#db7c38", "#399077"].includes(a.color) ? a.color : "#43869e",
      owned: Array.isArray(a.owned)
        ? [...new Set(a.owned)].filter((id) => catalog.some((x) => x.id === id))
        : [],
      equipped: a.equipped && typeof a.equipped === "object" ? a.equipped : {},
    };
  }
  function spent(p) {
    const world = read("lernwelt-world-v1")[p] || {};
    const moving =
      Number.isSafeInteger(world.moveSpent) && world.moveSpent >= 0 ? world.moveSpent : 0;
    const decorations=Number.isSafeInteger(world.decorationSpent)&&world.decorationSpent>=0?world.decorationSpent:0;
    return avatar(p).owned.reduce((n, id) => n + catalog.find((x) => x.id === id).cost, 0) + moving + decorations;
  }
  function balance(p) {
    return Math.max(0, earned(p) - spent(p));
  }
  function writeAvatar(p, a) {
    const all = read("lernwelt-avatars-v1");
    all[p] = a;
    try {
      localStorage.setItem("lernwelt-avatars-v1", JSON.stringify(all));
      return true;
    } catch {
      return false;
    }
  }
  function buy(p, id) {
    const item = catalog.find((x) => x.id === id);
    if (!item) return "Unbekanntes Zubehör.";
    const a = avatar(p);
    if (!a.owned.includes(id)) {
      if (balance(p) < item.cost) return "Dir fehlen noch " + (item.cost - balance(p)) + " Sterne.";
      a.owned.push(id);
    }
    a.equipped[item.slot] = id;
    return writeAvatar(p, a)
      ? "Freigeschaltet und angezogen!"
      : "Der Browser konnte deine Auswahl nicht speichern.";
  }
  function equip(p, id) {
    const item = catalog.find((x) => x.id === id),
      a = avatar(p);
    if (!item || !a.owned.includes(id)) return false;
    a.equipped[item.slot] = a.equipped[item.slot] === id ? "" : id;
    return writeAvatar(p, a);
  }
  function color(p, type, v) {
    const a = avatar(p),
      allowed =
        type === "skin"
          ? ["#edb998", "#b47752", "#754c34"]
          : ["#43869e", "#7a61a9", "#db7c38", "#399077"];
    if (!allowed.includes(v)) return false;
    a[type === "skin" ? "skin" : "color"] = v;
    return writeAvatar(p, a);
  }
  function star(on, size = 32) {
    return `<svg class="reward-star ${on ? "filled" : "empty"}" width="${size}" height="${size}" viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.2-6.2 3.2 1.2-6.8-5-4.9 6.9-1z" fill="${on ? "#ffc400" : "#ffffff"}" stroke="${on ? "#825300" : "#718176"}" stroke-width="1.3"/></svg>`;
  }
  function stars(n) {
    n = Math.max(0, Math.min(3, Number(n) || 0));
    return `<span class="star-row" role="img" aria-label="${n} von 3 Sternen">${[0, 1, 2].map((i) => star(i < n)).join("")}</span>`;
  }
  function svg(p) {
    const a = avatar(p),
      e = a.equipped,
      has = (slot, id) => e[slot] === id && a.owned.includes(id);
    return `<svg viewBox="0 0 240 250" role="img" aria-label="Dein gestalteter Avatar"><rect x="4" y="4" width="232" height="242" rx="40" fill="${has("background", "space") ? "#35305c" : "#e5eeeb"}"/>${has("background", "space") ? '<g fill="#f5bd3e"><circle cx="33" cy="42" r="4"/><circle cx="202" cy="65" r="4"/><path d="m192 15 3 7 8 1-6 5 2 8-7-4-6 4 1-8-6-5 8-1z"/></g>' : ""}<path d="M42 242v-28c0-37 31-62 78-62s78 25 78 62v28" fill="${a.color}"/>${headSvg(a)}<circle cx="97" cy="106" r="5" fill="#302e33"/><circle cx="144" cy="106" r="5" fill="#302e33"/><path d="M101 133q19 17 38 0" fill="none" stroke="#6b3d39" stroke-width="5" stroke-linecap="round"/>${has("glasses", "glasses") ? '<g fill="none" stroke="#263d53" stroke-width="5"><rect x="77" y="94" width="36" height="27" rx="9"/><rect x="128" y="94" width="36" height="27" rx="9"/><path d="M113 105h15"/></g>' : ""}${has("hat", "cap") ? '<path d="M61 75q5-56 59-56t59 56H61m64 0h69q12 15-4 16h-65z" fill="#db7c38" stroke="#975329" stroke-width="3"/>' : ""}${has("hat", "crown") ? '<path d="m70 60-8-37 34 18 24-31 24 31 34-18-8 37z" fill="#f5bd3e" stroke="#967015" stroke-width="4"/>' : ""}${has("scarf", "scarf") ? '<path d="m70 161 50 22 50-22-14 37h-31l26 42-28 4-22-46H83z" fill="#e77770"/>' : ""}${has("medal", "medal") ? '<path d="m99 173 21 37 21-37" fill="none" stroke="#f5bd3e" stroke-width="8"/><circle cx="120" cy="218" r="18" fill="#f5bd3e" stroke="#967015" stroke-width="3"/><path d="m120 206 3 7 8 1-6 5 2 8-7-4-6 4 1-8-6-5 8-1z" fill="#fff3b9"/>' : ""}</svg>`;
  }
  window.Rewards = {
    catalog,
    hairColors,
    hair,
    headSvg,
    active,
    setActive,
    earned,
    extra,
    avatar,
    balance,
    buy,
    equip,
    color,
    svg,
    stars,
    star,
  };
})();
