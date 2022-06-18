// function anagrams(word, words) {
//   let map = {};
//   let myArr = [];
//   let matched = false;

//   for (let i = 0; i < word.length; i++) {
//     word[i] in map ? (map[word[i]] += 1) : (map[word[i]] = 1);
//   }
//   words.forEach((w) => {
//     let wordmMap = {};
//     for (let i = 0; i < w.length; i++) {
//       w[i] in wordmMap ? (wordmMap[w[i]] += 1) : (wordmMap[w[i]] = 1);
//     }
//     // console.log(wordmMap);
//     console.log(map);
//     for (keys in wordmMap) {
//       if (!map[keys]) {
//         matched = false;
//         break;
//       }
//       if (map[keys] !== wordmMap[keys]) {
//         matched = false;
//         break;
//       } else {
//         matched = true;
//       }
//     }
//     if (matched) {
//       myArr.push(w);
//     }
//   });
//   return myArr;
// }

// Best way
function anagrams(word, words) {
  return words.filter((n) => {
    return n.split("").sort().join("") === word.split("").sort().join("");
  });
}

console.log(anagrams("abba", ["aabb", "abcd", "bbaa", "dada"]));
