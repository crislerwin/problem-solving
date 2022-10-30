import { test, expect } from "vitest";
import { compareTriplets } from "../../problem-solving/compareTriplets";

test("Compare triplets", () => {
  expect(compareTriplets([5, 6, 7], [3, 6, 10])).toEqual([1, 1]);
  expect(compareTriplets([17, 28, 30], [99, 16, 8])).toEqual([2, 1]);
});
