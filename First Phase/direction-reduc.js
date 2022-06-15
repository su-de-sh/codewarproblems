function dirReduc(directionArray) {
  debugger;
  for (let i = 0; i < directionArray.length; i++) {
    if (
      (directionArray[i] === "NORTH" && directionArray[i + 1] === "SOUTH") ||
      (directionArray[i] === "SOUTH" && directionArray[i + 1] === "NORTH") ||
      (directionArray[i] === "EAST" && directionArray[i + 1] === "WEST") ||
      (directionArray[i] === "WEST" && directionArray[i + 1] === "EAST")
    ) {
      directionArray.splice(i + 1, 1);
      directionArray.splice(i, 1);
      i = -1;

      //   break;
    }
  }

  return directionArray;
}
console.log(
  dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
);
