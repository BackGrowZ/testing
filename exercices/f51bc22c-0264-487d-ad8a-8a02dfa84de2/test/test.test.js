
import { describe, it, expect } from "vitest";
import {
  convertToInteger,
  convertToIntegerWithBase,
  handleInvalidConversion,
} from "../script/parseIntExercises";

describe("parseIntExercises.js - convertToInteger", () => {
  it("converts a valid number string to an integer", () => {
    expect(convertToInteger("42")).toEqual(42);
    expect(convertToInteger("1010")).toEqual(1010);
  });

  it("returns NaN for an invalid number string", () => {
    expect(convertToInteger("abc123")).toBeNaN();
  });
});

describe("parseIntExercises.js - convertToIntegerWithBase", () => {
  it("converts a valid number string to an integer with a specified base", () => {
    expect(convertToIntegerWithBase("1010", 2)).toEqual(10);
    expect(convertToIntegerWithBase("FF", 16)).toEqual(255);
  });

  it("returns NaN for an invalid number string or base", () => {
    expect(convertToIntegerWithBase("1010", 8)).toBeNaN();
    expect(convertToIntegerWithBase("G2", 16)).toBeNaN();
  });
});

describe("parseIntExercises.js - handleInvalidConversion", () => {
  it("returns the converted number for a valid number string", () => {
    expect(handleInvalidConversion("42")).toEqual(42);
    expect(handleInvalidConversion("1010")).toEqual(1010);
  });

  it("returns 'Conversion impossible' for an invalid number string", () => {
    expect(handleInvalidConversion("abc123")).toEqual("Conversion impossible");
  });
});
