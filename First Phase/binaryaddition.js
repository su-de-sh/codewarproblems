function addBinary(a, b) {
  let sum = a + b;
  console.log(sum);
  let binStr = "";
  debugger;
  while (sum > 0) {
    let bindigit = sum % 2;
    sum = Math.floor(sum / 2);
    binStr += bindigit;
  }

  binArr = binStr.split("");
  newArr = [];
  for (let i = 0; i < binArr.length; i++) {
    newArr.unshift(binArr[i]);
  }

  return newArr.join("");
}
console.log(addBinary(5, 5));
