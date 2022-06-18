function moveZeros(arr) {
  let newArr = arr.filter((a) => a !== 0);
  let count = 0;
  let partialArr = [];
  arr.forEach((element) => {
    if (element === 0) {
      count++;
      partialArr.push(0);
    }
  });

  return newArr.concat(partialArr);
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
