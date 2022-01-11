const euro = [12.50, 30, 2.75, 80, 17, 0];
const dollar = [];

euro.map((currency) => {
  dollar.push((currency * 1.14).toFixed(2));
}
);
console.log("summe:", dollar);


// 2te methode

function umgerechnet(currency) {
  dollar.push((currency * 1.14).toFixed(2));
}

euro.map(umgerechnet);
console.log(euro);
console.log(dollar);