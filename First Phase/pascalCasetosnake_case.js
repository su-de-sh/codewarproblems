function toUnderscore(string) {
  if (typeof string === "number") return String(string);
  let myStr = string[0].toLowerCase();
  for (let i = 1; i < string.length; i++) {
    if (!Number(string[i]) && string[i] === string[i].toUpperCase()) {
      myStr += "_" + string[i].toLowerCase();
    } else {
      myStr += string[i];
    }
  }

  return myStr;
}
console.log(toUnderscore("TestController"));
console.log(toUnderscore("TestAndController"));
console.log(toUnderscore("TestController123"));
console.log(toUnderscore(123));
