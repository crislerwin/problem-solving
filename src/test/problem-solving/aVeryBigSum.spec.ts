import { test, expect } from "vitest";
import { aVeryBigSum } from "../../problem-solving/aVeryBigSum";
test("A very big sum", () => {
  expect(
    aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005])
  ).toBe(5000000015);
});
