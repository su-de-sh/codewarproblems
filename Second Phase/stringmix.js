function mix(s1, s2) {
  let s1map = {};
  let s2map = {};

  s1.split("").forEach((element) => {
    let regex = /[, ]/;
    if (element.match(regex)) {
    } else element in s1map ? (s1map[element] += 1) : (s1map[element] = 1);
  });
  s2.split("").forEach((element) => {
    let regex = /[, ]/;
    if (element.match(regex)) {
    } else element in s2map ? (s2map[element] += 1) : (s2map[element] = 1);
  });
  console.log(s1map);
  console.log(s2map);
  let myString = "";
  for (keys in s1map) {
    if (s2map[keys]) {
      if (s1map[keys] > s2map[keys]) {
        myString += "1:" + keys.repeat(s1map[keys]) + "/";
      } else myString += "2:" + keys.repeat(s2map[keys]) + "/";
    }
  }
  return myString;
}
console.log(mix("fljkslkf", "rkjsdfl"));
