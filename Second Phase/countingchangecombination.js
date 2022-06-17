var countChange = function (money, coins) {
  let myArr = [];

  for (let i = 0; i < money + 1; i++) {
    myArr.push(0);
  }
  console.log(myArr);

  myArr[0] = 1;
  console.log(myArr);

  for (let i = 0; i < coins.length; i++) {
    // console.log(myArr.length);
    for (let j = 1; j < myArr.length; j++) {
      if (j - coins[i] < 0) continue;
      myArr[j] += myArr[j - coins[i]];
      //   console.log(myArr[j]);
    }
  }
  //   console.log(myArr);
  return myArr[myArr.length - 1];
};
console.log(countChange(11, [5, 7]));
