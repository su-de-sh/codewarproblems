function comp(array1, array2) {
  let isTrue = false;
  debugger;
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (Math.pow(array1[i], 2) === array2[j]) {
        isTrue = true;
        break;
      }
    }
  }

  if (isTrue) return true;
  else return false;
}

a = [121, 144, 19, 161, 19, 144, 19, 11];
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];
console.log(comp(a, b));
