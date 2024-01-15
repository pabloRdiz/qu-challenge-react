import { describe, expect, test } from "vitest";
import { splitText } from "./strings";

describe("string functions verification", () => {
  test("01 - adds 1 + 2 to equal 3", () => {
    const inputText = "   one, two , three,four   ";

    const result = splitText(inputText);

    expect(result).toEqual(["one", "two", "three", "four"]);
  });
});
