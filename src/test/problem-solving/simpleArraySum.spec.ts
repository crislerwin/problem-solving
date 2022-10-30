import { test, expect } from "vitest";
import { simpleArraySum } from "../../problem-solving/simpleArraySum";

test("should simpleArraySum to compute the sum of the array elements as an integer", () => {
  expect(simpleArraySum([1, 2, 3, 4, 10, 11])).toBe(31);
});
