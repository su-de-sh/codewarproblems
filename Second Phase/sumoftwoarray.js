function arrayPlusArray(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    arr1[i] += arr2[i];
  }
  return arr1.reduce((a, b) => a + b);
}

console.log(arrayPlusArray([1, 2, 3], [2, 3, 4]));
