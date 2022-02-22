const capitalize = require("./capitalize-string");
describe("captalize function test", () => {
  test("capitalize first letter of string", () => {
    let string = "string";

    const checkCapitalization = (string) => capitalize(string);

    expect(checkCapitalization(string)).toMatch("String");
  });

  test("capitalize first letter of string with number as a first character", () => {
    let string = "1tring";

    const checkCapitalization = (str) => capitalize(str);

    expect(checkCapitalization(string)).toBeUndefined();
  });
});
