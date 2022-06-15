const binaryArrayToNumber = (arr) => {
  let power = arr.length - 1;
  let myDecNum = 0;
  for (let i = 0; i < arr.length; i++) {
    myDecNum += arr[i] * Math.pow(2, power);
    power -= 1;
    console.log(myDecNum);
  }
  return myDecNum;
};
binaryArrayToNumber([1, 1, 0, 1]);
