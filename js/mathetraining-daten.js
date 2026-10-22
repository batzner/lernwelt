"use strict";
const matheThemen = [
  ["Zahlen bis 100.000", [
    ["Welche Zahl besteht aus 4 Zehntausendern, 3 Tausendern, 6 Zehnern und 8 Einern?", ["43.608","43.068","40.368"], 1, "Setze an leeren Stellen eine Null ein.", "40.000 + 3.000 + 60 + 8 = 43.068."],
    ["Welche Zahl passt zu diesem Zahlwort?\nsechs\u00adund\u00adacht\u00adzig\u00adtau\u00adsend\u00addrei\u00adhun\u00addert\u00adsie\u00adben", ["68.307","86.370","86.307"], 2, "Trenne beim Lesen den Teil vor „tausend“ vom Rest.", "Sechsundachtzigtausend sind 86.000. Dazu kommen 307."],
    ["Welche Zahl ist die größte gerade fünfstellige Zahl?", ["99.998","99.999","98.888"], 0, "Eine gerade Zahl endet auf 0, 2, 4, 6 oder 8.", "99.999 ist die größte fünfstellige Zahl, aber ungerade. Direkt davor liegt 99.998."],
    ["Welche Reihe stimmt? Beginne mit der kleinsten Zahl.", ["8.720 < 47.620 < 47.260 < 51.062","8.720 < 47.260 < 47.620 < 51.062","47.260 < 8.720 < 47.620 < 51.062"], 1, "Vergleiche gleich lange Zahlen von links nach rechts.", "8.720 hat nur vier Stellen. Bei den beiden Zahlen mit 47 Tausendern ist 260 kleiner als 620."],
  ]],
  ["Zahlenfolgen", [
    ["Welche drei Zahlen kommen als Nächstes? 46.260 → 46.240 → 46.220 → 46.200 → …", ["46.190 · 46.180 · 46.170","46.180 · 46.160 · 46.140","46.220 · 46.240 · 46.260"], 1, "Rechne den Unterschied zwischen den ersten beiden Zahlen aus.", "Ziehe jedes Mal 20 ab. So kommst du auf 46.180, 46.160 und 46.140."],
    ["Welche drei Zahlen setzen das Muster fort? 12.500 → 12.503 → 12.509 → 12.518 → …", ["12.527 · 12.536 · 12.545","12.530 · 12.542 · 12.554","12.530 · 12.545 · 12.563"], 2, "Schau, wie sich die Sprunggrößen ändern.", "Die Sprünge sind +3, +6, +9. Es folgen +12, +15 und +18."],
  ]],
  ["Nachbarzahlen", [
    ["Zwischen welchen zwei benachbarten Zehntausendern liegt 38.640?", ["30.000 und 40.000","38.000 und 39.000","20.000 und 30.000"], 0, "Die beiden Nachbarn liegen genau 10.000 auseinander.", "30.000 liegt direkt darunter und 40.000 direkt darüber."],
    ["Welche Zehntausender stehen links und rechts von 74.280?", ["74.000 und 75.000","70.000 und 80.000","60.000 und 80.000"], 1, "Suche die nächstkleinere und die nächstgrößere volle Zehntausenderzahl.", "74.280 liegt zwischen 70.000 und 80.000."],
    ["Welche beiden Tausender schließen 62.650 ein?", ["60.000 und 70.000","61.000 und 62.000","62.000 und 63.000"], 2, "Die beiden gesuchten Zahlen enden auf drei Nullen.", "62.000 liegt direkt darunter und 63.000 direkt darüber."],
    ["Welche sind die Nachbartausender von 87.040?", ["87.000 und 88.000","86.000 und 87.000","80.000 und 90.000"], 0, "Auch wenn die Zahl nur wenig über einem Tausender liegt, brauchst du beide Nachbarn.", "87.040 liegt 40 über 87.000 und 960 unter 88.000."],
  ]],
  ["Rechnen bis 100.000", [
    ["Was ist 28.994 + 18?", ["29.012","29.002","28.912"], 0, "Spring zuerst bis 29.000.", "6 dazu ergeben 29.000. Dann bleiben noch 12: 29.012."],
    ["Was ist 60.013 − 27?", ["60.014","59.986","59.996"], 1, "Zieh zuerst 13 ab. Wie viel musst du dann noch abziehen?", "60.013 − 13 = 60.000. Weitere 14 weniger ergeben 59.986."],
    ["Wie oft passt 6.000 in 42.000?", ["6-mal","70-mal","7-mal"], 2, "Rechne mit Tausendern: 42 Tausender geteilt durch 6 Tausender.", "7 × 6.000 = 42.000. Also passt 6.000 siebenmal hinein."],
    ["Was ergibt 7 × 3.000?", ["21.000","2.100","24.000"], 0, "Rechne zuerst 7 × 3. Das Ergebnis zählt Tausender.", "7 × 3 = 21. Also sind es 21 Tausender."],
  ]],
  ["Halbschriftlich rechnen", [
    ["Zerlege 68 × 3 in 60 × 3 und 8 × 3. Welches Ergebnis bekommst du?", ["184","204","214"], 1, "Rechne beide Teile und addiere die Ergebnisse.", "180 + 24 = 204."],
    ["Welche Zeile zeigt den richtigen Rechenweg für 6 × 47?", ["6 × 40 + 7 = 247","6 × 4 + 6 × 7 = 66","6 × 40 + 6 × 7 = 282"], 2, "47 besteht aus 40 und 7. Beide Teile werden mit 6 multipliziert.", "240 + 42 = 282."],
    ["Teile 458 durch 7. Welcher Quotient und welcher Rest stimmen?", ["65 Rest 3","64 Rest 10","66 Rest 4"], 0, "Teile zuerst 420 durch 7. Was kannst du mit den übrigen 38 machen?", "420 : 7 = 60. Von den übrigen 38 passen 35 in fünf Gruppen. Es bleiben 3 übrig."],
    ["Wie viele volle Gruppen zu je 70 kannst du aus 387 bilden? Wie viel bleibt übrig?", ["4 Rest 107","5 Rest 37","6 Rest 33"], 1, "Suche das größte Vielfache von 70, das nicht über 387 liegt.", "5 × 70 = 350. Es bleiben 37 übrig. Für eine sechste Gruppe reicht das nicht."],
  ]],
  ["Tabelle: Zwei Wege", [
    ["Nora und Tarek starten gleichzeitig und gehen aufeinander zu. Sie sind 2.160 m voneinander entfernt. Beide gehen 60 m pro Minute. Welche Werte gehören in die Zeile für 6 Minuten? Wähle Nora, Tarek, zusammen.", ["360 m · 360 m · 360 m","60 m · 60 m · 120 m","360 m · 360 m · 720 m"], 2, "Rechne für jedes Kind 6 × 60. Zähle dann die Wege zusammen.", "Jedes Kind geht in 6 Minuten 360 m. Zusammen sind es 720 m.", [["Zeit","Nora","Tarek","Zusammen"],["1 min","60 m","60 m","120 m"],["6 min","?","?","?"]]],
    ["Nora und Tarek gehen aufeinander zu. Am Anfang liegen 2.160 m zwischen ihnen. Zusammen gehen sie pro Minute 120 m. Nach wie vielen Minuten treffen sie sich?", ["12 Minuten","18 Minuten","36 Minuten"], 1, "Wie oft passt der gemeinsame Weg pro Minute in den gesamten Abstand?", "2.160 : 120 = 18. Nach 18 Minuten treffen sie sich."],
    ["Nora und Tarek treffen sich nach 18 Minuten. Beide gehen 60 m pro Minute. Welche Werte stehen in der letzten Tabellenzeile?", ["1.080 m · 1.080 m · 2.160 m","1.080 m · 1.080 m · 1.080 m","2.160 m · 2.160 m · 4.320 m"], 0, "Rechne 18 × 60 für jedes Kind und addiere die beiden Wege.", "Beide gehen je 1.080 m. Ihre Wege ergeben zusammen 2.160 m.", [["Zeit","Nora","Tarek","Zusammen"],["18 min","?","?","?"]]],
  ]],
  ["Sachaufgaben", [
    ["In einem Regal stehen 84 Bücher. Es gibt dreimal so viele Comics wie Sachbücher. Wie viele gibt es von jeder Sorte?", ["42 Comics und 42 Sachbücher","63 Comics und 21 Sachbücher","56 Comics und 28 Sachbücher"], 1, "Zeichne einen Teil für die Sachbücher und drei gleich große Teile für die Comics.", "84 : 4 = 21 Sachbücher. Dreimal 21 sind 63 Comics."],
    ["In einer Kiste sind 46 rote und blaue Bausteine. Es sind 10 rote Bausteine mehr als blaue. Wie viele von jeder Farbe sind es?", ["23 rote und 23 blaue","33 rote und 13 blaue","28 rote und 18 blaue"], 2, "Nimm die 10 zusätzlichen roten Bausteine zuerst weg. Teile dann den Rest gleich auf.", "46 − 10 = 36. Die Hälfte ist 18. Das sind die blauen. Rot sind es 18 + 10 = 28."],
    ["Emil geht um 09:45 Uhr los. Der Hinweg zur Bücherei dauert 20 Minuten. Dort bleibt er 35 Minuten. Der Rückweg dauert 30 Minuten. Wann ist er zurück und wie lange war er unterwegs?", ["11:10 Uhr · 1 Stunde 25 Minuten","11:00 Uhr · 1 Stunde 15 Minuten","11:10 Uhr · 1 Stunde 15 Minuten"], 0, "Zähle Hinweg, Besuch und Rückweg zusammen. Rechne die Zeit ab 09:45 Uhr weiter.", "20 + 35 + 30 = 85 Minuten. Das sind 1 Stunde und 25 Minuten. 09:45 Uhr + 85 Minuten = 11:10 Uhr."],
  ]],
  ["Wahrscheinlichkeit", [
    ["Du ziehst blind einen Chip. Welche Dose macht es sicher, dass du Blau ziehst?", ["6 blaue, 0 gelbe","5 blaue, 1 gelber","3 blaue, 3 gelbe"], 0, "Sicher heißt: Das andere Ergebnis kann nicht vorkommen.", "Nur in der ersten Dose sind alle Chips blau."],
    ["In welcher Dose ist Blau unwahrscheinlich, aber möglich?", ["0 blaue, 6 gelbe","4 blaue, 2 gelbe","1 blauer, 5 gelbe"], 2, "Es muss mindestens einen blauen Chip geben. Blau soll seltener sein als Gelb.", "Bei einem blauen und fünf gelben Chips ist Blau möglich, aber unwahrscheinlich."],
    ["In welcher Dose ist es unmöglich, Blau zu ziehen?", ["1 blauer, 5 gelbe","0 blaue, 6 gelbe","6 blaue, 0 gelbe"], 1, "Aus der Dose kann nur kommen, was darin liegt.", "Ohne blaue Chips kannst du keinen blauen Chip ziehen."],
    ["In welcher Dose ist Blau wahrscheinlicher als Gelb, aber nicht sicher?", ["5 blaue, 1 gelber","3 blaue, 3 gelbe","6 blaue, 0 gelbe"], 0, "Suche mehr blaue als gelbe Chips. Mindestens ein gelber Chip muss dabei sein.", "Fünf blaue Chips sind mehr als ein gelber. Beide Farben sind aber möglich."],
  ]],
  ["★ Denkaufgaben", [
    ["Ein Zahlencode hat fünf Ziffern. Die erste ist 3. Die Tausenderziffer ist doppelt so groß wie die Einerziffer 4. Die Hunderterziffer ist 0. Die Zehnerziffer ist um 1 kleiner als die Einerziffer. Wie lautet der Code?", ["38.034","34.083","38.043"], 0, "Zeichne fünf Kästchen für die Stellen und fülle sie nacheinander.", "Die Ziffern von links sind 3, 8, 0, 3 und 4. Der Code lautet 38.034."],
    ["Ein Roboter macht ab 40.000 diese Sprünge immer wieder: +600, +600, −200. Wo steht er nach sechs Sprüngen?", ["41.000","42.000","42.400"], 1, "Fasse drei Sprünge zusammen. Wie oft kommt dieses Paket vor?", "600 + 600 − 200 = 1.000. Nach sechs Sprüngen hat er zwei Pakete geschafft: 42.000."],
    ["Ein Zahlencode liegt zwischen 46.000 und 47.000. Er ist genau 120 vom oberen Tausender entfernt. Welche Zahl ist es?", ["46.120","46.980","46.880"], 2, "Beginne bei 47.000 und gehe 120 zurück.", "47.000 − 100 = 46.900. Weitere 20 zurück ergeben 46.880."],
    ["Nila rechnet 39.996 + 38. Sie ersetzt 39.996 durch 40.000. Welche Rechnung ergibt trotzdem dasselbe?", ["40.000 + 42","40.000 + 34","40.000 + 38"], 1, "Der erste Summand ist jetzt um 4 größer. Was muss beim zweiten passieren?", "Zieh beim zweiten Summanden 4 ab. So bleibt die Summe gleich: 40.034."],
    ["Für ein Fest müssen 186 Becher auf Tabletts verteilt werden. Ein Tablett fasst 8 Becher. Was ist die kleinste Zahl an Tabletts, damit alle Becher Platz haben?", ["22","23","24"], 2, "Rechne 186 : 8. Überlege, was mit dem Rest passiert.", "23 × 8 = 184. Für die zwei übrigen Becher brauchst du ein weiteres Tablett. Das sind 24."],
    ["Zwei Räder fahren vom selben Start los, aber in genau entgegengesetzte Richtungen. Nach welcher Zeit sind sie genau 840 m voneinander entfernt?", ["Nach 3 Minuten","Nach 6 Minuten","Nach 9 Minuten"], 1, "Addiere die beiden Wege in derselben Zeile.", "Nach 6 Minuten sind es 360 m + 480 m = 840 m. Weil die Räder in genau entgegengesetzte Richtungen fahren, ist das ihr Abstand.", [["Zeit","Rad A","Rad B"],["3 min","180 m","240 m"],["6 min","360 m","480 m"],["9 min","540 m","720 m"]]],
    ["Eine Bastel-AG beginnt um 15:25 Uhr und endet um 16:40 Uhr. Darin sind 15 Minuten Pause. Wie lange wird ohne Pause gebastelt?", ["60 Minuten","75 Minuten","90 Minuten"], 0, "Berechne zuerst die ganze Zeit. Zieh dann die Pause ab.", "Von 15:25 bis 16:40 sind es 75 Minuten. 75 − 15 = 60 Minuten."],
    ["In einer Dose sind 5 blaue und 3 gelbe Chips. Du legst genau 2 Chips dazu. Was musst du dazulegen, damit beide Farben gleich wahrscheinlich werden?", ["2 blaue","1 blauen und 1 gelben","2 gelbe"], 2, "Beide Farben müssen am Ende gleich oft in der Dose sein.", "Mit zwei gelben Chips sind es 5 blaue und 5 gelbe. Beide Farben sind dann gleich wahrscheinlich."],
  ]],
];
