function zeros(n) {
  // your code here
  let prod = 1;
  let counter = 0;
  while (n > 0) {
    prod *= n;
    n -= 1;
  }
  strProd = String(prod).split("e+");
  if (strProd[1] === undefined) {
    while (prod % 10 === 0) {
      counter++;
      prod /= prod;
    }
    return counter;
  } else {
    return strProd[1];
  }
}

console.log(zeros(5));
