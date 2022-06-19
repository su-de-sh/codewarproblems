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

  let myString = [];
  let currentCount = 0;

  keys1 = Object.keys(s1map);
  keys2 = Object.keys(s2map);
  for (keys in s2map) {
    if (s1map[keys] && (s1map[keys] > 1 || s2map[keys] > 1)) {
      if (s1map[keys] === s2map[keys]) {
        if (s1map[keys] > currentCount) {
          currentCount = s1map[keys];
          myString.unshift("=:" + keys.repeat(s1map[keys]));
        } else {
          currentCount = s1map[keys];
          if (keys1.indexOf(keys) > keys2.indexOf(keys))
            myString.unshift("=:" + keys.repeat(s1map[keys]));
          else myString.push("=:" + keys.repeat(s1map[keys]));
        }
      } else {
        if (s1map[keys] > s2map[keys]) {
          if (s1map[keys] > currentCount) {
            currentCount = s1map[keys];
            myString.unshift("1:" + keys.repeat(s1map[keys]));
          } else {
            currentCount = s1map[keys];
            myString.push("1:" + keys.repeat(s1map[keys]));
          }
          //   myString.push("1:" + keys.repeat(s1map[keys]));
        } else {
          if (s2map[keys] > currentCount) {
            myString.unshift("2:" + keys.repeat(s2map[keys]));
            currentCount = s2map[keys];
          } else {
            currentCount = s2map[keys];
            myString.push("2:" + keys.repeat(s2map[keys]));
          }
        }
      }
    }
  }
  return myString.join("/");
}
console.log(mix("Are they here", "yes, they are here"));
//2:eeeee/2:yy/=:hh/=:rr
