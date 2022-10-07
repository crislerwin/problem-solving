import { test, expect } from "vitest";
import { staircase } from "./staircase";

test("staircase", () => {
  expect(staircase(6)).toBe(`######`);
});
