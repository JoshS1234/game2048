import {
  slideSquaresLeft,
  crunchSquaresLeft,
  slideSquaresRight,
  crunchSquaresRight,
  transposeGameboard,
  slideAndCrunchAllSquaresLeft,
  slideAndCrunchAllSquaresRight,
  slideAndCrunchAllSquaresUp,
  slideAndCrunchAllSquaresDown,
} from "./Typescript/game";

describe("slideSquaresLeft", () => {
  it("should return an array of strings, that has length 4", () => {
    const result = slideSquaresLeft(["", "2", "", "2"]);
    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBe(4);
  });

  it("should not mutate the original array", () => {
    const originalArray = ["", "2", "", "2"];
    const originalArray_copy = [...originalArray];
    slideSquaresLeft(originalArray);
    expect(originalArray).toEqual(originalArray_copy);
  });

  it("should correctly slide numbers to the left, and leave empty strings on the right", () => {
    const result = slideSquaresLeft(["", "2", "", "2"]);
    expect(result).toEqual(["2", "2", "", ""]);
  });

  it("should not change if the array is already full of numbers (non-matching)", () => {
    const originalArray = ["4", "2", "4", "2"];
    const originalArray_copy = [...originalArray];

    const result = slideSquaresLeft(originalArray);
    expect(result).toEqual(originalArray_copy);
  });

  it("should not change if the array is empty", () => {
    const originalArray = ["", "", "", ""];
    const originalArray_copy = [...originalArray];
    const result = slideSquaresLeft(originalArray);
    expect(result).toEqual(originalArray_copy);
  });
});

describe("crunchSquaresLeft", () => {
  it("should return an array of strings, that has length 4", () => {
    const result = crunchSquaresLeft(["", "", "", ""]);
    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBe(4);
  });

  it("should not mutate the original array", () => {
    const originalArray = ["2", "2", "", ""];
    const originalArray_copy = [...originalArray];
    crunchSquaresLeft(originalArray);
    expect(originalArray).toEqual(originalArray_copy);
  });

  it("should return [``,``,``,``] if passed an empty array", () => {
    const originalArray = ["", "", "", ""];
    const result = crunchSquaresLeft(originalArray);
    expect(result).toEqual(["", "", "", ""]);
  });

  it("should correctly calculate cases with matchBool [0,0,0]", () => {
    const originalArray = ["2", "4", "8", "16"];
    const result = crunchSquaresLeft(originalArray);
    expect(result).toEqual(["2", "4", "8", "16"]);

    const originalArray2 = ["2", "4", "8", ""];
    const result2 = crunchSquaresLeft(originalArray2);
    expect(result2).toEqual(["2", "4", "8", ""]);
  });

  it("should correctly calculate cases with matchBool [1,0,0]", () => {
    const originalArray = ["2", "2", "8", "16"];
    const result = crunchSquaresLeft(originalArray);
    expect(result).toEqual(["4", "8", "16", ""]);

    const originalArray2 = ["2", "2", "8", ""];
    const result2 = crunchSquaresLeft(originalArray2);
    expect(result2).toEqual(["4", "8", "", ""]);
  });

  it("should correctly calculate cases with matchBool [0,1,0]", () => {
    const originalArray = ["2", "4", "4", "16"];
    const result = crunchSquaresLeft(originalArray);
    expect(result).toEqual(["2", "8", "16", ""]);

    const originalArray2 = ["2", "4", "4", ""];
    const result2 = crunchSquaresLeft(originalArray2);
    expect(result2).toEqual(["2", "8", "", ""]);
  });

  it("should correctly calculate cases with matchBool [1,1,0]", () => {
    const originalArray = ["2", "2", "2", "16"];
    const result = crunchSquaresLeft(originalArray);
    expect(result).toEqual(["4", "2", "16", ""]);

    const originalArray2 = ["4", "4", "4", ""];
    const result2 = crunchSquaresLeft(originalArray2);
    expect(result2).toEqual(["8", "4", "", ""]);
  });

  it("should correctly calculate cases with matchBool [0,0,1]", () => {
    const originalArray = ["2", "4", "8", "8"];
    const result = crunchSquaresLeft(originalArray);
    expect(result).toEqual(["2", "4", "16", ""]);

    const originalArray2 = ["2", "4", "", ""];
    const result2 = crunchSquaresLeft(originalArray2);
    expect(result2).toEqual(["2", "4", "", ""]);
  });

  it("should correctly calculate cases with matchBool [1,0,1]", () => {
    const originalArray = ["2", "2", "8", "8"];
    const result = crunchSquaresLeft(originalArray);
    expect(result).toEqual(["4", "16", "", ""]);

    const originalArray2 = ["2", "2", "", ""];
    const result2 = crunchSquaresLeft(originalArray2);
    expect(result2).toEqual(["4", "", "", ""]);
  });

  it("should correctly calculate cases with matchBool [0,1,1]", () => {
    const originalArray = ["2", "8", "8", "8"];
    const result = crunchSquaresLeft(originalArray);
    expect(result).toEqual(["2", "16", "8", ""]);

    const originalArray2 = ["2", "", "", ""];
    const result2 = crunchSquaresLeft(originalArray2);
    expect(result2).toEqual(["2", "", "", ""]);
  });

  it("should correctly calculate cases with matchBool [1,1,1]", () => {
    const originalArray = ["2", "2", "8", "8"];
    const result = crunchSquaresLeft(originalArray);
    expect(result).toEqual(["4", "16", "", ""]);

    const originalArray2 = ["2", "2", "2", "2"];
    const result2 = crunchSquaresLeft(originalArray2);
    expect(result2).toEqual(["4", "4", "", ""]);

    const originalArray3 = ["", "", "", ""];
    const result3 = crunchSquaresLeft(originalArray3);
    expect(result3).toEqual(["", "", "", ""]);
  });
});

describe("slideSquaresRight", () => {
  it("should return an array of strings, that has length 4", () => {
    const result = slideSquaresRight(["", "2", "", "2"]);
    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBe(4);
  });

  it("should not mutate the original array", () => {
    const originalArray = ["", "2", "", "2"];
    const originalArray_copy = [...originalArray];
    slideSquaresRight(originalArray);
    expect(originalArray).toEqual(originalArray_copy);
  });

  it("should correctly slide numbers to the left, and leave empty strings on the right", () => {
    const result = slideSquaresRight(["", "2", "", "2"]);
    expect(result).toEqual(["", "", "2", "2"]);
  });

  it("should not change if the array is already full of numbers (non-matching)", () => {
    const originalArray = ["4", "2", "4", "2"];
    const originalArray_copy = [...originalArray];

    const result = slideSquaresRight(originalArray);
    expect(result).toEqual(originalArray_copy);
  });

  it("should not change if the array is empty", () => {
    const originalArray = ["", "", "", ""];
    const originalArray_copy = [...originalArray];
    const result = slideSquaresRight(originalArray);
    expect(result).toEqual(originalArray_copy);
  });
});

describe("crunchSquaresRight", () => {
  it("should return an array of strings, that has length 4", () => {
    const result = crunchSquaresRight(["", "", "", ""]);
    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBe(4);
  });

  it("should not mutate the original array", () => {
    const originalArray = ["2", "2", "", ""];
    const originalArray_copy = [...originalArray];
    crunchSquaresRight(originalArray);
    expect(originalArray).toEqual(originalArray_copy);
  });

  it("should return [``,``,``,``] if passed an empty array", () => {
    const originalArray = ["", "", "", ""];
    const result = crunchSquaresRight(originalArray);
    expect(result).toEqual(["", "", "", ""]);
  });

  it("should correctly calculate cases with matchBool [0,0,0]", () => {
    const originalArray = ["2", "4", "8", "16"];
    const result = crunchSquaresRight(originalArray);
    expect(result).toEqual(["2", "4", "8", "16"]);

    const originalArray2 = ["", "2", "4", "8"];
    const result2 = crunchSquaresRight(originalArray2);
    expect(result2).toEqual(["", "2", "4", "8"]);
  });

  it("should correctly calculate cases with matchBool [1,0,0]", () => {
    const originalArray = ["2", "2", "8", "16"];
    const result = crunchSquaresRight(originalArray);
    expect(result).toEqual(["", "4", "8", "16"]);

    const originalArray2 = ["", "", "2", "8"];
    const result2 = crunchSquaresRight(originalArray2);
    expect(result2).toEqual(["", "", "2", "8"]);
  });

  it("should correctly calculate cases with matchBool [0,1,0]", () => {
    const originalArray = ["2", "4", "4", "16"];
    const result = crunchSquaresRight(originalArray);
    expect(result).toEqual(["", "2", "8", "16"]);

    const originalArray2 = ["", "4", "4", "2"];
    const result2 = crunchSquaresRight(originalArray2);
    expect(result2).toEqual(["", "", "8", "2"]);
  });

  it("should correctly calculate cases with matchBool [1,1,0]", () => {
    const originalArray = ["2", "2", "2", "16"];
    const result = crunchSquaresRight(originalArray);
    expect(result).toEqual(["", "2", "4", "16"]);

    const originalArray2 = ["4", "4", "4", "2"];
    const result2 = crunchSquaresRight(originalArray2);
    expect(result2).toEqual(["", "4", "8", "2"]);
  });

  it("should correctly calculate cases with matchBool [0,0,1]", () => {
    const originalArray = ["2", "4", "8", "8"];
    const result = crunchSquaresRight(originalArray);
    expect(result).toEqual(["", "2", "4", "16"]);

    const originalArray2 = ["", "", "2", "4"];
    const result2 = crunchSquaresRight(originalArray2);
    expect(result2).toEqual(["", "", "2", "4"]);
  });

  it("should correctly calculate cases with matchBool [1,0,1]", () => {
    const originalArray = ["2", "2", "8", "8"];
    const result = crunchSquaresRight(originalArray);
    expect(result).toEqual(["", "", "4", "16"]);

    const originalArray2 = ["", "", "2", "2"];
    const result2 = crunchSquaresRight(originalArray2);
    expect(result2).toEqual(["", "", "", "4"]);
  });

  it("should correctly calculate cases with matchBool [0,1,1]", () => {
    const originalArray = ["2", "8", "8", "8"];
    const result = crunchSquaresRight(originalArray);
    expect(result).toEqual(["", "2", "8", "16"]);

    const originalArray2 = ["", "2", "2", "2"];
    const result2 = crunchSquaresRight(originalArray2);
    expect(result2).toEqual(["", "", "2", "4"]);
  });

  it("should correctly calculate cases with matchBool [1,1,1]", () => {
    const originalArray = ["2", "2", "8", "8"];
    const result = crunchSquaresRight(originalArray);
    expect(result).toEqual(["", "", "4", "16"]);

    const originalArray2 = ["2", "2", "2", "2"];
    const result2 = crunchSquaresRight(originalArray2);
    expect(result2).toEqual(["", "", "4", "4"]);

    const originalArray3 = ["", "", "", ""];
    const result3 = crunchSquaresRight(originalArray3);
    expect(result3).toEqual(["", "", "", ""]);
  });
});

describe("transposeGameBoard", () => {
  it("transposes gameboard as expected", () => {
    const gameBoard = [
      ["", "", "", ""],
      ["", "2", "", ""],
      ["", "16", "8", ""],
      ["", "32", "", ""],
    ];
    const expectedResult = [
      ["", "", "", ""],
      ["", "2", "16", "32"],
      ["", "", "8", ""],
      ["", "", "", ""],
    ];
    const result = transposeGameboard(gameBoard);
    expect(result).toEqual(expectedResult);
  });
});

describe("slideAndCrunchAllSquaresLeft", () => {
  it("slides left as expected (no merging)", () => {
    const gameBoard = [
      ["", "", "", ""],
      ["", "2", "", ""],
      ["", "16", "8", ""],
      ["8", "32", "2", "8"],
    ];
    const expectedResult = [
      ["", "", "", ""],
      ["2", "", "", ""],
      ["16", "8", "", ""],
      ["8", "32", "2", "8"],
    ];
    const result = slideAndCrunchAllSquaresLeft(gameBoard);
    expect(result).toEqual(expectedResult);
  });

  it("slides left as expected (with merging)", () => {
    const gameBoard = [
      ["", "", "", ""],
      ["", "2", "2", ""],
      ["", "16", "8", "8"],
      ["8", "32", "2", "8"],
    ];
    const expectedResult = [
      ["", "", "", ""],
      ["4", "", "", ""],
      ["16", "16", "", ""],
      ["8", "32", "2", "8"],
    ];
    const result = slideAndCrunchAllSquaresLeft(gameBoard);
    expect(result).toEqual(expectedResult);
  });
});

describe("slideAndCrunchAllSquaresRight", () => {
  it("slides right as expected (no merging)", () => {
    const gameBoard = [
      ["", "", "", ""],
      ["", "2", "", ""],
      ["", "16", "8", ""],
      ["8", "32", "2", "8"],
    ];
    const expectedResult = [
      ["", "", "", ""],
      ["", "", "", "2"],
      ["", "", "16", "8"],
      ["8", "32", "2", "8"],
    ];
    const result = slideAndCrunchAllSquaresRight(gameBoard);
    expect(result).toEqual(expectedResult);
  });

  it("slides left as expected (with merging)", () => {
    const gameBoard = [
      ["", "", "", ""],
      ["", "2", "2", ""],
      ["", "16", "8", "8"],
      ["8", "32", "2", "8"],
    ];
    const expectedResult = [
      ["", "", "", ""],
      ["", "", "", "4"],
      ["", "", "16", "16"],
      ["8", "32", "2", "8"],
    ];
    const result = slideAndCrunchAllSquaresRight(gameBoard);
    expect(result).toEqual(expectedResult);
  });
});

describe("slideAndCrunchAllSquaresUp", () => {
  it("slides up as expected (no merging)", () => {
    const gameBoard = [
      ["", "", "", ""],
      ["", "2", "", ""],
      ["", "16", "8", ""],
      ["8", "32", "2", "8"],
    ];
    const expectedResult = [
      ["8", "2", "8", "8"],
      ["", "16", "2", ""],
      ["", "32", "", ""],
      ["", "", "", ""],
    ];
    const result = slideAndCrunchAllSquaresUp(gameBoard);
    expect(result).toEqual(expectedResult);
  });

  it("slides up as expected (with merging)", () => {
    const gameBoard = [
      ["", "", "", "16"],
      ["8", "2", "2", "16"],
      ["", "16", "2", "16"],
      ["8", "32", "2", "8"],
    ];
    const expectedResult = [
      ["16", "2", "4", "32"],
      ["", "16", "2", "16"],
      ["", "32", "", "8"],
      ["", "", "", ""],
    ];
    const result = slideAndCrunchAllSquaresUp(gameBoard);
    expect(result).toEqual(expectedResult);
  });
});

describe("slideAndCrunchAllSquaresDown", () => {
  it("slides down as expected (no merging + no movement)", () => {
    const gameBoard = [
      ["2", "", "4", ""],
      ["", "2", "", "4"],
      ["", "16", "8", ""],
      ["8", "32", "2", "8"],
    ];
    const expectedResult = [
      ["", "", "", ""],
      ["", "2", "4", ""],
      ["2", "16", "8", "4"],
      ["8", "32", "2", "8"],
    ];

    const result = slideAndCrunchAllSquaresDown(gameBoard);
    expect(result).toEqual(expectedResult);
  });

  it("slides down as expected (no merging + no movement)", () => {
    const gameBoard = [
      ["", "", "", ""],
      ["", "2", "", ""],
      ["", "16", "8", ""],
      ["8", "32", "2", "8"],
    ];
    const expectedResult = [...gameBoard];

    const result = slideAndCrunchAllSquaresDown(gameBoard);
    expect(result).toEqual(expectedResult);
  });

  it("slides down as expected (with merging)", () => {
    const gameBoard = [
      ["", "", "", "16"],
      ["8", "2", "2", "16"],
      ["", "16", "2", "16"],
      ["8", "32", "2", "8"],
    ];
    const expectedResult = [
      ["", "", "", ""],
      ["", "2", "", "16"],
      ["", "16", "2", "32"],
      ["16", "32", "4", "8"],
    ];
    const result = slideAndCrunchAllSquaresDown(gameBoard);
    expect(result).toEqual(expectedResult);
  });
});
