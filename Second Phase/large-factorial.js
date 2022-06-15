// function factorial(n) {
//   // Add some code

//   let prod = 1;
//   for (let i = n; i > 0; i--) {
//     prod *= i;
//   }
//   return String(convert(prod));
// }

// // function convert(n) {
// //   var sign = +n < 0 ? "-" : "",
// //     toStr = n.toString();
// //   if (!/e/i.test(toStr)) {
// //     return n;
// //   }
// //   var [lead, decimal, pow] = n
// //     .toString()
// //     .replace(/^-/, "")
// //     .replace(/^([0-9]+)(e.*)/, "$1.$2")
// //     .split(/e|\./);
// //   return +pow < 0
// //     ? sign +
// //         "0." +
// //         "0".repeat(Math.max(Math.abs(pow) - 1 || 0, 0)) +
// //         lead +
// //         decimal
// //     : sign +
// //         lead +
// //         (+pow >= decimal.length
// //           ? decimal + "0".repeat(Math.max(+pow - decimal.length || 0, 0))
// //           : decimal.slice(0, +pow) + "." + decimal.slice(+pow));
// // }
// // // function convertToNum(largeNum) {
// // //   let myFactorialNumber = [];
// // //   while (largeNum > 0) {
// // //     rem = largeNum % 10;
// // //     myFactorialNumber.unshift(rem);
// // //     largeNum = Math.floor(largeNum / 10);
// // //   }
// // //   let myFactorialString = "";
// // //   for (let i = 0; i < myFactorialNumber.length; i++) {
// // //     myFactorialString += myFactorialNumber[i];
// // //   }

// // //   return myFactorialString;
// // // }

// console.log(factorial(25));

function factorial(num) {
  let res = new Array(500);

  res[0] = 1;
  let res_size = 1;

  for (let i = 2; i <= num; i++) {
    res_size = multiply(i, res, res_size);
  }

  let myFactorialNumber = "";
  for (let i = res_size - 1; i >= 0; i--) myFactorialNumber += res[i];

  return myFactorialNumber;
}

function multiply(x, res, res_size) {
  let carry = 0;

  for (let i = 0; i < res_size; i++) {
    let prod = res[i] * x + carry;

    res[i] = prod % 10;

    carry = Math.floor(prod / 10);
  }

  while (carry) {
    res[res_size] = carry % 10;
    carry = Math.floor(carry / 10);
    res_size++;
  }
  return res_size;
}

console.log(factorial(25));
