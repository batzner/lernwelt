/* Neue Aufgabenrunde. Alle Mengen und Wege wachsen mit gleichbleibender Rate. */
window.TableMissions = [
  {
    "id": "runde2-tierpark",
    "icon": "🚶",
    "title": "Zwei Wege vom Tierpark",
    "level": "1 · Werte finden",
    "kind": "apart",
    "names": [
      "Ella",
      "Malik"
    ],
    "rates": [
      60,
      90
    ],
    "unit": "m",
    "interval": 1,
    "times": [
      1,
      4,
      7
    ],
    "story": "Ella und Malik starten <strong>gleichzeitig am Tierpark</strong>. Sie gehen auf einem geraden Weg <strong>in entgegengesetzte Richtungen</strong>. Ella geht <strong>60 m pro Minute</strong>, Malik <strong>90 m pro Minute</strong>. Beide gehen immer gleich schnell weiter.",
    "steps": [
      {
        "kind": "cell",
        "title": "Die passende Stelle finden",
        "prompt": "Wie weit geht <strong>Malik in 4 Minuten</strong>? <strong>Tippe auf die passende Zahl in der Tabelle.</strong>",
        "hints": [
          "Suche die passende Zeit links.",
          "Suche die Spalte mit Maliks Weg.",
          "Gehe in der gesuchten Zeile bis zu dieser Spalte."
        ],
        "solution": "4 × 90 m = 360 m. Diese Zahl steht in der Zeile „4 min“ unter „Weg Malik“.",
        "cell": [
          1,
          2
        ]
      },
      {
        "kind": "number",
        "title": "Eine Zahl ablesen",
        "prompt": "Wie weit geht <strong>Ella in 7 Minuten</strong>? <strong>Trage die Zahl ein.</strong>",
        "hints": [
          "Suche die Zeile mit der gesuchten Zeit.",
          "Lies in der Spalte „Weg Ella“.",
          "Du kannst auch den Weg pro Minute mit der Zeit multiplizieren."
        ],
        "solution": "7 × 60 m = 420 m.",
        "label": "Weg von Ella nach 7 Minuten",
        "answer": 420,
        "unit": "m"
      },
      {
        "kind": "choice",
        "title": "Die letzte Spalte verstehen",
        "prompt": "Nach 7 Minuten stehen in der letzten Spalte <strong>1.050 m</strong>. <strong>Wähle die passende Erklärung.</strong>",
        "hints": [
          "Lies die Überschrift der letzten Spalte.",
          "Beide gehen vom selben Startpunkt weg.",
          "Zeichne beide Wege vom Start aus in verschiedene Richtungen."
        ],
        "solution": "420 m + 630 m = 1.050 m Abstand.",
        "options": [
          "Ella und Malik sind 1.050 m voneinander entfernt. Ihre Wege werden addiert.",
          "Ella allein ist 1.050 m gegangen.",
          "Sie brauchen zusammen 1.050 Minuten."
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "runde2-stadttor",
    "icon": "🛴",
    "title": "Vom Stadttor in zwei Richtungen",
    "level": "2 · Tabellen ergänzen",
    "kind": "apart",
    "names": [
      "Pia",
      "Rami"
    ],
    "rates": [
      80,
      110
    ],
    "unit": "m",
    "interval": 1,
    "times": [
      1,
      3,
      9
    ],
    "story": "Pia und Rami starten <strong>gleichzeitig am Stadttor</strong>. Sie fahren mit Rollern auf einem geraden Weg <strong>in entgegengesetzte Richtungen</strong>. Pia fährt <strong>80 m pro Minute</strong>, Rami <strong>110 m pro Minute</strong>. Beide fahren immer gleich schnell weiter.",
    "steps": [
      {
        "kind": "fill",
        "title": "Die Tabelle füllen",
        "prompt": "<strong>Ergänze die leeren Felder.</strong> Rechne beide Wege. <strong>Addiere</strong> sie für den Abstand.",
        "hints": [],
        "solution": "",
        "editableRows": [
          1,
          2
        ]
      },
      {
        "kind": "number",
        "title": "Eine neue Zeit berechnen",
        "prompt": "Wie groß ist ihr <strong>Abstand nach 5 Minuten</strong>? <strong>Rechne und trage die Zahl ein.</strong>",
        "hints": [
          "Berechne beide Wege für die gesuchte Zeit.",
          "Beide fahren auseinander. Was bedeutet das für den Abstand?",
          "Du kannst auch zuerst beide Wege pro Minute addieren."
        ],
        "solution": "Pia: 5 × 80 m = 400 m. Rami: 5 × 110 m = 550 m. Abstand: 950 m.",
        "label": "Abstand nach 5 Minuten",
        "answer": 950,
        "unit": "m"
      },
      {
        "kind": "choice",
        "title": "Eine Aussage prüfen",
        "prompt": "Rami sagt: „Nach 9 Minuten sind wir <strong>990 m voneinander entfernt</strong>.“ <strong>Wähle die richtige Antwort.</strong>",
        "hints": [
          "Zu welchem Kind gehören die 990 m?",
          "Pia fährt auch vom Startpunkt weg.",
          "Lies beide Wege in der Zeile „9 min“."
        ],
        "solution": "990 m ist nur Ramis Weg. 720 m + 990 m = 1.710 m Abstand.",
        "options": [
          "Das stimmt: Ramis Weg ist auch der Abstand.",
          "Der Abstand ist 1.710 m. Pias 720 m kommen zu Ramis 990 m dazu.",
          "Der Abstand ist 270 m. Ich rechne 990 − 720."
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": "runde2-park",
    "icon": "🌳",
    "title": "Ein Treffen im großen Park",
    "level": "3 · Aufeinander zugehen",
    "kind": "toward",
    "names": [
      "Yara",
      "Theo"
    ],
    "rates": [
      70,
      90
    ],
    "unit": "m",
    "interval": 1,
    "times": [
      1,
      7,
      14
    ],
    "distance": 2240,
    "story": "Zwischen zwei Parkeingängen liegen <strong>2.240 m</strong>. Yara und Theo starten <strong>gleichzeitig an den beiden Eingängen</strong> und gehen auf demselben Weg <strong>aufeinander zu</strong>. Yara geht <strong>70 m pro Minute</strong>, Theo <strong>90 m pro Minute</strong>. Beide gehen immer gleich schnell weiter.",
    "steps": [
      {
        "kind": "fill",
        "title": "Beide Wege finden",
        "prompt": "<strong>Ergänze die Tabelle.</strong> Rechne die Wege von Yara und Theo. <strong>Addiere beide Wege</strong> in der letzten Spalte.",
        "hints": [],
        "solution": "",
        "editableRows": [
          1,
          2
        ]
      },
      {
        "kind": "number",
        "title": "Den übrigen Abstand finden",
        "prompt": "Wie weit sind beide <strong>nach 7 Minuten noch voneinander entfernt</strong>? <strong>Berechne den übrigen Abstand.</strong>",
        "hints": [
          "Wie viel von der Strecke haben beide zusammen schon geschafft?",
          "Suche die passende Zeile in der Tabelle.",
          "Ziehe die Summe der Wege vom Abstand am Anfang ab."
        ],
        "solution": "490 m + 630 m = 1.120 m geschafft. 2.240 m − 1.120 m = 1.120 m übrig.",
        "label": "Übriger Abstand nach 7 Minuten",
        "answer": 1120,
        "unit": "m"
      },
      {
        "kind": "cell",
        "title": "Das Treffen belegen",
        "prompt": "Beide treffen sich, wenn ihre Wege zusammen <strong>2.240 m</strong> lang sind. <strong>Tippe auf diese Zahl in der letzten Spalte.</strong>",
        "hints": [
          "Beim Treffen ist der ganze Weg geschafft.",
          "Vergleiche die letzte Spalte mit dem Abstand am Anfang.",
          "Lies in derselben Zeile die Zeit ab."
        ],
        "solution": "Nach 14 Minuten sind 980 m + 1.260 m = 2.240 m geschafft. Dann treffen sie sich.",
        "cell": [
          2,
          3
        ]
      }
    ]
  },
  {
    "id": "runde2-uferweg",
    "icon": "🤝",
    "title": "Mit Rollern am Ufer entlang",
    "level": "4 · Mit einer Zeile erklären",
    "kind": "toward",
    "names": [
      "Lotta",
      "Kian"
    ],
    "rates": [
      140,
      180
    ],
    "unit": "m",
    "interval": 1,
    "times": [
      1,
      6,
      12
    ],
    "distance": 3840,
    "story": "Zwei Anlegestellen liegen <strong>3.840 m voneinander entfernt</strong>. Lotta und Kian starten dort <strong>gleichzeitig</strong>. Sie fahren auf demselben Uferweg <strong>aufeinander zu</strong>. Lotta fährt <strong>140 m pro Minute</strong>, Kian <strong>180 m pro Minute</strong>. Beide fahren immer gleich schnell weiter.",
    "steps": [
      {
        "kind": "fill",
        "title": "Die Wege ergänzen",
        "prompt": "<strong>Ergänze die Tabelle.</strong> Nutze die Zeit links. <strong>Addiere beide Wege</strong> in der letzten Spalte.",
        "hints": [],
        "solution": "",
        "editableRows": [
          1,
          2
        ]
      },
      {
        "kind": "number",
        "title": "Den Abstand berechnen",
        "prompt": "Wie groß ist der <strong>übrige Abstand nach 6 Minuten</strong>? <strong>Trage die Zahl ein.</strong>",
        "hints": [
          "Lies beide Wege in der passenden Zeile.",
          "Wie viel haben beide zusammen geschafft?",
          "Vergleiche diese Summe mit dem Abstand am Anfang."
        ],
        "solution": "840 m + 1.080 m = 1.920 m geschafft. 3.840 m − 1.920 m = 1.920 m übrig.",
        "label": "Übriger Abstand nach 6 Minuten",
        "answer": 1920,
        "unit": "m"
      },
      {
        "kind": "explain",
        "title": "Mit der Tabelle begründen",
        "prompt": "Lotta und Kian treffen sich <strong>nach 12 Minuten</strong>. <strong>Erkläre in einem Satz, warum.</strong> Nutze die letzte Tabellenzeile.",
        "hints": [
          "Lies beide Wege in der letzten Zeile.",
          "Vergleiche ihre Summe mit der ganzen Strecke.",
          "Du kannst so beginnen: „Nach 12 Minuten sind beide zusammen …“"
        ],
        "solution": "Nach 12 Minuten haben sie zusammen 1.680 m + 2.160 m = 3.840 m geschafft. Das ist der ganze Weg zwischen den Startpunkten. Deshalb treffen sie sich.",
        "maxStars": 1
      }
    ]
  },
  {
    "id": "runde2-radtour",
    "icon": "🚲",
    "title": "Radtour zwischen zwei Campingplätzen",
    "level": "5 · Minuten und Uhrzeit",
    "kind": "toward",
    "names": [
      "Fina",
      "Paul"
    ],
    "rates": [
      20,
      12
    ],
    "unit": "km",
    "interval": 60,
    "times": [
      60,
      30,
      15,
      90
    ],
    "distance": 48,
    "story": "Zwei Campingplätze liegen <strong>48 km voneinander entfernt</strong>. Finas und Pauls Familien starten dort <strong>um 09:35 Uhr</strong>. Sie fahren auf derselben Strecke <strong>aufeinander zu</strong>. Finas Familie fährt <strong>20 km pro Stunde</strong>, Pauls Familie <strong>12 km pro Stunde</strong>. Beide fahren immer gleich schnell weiter.",
    "steps": [
      {
        "kind": "fill",
        "title": "Mit Teilen einer Stunde rechnen",
        "prompt": "<strong>Ergänze die Tabelle.</strong> 30 Minuten sind eine <strong>halbe Stunde</strong>, 15 Minuten eine <strong>Viertelstunde</strong>. Für 90 Minuten rechne <strong>60 + 30 Minuten</strong>.",
        "hints": [],
        "solution": "",
        "editableRows": [
          1,
          2,
          3
        ]
      },
      {
        "kind": "number",
        "title": "Die übrige Strecke finden",
        "prompt": "Wie groß ist der <strong>übrige Abstand nach 30 Minuten</strong>? <strong>Nutze die Tabelle.</strong>",
        "hints": [
          "Suche die Zeile „30 min“.",
          "Lies ab, wie weit beide zusammen gefahren sind.",
          "Ziehe diese Summe vom Abstand am Anfang ab."
        ],
        "solution": "Nach 30 Minuten: 10 km + 6 km = 16 km geschafft. 48 km − 16 km = 32 km übrig.",
        "label": "Übriger Abstand nach 30 Minuten",
        "answer": 32,
        "unit": "km"
      },
      {
        "kind": "clock",
        "title": "Die Uhrzeit des Treffens finden",
        "prompt": "In welcher Zeile sind zusammen <strong>48 km</strong> geschafft? Beide starten <strong>um 09:35 Uhr</strong>. <strong>Trage die Uhrzeit des Treffens ein.</strong>",
        "hints": [
          "Suche die ganze Strecke in der letzten Spalte.",
          "Lies die Zeit in derselben Zeile ab.",
          "Rechne erst volle Stunden, dann die übrigen Minuten zur Startzeit dazu."
        ],
        "solution": "Nach 90 Minuten treffen sie sich. 09:35 Uhr + 1 Stunde 30 Minuten = 11:05 Uhr.",
        "label": "Uhrzeit des Treffens",
        "answer": 665,
        "unit": "Uhr"
      }
    ]
  },
  {
    "id": "runde2-gaertnerei",
    "icon": "💧",
    "title": "Gießwasser für die Gärtnerei",
    "level": "6 · Eine andere Tabelle",
    "kind": "amount",
    "names": [
      "Becken Nord",
      "Becken Süd"
    ],
    "rates": [
      25,
      40
    ],
    "unit": "l",
    "interval": 1,
    "times": [
      1,
      6,
      9
    ],
    "story": "In einer Gärtnerei werden zwei leere Becken <strong>gleichzeitig mit Gießwasser gefüllt</strong>. In Becken Nord fließen <strong>25 Liter pro Minute</strong>, in Becken Süd <strong>40 Liter pro Minute</strong>. Das Wasser fließt die ganze Zeit gleich schnell. Beide Becken sind groß genug.",
    "steps": [
      {
        "kind": "cell",
        "title": "Eine Wassermenge ablesen",
        "prompt": "Wie viel Wasser ist <strong>nach 6 Minuten in Becken Nord</strong>? <strong>Tippe auf die passende Zahl.</strong>",
        "hints": [
          "Suche links die gesuchte Zeit.",
          "Suche oben „Becken Nord“.",
          "Gehe in der passenden Zeile bis zu dieser Spalte."
        ],
        "solution": "6 × 25 l = 150 l stehen in der Zeile „6 min“ unter „Becken Nord“.",
        "cell": [
          1,
          1
        ]
      },
      {
        "kind": "number",
        "title": "Eine neue Tabellenzeile denken",
        "prompt": "Wie viel Wasser ist <strong>nach 12 Minuten in beiden Becken zusammen</strong>? <strong>Rechne und trage die Zahl ein.</strong>",
        "hints": [
          "Wie viel fließt pro Minute in beide Becken zusammen?",
          "Multipliziere die gemeinsame Menge pro Minute mit der Zeit.",
          "Du kannst auch beide Becken einzeln berechnen und die Mengen addieren."
        ],
        "solution": "12 × 25 l = 300 l und 12 × 40 l = 480 l. Zusammen: 780 l.",
        "label": "Wasser zusammen nach 12 Minuten",
        "answer": 780,
        "unit": "l"
      },
      {
        "kind": "choice",
        "title": "Den Unterschied finden",
        "prompt": "Wie viel Wasser hat <strong>Becken Süd nach 9 Minuten mehr als Becken Nord</strong>? <strong>Wähle die passende Rechnung.</strong>",
        "hints": [
          "Suche die Mengen in der Zeile „9 min“.",
          "„Wie viel mehr?“ fragt nach dem Unterschied.",
          "Ziehe die kleinere Menge von der größeren ab."
        ],
        "solution": "Becken Süd: 360 l. Becken Nord: 225 l. Unterschied: 360 l − 225 l = 135 l.",
        "options": [
          "225 l + 360 l = 585 l",
          "360 l − 225 l = 135 l",
          "360 l : 9 = 40 l"
        ],
        "answer": 1
      }
    ]
  }
];
