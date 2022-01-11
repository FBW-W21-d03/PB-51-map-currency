// 1 )
const euroArry = [12.50, 30, 2.75, 80, 17, 0];
console.log(euroArry);

// 2 )
const dollarArry = [];
console.log(dollarArry);

// 3 )
euroArry.map(
(prozent) => {
    dollarArry.push((prozent - 1.14).toFixed(2));
}
   )
   console.log(dollarArry);
   console.log(euroArry);

