function sumStrings(a, b) {
  let num1 = BigInt(a);
  let num2 = BigInt(b);

  let sum = num1 + num2;

  return String(num1 + num2);
}

console.log(sumStrings("12345678909875432134567", "4567876545432"));
