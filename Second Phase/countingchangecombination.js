var countChange = function (money, coins) {
  let myArr = [];

  for (let i = 0; i < money; i++) {
    myArr.push(0);
  }

  myArr[0] = 1;

  for (let i = 0; i < coins.length; i++) {
    // console.log(myArr.length);
    for (let j = 1; j < myArr.length; j++) {
      if (j - coins[i] < 0) continue;
      myArr[j] += myArr[j - coins[i]];
    }
  }
  return myArr[myArr.length - 1] + 1;
};
console.log(countChange(10, [5, 2, 3]));
