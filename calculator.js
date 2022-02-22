class Calculator {
  add = (num1, num2) =>
    typeof num1 === "number" && typeof num2 === "number"
      ? num1 + num2
      : undefined;

  subtract = (num1, num2) => 
    typeof num1 === "number" && typeof num2 === "number"
      ? num1 - num2
      : undefined;
  

  multiply(num1, num2){
    const isNumber = typeof num1 === "number" && typeof num2 === "number";
    const value = isNumber ? (num1 * num2) : undefined;
    return value;
  }

  divide(num1, num2) {
    const isNumber = typeof num1 === "number" && typeof num2 === "number";
    const value = isNumber && num2 !==0 ? (num1 / num2) : undefined;
    return value;
  }
}

module.exports = Calculator;
