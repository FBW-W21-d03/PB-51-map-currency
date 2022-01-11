const euro = [12.50, 30, 2.75, 80, 17, 0];
let dollar = [];


function change(Zahl){

        dollar.push((Zahl * 1.14).toFixed(2));
 }


euro.map(change);
console.log("EUR €:",`${euro}`);
console.log("USD $:",`${dollar}`);