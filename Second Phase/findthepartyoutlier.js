function findOutlier(integers) {
  let evenNums = integers.filter((a) => Math.abs(a) % 2 === 0);

  let oddNums = integers.filter((a) => Math.abs(a) % 2 === 1);

  if (evenNums.length === 1) return evenNums[0];
  else return oddNums[0];
}
console.log(findOutlier([2, 4, 0, 100, 4, -11, 2602, 36]));
//   [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)
