let euro = [12.5, 30, 2.75, 80, 17, 0];
let dolar = [];

euro.map((meinZahl) => {
  dolar.push((meinZahl * 1.14).toFixed(2));
});
console.log("summe:", dolar, "$");
