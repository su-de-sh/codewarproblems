function removeZeros(array) {
  console.log(array);
  let isZero = false;
  for (let i = 0; i < array.length; i++) {
    if (Number(array[i]) === 0 && array[i] !== null && array[i] !== false) {
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

      let zero = mySplice(array, i, 1);
      //   console.log("zero" + typeof zero[0] + zero[0]);
      //   console.log(i);
      array[array.length] = zero[0];
      //console.log(array);
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
    requiredArray[requiredArray.length] = array[i]; // .push implemented without .push method
  }
  if (word) {
    requiredArray[requiredArray.length](word);
  }
  for (let i = startIdx; i < startIdx + deleteCount; i++) {
    deletedArray[deletedArray.length] = array[i];
  }
  for (let i = startIdx + deleteCount; i < array.length; i++) {
    requiredArray[requiredArray.length] = array[i];
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
