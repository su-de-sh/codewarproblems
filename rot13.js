function rot13(str) {
  let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let smallAlphabets = "abcdefghijklmnopqrstuvwxyz";
  let myStr = "";
  let mapp = {};

  for (let i = 0; i < alphabets.length; i++) {
    let jumpedIndex = i + 13;

    if (jumpedIndex >= alphabets.length) {
      jumpedIndex = 13 - (alphabets.length - i);
    }
    mapp[alphabets[i]] = alphabets[jumpedIndex];
  }

  for (let j = 0; j < smallAlphabets.length; j++) {
    let jumpedIndex = j + 13;

    if (jumpedIndex >= smallAlphabets.length) {
      jumpedIndex = 13 - (smallAlphabets.length - j);
    }
    mapp[smallAlphabets[j]] = smallAlphabets[jumpedIndex];
  }

  for (let k = 0; k < str.length; k++) {
    if (str[k] in mapp) {
      myStr += mapp[str[k]];
    } else myStr += str[k];
  }
  return myStr;
}
console.log(rot13("This is my first ROT13 excercise!"));
// Guvf vf zl svefg EBG13 rkprepvfr!
