function removeZeros(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      let zero = mySplice(array, i, 1);

      array.push(zero[0]);
      console.log(array);
      i = -1;
    }
  }

  return array;
}

console.log(removeZeros([7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]));

function mySplice(array, startIdx, deleteCount, word) {
  const deletedArray = [];
  const requiredArray = [];

  for (let i = 0; i < startIdx; i++) {
    requiredArray.push(array[i]);
  }
  if (word) {
    requiredArray.push(word);
  }
  for (let i = startIdx; i < startIdx + deleteCount; i++) {
    deletedArray.push(array[i]);
  }
  for (let i = startIdx + deleteCount; i < array.length; i++) {
    requiredArray.push(array[i]);
  }

  while (array.length) {
    array.pop();
  }

  for (let i = 0; i < requiredArray.length; i++) {
    array.push(requiredArray[i]);
  }

  return deletedArray;
}
