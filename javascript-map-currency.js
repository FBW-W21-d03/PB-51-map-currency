const euroArray = [12.5, 30, 2.75, 80, 17, 0];
const dollarArray = [];

console.log("Aufgabe 1: \n Euro Array\n", euroArray, "€" , "\nDollar Array \n", dollarArray, "€" );

euroArray.forEach(betrag => {
    betrag *= 1.14;
    dollarArray.push(betrag.toFixed(2));
});

console.log("Aufgabe 2: \n Euro Array\n", euroArray, "€");
console.log("Dollar Array: \n", dollarArray,"$")