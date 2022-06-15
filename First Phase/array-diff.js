function arrayDiff(a, b) {
  if (b.length === 0) return a;
  result = [];

  debugger;
  for (let i = 0; i < a.length; i++) {
    let isPresent = false;
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        isPresent = true;

        break;
      }
    }
    if (!isPresent) {
      result.push(a[i]);
    }
  }
  return result;
}

console.log(arrayDiff([1, 2, 3, 4], [1, 2]));
