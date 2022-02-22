const stringLength = require("./string-count");

describe("string length function", () => {
  test('The string length of "string" should be 6', () => {
    //Arrange
    const string = "string";

    //Act
    const sampleTest = (string) => stringLength(string);

    //Assert
    expect(sampleTest(string)).toBe(6);
  });

  test("the result throws error", () => {
    //Arrange
    let string2 = "This longer text";
    //Act
    const sampleTest = () => stringLength(string2);
    //Assert
    expect(sampleTest).toThrowError(/Out of range/);
  });
});

describe("String reverse function", () => {
  
});
