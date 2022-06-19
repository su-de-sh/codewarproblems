function nextBigger(n) {
  let numStr = String(n);

  let numOnePos;
  let numTwoPos;
  for (let i = numStr.length - 2; i >= 0; i--) {
    if (Number(numStr[i]) < Number(numStr[i + 1])) {
      numOnePos = i;
      break;
    }
  }
  if (numOnePos === undefined) return -1;
  //   console.log("i will get printed");
  let max = 0;
  for (let j = numOnePos + 1; j < numStr.length; j++) {
    if (
      Number(numStr[j] >= max) &&
      Number(numStr[j] > Number(numStr[numOnePos]))
    ) {
      max = Number(numStr[j]);
      numTwoPos = j;
    }
  }
  //  TO SWAP THE VALUE
  let interArray = [];
  for (let k = 0; k < numStr.length; k++) {
    interArray.push(numStr[k]);
  }

  let temp = interArray[numOnePos];
  interArray[numOnePos] = interArray[numTwoPos];
  interArray[numTwoPos] = temp;
  //   let intStr = "";
  //   for (let l = 0; l < interArray.length; l++) {
  //     intStr += interArray[l];
  //   }
  //   console.log(intStr);
  let frontArray = interArray.slice(0, numOnePos + 1);
  let sortedArray = interArray.slice(numOnePos + 1).sort((a, b) => a - b);

  for (let i = 0; i < sortedArray.length; i++) {
    frontArray.push(sortedArray[i]);
  }
  //   console.log(frontArray);
  //   console.log(sortedArray);
  let finalString = "";
  for (let i = 0; i < frontArray.length; i++) {
    finalString += frontArray[i];
  }

  finalNumber = Number(finalString);

  if (String(finalNumber).length !== numStr.length) return -1;
  return Number(finalString);
}

console.log(nextBigger(1207));
