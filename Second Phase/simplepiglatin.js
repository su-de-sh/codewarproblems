function pigIt(str) {
  const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
  let isPuncPresent = regex.test(str);
  console.log(isPuncPresent);
  if (isPuncPresent) {
    return str
      .split(" ")
      .map((a) => {
        return a.slice(1, a.length) + a[0] + "ay";
      })
      .join(" ")
      .slice(0, -2);
  } else {
    return str
      .split(" ")
      .map((a) => {
        return a.slice(1, a.length) + a[0] + "ay";
      })
      .join(" ");
  }
}

console.log(pigIt("Pig latin is cool")); // igPay atinlay siay oolcay
