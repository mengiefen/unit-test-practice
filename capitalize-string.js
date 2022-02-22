const capitalize = (string) =>
  (/[a-zA-Z]/).test(string.charAt(0))
    ? [...string.split("")[0].toUpperCase(), ...string.slice(1)].join("")
    : undefined;

module.exports = capitalize;