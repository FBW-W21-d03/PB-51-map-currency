"use strict";
const euro = [12.5, 30, 2.75, 80, 17, 0];
let dolar = [];

euro.map((zahl) => {
  dolar.push((zahl * 1.14).toFixed(2));
});
console.log("summe:", dolar, "$");
