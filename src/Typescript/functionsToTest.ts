export const slideSquaresLeft = (gameBoardSection: any) => {
  let newArr = [];
  let emptyCounter = 0;

  gameBoardSection.forEach((element: string) => {
    if (element) {
      newArr.push(element);
    } else {
      emptyCounter++;
    }
  });
  for (let i: number = 0; i < emptyCounter; i++) {
    newArr.push("");
  }

  return newArr;
};

export const crunchSquaresLeft = (gameBoardSection: any[]): string[] => {
  if (
    gameBoardSection.every((element) => {
      return element == "";
    })
  ) {
    return [...gameBoardSection];
  }

  //create an array to state which adjacent pairs match
  const matchArr = [
    gameBoardSection[0] == gameBoardSection[1],
    gameBoardSection[1] == gameBoardSection[2],
    gameBoardSection[2] == gameBoardSection[3],
  ];

  //this is a function to find the matching elements in this row array
  const checkMatchArrEquality = (matchArr: boolean[], arr: boolean[]) => {
    for (let i: number = 0; i < matchArr.length; i++) {
      if (arr[i] != matchArr[i]) {
        return false;
      }
    }
    return true;
  };

  let newArr = [];
  let sum;
  if (checkMatchArrEquality(matchArr, [false, false, false])) {
    return [...gameBoardSection];
  } else if (checkMatchArrEquality(matchArr, [true, false, false])) {
    sum = String(
      parseFloat(gameBoardSection[0]) + parseFloat(gameBoardSection[1])
    );
    newArr.push(sum);
    newArr.push(gameBoardSection[2]);
    newArr.push(gameBoardSection[3]);
  } else if (checkMatchArrEquality(matchArr, [false, true, false])) {
    newArr.push(gameBoardSection[0]);

    if (gameBoardSection[1] != "") {
      sum = String(
        parseFloat(gameBoardSection[1]) + parseFloat(gameBoardSection[2])
      );
      newArr.push(sum);
      newArr.push(gameBoardSection[3]);
    }
    //don't need an else because it will just fill with 0s after
  } else if (checkMatchArrEquality(matchArr, [true, true, false])) {
    sum = String(
      parseFloat(gameBoardSection[0]) + parseFloat(gameBoardSection[1])
    );
    newArr.push(sum);
    newArr.push(gameBoardSection[2]);
    newArr.push(gameBoardSection[3]);
  } else if (checkMatchArrEquality(matchArr, [false, false, true])) {
    newArr.push(gameBoardSection[0]);
    newArr.push(gameBoardSection[1]);
    if (gameBoardSection[2] != "") {
      sum = String(
        parseFloat(gameBoardSection[2]) + parseFloat(gameBoardSection[3])
      );
      newArr.push(sum);
    }
  } else if (checkMatchArrEquality(matchArr, [true, false, true])) {
    sum = String(
      parseFloat(gameBoardSection[0]) + parseFloat(gameBoardSection[1])
    );
    newArr.push(sum);
    if (gameBoardSection[2] != "") {
      sum = String(
        parseFloat(gameBoardSection[2]) + parseFloat(gameBoardSection[3])
      );
      newArr.push(sum);
    }
  } else if (checkMatchArrEquality(matchArr, [false, true, true])) {
    newArr.push(gameBoardSection[0]);
    if (gameBoardSection[1] != "") {
      sum = String(
        parseFloat(gameBoardSection[1]) + parseFloat(gameBoardSection[2])
      );
      newArr.push(sum);
    }
    newArr.push(gameBoardSection[3]);
  } else if (checkMatchArrEquality(matchArr, [true, true, true])) {
    sum = String(
      parseFloat(gameBoardSection[0]) + parseFloat(gameBoardSection[1])
    );
    newArr.push(sum);
    sum = String(
      parseFloat(gameBoardSection[2]) + parseFloat(gameBoardSection[3])
    );
    newArr.push(sum);
  } else {
    console.log("something went wrong");
    return ["argh"];
  }

  while (newArr.length < 4) {
    newArr.push("");
  }

  return newArr;
};

export const slideSquaresRight = (gameBoardSection: any) => {
  let gameBoardSectionReverse = [...gameBoardSection].reverse();
  return slideSquaresLeft(gameBoardSectionReverse).reverse();
};

export const crunchSquaresRight = (gameBoardSection: any) => {
  let gameBoardSectionReverse = [...gameBoardSection].reverse();
  return crunchSquaresLeft(gameBoardSectionReverse).reverse();
};

export const transposeGameboard = (gameBoard: any[]) => {
  let newGameBoard: any[] = [[], [], [], []];
  for (let i: number = 0; i < gameBoard.length; i++) {
    for (let j: number = 0; j < gameBoard[i].length; j++) {
      newGameBoard[j][i] = gameBoard[i][j];
    }
  }
  return newGameBoard;
};

export const slideAndCrunchAllSquaresLeft = (gameBoard: any[]) => {
  return gameBoard
    .map((row) => {
      return slideSquaresLeft(row);
    })
    .map((row) => {
      return crunchSquaresLeft(row);
    });
};

export const slideAndCrunchAllSquaresRight = (gameBoard: any[]) => {
  return gameBoard
    .map((row) => {
      return slideSquaresRight(row);
    })
    .map((row) => {
      return crunchSquaresRight(row);
    });
};

export const slideAndCrunchAllSquaresUp = (gameBoard: any) => {
  //going up is the same as transposing, going left, then transposing back?
  const rotatedBoard = transposeGameboard([...gameBoard]);
  const newGameboard = transposeGameboard(
    slideAndCrunchAllSquaresLeft(rotatedBoard)
  );
  return newGameboard;
};

export const slideAndCrunchAllSquaresDown = (gameBoard: any) => {
  //going up is the same as transposing, going right, then transposing back?
  const rotatedBoard = transposeGameboard([...gameBoard]);
  const newGameboard = transposeGameboard(
    slideAndCrunchAllSquaresRight(rotatedBoard)
  );
  return newGameboard;
};
