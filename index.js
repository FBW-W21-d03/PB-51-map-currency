const euro = [12.50, 30, 2.75, 80, 17, 0];
let dollar = [];


function wechsel(betrag){

        dollar.push((betrag * 1.14).toFixed(2));
 }


euro.map(wechsel);
console.log("Euro:",`${euro}`);
console.log("Dollar:",`${dollar}`);
