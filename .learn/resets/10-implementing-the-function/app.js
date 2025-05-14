// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar }

const sum = (a,b)=> {
    return a + b
};
console.log(sum(7,3))
module.exports = {sum};

let oneEuroIs = {
    "JPY": 156.5, 
    "USD": 1.07,  
    "GBP": 0.87,   
};

function fromEuroToDollar(euros) {
    return euros * oneEuroIs.USD;
};

function fromDollarToYen(dollars) {
    let euros = dollars / oneEuroIs.USD;
    return euros * oneEuroIs.JPY;
};

function fromYenToPound(yen) {
    let euros = yen / oneEuroIs.JPY;
    return euros * oneEuroIs.GBP;
};
