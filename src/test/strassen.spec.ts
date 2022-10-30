import { test, expect } from "vitest";
import { strassen } from "../strassen";

test("strassen", () => {
  expect(
    strassen(
      [
        [1, 2],
        [3, 4],
      ],
      [
        [1, 2],
        [3, 4],
      ]
    )
  ).toEqual([
    [7, 10],
    [15, 22],
  ]);

  // math explication of the algorithm
  // https://en.wikipedia.org/wiki/Strassen_algorithm#Example
});
