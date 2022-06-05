function duplicateEncode(word) {
  word = word.toLowerCase();
  let count = 0;
  let finalString = "";
  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < word.length; j++) {
      if (word[i] === word[j]) {
        count++;
        console.log(count);
      }
    }
    if (count === 1) {
      finalString += "(";
      count = 0;
    } else {
      count = 0;
      finalString += ")";
    }
  }
  console.log(finalString);
}

duplicateEncode("sudesh");
