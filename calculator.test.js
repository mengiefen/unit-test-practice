let Calculator = require("./calculator.js");

Calculator = new Calculator();
describe("Calculator methods test", () => {
  //Addition
  test("1 + 1 evaluates to 2", () => {
    let num1 = 1,
      num2 = 1;

    const sum = (a, b) => Calculator.add(a, b);

    expect(sum(num1, num2)).toBe(2);
  });

  test("-20 + 10 evaluates to -10", () => {
    let num1 = -20,
      num2 = 10;

    const sum = (a, b) => Calculator.add(a, b);

    expect(sum(num1, num2)).toBe(-10);
  });

  test('string "s" + 10 evaluates to undefined', () => {
    let num1 = 's';
    let num2 = 10;

    const sum = (a, b) => Calculator.add(a, b);

    expect(sum(num1, num2)).toBeUndefined();
  })

  //Subtraction

  test("1 - 1 evaluates to 0", () => {
    let num1 = 1,
      num2 = 1;

    const subtract= (a, b) => Calculator.subtract(a, b);

    expect(subtract(num1, num2)).toBe(0);
  });

  test("-20 - 10 evaluates to -30", () => {
    let num1 = -20,
      num2 = 10;

    const subtract = (a, b) => Calculator.subtract(a, b);

    expect(subtract(num1, num2)).toBe(-30);
  });

  test('string "s" - 10 evaluates to undefined', () => {
    let num1 = 's';
    let num2 = 10;

    const subtract = (a, b) => Calculator.subtract(a, b);

    expect(subtract(num1, num2)).toBeUndefined();
  })

  //Multiplication

  test("1 * 1 evaluates to 1", () => {
    let num1 = 1,
      num2 = 1;

    const productOf = (a, b) => Calculator.multiply(a, b);

    expect(productOf(num1, num2)).toBe(1);
  });

  test("-20 * 10 evaluates to -200", () => {
    let num1 = -20,
      num2 = 10;

    const productOf = (a, b) => Calculator.multiply(a, b);

    expect(productOf(num1, num2)).toBe(-200);
  });

  test('string "s" * 10 evaluates to undefined', () => {
    let num1 = 's';
    let num2 = 10;

    const productOf= (a, b) => Calculator.multiply(a, b);

    expect(productOf(num1, num2)).toBeUndefined();
  })

  //Division

  test("1 / 1 evaluates to 1", () => {
    let num1 = 1,
      num2 = 1;

    const division = (a, b) => Calculator.divide(a, b);

    expect(division(num1, num2)).toBe(1);
  });

  test("-20 / 0 evaluates to  undefined", () => {
    let num1 = -20,
      num2 = 0;

    const division = (a, b) => Calculator.divide(a, b);

    expect(division(num1, num2)).toBeUndefined();
  });

  test('string "s" / 10 throws an error', () => {
    let num1 = 's';
    let num2 = 10;

    const division = (a, b) => Calculator.divide(a, b);

    expect(division(num1, num2)).toBeUndefined();
  })
});


