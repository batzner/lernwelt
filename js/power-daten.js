"use strict";
const powerTasks = [
  [
    "Auf einem Hof sind Hühner und Katzen. Zusammen haben sie 30 Köpfe und 82 Beine. Wie viele Katzen sind es?",
    [
      "9",
      "10",
      "11",
      "12",
      "19"
    ],
    2,
    "Stell dir zuerst vor, alle Tiere hätten zwei Beine.",
    "Wie viele Beine sind dann zusätzlich da? Jede Katze hat zwei zusätzliche Beine.",
    "30 × 2 = 60. Es bleiben 22 zusätzliche Beine. 22 : 2 = 11 Katzen."
  ],
  [
    "Ein Band ist 96 cm lang. Nach jedem Schnitt entstehen zwei Stücke. Du möchtest acht gleich lange Stücke. Wie viele Schnitte brauchst du?",
    [
      "6",
      "7",
      "8",
      "9",
      "12"
    ],
    1,
    "Zeichne ein Band. Wie viele Stücke hast du nach einem Schnitt?",
    "Jeder Schnitt vergrößert die Zahl der Stücke um eins.",
    "Am Anfang gibt es ein Stück. Sieben Schnitte ergeben acht Stücke."
  ],
  [
    "Ein Rechteck ist 18 cm lang und 12 cm breit. Du verdoppelst nur die Länge. Was passiert mit dem Umfang?",
    [
      "Er bleibt gleich.",
      "Er wächst um 18 cm.",
      "Er verdoppelt sich.",
      "Er wächst um 36 cm.",
      "Er wächst um 12 cm."
    ],
    3,
    "Zeichne die vier Seiten vor und nach der Änderung.",
    "Zwei Seiten werden länger, zwei bleiben gleich.",
    "Der Umfang wächst von 60 cm auf 96 cm. Das sind 36 cm mehr."
  ],
  [
    "Ein Bus fährt um 08:55 Uhr ab. Die Fahrt dauert 47 Minuten. Danach gehst du 18 Minuten zum Museum. Es öffnet um 10:15 Uhr. Wie lange wartest du dort?",
    [
      "10 Minuten",
      "15 Minuten",
      "20 Minuten",
      "25 Minuten",
      "30 Minuten"
    ],
    1,
    "Finde erst die Ankunftszeit an der Haltestelle.",
    "Rechne danach den Fußweg dazu und vergleiche mit 10:15 Uhr.",
    "Der Bus kommt um 09:42 Uhr an. Nach dem Fußweg ist es 10:00 Uhr. Du wartest 15 Minuten."
  ],
  [
    "In drei Schachteln liegen zusammen 144 Perlen. B hat doppelt so viele wie A. C hat dreimal so viele wie A. Wie viele liegen in C?",
    [
      "24",
      "48",
      "60",
      "72",
      "96"
    ],
    3,
    "Zeichne für A einen gleich großen Teil.",
    "Wie viele solche Teile gehören zu B und zu C?",
    "Zusammen sind es 1 + 2 + 3 = 6 Teile. Ein Teil hat 24 Perlen. C hat 3 × 24 = 72."
  ],
  [
    "Ein Zahlencode hat die Ziffern 1, 2, 4 und 6. Jede Ziffer kommt genau einmal vor. Der Code ist größer als 4.000, kleiner als 6.000 und endet auf 2. Wie viele Codes sind möglich?",
    [
      "1",
      "2",
      "3",
      "4",
      "6"
    ],
    1,
    "Welche Ziffer muss vorne stehen?",
    "Welche zwei Ziffern bleiben für die Mitte?",
    "Vorne steht 4, hinten 2. In der Mitte stehen 1 und 6: 4.162 oder 4.612."
  ],
  [
    "Ein Getränk kostet 2 €. Ein Brötchen kostet 3 €. Du kaufst acht Sachen und bezahlst 21 €. Wie viele Brötchen sind dabei?",
    [
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    3,
    "Was würden acht Getränke kosten?",
    "Jedes Brötchen kostet einen Euro mehr als ein Getränk.",
    "Acht Getränke kosten 16 €. Es fehlen 5 € bis 21 €. Also wurden fünf Getränke durch Brötchen ersetzt."
  ],
  [
    "Ein Radfahrer startet um 14:00 Uhr mit 150 m pro Minute. Ein zweiter startet am selben Ort um 14:04 Uhr mit 200 m pro Minute. Wann holt er den ersten ein?",
    [
      "14:08 Uhr",
      "14:10 Uhr",
      "14:12 Uhr",
      "14:16 Uhr",
      "14:20 Uhr"
    ],
    3,
    "Wie groß ist der Vorsprung nach vier Minuten?",
    "Wie viel davon holt der zweite pro Minute auf?",
    "Der Vorsprung ist 600 m. Pro Minute holt der zweite 50 m auf. Das dauert 12 Minuten ab 14:04 Uhr, also bis 14:16 Uhr."
  ],
  [
    "Ein Würfel hat die Zahlen 1 bis 6. Du würfelst zweimal. Wie viele geordnete Ergebnisse ergeben zusammen 8? 2 und 6 zählt anders als 6 und 2.",
    [
      "3",
      "4",
      "5",
      "6",
      "8"
    ],
    2,
    "Schreibe die Möglichkeiten nach dem ersten Wurf geordnet auf.",
    "Probiere für den ersten Wurf jede Zahl von 1 bis 6.",
    "Es gibt 2+6, 3+5, 4+4, 5+3 und 6+2: fünf Ergebnisse."
  ],
  [
    "Du legst Quadrate mit Streichhölzern in eine Reihe. Nachbarquadrate teilen eine Seite. Ein Quadrat braucht vier Hölzer. Wie viele Hölzer brauchst du für zwölf Quadrate?",
    [
      "36",
      "37",
      "40",
      "44",
      "48"
    ],
    1,
    "Zeichne zwei und drei Quadrate nebeneinander.",
    "Wie viele Hölzer kommen mit jedem weiteren Quadrat dazu?",
    "Das erste Quadrat braucht 4 Hölzer, die elf weiteren je 3: 4 + 11 × 3 = 37."
  ],
  [
    "Ein Preis wird zuerst um 8 € gesenkt und dann verdoppelt. Jetzt sind es 54 €. Wie hoch war der Preis am Anfang?",
    [
      "19 €",
      "27 €",
      "31 €",
      "35 €",
      "43 €"
    ],
    3,
    "Rechne die Schritte von hinten zurück.",
    "Mach erst die Verdopplung rückgängig, dann die Senkung.",
    "54 : 2 = 27. Vor der Senkung um 8 € waren es 35 €."
  ],
  [
    "Eine Gärtnerin hat 137 Pflanzen. Sie pflanzt sechs gleich lange Reihen. 5 Pflanzen bleiben übrig. Wie viele Pflanzen stehen in jeder Reihe?",
    [
      "20",
      "21",
      "22",
      "23",
      "24"
    ],
    2,
    "Nicht alle 137 Pflanzen stehen in den Reihen.",
    "Ziehe die übrigen Pflanzen ab und teile dann auf.",
    "137 − 5 = 132. 132 : 6 = 22 Pflanzen pro Reihe."
  ],
  [
    "Auf dem Tisch liegen 1-€- und 2-€-Münzen. Es sind 14 Münzen im Wert von 23 €. Wie viele 1-€-Münzen sind es?",
    [
      "3",
      "4",
      "5",
      "8",
      "9"
    ],
    2,
    "Wie viel wären 14 Münzen zu je 2 € wert?",
    "Jeder Tausch einer 2-€-Münze gegen 1 € verringert den Wert um 1 €.",
    "14 × 2 = 28 €. Bis 23 € fehlen 5 €. Es sind fünf 1-€-Münzen."
  ],
  [
    "Ein Rechteck hat einen Umfang von 50 cm. Es ist 5 cm länger als breit. Wie lang ist die längere Seite?",
    [
      "10 cm",
      "12 cm",
      "15 cm",
      "20 cm",
      "25 cm"
    ],
    2,
    "Länge und Breite zusammen sind der halbe Umfang.",
    "Teile 25 cm in zwei Teile, deren Unterschied 5 cm ist.",
    "Länge + Breite = 25. 10 + 15 = 25 und 15 − 10 = 5. Die Länge ist 15 cm."
  ],
  [
    "Ein Buch hat 180 Seiten. Lea liest am Montag ein Drittel und am Dienstag ein Viertel des GANZEN Buches. Wie viele Seiten fehlen noch?",
    [
      "60",
      "75",
      "90",
      "105",
      "120"
    ],
    1,
    "Berechne beide Bruchteile jeweils von 180.",
    "Ziehe beide gelesenen Mengen von der Gesamtzahl ab.",
    "Ein Drittel ist 60, ein Viertel 45. 180 − 60 − 45 = 75 Seiten fehlen."
  ],
  [
    "Ein Rad dreht sich in 12 Sekunden einmal. Ein anderes braucht 18 Sekunden. Beide starten gleichzeitig mit einer Markierung oben. Wann stehen beide Markierungen zum ersten Mal wieder gleichzeitig oben?",
    [
      "24 Sekunden",
      "30 Sekunden",
      "36 Sekunden",
      "48 Sekunden",
      "60 Sekunden"
    ],
    2,
    "Schreibe die Vielfachen von 12 und 18 auf.",
    "Suche die erste positive Zahl, die in beiden Reihen vorkommt.",
    "Die ersten gemeinsamen Vielfachen beginnen mit 36. Nach 36 Sekunden sind beide Markierungen wieder oben."
  ]
];
