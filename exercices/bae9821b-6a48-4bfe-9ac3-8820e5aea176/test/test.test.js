
import { describe, it, expect } from "vitest";
import { findFruitIndex, checkIfFruitExists } from "../script/IndexOfExample";

describe("findFruitIndex", () => {
  it("should return the index of an existing fruit", () => {
    const fruits = ["pomme", "banane", "orange", "fraise", "kiwi"];
    const index = findFruitIndex(fruits, "banane");
    expect(index).toBe(1);
  });

  it("should return -1 for a non-existing fruit", () => {
    const fruits = ["pomme", "banane", "orange", "fraise", "kiwi"];
    const index = findFruitIndex(fruits, "raisin");
    expect(index).toBe(-1);
  });

  it("should handle an empty array", () => {
    const fruits = [];
    const index = findFruitIndex(fruits, "kiwi");
    expect(index).toBe(-1);
  });
});

describe("checkIfFruitExists", () => {
  it("should return true for an existing fruit", () => {
    const fruits = ["pomme", "banane", "orange", "fraise", "kiwi"];
    const exists = checkIfFruitExists(fruits, "orange");
    expect(exists).toBe(true);
  });

  it("should return false for a non-existing fruit", () => {
    const fruits = ["pomme", "banane", "orange", "fraise", "kiwi"];
    const exists = checkIfFruitExists(fruits, "raisin");
    expect(exists).toBe(false);
  });

  it("should handle an empty array", () => {
    const fruits = [];
    const exists = checkIfFruitExists(fruits, "kiwi");
    expect(exists).toBe(false);
  });
});
