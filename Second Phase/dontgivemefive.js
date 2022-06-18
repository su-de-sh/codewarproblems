function dontGiveMeFive(start, end) {
  let noofF;
  let noOfStartDigit = String(start).length;
  let lowest = "1" + "0".repeat(noOfStartDigit - 1);
  let noOfEndDigit = String(end).length;
  let highest = "9".repeat(noOfStartDigit);
  // console.log(lowest);
  // console.log(highest);
  if (noOfStartDigit === noOfEndDigit) {
    noofF = "1" + "9".repeat(noOfStartDigit - 1) - noOffiveCount(start, lowest);
  }
  // console.log(noofF);
  return end - start - Number(noofF) + 1;
}

function noOffiveCount(startnum, lowestnum) {
  let count;
  for (let i = lowestnum; i < startnum; i++) {
    let containFive = String(i).match(/5/);
    if (containFive) {
      count++;
    }
  }
  console.log(count);
}
console.log(dontGiveMeFive(16, 99));
