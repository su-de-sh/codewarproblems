function dirReduc(arr) {
  let newArray = [];
  debugger;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      if (
        (arr[i] === "NORTH" && arr[j] === "SOUTH") ||
        (arr[i] === "SOUTH" && arr[j] === "NORTH") ||
        (arr[i] === "EAST" && arr[j] === "WEST") ||
        (arr[i] === "WEST" && arr[j] === "EAST")
      ) {
        // isEnd = false;
        for (let k = 0; k < arr.length; k++) {
          if (k === i || k === j) continue;
          else {
            newArray.push(arr[k]);
          }
        }
        console.log(newArray);
        dirReduc(newArray);
      }
    }
  }
  return arr;
}

console.log(
  dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
);
