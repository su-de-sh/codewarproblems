function topThreeWords(str) {
  str = str
    .replace(/[^a-zA-Z' ]/g, "")
    .trim()
    .toLowerCase();

  const myArray = str.split(" ");

  const strArray = [];
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] !== "'") {
      strArray.push(myArray[i]);
    }
  }

  let myObj = {};

  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i] === "") continue;
    if (strArray[i] in myObj) {
      myObj[strArray[i]]++;
    } else myObj[strArray[i]] = 1;
  }

  const frequencyArr = Object.keys(myObj).map((keys) => [keys, myObj[keys]]);

  frequencyArr.sort((a, b) => b[1] - a[1]);

  return frequencyArr.slice(0, 3).map((el) => el[0]);
}
