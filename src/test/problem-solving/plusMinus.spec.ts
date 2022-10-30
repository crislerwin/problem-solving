import { test, expect } from "vitest";
import { plusMinus } from "../../problem-solving/plusMinus";

test("plusMinus", () => {
  expect(plusMinus([1, 1, 0, -1, -1])).toEqual({
    positive: 0.4,
    negative: 0.4,
    zero: 0.2,
  });
});
