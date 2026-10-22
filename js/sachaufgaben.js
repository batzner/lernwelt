(function () {
  "use strict";
  const tasks =[
  {
    "title": "Blumen für den Markt",
    "icon": "🌷",
    "kind": "ratio",
    "total": 216,
    "factor": 5,
    "text": "Ein Blumenstand verkauft zusammen <strong>216 rote und weiße Tulpen</strong>. Es gibt <strong>fünfmal so viele rote Tulpen wie weiße Tulpen</strong>. Wie viele sind es von jeder Art?",
    "fields": [
      {
        "label": "rote Tulpen",
        "answer": 180,
        "unit": ""
      },
      {
        "label": "weiße Tulpen",
        "answer": 36,
        "unit": ""
      }
    ],
    "hints": [
      "Zeichne einen Balken für die kleinere Menge. Wie viele gleich große Balken braucht die größere Menge?",
      "Zähle die Teile für beide Mengen zusammen. Teile die Gesamtzahl durch 6.",
      "Berechne zuerst einen Teil. Berechne damit die größere Menge. Prüfe danach die Summe."
    ],
    "steps": [
      "Zusammen: 5 Teile + 1 Teil = 6 Teile.",
      "Ein Teil: 216 : 6 = 36.",
      "rote Tulpen: 36 × 5 = 180.",
      "Probe: 180 + 36 = 216."
    ],
    "id": "runde2-0"
  },
  {
    "title": "Joghurt im Kühlregal",
    "icon": "🥣",
    "kind": "difference",
    "total": 142,
    "difference": 28,
    "text": "Im Kühlregal stehen zusammen <strong>142 Erdbeerjoghurts und Naturjoghurts</strong>. Es gibt <strong>28 Erdbeerjoghurts mehr als Naturjoghurts</strong>. Wie viele sind es jeweils?",
    "fields": [
      {
        "label": "Erdbeerjoghurts",
        "answer": 85,
        "unit": ""
      },
      {
        "label": "Naturjoghurts",
        "answer": 57,
        "unit": ""
      }
    ],
    "hints": [
      "Zeichne zwei Balken. Einer ist länger. Markiere den Unterschied.",
      "Nimm den Unterschied zuerst von der Gesamtzahl weg. Der Rest besteht aus zwei gleich großen Teilen.",
      "Halbiere den Rest. Zu welcher Menge musst du den Unterschied wieder addieren?"
    ],
    "steps": [
      "Unterschied wegnehmen: 142 − 28 = 114.",
      "Kleinere Menge: 114 : 2 = 57.",
      "Größere Menge: 57 + 28 = 85.",
      "Probe: 85 + 57 = 142; 85 − 57 = 28."
    ],
    "id": "runde2-1"
  },
  {
    "title": "Zwei Sammelteams",
    "icon": "♻️",
    "kind": "difference",
    "total": 158,
    "difference": 34,
    "text": "Zwei Teams sammeln zusammen <strong>158 Dosen</strong>. Es gibt <strong>34 Dosen von Team A mehr als Dosen von Team B</strong>. Wie viele sind es jeweils?",
    "fields": [
      {
        "label": "Dosen von Team A",
        "answer": 96,
        "unit": ""
      },
      {
        "label": "Dosen von Team B",
        "answer": 62,
        "unit": ""
      }
    ],
    "hints": [
      "Zeichne zwei Balken. Einer ist länger. Markiere den Unterschied.",
      "Nimm den Unterschied zuerst von der Gesamtzahl weg. Der Rest besteht aus zwei gleich großen Teilen.",
      "Halbiere den Rest. Zu welcher Menge musst du den Unterschied wieder addieren?"
    ],
    "steps": [
      "Unterschied wegnehmen: 158 − 34 = 124.",
      "Kleinere Menge: 124 : 2 = 62.",
      "Größere Menge: 62 + 34 = 96.",
      "Probe: 96 + 62 = 158; 96 − 62 = 34."
    ],
    "id": "runde2-2"
  },
  {
    "title": "Schachteln im Spielzeugladen",
    "icon": "🧸",
    "kind": "ratio",
    "total": 98,
    "factor": 6,
    "text": "Im Spielzeugladen stehen zusammen <strong>98 kleine und große Schachteln</strong>. Es gibt <strong>sechsmal so viele kleine Schachteln wie große Schachteln</strong>. Wie viele sind es von jeder Art?",
    "fields": [
      {
        "label": "kleine Schachteln",
        "answer": 84,
        "unit": ""
      },
      {
        "label": "große Schachteln",
        "answer": 14,
        "unit": ""
      }
    ],
    "hints": [
      "Zeichne einen Balken für die kleinere Menge. Wie viele gleich große Balken braucht die größere Menge?",
      "Zähle die Teile für beide Mengen zusammen. Teile die Gesamtzahl durch 7.",
      "Berechne zuerst einen Teil. Berechne damit die größere Menge. Prüfe danach die Summe."
    ],
    "steps": [
      "Zusammen: 6 Teile + 1 Teil = 7 Teile.",
      "Ein Teil: 98 : 7 = 14.",
      "kleine Schachteln: 14 × 6 = 84.",
      "Probe: 84 + 14 = 98."
    ],
    "id": "runde2-3"
  },
  {
    "title": "Samen im Glas",
    "icon": "🌱",
    "kind": "ratio",
    "total": 288,
    "factor": 3,
    "text": "In einem Glas liegen zusammen <strong>288 Bohnensamen und Kürbissamen</strong>. Es gibt <strong>dreimal so viele Bohnensamen wie Kürbissamen</strong>. Wie viele sind es von jeder Art?",
    "fields": [
      {
        "label": "Bohnensamen",
        "answer": 216,
        "unit": ""
      },
      {
        "label": "Kürbissamen",
        "answer": 72,
        "unit": ""
      }
    ],
    "hints": [
      "Zeichne einen Balken für die kleinere Menge. Wie viele gleich große Balken braucht die größere Menge?",
      "Zähle die Teile für beide Mengen zusammen. Teile die Gesamtzahl durch 4.",
      "Berechne zuerst einen Teil. Berechne damit die größere Menge. Prüfe danach die Summe."
    ],
    "steps": [
      "Zusammen: 3 Teile + 1 Teil = 4 Teile.",
      "Ein Teil: 288 : 4 = 72.",
      "Bohnensamen: 72 × 3 = 216.",
      "Probe: 216 + 72 = 288."
    ],
    "id": "runde2-4"
  },
  {
    "title": "Servietten für das Café",
    "icon": "☕",
    "kind": "ratio",
    "total": 200,
    "factor": 4,
    "text": "Ein Café hat zusammen <strong>200 gelbe und grüne Servietten</strong>. Es gibt <strong>viermal so viele gelbe Servietten wie grüne Servietten</strong>. Wie viele sind es von jeder Art?",
    "fields": [
      {
        "label": "gelbe Servietten",
        "answer": 160,
        "unit": ""
      },
      {
        "label": "grüne Servietten",
        "answer": 40,
        "unit": ""
      }
    ],
    "hints": [
      "Zeichne einen Balken für die kleinere Menge. Wie viele gleich große Balken braucht die größere Menge?",
      "Zähle die Teile für beide Mengen zusammen. Teile die Gesamtzahl durch 5.",
      "Berechne zuerst einen Teil. Berechne damit die größere Menge. Prüfe danach die Summe."
    ],
    "steps": [
      "Zusammen: 4 Teile + 1 Teil = 5 Teile.",
      "Ein Teil: 200 : 5 = 40.",
      "gelbe Servietten: 40 × 4 = 160.",
      "Probe: 160 + 40 = 200."
    ],
    "id": "runde2-5"
  },
  {
    "title": "Postkarten im Laden",
    "icon": "✉️",
    "kind": "ratio",
    "total": 132,
    "factor": 5,
    "text": "Ein Laden hat zusammen <strong>132 Postkarten mit Tieren oder Blumen</strong>. Es gibt <strong>fünfmal so viele Tierkarten wie Blumenkarten</strong>. Wie viele sind es von jeder Art?",
    "fields": [
      {
        "label": "Tierkarten",
        "answer": 110,
        "unit": ""
      },
      {
        "label": "Blumenkarten",
        "answer": 22,
        "unit": ""
      }
    ],
    "hints": [
      "Zeichne einen Balken für die kleinere Menge. Wie viele gleich große Balken braucht die größere Menge?",
      "Zähle die Teile für beide Mengen zusammen. Teile die Gesamtzahl durch 6.",
      "Berechne zuerst einen Teil. Berechne damit die größere Menge. Prüfe danach die Summe."
    ],
    "steps": [
      "Zusammen: 5 Teile + 1 Teil = 6 Teile.",
      "Ein Teil: 132 : 6 = 22.",
      "Tierkarten: 22 × 5 = 110.",
      "Probe: 110 + 22 = 132."
    ],
    "id": "runde2-6"
  },
  {
    "title": "Bänder für den Sporttag",
    "icon": "🏅",
    "kind": "ratio",
    "total": 192,
    "factor": 7,
    "text": "Für einen Sporttag liegen zusammen <strong>192 orange und lila Bänder</strong> bereit. Es gibt <strong>siebenmal so viele orange Bänder wie lila Bänder</strong>. Wie viele sind es von jeder Art?",
    "fields": [
      {
        "label": "orange Bänder",
        "answer": 168,
        "unit": ""
      },
      {
        "label": "lila Bänder",
        "answer": 24,
        "unit": ""
      }
    ],
    "hints": [
      "Zeichne einen Balken für die kleinere Menge. Wie viele gleich große Balken braucht die größere Menge?",
      "Zähle die Teile für beide Mengen zusammen. Teile die Gesamtzahl durch 8.",
      "Berechne zuerst einen Teil. Berechne damit die größere Menge. Prüfe danach die Summe."
    ],
    "steps": [
      "Zusammen: 7 Teile + 1 Teil = 8 Teile.",
      "Ein Teil: 192 : 8 = 24.",
      "orange Bänder: 24 × 7 = 168.",
      "Probe: 168 + 24 = 192."
    ],
    "id": "runde2-7"
  },
  {
    "title": "Steine am Bach",
    "icon": "🪨",
    "kind": "ratio",
    "total": 175,
    "factor": 4,
    "text": "Eine Gruppe sammelt am Bach zusammen <strong>175 graue und weiße Steine</strong>. Es gibt <strong>viermal so viele graue Steine wie weiße Steine</strong>. Wie viele sind es von jeder Art?",
    "fields": [
      {
        "label": "graue Steine",
        "answer": 140,
        "unit": ""
      },
      {
        "label": "weiße Steine",
        "answer": 35,
        "unit": ""
      }
    ],
    "hints": [
      "Zeichne einen Balken für die kleinere Menge. Wie viele gleich große Balken braucht die größere Menge?",
      "Zähle die Teile für beide Mengen zusammen. Teile die Gesamtzahl durch 5.",
      "Berechne zuerst einen Teil. Berechne damit die größere Menge. Prüfe danach die Summe."
    ],
    "steps": [
      "Zusammen: 4 Teile + 1 Teil = 5 Teile.",
      "Ein Teil: 175 : 5 = 35.",
      "graue Steine: 35 × 4 = 140.",
      "Probe: 140 + 35 = 175."
    ],
    "id": "runde2-8"
  },
  {
    "title": "Brötchen für den Wandertag",
    "icon": "🥨",
    "kind": "ratio",
    "total": 296,
    "factor": 3,
    "text": "Eine Bäckerei liefert zusammen <strong>296 Körnerbrötchen und Milchbrötchen</strong>. Es gibt <strong>dreimal so viele Körnerbrötchen wie Milchbrötchen</strong>. Wie viele sind es von jeder Art?",
    "fields": [
      {
        "label": "Körnerbrötchen",
        "answer": 222,
        "unit": ""
      },
      {
        "label": "Milchbrötchen",
        "answer": 74,
        "unit": ""
      }
    ],
    "hints": [
      "Zeichne einen Balken für die kleinere Menge. Wie viele gleich große Balken braucht die größere Menge?",
      "Zähle die Teile für beide Mengen zusammen. Teile die Gesamtzahl durch 4.",
      "Berechne zuerst einen Teil. Berechne damit die größere Menge. Prüfe danach die Summe."
    ],
    "steps": [
      "Zusammen: 3 Teile + 1 Teil = 4 Teile.",
      "Ein Teil: 296 : 4 = 74.",
      "Körnerbrötchen: 74 × 3 = 222.",
      "Probe: 222 + 74 = 296."
    ],
    "id": "runde2-9"
  },
  {
    "title": "Luftballons für das Straßenfest",
    "icon": "🎈",
    "kind": "difference",
    "total": 154,
    "difference": 32,
    "text": "Für ein Straßenfest gibt es zusammen <strong>154 rote und gelbe Ballons</strong>. Es gibt <strong>32 rote Ballons mehr als gelbe Ballons</strong>. Wie viele sind es jeweils?",
    "fields": [
      {
        "label": "rote Ballons",
        "answer": 93,
        "unit": ""
      },
      {
        "label": "gelbe Ballons",
        "answer": 61,
        "unit": ""
      }
    ],
    "hints": [
      "Zeichne zwei Balken. Einer ist länger. Markiere den Unterschied.",
      "Nimm den Unterschied zuerst von der Gesamtzahl weg. Der Rest besteht aus zwei gleich großen Teilen.",
      "Halbiere den Rest. Zu welcher Menge musst du den Unterschied wieder addieren?"
    ],
    "steps": [
      "Unterschied wegnehmen: 154 − 32 = 122.",
      "Kleinere Menge: 122 : 2 = 61.",
      "Größere Menge: 61 + 32 = 93.",
      "Probe: 93 + 61 = 154; 93 − 61 = 32."
    ],
    "id": "runde2-10"
  },
  {
    "title": "Blumenzwiebeln im Beet",
    "icon": "🌼",
    "kind": "difference",
    "total": 146,
    "difference": 22,
    "text": "Im Beet liegen zusammen <strong>146 Tulpenzwiebeln und Narzissenzwiebeln</strong>. Es gibt <strong>22 Narzissenzwiebeln weniger als Tulpenzwiebeln</strong>. Wie viele sind es jeweils?",
    "fields": [
      {
        "label": "Tulpenzwiebeln",
        "answer": 84,
        "unit": ""
      },
      {
        "label": "Narzissenzwiebeln",
        "answer": 62,
        "unit": ""
      }
    ],
    "hints": [
      "Zeichne zwei Balken. Einer ist länger. Markiere den Unterschied.",
      "Nimm den Unterschied zuerst von der Gesamtzahl weg. Der Rest besteht aus zwei gleich großen Teilen.",
      "Halbiere den Rest. Zu welcher Menge musst du den Unterschied wieder addieren?"
    ],
    "steps": [
      "Unterschied wegnehmen: 146 − 22 = 124.",
      "Kleinere Menge: 124 : 2 = 62.",
      "Größere Menge: 62 + 22 = 84.",
      "Probe: 84 + 62 = 146; 84 − 62 = 22."
    ],
    "id": "runde2-11"
  },
  {
    "title": "Pfandbons vergleichen",
    "icon": "🧾",
    "kind": "difference",
    "total": 198,
    "difference": 46,
    "text": "Zwei Pfandbons sind zusammen <strong>198 €</strong> wert. <strong>Bon A ist 46 € mehr wert als Bon B.</strong> Wie viel ist jeder Bon wert?",
    "fields": [
      {
        "label": "Wert von Bon A",
        "answer": 122,
        "unit": "€"
      },
      {
        "label": "Wert von Bon B",
        "answer": 76,
        "unit": "€"
      }
    ],
    "hints": [
      "Zeichne zwei Balken. Einer ist länger. Markiere den Unterschied.",
      "Nimm den Unterschied zuerst von der Gesamtzahl weg. Der Rest besteht aus zwei gleich großen Teilen.",
      "Halbiere den Rest. Zu welcher Menge musst du den Unterschied wieder addieren?"
    ],
    "steps": [
      "Unterschied wegnehmen: 198 − 46 = 152.",
      "Kleinere Menge: 152 : 2 = 76.",
      "Größere Menge: 76 + 46 = 122.",
      "Probe: 122 + 76 = 198; 122 − 76 = 46."
    ],
    "id": "runde2-12"
  },
  {
    "title": "Becher am Getränkestand",
    "icon": "🥤",
    "kind": "difference",
    "total": 92,
    "difference": 36,
    "text": "An einem Getränkestand stehen zusammen <strong>92 grüne und blaue Becher</strong>. Es gibt <strong>36 blaue Becher weniger als grüne Becher</strong>. Wie viele sind es jeweils?",
    "fields": [
      {
        "label": "grüne Becher",
        "answer": 64,
        "unit": ""
      },
      {
        "label": "blaue Becher",
        "answer": 28,
        "unit": ""
      }
    ],
    "hints": [
      "Zeichne zwei Balken. Einer ist länger. Markiere den Unterschied.",
      "Nimm den Unterschied zuerst von der Gesamtzahl weg. Der Rest besteht aus zwei gleich großen Teilen.",
      "Halbiere den Rest. Zu welcher Menge musst du den Unterschied wieder addieren?"
    ],
    "steps": [
      "Unterschied wegnehmen: 92 − 36 = 56.",
      "Kleinere Menge: 56 : 2 = 28.",
      "Größere Menge: 28 + 36 = 64.",
      "Probe: 64 + 28 = 92; 64 − 28 = 36."
    ],
    "id": "runde2-13"
  },
  {
    "title": "Kekse aus der Backstube",
    "icon": "🍪",
    "kind": "difference",
    "total": 226,
    "difference": 54,
    "text": "Eine Backstube verpackt zusammen <strong>226 Haferkekse und Nusskekse</strong>. Es gibt <strong>54 Haferkekse mehr als Nusskekse</strong>. Wie viele sind es jeweils?",
    "fields": [
      {
        "label": "Haferkekse",
        "answer": 140,
        "unit": ""
      },
      {
        "label": "Nusskekse",
        "answer": 86,
        "unit": ""
      }
    ],
    "hints": [
      "Zeichne zwei Balken. Einer ist länger. Markiere den Unterschied.",
      "Nimm den Unterschied zuerst von der Gesamtzahl weg. Der Rest besteht aus zwei gleich großen Teilen.",
      "Halbiere den Rest. Zu welcher Menge musst du den Unterschied wieder addieren?"
    ],
    "steps": [
      "Unterschied wegnehmen: 226 − 54 = 172.",
      "Kleinere Menge: 172 : 2 = 86.",
      "Größere Menge: 86 + 54 = 140.",
      "Probe: 140 + 86 = 226; 140 − 86 = 54."
    ],
    "id": "runde2-14"
  },
  {
    "title": "Schrauben in der Werkstatt",
    "icon": "🔩",
    "kind": "difference",
    "total": 126,
    "difference": 26,
    "text": "In der Werkstatt liegen zusammen <strong>126 lange und kurze Schrauben</strong>. Es gibt <strong>26 kurze Schrauben weniger als lange Schrauben</strong>. Wie viele sind es jeweils?",
    "fields": [
      {
        "label": "lange Schrauben",
        "answer": 76,
        "unit": ""
      },
      {
        "label": "kurze Schrauben",
        "answer": 50,
        "unit": ""
      }
    ],
    "hints": [
      "Zeichne zwei Balken. Einer ist länger. Markiere den Unterschied.",
      "Nimm den Unterschied zuerst von der Gesamtzahl weg. Der Rest besteht aus zwei gleich großen Teilen.",
      "Halbiere den Rest. Zu welcher Menge musst du den Unterschied wieder addieren?"
    ],
    "steps": [
      "Unterschied wegnehmen: 126 − 26 = 100.",
      "Kleinere Menge: 100 : 2 = 50.",
      "Größere Menge: 50 + 26 = 76.",
      "Probe: 76 + 50 = 126; 76 − 50 = 26."
    ],
    "id": "runde2-15"
  },
  {
    "title": "Sammelkarten tauschen",
    "icon": "🧠",
    "kind": "transfer",
    "text": "Maja und Omar haben zusammen <strong>150 Karten</strong>. Maja hat <strong>viermal so viele</strong> wie Omar. Wie viele hat jedes Kind? Wie viele gibt Maja ab, damit beide gleich viele haben?",
    "fields": [
      {
        "label": "Maja zuerst",
        "answer": 120,
        "unit": "Karten"
      },
      {
        "label": "Omar zuerst",
        "answer": 30,
        "unit": "Karten"
      },
      {
        "label": "Maja gibt ab",
        "answer": 45,
        "unit": "Karten"
      }
    ],
    "hints": [
      "Zeichne 4 gleich große Teile für Maja und einen für Omar.",
      "Teile die Gesamtzahl durch die Zahl aller Teile.",
      "Wie viele hätte jedes Kind bei gleicher Verteilung? Vergleiche damit die größere Menge."
    ],
    "steps": [
      "Ein Teil: 150 : 5 = 30.",
      "Maja: 4 × 30 = 120. Omar: 30.",
      "Gleich verteilt: 150 : 2 = 75.",
      "Maja gibt 120 − 75 = 45 ab. Danach: 120 − 45 = 75 und 30 + 45 = 75."
    ],
    "id": "runde2-16"
  },
  {
    "title": "Kastanien gerecht teilen",
    "icon": "🧠",
    "kind": "transfer",
    "text": "Lina und Enno haben zusammen <strong>168 Kastanien</strong>. Lina hat <strong>dreimal so viele</strong> wie Enno. Wie viele hat jedes Kind? Wie viele gibt Lina ab, damit beide gleich viele haben?",
    "fields": [
      {
        "label": "Lina zuerst",
        "answer": 126,
        "unit": "Kastanien"
      },
      {
        "label": "Enno zuerst",
        "answer": 42,
        "unit": "Kastanien"
      },
      {
        "label": "Lina gibt ab",
        "answer": 42,
        "unit": "Kastanien"
      }
    ],
    "hints": [
      "Zeichne 3 gleich große Teile für Lina und einen für Enno.",
      "Teile die Gesamtzahl durch die Zahl aller Teile.",
      "Wie viele hätte jedes Kind bei gleicher Verteilung? Vergleiche damit die größere Menge."
    ],
    "steps": [
      "Ein Teil: 168 : 4 = 42.",
      "Lina: 3 × 42 = 126. Enno: 42.",
      "Gleich verteilt: 168 : 2 = 84.",
      "Lina gibt 126 − 84 = 42 ab. Danach: 126 − 42 = 84 und 42 + 42 = 84."
    ],
    "id": "runde2-17"
  },
  {
    "title": "Vögel am Teich",
    "icon": "🦆",
    "kind": "difference",
    "total": 74,
    "difference": 18,
    "text": "Am Teich sind zusammen <strong>74 Enten und Gänse</strong>. Es gibt <strong>18 Enten mehr als Gänse</strong>. Wie viele sind es jeweils?",
    "fields": [
      {
        "label": "Enten",
        "answer": 46,
        "unit": ""
      },
      {
        "label": "Gänse",
        "answer": 28,
        "unit": ""
      }
    ],
    "hints": [
      "Zeichne zwei Balken. Einer ist länger. Markiere den Unterschied.",
      "Nimm den Unterschied zuerst von der Gesamtzahl weg. Der Rest besteht aus zwei gleich großen Teilen.",
      "Halbiere den Rest. Zu welcher Menge musst du den Unterschied wieder addieren?"
    ],
    "steps": [
      "Unterschied wegnehmen: 74 − 18 = 56.",
      "Kleinere Menge: 56 : 2 = 28.",
      "Größere Menge: 28 + 18 = 46.",
      "Probe: 46 + 28 = 74; 46 − 28 = 18."
    ],
    "id": "runde2-18"
  },
  {
    "title": "Eintrittsbänder fürs Freibad",
    "icon": "🏊",
    "kind": "difference",
    "total": 280,
    "difference": 60,
    "text": "An der Kasse liegen zusammen <strong>280 grüne und blaue Eintrittsbänder</strong>. Es gibt <strong>60 grüne Bänder mehr als blaue Bänder</strong>. Wie viele sind es jeweils?",
    "fields": [
      {
        "label": "grüne Bänder",
        "answer": 170,
        "unit": ""
      },
      {
        "label": "blaue Bänder",
        "answer": 110,
        "unit": ""
      }
    ],
    "hints": [
      "Zeichne zwei Balken. Einer ist länger. Markiere den Unterschied.",
      "Nimm den Unterschied zuerst von der Gesamtzahl weg. Der Rest besteht aus zwei gleich großen Teilen.",
      "Halbiere den Rest. Zu welcher Menge musst du den Unterschied wieder addieren?"
    ],
    "steps": [
      "Unterschied wegnehmen: 280 − 60 = 220.",
      "Kleinere Menge: 220 : 2 = 110.",
      "Größere Menge: 110 + 60 = 170.",
      "Probe: 170 + 110 = 280; 170 − 110 = 60."
    ],
    "id": "runde2-19"
  },
  {
    "title": "Treffen am Kanal",
    "icon": "🧠",
    "kind": "motion",
    "text": "Zwei Kinder starten <strong>gleichzeitig an zwei Brücken</strong>. Die Brücken liegen <strong>2.520 m</strong> auseinander. Die Kinder gehen auf demselben Weg <strong>aufeinander zu</strong>. Beide gehen immer <strong>70 m pro Minute</strong>. Nach wie vielen Minuten treffen sie sich? Wie weit geht jedes Kind?",
    "fields": [
      {
        "label": "Zeit bis zum Treffen",
        "answer": 18,
        "unit": "Minuten"
      },
      {
        "label": "Weg von jedem Kind",
        "answer": 1260,
        "unit": "m"
      }
    ],
    "hints": [
      "Wie weit gehen beide zusammen in einer Minute?",
      "Teile den Abstand am Anfang durch den gemeinsamen Weg pro Minute.",
      "Berechne mit der Zeit den Weg für ein Kind."
    ],
    "steps": [
      "Zusammen pro Minute: 70 + 70 = 140 m.",
      "Zeit: 2.520 : 140 = 18 Minuten.",
      "Jedes Kind: 18 × 70 = 1.260 m.",
      "Probe: 1.260 + 1.260 = 2.520 m."
    ],
    "id": "runde2-20"
  },
  {
    "title": "Auf dem Waldweg entgegen",
    "icon": "🧠",
    "kind": "motion",
    "text": "Suri und Anton starten <strong>gleichzeitig 3.360 m voneinander entfernt</strong> und gehen auf demselben Waldweg <strong>aufeinander zu</strong>. Suri geht <strong>70 m pro Minute</strong>, Anton <strong>90 m pro Minute</strong>. Beide gehen immer gleich schnell weiter. Wann treffen sie sich? Wie weit geht jedes Kind?",
    "fields": [
      {
        "label": "Zeit bis zum Treffen",
        "answer": 21,
        "unit": "Minuten"
      },
      {
        "label": "Weg Suri",
        "answer": 1470,
        "unit": "m"
      },
      {
        "label": "Weg Anton",
        "answer": 1890,
        "unit": "m"
      }
    ],
    "hints": [
      "Berechne den gemeinsamen Weg in einer Minute.",
      "Teile den Abstand durch den gemeinsamen Weg pro Minute.",
      "Rechne für jedes Kind: Zeit mal Weg pro Minute."
    ],
    "steps": [
      "Zusammen: 70 + 90 = 160 m pro Minute.",
      "Zeit: 3.360 : 160 = 21 Minuten.",
      "Suri: 21 × 70 = 1.470 m. Anton: 21 × 90 = 1.890 m.",
      "Probe: 1.470 + 1.890 = 3.360 m."
    ],
    "id": "runde2-21"
  },
  {
    "title": "Zwei Ausflugsboote",
    "icon": "🧠",
    "kind": "motion",
    "text": "Zwischen zwei Häfen liegen <strong>84 km</strong>. Ein schnelles Boot braucht für die ganze Strecke <strong>42 Minuten</strong>, ein langsames Boot <strong>84 Minuten</strong>. Beide starten gleichzeitig an den beiden Häfen und fahren <strong>aufeinander zu</strong>. Beide fahren immer gleich schnell weiter. Wie weit fährt das schnelle Boot pro Minute? Wann treffen sie sich? Wie weit ist das schnelle Boot dann gefahren?",
    "fields": [
      {
        "label": "Schnelles Boot pro Minute",
        "answer": 2,
        "unit": "km"
      },
      {
        "label": "Zeit bis zum Treffen",
        "answer": 28,
        "unit": "Minuten"
      },
      {
        "label": "Schnelles Boot bis zum Treffen",
        "answer": 56,
        "unit": "km"
      }
    ],
    "hints": [
      "Teile für jedes Boot die ganze Strecke durch die Fahrzeit.",
      "Addiere die beiden Wege pro Minute.",
      "Teile die Strecke zwischen den Häfen durch den gemeinsamen Weg pro Minute."
    ],
    "steps": [
      "Schnelles Boot: 84 : 42 = 2 km pro Minute.",
      "Langsames Boot: 84 : 84 = 1 km pro Minute.",
      "Zusammen: 3 km pro Minute. Zeit: 84 : 3 = 28 Minuten.",
      "Schnelles Boot: 28 × 2 = 56 km. Langsames Boot: 28 km. Probe: 56 + 28 = 84 km."
    ],
    "id": "runde2-22"
  },
  {
    "title": "Zwei Räder ab dem Leuchtturm",
    "icon": "🧠",
    "kind": "motion",
    "text": "Nika und Joel starten <strong>gleichzeitig am Leuchtturm</strong>. Sie fahren auf einem geraden Weg <strong>in entgegengesetzte Richtungen</strong>. Nika fährt <strong>120 m pro Minute</strong>, Joel <strong>160 m pro Minute</strong>. Beide fahren immer gleich schnell weiter. Wie weit fährt jedes Kind in 14 Minuten? Wie groß ist dann ihr Abstand?",
    "fields": [
      {
        "label": "Weg Nika",
        "answer": 1680,
        "unit": "m"
      },
      {
        "label": "Weg Joel",
        "answer": 2240,
        "unit": "m"
      },
      {
        "label": "Abstand nach 14 Minuten",
        "answer": 3920,
        "unit": "m"
      }
    ],
    "hints": [
      "Berechne beide Wege für die gesuchte Zeit.",
      "Nutze für jedes Kind seinen Weg pro Minute.",
      "Beide fahren auseinander. Wie entsteht dann der Abstand?"
    ],
    "steps": [
      "Nika: 14 × 120 = 1.680 m.",
      "Joel: 14 × 160 = 2.240 m.",
      "Abstand: 1.680 + 2.240 = 3.920 m."
    ],
    "id": "runde2-23"
  }
],
    KEY = "lernwelt-hard-wordproblems-v1";
  let profile = Rewards.active(),
    index = -1,
    fields = [],
    finished = false,
    hintLevel = 0,
    filter = "all";
  const $ = (id) => document.getElementById(id),
    esc = (s) =>
      String(s ?? "").replace(
        /[&<>"']/g,
        (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c],
      );
  function read() {
    try {
      const v = JSON.parse(localStorage.getItem(KEY) || "{}");
      return v && typeof v === "object" && !Array.isArray(v) ? v : {};
    } catch {
      return {};
    }
  }
  function taskId(i) {
    return tasks[i]?.id ?? String(i);
  }
  function rewardId(i) {
    return "math-hard-" + taskId(i);
  }
  function result(i) {
    return read()[profile]?.[taskId(i)] || {};
  }
  function save(patch) {
    const all = read();
    if (!all[profile] || typeof all[profile] !== "object") all[profile] = {};
    all[profile][taskId(index)] = { ...result(index), ...patch };
    try {
      localStorage.setItem(KEY, JSON.stringify(all));
      return true;
    } catch {
      return false;
    }
  }
  function best(i) {
    try {
      return Math.max(
        0,
        Math.min(
          3,
          Number(
            JSON.parse(localStorage.getItem("lernwelt-extra-rewards") || "{}")[profile]?.[
              rewardId(i)
            ],
          ) || 0,
        ),
      );
    } catch {
      return 0;
    }
  }
  function wallet() {
    $("hard-wallet").innerHTML =
      Rewards.star(true, 25) + " " + Rewards.balance(profile) + " Sterne · Mein Avatar →";
    $("hard-profile").value = profile;
  }
  function top() {
    const n = $("hard-title") || $("hard-game");
    n.focus?.({ preventScroll: true });
    n.scrollIntoView?.({ block: "start", behavior: "instant" });
  }
  function completed(i) {
    return ["richtig", "loesung_gesehen"].includes(result(i).status) || best(i) > 0;
  }
  function kindLabel(kind) {
    return {
      ratio: "Doppelt und mehr",
      difference: "Mehr und weniger",
      transfer: "Fair verteilen",
      motion: "Weg und Zeit",
    }[kind];
  }
  function home() {
    index = -1;
    const done = tasks.filter((_, i) => completed(i)).length,
      total = tasks.reduce((s, _, i) => s + best(i), 0);
    $("hard-game").innerHTML =
      '<h1 id="hard-title" tabindex="-1">Knifflige Sachaufgaben</h1><section class="task"><h2>Deine Aufgabe</h2><p><strong>Wähle eine Aufgabe.</strong> Lies genau. <strong>Zeichne eine Skizze</strong> auf Papier oder nutze die Skizzen-Hilfe. Rechne und trage alle Antworten ein.</p></section><p>Teile Mengen auf, verteile fair oder rechne mit Wegen und Zeiten. Nutze eine Skizze oder eine Tabelle auf Papier.</p><p class="goal-progress"><strong>' +
      done +
      " von " +
      tasks.length +
      " Aufgaben bearbeitet · " +
      total +
      " von " +
      tasks.length * 3 +
      ' Sternen</strong><br>Bereits verdiente Sterne zählen beim Wiederholen nicht doppelt. Eine bessere Lösung kann dir weitere Sterne bringen.</p><div class="tools filters" aria-label="Aufgaben auswählen">' +
      [
        ["all", "Alle Aufgaben"],
        ["ratio", "Doppelt und mehr"],
        ["difference", "Mehr und weniger"],
        ["transfer", "Fair verteilen"],
        ["motion", "Weg und Zeit"],
      ]
        .map(
          ([key, label]) =>
            `<button aria-pressed="${filter === key}" onclick="HardTasks.setFilter('${key}')">${label}</button>`,
        )
        .join("") +
      '</div><div class="grid">' +
      tasks
        .map((t, i) => ({ t, i }))
        .filter(({ t }) => filter === "all" || filter === t.kind)
        .map(
          ({ t, i }) =>
            `<button class="mission" onclick="HardTasks.start(${i})"><span style="font-size:34px" aria-hidden="true">${t.icon}</span><small>Aufgabe ${i + 1} · ${kindLabel(t.kind)}</small><strong>${esc(t.title)}</strong>${Rewards.stars(best(i))}<small>${completed(i) ? "✓ Schon bearbeitet" : "Bereit zum Knobeln"}</small><span class="start">Aufgabe öffnen →</span></button>`,
        )
        .join("") +
      "</div>";
    wallet();
    top();
  }
  function diagram(t) {
    if (["motion", "transfer"].includes(t.kind))
      return (
        "<p>" +
        esc(
          t.kind === "motion"
            ? "Zeichne die beiden Startpunkte. Zeichne Pfeile für die Richtungen. Schreibe die Wege pro Minute dazu. Nutze auch eine Tabelle auf Papier."
            : "Zeichne für jedes Kind die passenden gleich großen Teile. Zeichne danach zwei gleich große Mengen. Markiere, was ein Kind abgibt.",
        ) +
        "</p>"
      );
    const a = t.fields[0].label,
      b = t.fields[1].label;
    if (t.kind === "ratio")
      return `<p><strong>${esc(a)}</strong> besteht aus ${t.factor} gleich großen Teilen. <strong>${esc(b)}</strong> ist ein solcher Teil. Zusammen sind es ${t.total}.</p><div class="bar-row"><strong>${esc(a)}</strong><div class="bar-parts">${Array.from({ length: t.factor }, () => '<span class="bar-part">?</span>').join("")}</div></div><div class="bar-row"><strong>${esc(b)}</strong><div class="bar-parts" style="width:${100 / t.factor}%"><span class="bar-part">?</span></div></div><p class="small">Jedes Kästchen steht für gleich viel.</p>`;
    return `<p><strong>${esc(a)}</strong> ist um ${t.difference} größer als <strong>${esc(b)}</strong>. Zusammen sind es ${t.total}.</p><div class="bar-row"><strong>${esc(a)}</strong><div class="bar-parts"><span class="bar-part" style="flex:7">?</span><span class="bar-part extra" style="flex:3">+ ${t.difference}</span></div></div><div class="bar-row"><strong>${esc(b)}</strong><div class="bar-parts" style="width:70%"><span class="bar-part">?</span></div></div><p class="small">Die blauen Teile sind gleich groß. Gelb zeigt den Unterschied. Diese Skizze zeigt keine genauen Größen.</p>`;
  }
  function start(i) {
    if (!Number.isInteger(i) || i < 0 || i >= tasks.length) return;
    index = i;
    fields = tasks[i].fields.map(() => ({ value: "", tries: 0, state: "pending" }));
    finished = false;
    hintLevel = 0;
    const t = tasks[i];
    $("hard-game").innerHTML =
      `<p class="eyebrow">AUFGABE ${i + 1} VON ${tasks.length} · ${kindLabel(t.kind).toUpperCase()}</p><section class="task" id="hard-title" tabindex="-1"><h2>Deine Aufgabe</h2><p><strong>Lies den Text.</strong> <strong>Finde die gesuchten Zahlen.</strong> Trage in jedes Feld eine Zahl ein. Tippe auf <strong>Prüfen</strong>.</p></section><div class="layout"><section><div class="card"><h1>${t.icon} ${esc(t.title)}</h1><p class="problem">${t.text}</p><div class="tools"><button id="diagram-button" aria-controls="hard-diagram" aria-expanded="false" onclick="HardTasks.toggleDiagram()">Skizzen-Hilfe öffnen</button><button id="hint-button" aria-controls="hard-hint" aria-expanded="false" onclick="HardTasks.toggleHint()">💡 Tipp</button></div><div id="hard-diagram" class="diagram" hidden>${diagram(t)}<button onclick="HardTasks.closeDiagram()">✕ Skizzen-Hilfe schließen</button></div><div id="hard-hint" class="hint" hidden></div></div><section class="card"><label class="note-label" for="hard-note">Mein Rechenweg · freiwillig</label><p class="small">Schreibe deine Rechnung hier auf oder nutze Papier. Diese Notiz wird nicht als richtig oder falsch bewertet.</p><textarea id="hard-note" rows="4" maxlength="1200" oninput="HardTasks.note(this.value)">${esc(result(i).note || "")}</textarea></section></section><section class="card"><h2>Meine Antworten</h2>${t.fields.map((f, j) => `<div class="field"><label for="hard-input-${j}">${esc(f.label)}</label><div class="input-line"><input id="hard-input-${j}" type="text" inputmode="numeric" maxlength="16" autocomplete="off" aria-describedby="hard-result-${j}">${f.unit ? "<span>" + esc(f.unit) + "</span>" : ""}</div><p id="hard-result-${j}" class="field-result" aria-live="polite"></p></div>`).join("")}<p class="small">Für jedes Feld hast du drei Versuche. Eine richtige Antwort bleibt stehen.</p><button id="hard-check" class="primary" onclick="HardTasks.check()">Prüfen ✓</button><div id="hard-feedback" class="feedback" role="status" aria-live="polite">Rechne in Ruhe. Eine leere Eingabe zählt nicht als Versuch.</div><div id="hard-reward"></div><section id="hard-solution" class="solution" hidden></section><button id="hard-next" class="primary forward" onclick="HardTasks.next()" disabled>Weiter →</button><p id="hard-next-note" class="small">Löse alle Felder. Danach kannst du weitergehen.</p></section></div>`;
    wallet();
    top();
  }
  function number(value) {
    const s = String(value ?? "").trim();
    return /^(?:\d{1,6}|\d{1,3}(?:\.\d{3})+)$/.test(s) ? Number(s.replace(/\./g, "")) : null;
  }
  function solution(t) {
    return (
      "<h2>So kannst du rechnen</h2><ol>" +
      t.steps.map((s) => "<li>" + esc(s) + "</li>").join("") +
      "</ol><p><strong>Antwort:</strong> " +
      t.fields
        .map((f) => esc(f.label) + ": " + f.answer + (f.unit ? " " + esc(f.unit) : ""))
        .join(" · ") +
      "</p>"
    );
  }
  function check() {
    if (finished || index < 0) return;
    const t = tasks[index];
    let attempted = false;
    for (let j = 0; j < fields.length; j++) {
      const f = fields[j];
      if (f.state !== "pending") continue;
      const input = $("hard-input-" + j),
        value = String(input.value || "").trim(),
        message = $("hard-result-" + j);
      if (!value) {
        message.className = "field-result";
        message.textContent = "Trage hier noch eine Zahl ein.";
        continue;
      }
      attempted = true;
      f.value = value;
      f.tries++;
      if (number(value) === t.fields[j].answer) {
        f.state = "correct";
        input.disabled = true;
        input.setAttribute("aria-invalid", "false");
        message.className = "field-result good";
        message.textContent = "✓ Richtig! " + f.tries + " von 3 Versuchen.";
      } else {
        input.setAttribute("aria-invalid", "true");
        message.className = "field-result bad";
        if (f.tries >= 3) {
          f.state = "revealed";
          input.disabled = true;
          message.textContent =
            "✗ Nach drei Versuchen: Die Lösung ist " +
            t.fields[j].answer +
            (t.fields[j].unit ? " " + t.fields[j].unit : "") +
            ".";
        } else
          message.textContent =
            "✗ Noch nicht richtig. Versuch " + f.tries + " von 3. Rechne noch einmal.";
      }
    }
    const done = fields.every((f) => f.state !== "pending"),
      revealed = fields.some((f) => f.state === "revealed"),
      pending = fields.filter((f) => f.state === "pending").length;
    const feedback = $("hard-feedback");
    let score = 0;
    if (done) {
      finished = true;
      score = revealed ? 0 : 4 - Math.max(...fields.map((f) => f.tries));
      if (score > 0) Rewards.extra(profile, rewardId(index), score);
      feedback.className = "feedback " + (revealed ? "bad" : "good");
      feedback.textContent = revealed
        ? "Du hast die Lösung gesehen. Schau dir den Rechenweg an. Danach kannst du weitergehen."
        : "✓ Alle Antworten sind richtig! Gut gerechnet.";
      $("hard-check").disabled = true;
      $("hard-next").disabled = false;
      $("hard-next-note").textContent =
        index === tasks.length - 1
          ? "Tippe auf „Weiter“ für die Übersicht."
          : "Tippe auf „Weiter“ für die nächste Aufgabe.";
      $("hard-reward").innerHTML =
        '<div class="card">' +
        Rewards.stars(score) +
        "<p>" +
        score +
        ' von 3 Sternen in diesem Versuch</p><p class="small">Dein bisher bester Stand: ' +
        best(index) +
        " von 3 Sternen.</p></div>";
    } else {
      feedback.className =
        "feedback " + (fields.some((f) => f.state === "pending" && f.tries > 0) ? "bad" : "");
      feedback.textContent = !attempted
        ? "Trage zuerst eine Zahl ein. Das zählt noch nicht als Versuch."
        : pending === 1
          ? "Ein Feld ist noch offen. Deine fertige Antwort bleibt stehen."
          : "Prüfe die Hinweise bei den Feldern. Du darfst noch einmal rechnen.";
    }
    if (done || revealed) {
      $("hard-solution").innerHTML = solution(t);
      $("hard-solution").hidden = false;
    }
    save({
      status: done ? (revealed ? "loesung_gesehen" : "richtig") : "in_bearbeitung",
      fields,
      stars: score,
    });
    wallet();
  }
  function toggleHint() {
    const h = $("hard-hint");
    if (!h.hidden) {
      closeHint();
      return;
    }
    const t = tasks[index],
      level = Math.min(t.hints.length - 1, Math.max(hintLevel, ...fields.map((f) => f.tries)));
    h.innerHTML =
      '<div class="hint-head"><strong>Dein nächster Schritt</strong><button onclick="HardTasks.closeHint()">✕ Tipp schließen</button></div><p>' +
      esc(t.hints[level]) +
      "</p>";
    hintLevel = level + 1;
    h.hidden = false;
    $("hint-button").setAttribute("aria-expanded", "true");
  }
  function closeHint() {
    $("hard-hint").hidden = true;
    $("hint-button").setAttribute("aria-expanded", "false");
    $("hint-button").focus?.();
  }
  function toggleDiagram() {
    const d = $("hard-diagram");
    d.hidden = !d.hidden;
    $("diagram-button").setAttribute("aria-expanded", String(!d.hidden));
    $("diagram-button").textContent = d.hidden ? "Skizzen-Hilfe öffnen" : "Skizzen-Hilfe schließen";
  }
  function closeDiagram() {
    $("hard-diagram").hidden = true;
    $("diagram-button").setAttribute("aria-expanded", "false");
    $("diagram-button").textContent = "Skizzen-Hilfe öffnen";
    $("diagram-button").focus?.();
  }
  function note(text) {
    if (index >= 0) save({ note: String(text).slice(0, 1200) });
  }
  function next() {
    if (!finished) return;
    if (index + 1 < tasks.length) start(index + 1);
    else home();
  }
  function changeProfile(p) {
    if (!/^(?:[1-9]|1[0-9]|20)$/.test(String(p))) return;
    Rewards.setActive(p);
    profile = Rewards.active();
    home();
  }
  function setFilter(value) {
    if (!["all", "ratio", "difference", "transfer", "motion"].includes(value)) return;
    filter = value;
    home();
  }
  window.HardTasks = {
    home,
    start,
    check,
    next,
    toggleHint,
    closeHint,
    toggleDiagram,
    closeDiagram,
    note,
    changeProfile,
    setFilter,
  };
  $("hard-profile").innerHTML = Array.from(
    { length: 20 },
    (_, i) => '<option value="' + (i + 1) + '">Lernplatz ' + (i + 1) + "</option>",
  ).join("");
  home();
})();
