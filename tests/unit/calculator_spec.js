var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  it('can add 1 to 4', function () {
    calculator.previousTotal = 1;
    calculator.add(4);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 5);
  });

  it('can subtract 4 from 7', function () {
    calculator.previousTotal = 7;
    calculator.subtract(4);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 3);
  });

  it('can multiply 3 by 5', function () {
    calculator.previousTotal = 3;
    calculator.multiply(5);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 15);
  });

  it('can divide 21 by 7', function () {
    calculator.previousTotal = 21;
    calculator.divide(7);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 3);
  });

  it('can concatenate number clicks', function () {
    calculator.numberClick(1);
    calculator.numberClick(2);
    calculator.numberClick(3);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 123);
  });

  it('can chain operations together', function () {
    calculator.numberClick(9);
    calculator.operatorClick('+');
    calculator.numberClick(1); // 10
    calculator.operatorClick('*');
    calculator.numberClick(9); // 90
    calculator.operatorClick('/');
    calculator.numberClick(2); // 45
    calculator.operatorClick('-');
    calculator.numberClick(3); // 42
    calculator.operatorClick('='); // Puts result in previousTotal
    const actual = calculator.previousTotal;
    assert.strictEqual(actual, 42);
  });

  it('can clear running total without affecting calculation', function () {
    calculator.numberClick(3);
    calculator.operatorClick('*');
    calculator.numberClick(2); // 6
    calculator.operatorClick('+');
    calculator.numberClick(5);
    calculator.clearClick(); // Clears the "5" while keeping the "6 +"
    calculator.numberClick(4); // 6 + 4 = 10
    calculator.operatorClick('='); // Puts result in previousTotal
    const actual = calculator.previousTotal;
    assert.strictEqual(actual, 10);
  });
});
