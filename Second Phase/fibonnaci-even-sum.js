function fibonacci(num) {
  var a = 1,
    b = 0,
    temp;

  let sum = 0;
  while (a < num) {
    temp = a;
    if (temp % 2 === 0) {
      sum += temp;
    }

    a = a + b;
    b = temp;
  }

  return sum;
}

console.log(fibonacci(100));
