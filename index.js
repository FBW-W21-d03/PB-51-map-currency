// Teil 1
const euro = [12.50, 30, 2.75, 80, 17, 0];
const dollar = [];
console.log(euro);
console.log(dollar);
console.log("--------------");
// Teil 2 & 3
euro.map(
    (betrag) => {
        dollar.push((betrag * 1.14).toFixed(2));
    }
)
 
console.log("$" , dollar);
console.log("€" , euro);