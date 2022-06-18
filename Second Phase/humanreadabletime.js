function humanReadable(seconds) {
  let hour = convert(Math.floor(seconds / 3600));
  let minutes = convert(Math.floor((seconds % 3600) / 60));
  let second = convert((seconds % 3600) % 60);

  function convert(num) {
    num = String(num);
    if (num.length < 2) return "0" + num;
    else return num;
  }

  return hour + ":" + minutes + ":" + second;
}

console.log(humanReadable(359999));
