"use strict";
const matheThemen = [
  [
    "Zahlen bis 100.000",
    [
      [
        "Welche Zahl besteht aus 6 Zehntausendern, 2 Tausendern, 4 Zehnern und 9 Einern?",
        [
          "62.409",
          "62.049",
          "60.249"
        ],
        1,
        "Nutze eine Stellenwerttafel. Leere Stellen bekommen eine Null.",
        "60.000 + 2.000 + 40 + 9 = 62.049."
      ],
      [
        "Welche Zahl passt zu diesem Zahlwort?\nvier­und­sieb­zig­tau­send­fünf­hun­dert­neun",
        [
          "47.509",
          "74.590",
          "74.509"
        ],
        2,
        "Lies zuerst bis „tausend“. Lies dann den Rest.",
        "Vierundsiebzigtausend sind 74.000. Dazu kommen 509."
      ],
      [
        "Welche Zahl ist die größte gerade fünfstellige Zahl unter 80.000?",
        [
          "9.999",
          "9.998",
          "9.899"
        ],
        0,
        "Eine gerade Zahl endet auf 0, 2, 4, 6 oder 8. Beachte die Grenze.",
        "Direkt vor 80.000 liegt 79.999. Diese Zahl ist ungerade. Die größte passende gerade Zahl ist 79.998."
      ],
      [
        "Welche Reihe stimmt? Beginne mit der kleinsten Zahl.",
        [
          "9.430 < 56.810 < 56.180 < 63.018",
          "9.430 < 56.180 < 56.810 < 63.018",
          "56.180 < 9.430 < 56.810 < 63.018"
        ],
        1,
        "Vergleiche zuerst die Zahl der Stellen, dann die Ziffern von links.",
        "9.430 hat nur vier Stellen. 56.180 ist kleiner als 56.810. Danach folgt 63.018."
      ]
    ]
  ],
  [
    "Zahlenfolgen",
    [
      [
        "Welche drei Zahlen kommen als Nächstes? 57.360 → 57.330 → 57.300 → 57.270 → …",
        [
          "57.260 · 57.250 · 57.240",
          "57.240 · 57.210 · 57.180",
          "57.300 · 57.330 · 57.360"
        ],
        1,
        "Wie groß ist ein Sprung? Geht es vorwärts oder rückwärts?",
        "Ziehe immer 30 ab: 57.240, 57.210, 57.180."
      ],
      [
        "Welche drei Zahlen setzen das Muster fort? 23.400 → 23.404 → 23.412 → 23.424 → …",
        [
          "23.436 · 23.448 · 23.460",
          "23.440 · 23.456 · 23.472",
          "23.440 · 23.460 · 23.484"
        ],
        2,
        "Vergleiche die Größe der einzelnen Sprünge.",
        "Die Sprünge sind +4, +8, +12. Es folgen +16, +20 und +24."
      ]
    ]
  ],
  [
    "Nachbarzahlen",
    [
      [
        "Zwischen welchen benachbarten Zehntausendern liegt 46.730?",
        [
          "40.000 und 50.000",
          "46.000 und 47.000",
          "30.000 und 40.000"
        ],
        0,
        "Die gesuchten Nachbarn liegen 10.000 auseinander.",
        "46.730 liegt zwischen 40.000 und 50.000."
      ],
      [
        "Welche Zehntausender stehen direkt links und rechts von 83.190?",
        [
          "83.000 und 84.000",
          "80.000 und 90.000",
          "70.000 und 90.000"
        ],
        1,
        "Suche die vollen Zehntausender direkt unter und über der Zahl.",
        "83.190 liegt zwischen 80.000 und 90.000."
      ],
      [
        "Welche beiden Nachbartausender schließen 54.760 ein?",
        [
          "50.000 und 60.000",
          "53.000 und 54.000",
          "54.000 und 55.000"
        ],
        2,
        "Die Nachbartausender enden auf drei Nullen.",
        "54.760 liegt zwischen 54.000 und 55.000."
      ],
      [
        "Welche sind die Nachbartausender von 91.080?",
        [
          "91.000 und 92.000",
          "90.000 und 91.000",
          "90.000 und 100.000"
        ],
        0,
        "Suche den Tausender direkt davor und direkt danach.",
        "91.080 liegt 80 über 91.000 und 920 unter 92.000."
      ]
    ]
  ],
  [
    "Rechnen bis 100.000",
    [
      [
        "Was ist 37.992 + 25?",
        [
          "38.017",
          "38.007",
          "37.917"
        ],
        0,
        "Gehe zuerst bis zum nächsten Tausender.",
        "8 dazu ergeben 38.000. Dann bleiben noch 17: 38.017."
      ],
      [
        "Was ist 70.016 − 38?",
        [
          "70.022",
          "69.978",
          "69.988"
        ],
        1,
        "Rechne zuerst bis zum vollen Tausender zurück.",
        "70.016 − 16 = 70.000. Weitere 22 weniger ergeben 69.978."
      ],
      [
        "Wie oft passt 8.000 in 48.000?",
        [
          "8-mal",
          "60-mal",
          "6-mal"
        ],
        2,
        "Rechne mit Tausendern wie mit kleinen Zahlen.",
        "6 × 8.000 = 48.000. Also passt es sechsmal."
      ],
      [
        "Was ergibt 8 × 4.000?",
        [
          "32.000",
          "3.200",
          "36.000"
        ],
        0,
        "Rechne zuerst mit 8 und 4. Beachte dann die Tausender.",
        "8 × 4 = 32. Das sind 32 Tausender."
      ]
    ]
  ],
  [
    "Halbschriftlich rechnen",
    [
      [
        "Zerlege 74 × 4 in 70 × 4 und 4 × 4. Welches Ergebnis bekommst du?",
        [
          "286",
          "296",
          "306"
        ],
        1,
        "Rechne beide Teile und addiere die Ergebnisse.",
        "280 + 16 = 296."
      ],
      [
        "Welche Zeile zeigt den richtigen Rechenweg für 7 × 36?",
        [
          "7 × 30 + 6 = 216",
          "7 × 3 + 7 × 6 = 63",
          "7 × 30 + 7 × 6 = 252"
        ],
        2,
        "Zerlege die zweistellige Zahl in Zehner und Einer. Multipliziere beide Teile.",
        "210 + 42 = 252."
      ],
      [
        "Teile 389 durch 6. Welcher Quotient und welcher Rest stimmen?",
        [
          "64 Rest 5",
          "63 Rest 11",
          "65 Rest 5"
        ],
        0,
        "Zerlege die Zahl in Teile, die du gut teilen kannst. Der Rest muss kleiner als der Teiler sein.",
        "360 : 6 = 60 und 24 : 6 = 4. Es bleiben 5 übrig: 64 Rest 5."
      ],
      [
        "Wie viele volle Gruppen zu je 80 kannst du aus 453 bilden? Wie viel bleibt übrig?",
        [
          "4 Rest 133",
          "5 Rest 53",
          "6 Rest 27"
        ],
        1,
        "Suche das größte Vielfache von 80, das nicht über 453 liegt.",
        "5 × 80 = 400. Es bleiben 53 übrig. Für eine sechste Gruppe reicht es nicht."
      ]
    ]
  ],
  [
    "Tabelle: Zwei Wege",
    [
      [
        "Mina und Oskar starten gleichzeitig an zwei Parkeingängen und gehen aufeinander zu. Sie sind 2.800 m voneinander entfernt. Beide gehen 70 m pro Minute. Welche Werte passen zu 8 Minuten? Wähle Mina, Oskar, zusammen.",
        [
          "560 m · 560 m · 560 m",
          "70 m · 70 m · 140 m",
          "560 m · 560 m · 1.120 m"
        ],
        2,
        "Berechne die beiden Wege einzeln. Addiere sie danach.",
        "Jedes Kind geht 8 × 70 m = 560 m. Zusammen sind es 1.120 m.",
        [
          [
            "Zeit",
            "Mina",
            "Oskar",
            "Zusammen"
          ],
          [
            "1 min",
            "70 m",
            "70 m",
            "140 m"
          ],
          [
            "8 min",
            "?",
            "?",
            "?"
          ]
        ]
      ],
      [
        "Mina und Oskar gehen von zwei Parkeingängen aufeinander zu. Am Anfang liegen 2.800 m zwischen ihnen. Zusammen gehen sie pro Minute 140 m. Nach wie vielen Minuten treffen sie sich?",
        [
          "10 Minuten",
          "20 Minuten",
          "40 Minuten"
        ],
        1,
        "Wie oft passt der gemeinsame Weg pro Minute in den ganzen Abstand?",
        "2.800 : 140 = 20. Sie treffen sich nach 20 Minuten."
      ],
      [
        "Mina und Oskar treffen sich nach 20 Minuten. Beide gehen 70 m pro Minute. Welche Werte stehen in der letzten Tabellenzeile?",
        [
          "1.400 m · 1.400 m · 2.800 m",
          "1.400 m · 1.400 m · 1.400 m",
          "2.800 m · 2.800 m · 5.600 m"
        ],
        0,
        "Rechne zuerst für jedes Kind. Addiere danach die Wege.",
        "20 × 70 m = 1.400 m pro Kind. Zusammen sind es 2.800 m.",
        [
          [
            "Zeit",
            "Mina",
            "Oskar",
            "Zusammen"
          ],
          [
            "20 min",
            "?",
            "?",
            "?"
          ]
        ]
      ]
    ]
  ],
  [
    "Sachaufgaben",
    [
      [
        "Im Gewächshaus stehen 96 Pflanzen. Es gibt dreimal so viele Tomatenpflanzen wie Gurkenpflanzen. Wie viele gibt es von jeder Sorte?",
        [
          "48 Tomaten und 48 Gurken",
          "72 Tomaten und 24 Gurken",
          "64 Tomaten und 32 Gurken"
        ],
        1,
        "Zeichne gleich große Teile für beide Sorten.",
        "96 : 4 = 24 Gurkenpflanzen. 3 × 24 = 72 Tomatenpflanzen."
      ],
      [
        "In einem Korb liegen 58 Äpfel und Birnen. Es sind 14 Äpfel mehr als Birnen. Wie viele sind es von jeder Sorte?",
        [
          "29 Äpfel und 29 Birnen",
          "43 Äpfel und 15 Birnen",
          "36 Äpfel und 22 Birnen"
        ],
        2,
        "Nimm zuerst den Unterschied weg. Teile dann den Rest gleich auf.",
        "58 − 14 = 44. 44 : 2 = 22 Birnen. 22 + 14 = 36 Äpfel."
      ],
      [
        "Ida fährt um 10:35 Uhr zum Tierpark. Die Hinfahrt dauert 25 Minuten. Dort bleibt sie 40 Minuten. Die Rückfahrt dauert 30 Minuten. Wann ist sie zurück und wie lange war sie unterwegs?",
        [
          "12:10 Uhr · 1 Stunde 35 Minuten",
          "12:00 Uhr · 1 Stunde 25 Minuten",
          "12:10 Uhr · 1 Stunde 25 Minuten"
        ],
        0,
        "Addiere die drei Zeiten. Rechne sie zur Startzeit dazu.",
        "25 + 40 + 30 = 95 Minuten = 1 Stunde 35 Minuten. 10:35 Uhr + 95 Minuten = 12:10 Uhr."
      ]
    ]
  ],
  [
    "Wahrscheinlichkeit",
    [
      [
        "Du ziehst blind eine Kugel. Bei welchem Beutel ist Grün sicher?",
        [
          "8 grüne, 0 rote",
          "7 grüne, 1 rote",
          "4 grüne, 4 rote"
        ],
        0,
        "Sicher heißt: Ein anderes Ergebnis kann nicht vorkommen.",
        "Nur im ersten Beutel sind alle Kugeln grün."
      ],
      [
        "Bei welchem Beutel ist Grün unwahrscheinlich, aber möglich?",
        [
          "0 grüne, 8 rote",
          "5 grüne, 3 rote",
          "2 grüne, 6 rote"
        ],
        2,
        "Die gesuchte Farbe muss vorkommen, aber seltener als die andere Farbe.",
        "Zwei grüne sind weniger als sechs rote. Grün ist möglich, aber unwahrscheinlich."
      ],
      [
        "Bei welchem Beutel ist es unmöglich, Grün zu ziehen?",
        [
          "2 grüne, 6 rote",
          "0 grüne, 8 rote",
          "8 grüne, 0 rote"
        ],
        1,
        "Du kannst nur eine Farbe ziehen, die im Beutel vorkommt.",
        "Ohne grüne Kugel kannst du keine grüne ziehen."
      ],
      [
        "Bei welchem Beutel ist Grün wahrscheinlicher als Rot, aber nicht sicher?",
        [
          "6 grüne, 2 rote",
          "4 grüne, 4 rote",
          "8 grüne, 0 rote"
        ],
        0,
        "Von der gesuchten Farbe braucht es mehr. Beide Farben müssen vorkommen.",
        "Sechs grüne sind mehr als zwei rote. Rot ist aber auch möglich."
      ]
    ]
  ],
  [
    "★ Denkaufgaben",
    [
      [
        "Ein Zahlenschloss hat fünf Ziffern. Die erste ist 5. Die Einerziffer ist 3. Die Tausenderziffer ist doppelt so groß wie die Einerziffer. Die Hunderterziffer ist 0. Die Zehnerziffer ist um 1 kleiner als die Einerziffer. Wie lautet der Code?",
        [
          "56.023",
          "53.062",
          "56.032"
        ],
        0,
        "Zeichne fünf Kästchen. Trage die bekannten Ziffern zuerst ein.",
        "Von links stehen 5, 6, 0, 2 und 3: 56.023."
      ],
      [
        "Eine Spielfigur beginnt bei 30.000. Sie springt immer wieder +800, +800, −300. Wo steht sie nach sechs Sprüngen?",
        [
          "31.300",
          "32.600",
          "33.200"
        ],
        1,
        "Fasse ein ganzes Sprungpaket zusammen.",
        "800 + 800 − 300 = 1.300. Zwei Pakete ergeben 2.600 dazu: 32.600."
      ],
      [
        "Ein Zahlencode liegt zwischen 57.000 und 58.000. Er ist genau 230 vom oberen Tausender entfernt. Welche Zahl ist es?",
        [
          "57.230",
          "57.970",
          "57.770"
        ],
        2,
        "Gehe vom oberen Nachbartausender rückwärts.",
        "58.000 − 230 = 57.770."
      ],
      [
        "Ben rechnet 49.993 + 46. Er ersetzt 49.993 durch 50.000. Welche Rechnung ergibt trotzdem dasselbe?",
        [
          "50.000 + 53",
          "50.000 + 39",
          "50.000 + 46"
        ],
        1,
        "Wird ein Summand größer, muss der andere passend kleiner werden.",
        "Der erste Summand wird um 7 größer. 46 − 7 = 39. Beide Rechnungen ergeben 50.039."
      ],
      [
        "Eine Gärtnerei verpackt 203 Blumentöpfe. In einen Karton passen 9 Töpfe. Wie viele Kartons werden mindestens gebraucht?",
        [
          "21",
          "22",
          "23"
        ],
        2,
        "Überlege, ob auch die übrigen Töpfe einen Karton brauchen.",
        "22 × 9 = 198. Für die übrigen 5 Töpfe brauchst du noch einen Karton: 23."
      ],
      [
        "Zwei Roller starten am selben Punkt und fahren auf einem geraden Weg in entgegengesetzte Richtungen. Wann sind sie 1.040 m voneinander entfernt?",
        [
          "Nach 4 Minuten",
          "Nach 8 Minuten",
          "Nach 12 Minuten"
        ],
        1,
        "Addiere beide Wege in derselben Zeile.",
        "Nach 8 Minuten: 480 m + 560 m = 1.040 m Abstand.",
        [
          [
            "Zeit",
            "Roller A",
            "Roller B"
          ],
          [
            "4 min",
            "240 m",
            "280 m"
          ],
          [
            "8 min",
            "480 m",
            "560 m"
          ],
          [
            "12 min",
            "720 m",
            "840 m"
          ]
        ]
      ],
      [
        "Eine Theater-AG beginnt um 14:40 Uhr und endet um 16:10 Uhr. Darin sind 20 Minuten Pause. Wie lange wird ohne Pause geprobt?",
        [
          "70 Minuten",
          "90 Minuten",
          "110 Minuten"
        ],
        0,
        "Berechne die ganze Zeit. Ziehe die Pause ab.",
        "Von 14:40 bis 16:10 sind es 90 Minuten. 90 − 20 = 70 Minuten."
      ],
      [
        "In einem Beutel sind 7 grüne und 4 rote Kugeln. Du legst genau 3 Kugeln dazu. Was musst du dazulegen, damit beide Farben gleich wahrscheinlich werden?",
        [
          "3 grüne",
          "2 grüne und 1 rote",
          "3 rote"
        ],
        2,
        "Am Ende müssen von beiden Farben gleich viele Kugeln vorhanden sein.",
        "Mit drei roten Kugeln sind es 7 grüne und 7 rote."
      ]
    ]
  ],
  [
    "Mal: Die kleine Aufgabe hilft",
    [
      [
        "Die kleine Aufgabe hilft: 7 × 6 und 7 × 60. Welche Ergebnisse passen in dieser Reihenfolge?",
        [
          "42 und 420",
          "42 und 42",
          "42 und 4200"
        ],
        0,
        "Rechne die kleine Aufgabe. Vergleiche danach die Faktoren.",
        "7 × 6 = 42. Ein Faktor wird zehnmal so groß. Bei 7 × 60 ist das Ergebnis 420."
      ],
      [
        "Die kleine Aufgabe hilft: 8 × 9 und 8 × 90. Welche Ergebnisse passen in dieser Reihenfolge?",
        [
          "72 und 72",
          "72 und 720",
          "72 und 7200"
        ],
        1,
        "Rechne die kleine Aufgabe. Vergleiche danach die Faktoren.",
        "8 × 9 = 72. Ein Faktor wird zehnmal so groß. Bei 8 × 90 ist das Ergebnis 720."
      ],
      [
        "Die kleine Aufgabe hilft: 4 × 5 und 40 × 5. Welche Ergebnisse passen in dieser Reihenfolge?",
        [
          "20 und 20",
          "20 und 2000",
          "20 und 200"
        ],
        2,
        "Rechne die kleine Aufgabe. Vergleiche danach die Faktoren.",
        "4 × 5 = 20. Ein Faktor wird zehnmal so groß. Bei 40 × 5 ist das Ergebnis 200."
      ],
      [
        "Die kleine Aufgabe hilft: 9 × 3 und 90 × 3. Welche Ergebnisse passen in dieser Reihenfolge?",
        [
          "27 und 270",
          "27 und 27",
          "27 und 2700"
        ],
        0,
        "Rechne die kleine Aufgabe. Vergleiche danach die Faktoren.",
        "9 × 3 = 27. Ein Faktor wird zehnmal so groß. Bei 90 × 3 ist das Ergebnis 270."
      ],
      [
        "Die kleine Aufgabe hilft: 6 × 8 und 60 × 8. Welche Ergebnisse passen in dieser Reihenfolge?",
        [
          "48 und 48",
          "48 und 480",
          "48 und 4800"
        ],
        1,
        "Rechne die kleine Aufgabe. Vergleiche danach die Faktoren.",
        "6 × 8 = 48. Ein Faktor wird zehnmal so groß. Bei 60 × 8 ist das Ergebnis 480."
      ]
    ]
  ],
  [
    "Geteilt: Die kleine Aufgabe hilft",
    [
      [
        "Rechne mit der kleinen Aufgabe: 48 : 6 und 480 : 60. Welche Ergebnisse passen in dieser Reihenfolge?",
        [
          "8 und 8",
          "8 und 80",
          "8 und 9"
        ],
        0,
        "Vergleiche: Wird nur die erste Zahl größer oder werden beide Zahlen größer?",
        "48 : 6 = 8. Beide Zahlen werden zehnmal so groß. Das Ergebnis bleibt gleich."
      ],
      [
        "Rechne mit der kleinen Aufgabe: 72 : 8 und 720 : 80. Welche Ergebnisse passen in dieser Reihenfolge?",
        [
          "9 und 90",
          "9 und 9",
          "9 und 10"
        ],
        1,
        "Vergleiche: Wird nur die erste Zahl größer oder werden beide Zahlen größer?",
        "72 : 8 = 9. Beide Zahlen werden zehnmal so groß. Das Ergebnis bleibt gleich."
      ],
      [
        "Rechne mit der kleinen Aufgabe: 35 : 5 und 350 : 5. Welche Ergebnisse passen in dieser Reihenfolge?",
        [
          "7 und 7",
          "7 und 71",
          "7 und 70"
        ],
        2,
        "Vergleiche: Wird nur die erste Zahl größer oder werden beide Zahlen größer?",
        "35 : 5 = 7. Nur die erste Zahl wird zehnmal so groß. Das Ergebnis wird auch zehnmal so groß: 70."
      ],
      [
        "Rechne mit der kleinen Aufgabe: 56 : 8 und 560 : 8. Welche Ergebnisse passen in dieser Reihenfolge?",
        [
          "7 und 70",
          "7 und 7",
          "7 und 71"
        ],
        0,
        "Vergleiche: Wird nur die erste Zahl größer oder werden beide Zahlen größer?",
        "56 : 8 = 7. Nur die erste Zahl wird zehnmal so groß. Das Ergebnis wird auch zehnmal so groß: 70."
      ],
      [
        "Rechne mit der kleinen Aufgabe: 45 : 9 und 450 : 90. Welche Ergebnisse passen in dieser Reihenfolge?",
        [
          "5 und 50",
          "5 und 5",
          "5 und 6"
        ],
        1,
        "Vergleiche: Wird nur die erste Zahl größer oder werden beide Zahlen größer?",
        "45 : 9 = 5. Beide Zahlen werden zehnmal so groß. Das Ergebnis bleibt gleich."
      ]
    ]
  ],
  [
    "Mal und Geteilt: Mein Rechenweg",
    [
      [
        "Rechne auf deinem Weg: 67 × 7. Tippe auf das Ergebnis.",
        [
          "469",
          "429",
          "489"
        ],
        0,
        "Zerlege die zweistellige Zahl in Zehner und Einer. Addiere beide Ergebnisse.",
        "60 × 7 = 420 und 7 × 7 = 49. Zusammen: 469."
      ],
      [
        "Rechne auf deinem Weg: 83 × 6. Tippe auf das Ergebnis.",
        [
          "458",
          "498",
          "518"
        ],
        1,
        "Zerlege die zweistellige Zahl in Zehner und Einer. Addiere beide Ergebnisse.",
        "80 × 6 = 480 und 3 × 6 = 18. Zusammen: 498."
      ],
      [
        "Rechne auf deinem Weg: 5 × 79. Tippe auf das Ergebnis.",
        [
          "355",
          "415",
          "395"
        ],
        2,
        "Zerlege die zweistellige Zahl in Zehner und Einer. Addiere beide Ergebnisse.",
        "70 × 5 = 350 und 9 × 5 = 45. Zusammen: 395."
      ],
      [
        "Rechne auf deinem Weg: 527 : 6. Tippe auf das Ergebnis mit dem passenden Rest.",
        [
          "87 Rest 5",
          "86 Rest 11",
          "88 Rest 5"
        ],
        0,
        "Zerlege in Teile, die du gut teilen kannst. Der Rest muss kleiner als der Teiler sein.",
        "87 × 6 = 522. Bis 527 fehlen 5. Also: 87 Rest 5."
      ],
      [
        "Rechne auf deinem Weg: 428 : 5. Tippe auf das Ergebnis mit dem passenden Rest.",
        [
          "84 Rest 8",
          "85 Rest 3",
          "86 Rest 3"
        ],
        1,
        "Zerlege in Teile, die du gut teilen kannst. Der Rest muss kleiner als der Teiler sein.",
        "85 × 5 = 425. Bis 428 fehlen 3. Also: 85 Rest 3."
      ],
      [
        "Rechne auf deinem Weg: 336 : 8. Tippe auf das Ergebnis mit dem passenden Rest.",
        [
          "41 Rest 8",
          "43",
          "42"
        ],
        2,
        "Zerlege in Teile, die du gut teilen kannst. Der Rest muss kleiner als der Teiler sein.",
        "42 × 8 = 336. Es bleibt nichts übrig. Also: 42."
      ],
      [
        "Rechne auf deinem Weg: 432 : 6. Tippe auf das Ergebnis mit dem passenden Rest.",
        [
          "72",
          "71 Rest 6",
          "73"
        ],
        0,
        "Zerlege in Teile, die du gut teilen kannst. Der Rest muss kleiner als der Teiler sein.",
        "72 × 6 = 432. Es bleibt nichts übrig. Also: 72."
      ],
      [
        "Rechne auf deinem Weg: 698 : 9. Tippe auf das Ergebnis mit dem passenden Rest.",
        [
          "76 Rest 14",
          "77 Rest 5",
          "78 Rest 5"
        ],
        1,
        "Zerlege in Teile, die du gut teilen kannst. Der Rest muss kleiner als der Teiler sein.",
        "77 × 9 = 693. Bis 698 fehlen 5. Also: 77 Rest 5."
      ]
    ]
  ]
];
