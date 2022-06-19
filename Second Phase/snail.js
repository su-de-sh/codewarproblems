snail = function (array) {
  // enjoy

  let myArr = [];
  while (array.length) {
    myArr.push(...array.shift());
    for (var i = 0; i < array.length; i++) {
      myArr.push(array[i].pop());
    }
    myArr.push(...(array.pop() || []).reverse());
    for (var i = array.length - 1; i >= 0; i--) {
      myArr.push(array[i].shift());
    }
  }
  return myArr;
};

console.log(
  snail([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
