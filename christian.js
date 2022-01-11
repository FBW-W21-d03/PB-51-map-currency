const euro = [12.5, 30, 2.75, 80, 17, 0];
const dollar = [];

function convert(betrag) {
  // toFixed(2) kürzt das Ergebnis auf 2 Stellen nach dem Komma
  // und gibt einen String zurück
  let zwischenSchritt = (betrag * 1.14).toFixed(2);
  // Number() wandelt den String wieder in eine Zahl um
  dollar.push(Number(zwischenSchritt));
}

euro.map(convert);
console.log("Euro-Beträge  :", euro);
console.log("... in Dollar :", dollar);
