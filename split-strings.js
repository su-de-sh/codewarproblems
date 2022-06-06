function solution(str) {
  resultArray = [];

  for (let i = 0; i < str.length; i += 2) {
    let pairs;
    // console.log(str[i + 1]);
    if (str[i + 1] === undefined) {
      pairs = str[i] + "_";
    } else {
      pairs = str[i] + str[i + 1];
    }

    resultArray.push(pairs);
  }
  return resultArray;
}
console.log(solution("abcde"));
