/**
 * Sorts an array of objects based on a specified key.
 *
 * @function
 *
 * @param {T[]} arr - The array of objects to be sorted.
 * @param {keyof T} [key] - The key based on which the array should be sorted.
 * @returns {T[]} The sorted array of objects.
 * @template T
 */
export const sort = <T>(arr: T[], key?: keyof T): T[] => {
  if (!key) return arr;
  return arr.slice().sort((a, b) => {
    if (a[key] < b[key]) {
      return -1;
    }
    if (a[key] > b[key]) {
      return 1;
    }
    return 0;
  });
};
