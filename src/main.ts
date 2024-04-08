const gameBoardHTML = document.querySelectorAll(".numSquare");

const gameBoard = [
  ["", "", "", ""],
  ["", "2", "", ""],
  ["", "", "3", ""],
  ["", "", "", ""],
];

const displayBoard = (gameBoard: any) => {
  for (let index: number = 0; index < 16; index++) {
    let i = Math.floor(index / 4);
    let j = index % 4;

    gameBoardHTML[index].innerHTML = `<h1>${gameBoard[i][j]}</h1>`;
  }
};
displayBoard(gameBoard);

const slideSquaresLeft = (gameBoardSection: any, direction: string) => {
  if (direction == "left") {
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

    return emptyCounter;
  }
};

console.log(slideSquaresLeft(["", "2", "", "2"], "left"));
console.log(slideSquaresLeft(["", "", "", ""], "left"));
console.log(slideSquaresLeft(["2", "2", "2", "2"], "left"));

const slideAllSquaresLeft = (gameBoard: any, direction: string) => {
  const originalBoard = gameBoard.map((arr: any) => {
    return [...arr];
  });

  console.log(`original board is: ${originalBoard}`);

  console.log(`direction is ${direction}`);

  console.log(`final board is: ${finalBoard}`);
};
// slideAllSquares(gameBoard, "right");
