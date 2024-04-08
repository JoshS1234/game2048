import { slideSquaresLeft, crunchSquaresLeft, slideSquaresRight } from "./main";

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

    const originalArray2 = ["2", "2", "", ""];
    const result2 = crunchSquaresLeft(originalArray2);
    expect(result2).toEqual(["4", "", "", ""]);

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
