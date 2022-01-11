const euro = [12.50, 30, 2.75, 80, 17, 0];

const dollar=[];

function myFunc(betrag){
    dollar.push((betrag*1.14).toFixed(2));
}


euro.map(myFunc);
console.log(dollar);
console.log(euro);