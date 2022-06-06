function narcissistic(value) {
  // Code me to return true or false
  orgNum = value;
  lengthOfNum = String(value).length;
  sum = 0;
  while (value > 0) {
    digit = value % 10;
    sum += Math.pow(digit, lengthOfNum);
    console.log(sum);
    value = Math.floor(value / 10);
  }
  if (sum === orgNum) return true;
  else return false;
}
narcissistic(7);
