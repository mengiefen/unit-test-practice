
const reverseString = require("./reverse-string");

test("the reverse of 'string' is: gnirts", () => {
  let string = "string";
  const reverseStringTest = (string) => {
    reverseString(string);
  };
  expect(reverseString(string)).toMatch("gnirts");
});