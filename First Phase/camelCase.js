String.prototype.camelCase = function () {
  //your code here
  console.log(this);
  if (this == "") return "";
  finalStr = "";
  words = this.split(" ");
  console.log(words);
  for (let i = 0; i < words.length; i++) {
    if (words[i] === "") {
      continue;
    }
    word = words[i];
    finalStr += word[0].toUpperCase() + word.slice(1, word.length);
  }

  return finalStr;
};

console.log("dfsajdf ".camelCase());
