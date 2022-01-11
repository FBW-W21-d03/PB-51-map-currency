const euro = [12.50, 30, 2.75, 80, 17, 0];

const dollar = [];

function myFunction(betrag) {

betrag *= 1.14;

dollar.push(betrag.toFixed(2));

}



euro.map(myFunction);
console.log("Euro Ergebnise ", euro);
console.log("in Dollar", dollar);


