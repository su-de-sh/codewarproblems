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

    let matchHorizontal = horizontalCheck();
    let matchVertical = verticalCheck();

    if (matchHorizontal) {
      console.log(myGrid);
      console.log(matchHorizontal);
      return matchHorizontal;
    }
    if (matchVertical) {
      console.log(myGrid);
      console.log(matchVertical);
      return matchVertical;
    }
  }

  // console.log(myGrid);
  //CHECK FOR HORIZONTAL
  function horizontalCheck() {
    for (let i = 0; i < myGrid.length; i++) {
      for (let j = 0; j < myGrid[i].length - 3; j++) {
        let myElement = myGrid[i][j];
        if (myElement) {
          if (
            myGrid[i][j] === myGrid[i][j + 1] &&
            myGrid[i][j] === myGrid[i][j + 2] &&
            myGrid[i][j] === myGrid[i][j + 3]
          ) {
            console.log("horizontal match");
            console.log(i);
            console.log(j + 3);
            return myGrid[i][j];
          }
        }
      }
    }
    return 0;
  }
  function verticalCheck() {
    for (let i = 0; i < myGrid.length - 3; i++) {
      for (let j = 0; j < myGrid[i].length; j++) {
        let myElement = myGrid[i][j];
        if (myElement) {
          if (
            myGrid[i][j] === myGrid[i + 1][j] &&
            myGrid[i][j] === myGrid[i + 2][j] &&
            myGrid[i][j] === myGrid[i + 3][j]
          ) {
            console.log("vertical match");
            console.log(i + 3);
            console.log(j);
            return myGrid[i][j];
          }
        }
      }
    }
    return 0;
  }
  // for (let i = myGrid.length - 1; i >= 0; i--) {
  //   for (let j = 0; j < myGrid[i].length; j++) {
  //     let myElement = myGrid[i][j];
  //     if (myElement) {
  //       if (
  //         myGrid[i][j] === myGrid[i + 1][j] &&
  //         myGrid[i][j] === myGrid[i + 2][j] &&
  //         myGrid[i][j] === myGrid[i + 3][j]
  //       ) {
  //         console.log("vertical match");
  //         return myGrid[i][j];
  //       }
  //     }
  //   }
  // }
  // for (let i = myGrid.length - 1; i >= 0; i--) {
  //   for (let j = 0; j < myGrid[i].length - 3; j++) {
  //     let myElement = myGrid[i][j];

  //     if (myElement) {
  //       if (
  //         myGrid[i][j] === myGrid[i + 1][j + 1] &&
  //         myGrid[i][j] === myGrid[i + 2][j + 2] &&
  //         myGrid[i][j] === myGrid[i + 3][j + 3]
  //       ) {
  //         console.log("diagonal match");
  //         return myGrid[i][j];
  //       }
  //     }
  //   }
  // }
  // for (let i = myGrid.length - 1; i >= 0; i--) {
  //   for (let j = 0; j < myGrid[i].length - 3; j++) {
  //     let myElement = myGrid[i][j];

  //     if (myElement) {
  //       if (
  //         myGrid[i][j] === myGrid[i - 1][j + 1] &&
  //         myGrid[i][j] === myGrid[i - 2][j + 2] &&
  //         myGrid[i][j] === myGrid[i - 3][j + 3]
  //       ) {
  //         console.log("diagonal match");
  //         return myGrid[i][j];
  //       }
  //     }
  //   }
  // }
  // return "Draw";
}

// Driving code
let array = [
  "C_Yellow",
  "B_Red",
  "B_Yellow",
  "E_Red",
  "D_Yellow",
  "G_Red",
  "B_Yellow",
  "G_Red",
  "E_Yellow",
  "A_Red",
  "G_Yellow",
  "C_Red",
  "A_Yellow",
  "A_Red",
  "D_Yellow",
  "B_Red",
  "G_Yellow",
  "A_Red",
  "F_Yellow",
  "B_Red",
  "D_Yellow",
  "A_Red",
  "F_Yellow",
  "F_Red",
  "B_Yellow",
  "F_Red",
  "F_Yellow",
  "G_Red",
  "A_Yellow",
  "F_Red",
  "C_Yellow",
  "C_Red",
  "G_Yellow",
  "C_Red",
  "D_Yellow",
  "D_Red",
  "E_Yellow",
  "D_Red",
  "E_Yellow",
  "C_Red",
  "E_Yellow",
  "E_Red",
];

whoIsWinner(array);
