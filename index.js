
const euro = [12.50, 30, 2.75, 80, 17, 0]
const dollar = []

euro.map(
    (multipliziert) => {
        dollar.push(multipliziert * 1.14);
    }
       )
       console.log("Dollar:",dollar);
     