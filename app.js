
const sum = (a,b)=> {
    return a + b
};
console.log(sum(7,3))

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
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound}