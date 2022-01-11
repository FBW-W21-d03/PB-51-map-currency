// # javascript-map-currency

// Ein Array mit €-Beträgen soll in ein Array mit $-Beträgen umgerechnet werden.

// ## Aufgabenstellung - Teil 1
// Schreibe ein Array euro mit den Beträgen: 12.50, 30, 2.75, 80, 17, 0
const walleu = [12.50, 30, 2.75, 80, 17, 0];


// Schreibe nun ein leeres Array dollar.
const wallusd = [];
let euro = true;

// ## Aufgabenstellung - Teil 2
// Schreibe eine Funktion, die eine Zahl namens betrag akzeptiert.
function currency(betrag) {
    if(euro == false){
        betrag = "Dollar";
        wallusd.push() * 1.14;
    } else {
        betrag = "Euro";
    }
}

// Die Funktion multipliziert die Zahl mit 1.14 und berechnet so den $-Wert.
// Sie pusht das Ergebnis in das leere Array.

// ## Aufgabenstellung - Teil 3
// Verwende map() mit dem Array euro und übergebe die Funkion als Parameter.
 walleu.map((parameter) => {
    wallusd.push(Number((parameter * 1.14).toFixed(2)));
}
   )
console.log("Euro: ", walleu);
console.log("Dollar: ", wallusd);