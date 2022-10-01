import { test, expect } from "vitest";
import { diagonalDifference } from "./diagonalDifference";

test("Diagonal difference", () => {
  expect(
    diagonalDifference([
      [11, 2, 4],
      [4, 5, 6],
      [10, 8, -12],
    ])
  ).toBe(15);
});
