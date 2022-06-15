function whoIsWinner(piecesPositionList) {
  let myMap = ["A", "B", "C", "D", "E", "F", "G"];
  let myPositionMap = [];
  let myColorMap = [];
  let myGrid = [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
  ];

  piecesPositionList.forEach(function myFunction(element) {
    myPositionMap.push(myMap.indexOf(element.split("_")[0]));
    myColorMap.push(element.split("_")[1]);
  });
  console.log(myColorMap);

  for (let i = 0; i < myPositionMap.length; i++) {
    let currentRow = myGrid.length - 1;
    if (!myGrid[currentRow][myPositionMap[i]]) {
      myGrid[currentRow][myPositionMap[i]] = myColorMap[i];
    } else {
      while (myGrid[currentRow][myPositionMap[i]]) {
        currentRow -= 1;
      }
      myGrid[currentRow][myPositionMap[i]] = myColorMap[i];
      myGrid.length - 1;
    }
  }

  return myGrid;
}

// Driving code
let array = [
  "A_Red",
  "B_Yellow",
  "A_Red",
  "B_Yellow",
  "A_Red",
  "B_Yellow",
  "G_Red",
  "B_Yellow",
];

console.log(whoIsWinner(array));
