const{sum} = require('./app.js');

test('adds 14 + 9 to equal 23',() => {
    let total = sum (14,9);
    expect(total).toBe(23);
});


const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app');

test("1 euro should be 1.07 dollars", () => {
    expect(fromEuroToDollar(1)).toBe(1.07);
});

test("1 dollar should be close to 146.26 yen", () => {
    expect(fromDollarToYen(1)).toBeCloseTo(146.26, 2);
});

test("1000 yen should be close to 5.56 pound", () => {
    expect(fromYenToPound(1000)).toBeCloseTo(5.56, 2);
});