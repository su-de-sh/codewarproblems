function getMiddle(s) {
  if (s.length % 2) {
    return s[(s.length - 1) / 2];
  } else return s.slice(s.length / 2 - 1, s.length / 2 + 1);
}

console.log(getMiddle("sudesh"));
