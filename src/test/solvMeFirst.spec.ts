import { test, expect } from "vitest";
import { solveMeFirst } from "../solveMeFirst";
test("solveMeFirst", () => {
  expect(solveMeFirst(2, 3)).toBe(5);
  expect(solveMeFirst(100, 1000)).toBe(1100);
});
