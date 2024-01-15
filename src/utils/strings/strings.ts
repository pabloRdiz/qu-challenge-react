/**
 * Splits a comma-separated string into an array of trimmed strings.
 *
 * @function
 *
 * @param {string} texto - The comma-separated string to be split.
 * @returns {string[]} An array of trimmed strings.
 */
export const splitText = (texto: string): string[] => {
  const results = texto.split(",").map((item) => item.trim());
  return results;
};
