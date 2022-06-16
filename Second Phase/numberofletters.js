function numbersOfLetters(integer) {
  let myArray = [];

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

  loop1: while (true) {
    let myStr = String(integer);
    let myNewStr = "";

    for (let i = 0; i < myStr.length; i++) {
      myNewStr += map[myStr[i]];
    }

    myArray.push(myNewStr);
    for (let i = 0; i < myNewStr.length; i++) {
      if (myNewStr.length === integer) {
        break loop1;
      }

      // return numbersOfLetters(myNewStr.length);
    }
    integer = myNewStr.length;
  }
  return myArray;
}
console.log(numbersOfLetters(12));
console.log(numbersOfLetters(1));
