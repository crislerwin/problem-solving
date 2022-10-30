import { test, expect } from "vitest";
import { staircase } from "../../problem-solving/staircase";

test("staircase", () => {
  expect(staircase(6)).toBe(`######`);
});
