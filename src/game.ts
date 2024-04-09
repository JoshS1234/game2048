import confetti from "canvas-confetti";
///////////////////HTML inputs////////////////////////////

console.log(document.body.children[0].className == "game");

let gameBoardContainerHTML = document.querySelector(".gameBoard");
let gameBoardHTML = document.querySelectorAll(".numSquare");
const scoreBox = document.querySelector(".scoreBoard__scoreBox");
const restartButton = document.querySelector(
  ".scoreBoard__restart-button"
) as HTMLInputElement;

const leftButton = document.querySelector(
  ".controller__direction-button--left"
);
const rightButton = document.querySelector(
  ".controller__direction-button--right"
);
const upButton = document.querySelector(".controller__direction-button--up");
const downButton = document.querySelector(
  ".controller__direction-button--down"
);

if (!gameBoardHTML) {
  throw new Error("gameboard issue");
} else if (!gameBoardContainerHTML) {
  throw new Error("gameboard container issue");
} else if (!scoreBox) {
  throw new Error("scoreBox issue");
} else if (!leftButton) {
  throw new Error("left button issue");
} else if (!rightButton) {
  throw new Error("left button issue");
} else if (!upButton) {
  throw new Error("left button issue");
} else if (!downButton) {
  throw new Error("left button issue");
}

////////////////////////GAME LOGIC///////////////////////////////////

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

const calculateScore = (gameBoard: any[]) => {
  let total: number = 0;
  for (let i: number = 0; i < gameBoard.length; i++) {
    for (let j: number = 0; j < gameBoard[i].length; j++) {
      if (gameBoard[i][j] != "") {
        if (parseFloat(gameBoard[i][j]) >= 2048) {
          hasWon = true;
        }
        total += parseFloat(gameBoard[i][j]);
      }
    }
  }
  return String(total);
};

const addNewRandomSquare = (gameBoard: any[]) => {
  const newGameBoard = [...gameBoard];
  let emptyTracker: any[] = [];
  for (let i: number = 0; i < gameBoard.length; i++) {
    for (let j: number = 0; j < gameBoard[i].length; j++) {
      if (gameBoard[i][j] == "") {
        emptyTracker.push([i, j]);
      }
    }
  }

  const whatNumber = Math.random() > 0.5 ? "4" : "2";
  const squareCoords =
    emptyTracker[Math.floor(Math.random() * emptyTracker.length)];

  newGameBoard[squareCoords[0]][squareCoords[1]] = whatNumber;
  return newGameBoard;
};

const startGame = () => {
  const gameBoard = [
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
  ];
  // const gameBoard = [
  //   ["1024", "1024", "32", ""],
  //   ["2", "4", "2", "8"],
  //   ["512", "256", "32", "4"],
  //   ["8", "2", "512", ""],
  // ];
  addNewRandomSquare(gameBoard);
  addNewRandomSquare(gameBoard);
  return gameBoard;
};

const canMoveDirection = (gameBoard: any[], direction: string) => {
  if (direction == "left") {
    const afterLeftMove = slideAndCrunchAllSquaresLeft(gameBoard);
    console.log(afterLeftMove);
    console.log(gameBoard);
    console.log(!(JSON.stringify(afterLeftMove) == JSON.stringify(gameBoard)));
    return !(JSON.stringify(afterLeftMove) == JSON.stringify(gameBoard));
  } else if (direction == "right") {
    const afterRightMove = slideAndCrunchAllSquaresRight(gameBoard);
    return !(JSON.stringify(afterRightMove) == JSON.stringify(gameBoard));
  } else if (direction == "up") {
    const afterUpMove = slideAndCrunchAllSquaresUp(gameBoard);
    return !(JSON.stringify(afterUpMove) == JSON.stringify(gameBoard));
  } else if (direction == "down") {
    const afterDownMove = slideAndCrunchAllSquaresDown(gameBoard);
    return !(JSON.stringify(afterDownMove) == JSON.stringify(gameBoard));
  }
};

const checkLose = (gameBoard: any[]) => {
  const afterLeftMove = slideAndCrunchAllSquaresLeft(gameBoard);
  const afterRightMove = slideAndCrunchAllSquaresRight(gameBoard);
  const afterUpMove = slideAndCrunchAllSquaresUp(gameBoard);
  const afterDownMove = slideAndCrunchAllSquaresDown(gameBoard);

  if (JSON.stringify(afterLeftMove) == JSON.stringify(gameBoard)) {
    if (JSON.stringify(afterRightMove) == JSON.stringify(gameBoard)) {
      if (JSON.stringify(afterUpMove) == JSON.stringify(gameBoard)) {
        if (JSON.stringify(afterDownMove) == JSON.stringify(gameBoard)) {
          console.log("can't move any direction");
          return true;
        }
      }
    }
  }
  return false;
};

const isBoardFull = (gameBoard: any[]) => {
  let fullCounter: number = 0;
  for (let i: number = 0; i < gameBoard.length; i++) {
    for (let j: number = 0; j < gameBoard[i].length; j++) {
      if (gameBoard[i][j] != "") {
        fullCounter++;
      }
    }
  }
  return fullCounter == 16;
};

//////////////////////////HTML Handle functions//////////////////////////////////////

const displayBoard = (gameBoard: any) => {
  for (let index: number = 0; index < 16; index++) {
    let i = Math.floor(index / 4);
    let j = index % 4;

    gameBoardHTML[index].innerHTML = `<h1>${gameBoard[i][j]}</h1>`;
    if (gameBoard[i][j] != "") {
      gameBoardHTML[
        index
      ].className = `numSquare numSquare--${gameBoard[i][j]}`;
    } else {
      gameBoardHTML[index].className = `numSquare`;
    }
  }
};

const handleUpdateScore = (gameBoard: any[]) => {
  const score = calculateScore(gameBoard);
  if (hasWon) {
    scoreBox.textContent = `You win: ${score}`;
    if (winMove) {
      confetti();
      winMove = false;
    }
  } else {
    scoreBox.textContent = `Score: ${score}`;
  }
};

const handleLose = () => {
  const score = calculateScore(gameBoard);
  scoreBox.textContent = `Game over: ${score}`;
  restartButton.value = "Play again?";
};

const handleLeftClick = () => {
  if (canMoveDirection(gameBoard, "left")) {
    gameBoard = slideAndCrunchAllSquaresLeft(gameBoard);
    addNewRandomSquare(gameBoard);
  } else {
    if (!isBoardFull(gameBoard)) {
    }
  }
  displayBoard(gameBoard);
  handleUpdateScore(gameBoard);

  if (checkLose(gameBoard)) {
    handleLose();
  }
};

const handleRightClick = () => {
  if (canMoveDirection(gameBoard, "right")) {
    gameBoard = slideAndCrunchAllSquaresRight(gameBoard);
    addNewRandomSquare(gameBoard);
  } else {
    if (!isBoardFull(gameBoard)) {
    }
  }
  displayBoard(gameBoard);
  handleUpdateScore(gameBoard);

  if (checkLose(gameBoard)) {
    handleLose();
  }
};

const handleUpClick = () => {
  if (canMoveDirection(gameBoard, "up")) {
    gameBoard = slideAndCrunchAllSquaresUp(gameBoard);
    addNewRandomSquare(gameBoard);
  } else {
    if (!isBoardFull(gameBoard)) {
    }
  }
  displayBoard(gameBoard);
  handleUpdateScore(gameBoard);

  if (checkLose(gameBoard)) {
    handleLose();
  }
};

const handleDownClick = () => {
  if (canMoveDirection(gameBoard, "down")) {
    gameBoard = slideAndCrunchAllSquaresDown(gameBoard);
    addNewRandomSquare(gameBoard);
  } else {
    if (!isBoardFull(gameBoard)) {
    }
  }
  displayBoard(gameBoard);
  handleUpdateScore(gameBoard);

  if (checkLose(gameBoard)) {
    handleLose();
  }
};
const handleRestart = () => {
  gameBoard = startGame();
  displayBoard(gameBoard);
  handleUpdateScore(gameBoard);
  restartButton.value = "Restart";
  hasWon = false;
  winMove = true;
};

leftButton.addEventListener("click", handleLeftClick);
rightButton.addEventListener("click", handleRightClick);
upButton.addEventListener("click", handleUpClick);
downButton.addEventListener("click", handleDownClick);
restartButton?.addEventListener("click", handleRestart);

///////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////Game running//////////////////////////////////////

//start game
let gameBoard = startGame();
let hasWon = false;
let winMove = true;

displayBoard(gameBoard);
handleUpdateScore(gameBoard);
