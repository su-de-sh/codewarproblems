function removeZeros(array) {
  console.log(array);
  let isZero = false;
  for (let i = 0; i < array.length; i++) {
    if (Number(array[i]) === 0 && array[i] !== null && array[i] !== false) {
      let zero = mySplice(array, i, 1);
      //   console.log("zero" + typeof zero[0] + zero[0]);
      //   console.log(i);
      array.push(zero[0]);
      //console.log(array);
      for (let j = i; j < array.length; j++) {
        if (Number(array[j]) !== 0) {
          isZero = false;
          break;
        } else {
          isZero = true;
        }
      }
      if (isZero) {
        break;
      }
      i = i - 1;
    }
  }
  console.log(array);
  return array;
}

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
removeZeros([1, null, "5", "0", "2", 0, 0, 8, 6, null, false]);
