/* All amounts and distances use a constant rate. The tables stop at the meeting. */
window.TableMissions = [
  {
    id: "spielplatz",
    icon: "🚶",
    title: "Vom Spielplatz nach Hause",
    level: "1 · Werte finden",
    kind: "apart",
    names: ["Jule", "Noor"],
    rates: [50, 80],
    unit: "m",
    interval: 1,
    times: [1, 3, 6],
    story:
      "Jule und Noor starten <strong>gleichzeitig am Spielplatz</strong>. Sie gehen auf einem geraden Weg <strong>in verschiedene Richtungen</strong>. Jule geht <strong>50 m pro Minute</strong>. Noor geht <strong>80 m pro Minute</strong>. Beide gehen immer gleich schnell weiter.",
    steps: [
      {
        kind: "cell",
        title: "Die passende Stelle finden",
        prompt:
          "Wie weit geht <strong>Noor in 3 Minuten</strong>? <strong>Tippe auf die passende Zahl in der Tabelle.</strong>",
        cell: [1, 2],
        hints: [
          "Suche links die Zeile „3 min“. Suche oben die Spalte „Weg Noor“.",
          "Gehe in der Zeile „3 min“ bis zur Spalte „Weg Noor“.",
          "Noor geht in einer Minute 80 m. Rechne 3 × 80.",
        ],
        solution: "In der Zeile „3 min“ und der Spalte „Weg Noor“ stehen 240 m.",
      },
      {
        kind: "number",
        title: "Eine Zahl ablesen",
        prompt:
          "Wie weit geht <strong>Jule in 6 Minuten</strong>? <strong>Trage die Zahl ein.</strong>",
        label: "Weg von Jule nach 6 Minuten",
        answer: 300,
        unit: "m",
        hints: [
          "Suche die Zeile „6 min“ und die Spalte „Weg Jule“.",
          "Jule geht in jeder Minute 50 m.",
          "Rechne 6 × 50 = 300.",
        ],
        solution: "6 × 50 m = 300 m. Jule geht in 6 Minuten 300 m.",
      },
      {
        kind: "choice",
        title: "Die letzte Spalte verstehen",
        prompt:
          "Nach 6 Minuten stehen in der letzten Spalte <strong>780 m</strong>. <strong>Wähle die passende Erklärung.</strong>",
        options: [
          "Jule und Noor sind dann 780 m voneinander entfernt. Ihre Wege werden addiert.",
          "Jule allein ist dann 780 m gegangen.",
          "Jule und Noor brauchen zusammen 780 Minuten.",
        ],
        answer: 0,
        hints: [
          "Lies die Überschrift der letzten Spalte.",
          "Jule geht 300 m nach links. Noor geht 480 m nach rechts.",
          "Der Abstand ist 300 m + 480 m = 780 m.",
        ],
        solution:
          "Beide entfernen sich vom gleichen Startpunkt. Deshalb gilt: 300 m + 480 m = 780 m Abstand.",
      },
    ],
  },
  {
    id: "brunnen",
    icon: "🛴",
    title: "Mit dem Roller vom Brunnen weg",
    level: "2 · Tabellen ergänzen",
    kind: "apart",
    names: ["Lia", "Tom"],
    rates: [90, 120],
    unit: "m",
    interval: 1,
    times: [1, 4, 8],
    story:
      "Lia und Tom starten <strong>gleichzeitig am Brunnen</strong>. Sie fahren auf einem geraden Weg <strong>in verschiedene Richtungen</strong>. Lia fährt <strong>90 m pro Minute</strong>. Tom fährt <strong>120 m pro Minute</strong>. Beide fahren immer gleich schnell weiter.",
    steps: [
      {
        kind: "fill",
        title: "Die Tabelle füllen",
        prompt:
          "<strong>Ergänze die leeren Felder.</strong> Rechne zuerst die beiden Wege. <strong>Addiere</strong> sie für den Abstand.",
        editableRows: [1, 2],
      },
      {
        kind: "number",
        title: "Eine neue Zeit berechnen",
        prompt:
          "Wie groß ist ihr <strong>Abstand nach 6 Minuten</strong>? Diese Zeit steht noch nicht in der Tabelle. <strong>Rechne und trage die Zahl ein.</strong>",
        label: "Abstand nach 6 Minuten",
        answer: 1260,
        unit: "m",
        hints: [
          "In einer Minute kommen beide zusammen 90 m + 120 m weit.",
          "Rechne zuerst 90 + 120. Nimm das Ergebnis 6-mal.",
          "6 × 210 m = 1.260 m.",
        ],
        solution:
          "Lia: 6 × 90 m = 540 m. Tom: 6 × 120 m = 720 m. Abstand: 540 m + 720 m = 1.260 m.",
      },
      {
        kind: "choice",
        title: "Eine Aussage prüfen",
        prompt:
          "Tom sagt: „Nach 8 Minuten sind wir <strong>960 m voneinander entfernt</strong>.“ <strong>Wähle die richtige Antwort.</strong>",
        options: [
          "Das stimmt: Der Weg von Tom ist auch der Abstand.",
          "Der Abstand ist 1.680 m. Zu Toms 960 m kommen Lias 720 m dazu.",
          "Der Abstand ist 240 m. Ich rechne 960 − 720.",
        ],
        answer: 1,
        hints: [
          "Die 960 m stehen in der Spalte „Weg Tom“.",
          "Lia ist auch vom Brunnen weggefahren. Ihr Weg gehört zum Abstand dazu.",
          "Addiere 720 m + 960 m.",
        ],
        solution:
          "960 m ist nur Toms Weg. Beide fahren auseinander: 720 m + 960 m = 1.680 m Abstand.",
      },
    ],
  },
  {
    id: "doerfer",
    icon: "🏘️",
    title: "Ein Treffen zwischen zwei Dörfern",
    level: "3 · Aufeinander zugehen",
    kind: "toward",
    names: ["Eda", "Finn"],
    rates: [80, 100],
    unit: "m",
    interval: 1,
    times: [1, 6, 12],
    distance: 2160,
    story:
      "Zwischen zwei Dorfplätzen liegen <strong>2.160 m</strong>. Eda und Finn starten <strong>gleichzeitig an den beiden Dorfplätzen</strong>. Sie gehen auf demselben Weg <strong>aufeinander zu</strong>. Eda geht <strong>80 m pro Minute</strong>. Finn geht <strong>100 m pro Minute</strong>. Beide gehen immer gleich schnell weiter.",
    steps: [
      {
        kind: "fill",
        title: "Beide Wege finden",
        prompt:
          "<strong>Ergänze die Tabelle.</strong> Rechne die Wege von Eda und Finn. <strong>Addiere beide Wege</strong> in der letzten Spalte.",
        editableRows: [1, 2],
      },
      {
        kind: "number",
        title: "Den übrigen Abstand finden",
        prompt:
          "Wie weit sind Eda und Finn <strong>nach 6 Minuten noch voneinander entfernt</strong>? <strong>Rechne den übrigen Abstand aus.</strong>",
        label: "Übriger Abstand nach 6 Minuten",
        answer: 1080,
        unit: "m",
        hints: [
          "Am Anfang liegen 2.160 m zwischen ihnen. Nach 6 Minuten haben sie zusammen schon einen Teil geschafft.",
          "Ziehe „Beide Wege zusammen“ von 2.160 m ab.",
          "2.160 m − 1.080 m = 1.080 m.",
        ],
        solution:
          "Nach 6 Minuten sind beide zusammen 480 m + 600 m = 1.080 m gegangen. Übrig: 2.160 m − 1.080 m = 1.080 m.",
      },
      {
        kind: "cell",
        title: "Das Treffen belegen",
        prompt:
          "Beide treffen sich, wenn ihre Wege zusammen <strong>2.160 m</strong> lang sind. <strong>Tippe auf diese Zahl in der letzten Spalte.</strong> Lies dann die Zeit links ab.",
        cell: [2, 3],
        hints: [
          "Beim Treffen ist der ganze Weg zwischen den Dorfplätzen geschafft.",
          "Suche 2.160 m in der Spalte „Beide Wege zusammen“.",
          "In der Zeile „12 min“ gilt: 960 m + 1.200 m = 2.160 m.",
        ],
        solution:
          "In der Zeile „12 min“ stehen zusammen 2.160 m. Eda und Finn treffen sich nach 12 Minuten.",
      },
    ],
  },
  {
    id: "roller-treffen",
    icon: "🤝",
    title: "Zwei Roller auf dem Weg zum Treffen",
    level: "4 · Mit einer Zeile erklären",
    kind: "toward",
    names: ["Mara", "Ben"],
    rates: [150, 210],
    unit: "m",
    interval: 1,
    times: [1, 5, 10],
    distance: 3600,
    story:
      "Mara und Ben wohnen <strong>3.600 m voneinander entfernt</strong>. Sie starten <strong>gleichzeitig</strong> und fahren auf demselben Weg <strong>aufeinander zu</strong>. Mara fährt <strong>150 m pro Minute</strong>. Ben fährt <strong>210 m pro Minute</strong>. Beide fahren immer gleich schnell weiter.",
    steps: [
      {
        kind: "fill",
        title: "Die Wege ergänzen",
        prompt:
          "<strong>Ergänze die Tabelle.</strong> Nutze die Zeit links. <strong>Addiere beide Wege</strong> in der letzten Spalte.",
        editableRows: [1, 2],
      },
      {
        kind: "number",
        title: "Den Abstand berechnen",
        prompt:
          "Wie groß ist der <strong>übrige Abstand nach 5 Minuten</strong>? <strong>Trage die Zahl ein.</strong>",
        label: "Übriger Abstand nach 5 Minuten",
        answer: 1800,
        unit: "m",
        hints: [
          "Lies „Beide Wege zusammen“ in der Zeile „5 min“ ab.",
          "Ziehe die Summe der Wege vom Startabstand 3.600 m ab.",
          "3.600 m − 1.800 m = 1.800 m.",
        ],
        solution:
          "Mara: 750 m. Ben: 1.050 m. Zusammen: 1.800 m. Übriger Abstand: 3.600 m − 1.800 m = 1.800 m.",
      },
      {
        kind: "explain",
        title: "Mit der Tabelle begründen",
        prompt:
          "Mara und Ben treffen sich <strong>nach 10 Minuten</strong>. <strong>Erkläre in einem Satz, warum.</strong> Nutze die letzte Tabellenzeile.",
        hints: [
          "Lies die Zeile „10 min“. Wie lang sind beide Wege zusammen?",
          "Vergleiche die Summe der Wege mit den 3.600 m am Anfang.",
          "Du kannst so anfangen: „Nach 10 Minuten sind beide zusammen …“",
        ],
        solution:
          "Nach 10 Minuten sind beide zusammen 1.500 m + 2.100 m = 3.600 m gefahren. Das ist der ganze Weg zwischen ihren Startpunkten. Deshalb treffen sie sich.",
        maxStars: 1,
      },
    ],
  },
  {
    id: "fahrrad",
    icon: "🚲",
    title: "Mit dem Fahrrad zum Treffpunkt",
    level: "5 · Minuten und Uhrzeit",
    kind: "toward",
    names: ["Nora", "Sam"],
    rates: [24, 16],
    unit: "km",
    interval: 60,
    times: [60, 30, 15, 75],
    distance: 50,
    story:
      "Zwei Familien wohnen <strong>50 km voneinander entfernt</strong>. Sie starten <strong>um 10:10 Uhr</strong> und fahren auf derselben Strecke <strong>aufeinander zu</strong>. Noras Familie fährt <strong>24 km pro Stunde</strong>. Sams Familie fährt <strong>16 km pro Stunde</strong>. Beide fahren immer gleich schnell weiter.",
    steps: [
      {
        kind: "fill",
        title: "Mit halben und viertel Stunden rechnen",
        prompt:
          "<strong>Ergänze die Tabelle.</strong> 30 Minuten sind eine <strong>halbe Stunde</strong>. 15 Minuten sind eine <strong>Viertelstunde</strong>. Für 75 Minuten rechne <strong>60 + 15 Minuten</strong>.",
        editableRows: [1, 2, 3],
      },
      {
        kind: "number",
        title: "Die übrige Strecke finden",
        prompt:
          "Wie groß ist der <strong>übrige Abstand nach 30 Minuten</strong>? <strong>Nutze die Tabelle und rechne.</strong>",
        label: "Übriger Abstand nach 30 Minuten",
        answer: 30,
        unit: "km",
        hints: [
          "Suche die Zeile „30 min“. Beide Wege zusammen sind 20 km lang.",
          "Ziehe 20 km von den 50 km am Anfang ab.",
          "50 km − 20 km = 30 km.",
        ],
        solution: "Nach 30 Minuten: 12 km + 8 km = 20 km. Übrig: 50 km − 20 km = 30 km.",
      },
      {
        kind: "clock",
        title: "Die Uhrzeit des Treffens finden",
        prompt:
          "In welcher Zeile sind zusammen <strong>50 km</strong> geschafft? Beide starten <strong>um 10:10 Uhr</strong>. <strong>Trage die Uhrzeit des Treffens ein.</strong>",
        label: "Uhrzeit des Treffens",
        answer: 685,
        unit: "Uhr",
        hints: [
          "In der Zeile „75 min“ stehen zusammen 50 km.",
          "75 Minuten sind 1 Stunde und 15 Minuten. Addiere das zur Startzeit 10:10 Uhr.",
          "10:10 Uhr + 1 Stunde = 11:10 Uhr. Dazu kommen 15 Minuten.",
        ],
        solution:
          "Nach 75 Minuten treffen sich beide Familien. 10:10 Uhr + 1 Stunde und 15 Minuten = 11:25 Uhr.",
      },
    ],
  },
  {
    id: "wasser",
    icon: "💧",
    title: "Wasser für zwei Becken",
    level: "6 · Eine andere Tabelle",
    kind: "amount",
    names: ["Becken A", "Becken B"],
    rates: [30, 45],
    unit: "l",
    interval: 1,
    times: [1, 4, 8],
    story:
      "Zwei leere Becken bekommen <strong>gleichzeitig Wasser</strong>. In Becken A fließen <strong>30 Liter pro Minute</strong>. In Becken B fließen <strong>45 Liter pro Minute</strong>. Das Wasser fließt die ganze Zeit gleich schnell. Die Becken sind groß genug.",
    steps: [
      {
        kind: "cell",
        title: "Eine Wassermenge ablesen",
        prompt:
          "Wie viel Wasser ist <strong>nach 4 Minuten in Becken A</strong>? <strong>Tippe auf die passende Zahl in der Tabelle.</strong>",
        cell: [1, 1],
        hints: [
          "Suche links „4 min“ und oben „Becken A“.",
          "Gehe in der Zeile „4 min“ bis zur Spalte „Becken A“.",
          "4 × 30 Liter = 120 Liter.",
        ],
        solution: "Nach 4 Minuten sind in Becken A 120 Liter Wasser.",
      },
      {
        kind: "number",
        title: "Eine neue Tabellenzeile denken",
        prompt:
          "Wie viel Wasser ist <strong>nach 10 Minuten in beiden Becken zusammen</strong>? <strong>Rechne und trage die Zahl ein.</strong>",
        label: "Wasser in beiden Becken nach 10 Minuten",
        answer: 750,
        unit: "l",
        hints: [
          "In einer Minute fließen zusammen 30 + 45 Liter in die Becken.",
          "Nimm 75 Liter 10-mal.",
          "10 × 75 Liter = 750 Liter.",
        ],
        solution: "Becken A: 10 × 30 l = 300 l. Becken B: 10 × 45 l = 450 l. Zusammen: 750 l.",
      },
      {
        kind: "choice",
        title: "Den Unterschied finden",
        prompt:
          "Wie viel Wasser hat <strong>Becken B nach 8 Minuten mehr als Becken A</strong>? <strong>Wähle die passende Rechnung.</strong>",
        options: ["240 l + 360 l = 600 l", "360 l − 240 l = 120 l", "360 l : 8 = 45 l"],
        answer: 1,
        hints: [
          "Suche die beiden Wassermengen in der Zeile „8 min“.",
          "„Wie viel mehr?“ fragt nach dem Unterschied.",
          "Ziehe die kleinere Menge 240 l von der größeren Menge 360 l ab.",
        ],
        solution:
          "Becken B enthält 360 l, Becken A enthält 240 l. Der Unterschied ist 360 l − 240 l = 120 l.",
      },
    ],
  },
];
