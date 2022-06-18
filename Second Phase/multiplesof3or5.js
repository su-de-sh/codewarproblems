function solution(number) {
  if (number <= 0) return 0;
  number -= 1;
  let myArray = [];
  while (number > 0) {
    if (number % 3 === 0 || number % 5 === 0) {
      myArray.push(number);
    }
    number--;
  }

  if (!myArray.length) return 0;
  return myArray.reduce((a, b) => a + b);
}
