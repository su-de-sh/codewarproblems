let count = 0;
let newNum;
debugger;
function persistence(num) {
  if (num < 9) {
    return 0;
  }
  newNum = num;
  let product = 1;
  while (newNum > 0) {
    product *= newNum % 10;
    // console.log(product);
    newNum = Math.floor(newNum / 10);
  }
  count++;

  if (product < 10) {
    return count;
  }

  return persistence(product);
}

console.log(persistence(25));
