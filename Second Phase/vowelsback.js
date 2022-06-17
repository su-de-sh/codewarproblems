function vowelBack(s) {
  let alphabets = "abcdefghijklmnopqrstuvwxyz";
  let vowels = ["a", "e", "i", "o", "u"];
  let code = ["c", "o", "d", "e"];
  return s
    .split("")
    .map((n) => {
      if (n === "c" || n === "o") {
        return alphabets[alphabets.indexOf(n) - 1];
      }
      if (n === "d") return alphabets[alphabets.indexOf(n) - 3];
      if (n === "e") return alphabets[alphabets.indexOf(n) - 4];

      if (vowels.includes(n)) {
        //   console.log(n);
        //   console.log(alphabets.indexOf(n));

        if (alphabets.indexOf(n) - 5 + 1 >= 0) {
          let translated = alphabets[alphabets.indexOf(n) - 5];
          return code.includes(translated) ? n : translated;
        } else {
          let translated =
            alphabets[alphabets.length + (alphabets.indexOf(n) - 5)];
          return code.includes(translated) ? n : translated;
        }
      } else {
        if (alphabets.indexOf(n) + 9 < alphabets.length) {
          let translated = alphabets[alphabets.indexOf(n) + 9];
          return code.includes(translated) ? n : translated;
        } else {
          let translated =
            alphabets[alphabets.indexOf(n) + 9 - alphabets.length];
          return code.includes(translated) ? n : translated;
        }
      }
    })
    .join("");
}

console.log(vowelBack("returnofthespacecamel"));
//aatpawnftqabyvbabvvau
