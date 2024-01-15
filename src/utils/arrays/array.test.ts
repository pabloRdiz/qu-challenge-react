import { sort } from "./array";

describe("sort function verification", () => {
  test("01 - should sort the array in ascending order based on the specified key", () => {
    const inputArray = [
      { name: "Hoth", surface_water: 30 },
      { name: "Alderaan", surface_water: 25 },
      { name: "Tatooine", surface_water: 35 },
    ];

    const sortedArray = sort(inputArray, "surface_water");

    expect(sortedArray).toEqual([
      { name: "Alderaan", surface_water: 25 },
      { name: "Hoth", surface_water: 30 },
      { name: "Tatooine", surface_water: 35 },
    ]);
  });

  test("02 - should handle an empty array", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const emptyArray: any[] = [];
    const sortedArray = sort(emptyArray, "someKey");
    expect(sortedArray).toEqual([]);
  });

  test("03 - should return the original array if key is not provided", () => {
    const inputArray = [3, 1, 2];
    const sortedArray = sort(inputArray);
    expect(sortedArray).toEqual([3, 1, 2]);
  });
});
