let myArray = [];
function numbersOfLetters(integer) {
  let myStr = String(integer);

  let map = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
  };
  let myNewStr = "";

  for (let i = 0; i < myStr.length; i++) {
    myNewStr += map[myStr[i]];
  }

  myArray.push(myNewStr);
  for (let i = 0; i < myNewStr.length; i++) {
    if (myNewStr.length === integer) {
      return myArray;
    }
    return numbersOfLetters(myNewStr.length);
  }
}
console.log(numbersOfLetters(12));
console.log(numbersOfLetters(1));
