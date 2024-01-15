import { PlanetRootObject } from "../models";

const API = "https://swapi.dev/api/planets/";

/**
 * Fetches planets from the Star Wars API.
 *
 * @function
 * @param {number} [page=1] - The page number to fetch. Defaults to 1.
 * @returns {Promise<PlanetRootObject>} A promise that resolves to the PlanetRootObject.
 *
 */
export const getPlanets = async (page = 1): Promise<PlanetRootObject> => {
  return fetch(`${API}?page=${page}`)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return console.error(error);
    });
};
