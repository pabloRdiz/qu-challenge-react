import { sort } from "../../../../utils";
import { Planet, PlanetRootObject } from "../../models";
import { getPlanets } from "../../services";
import { useCallback, useEffect, useRef, useState } from "react";

type Data = {
  current?: PlanetRootObject;
  planets: Planet[];
};

const DEFAULT_STATE: Data = {
  planets: [],
};

type UseGetPlantType = {
  isLoading: boolean;
  isError: boolean;
  planets: Planet[];
  getNextPage: () => void;
  setOrderBy: React.Dispatch<React.SetStateAction<string>>;
};

/**
 * Custom hook to fetch and manage planet data.
 *
 * @custom_hook
 *
 * @returns {UseGetPlantType} The useGetPlanets hook.
 */
export const useGetPlanets = (): UseGetPlantType => {
  const currentPage = useRef<number>(1);
  const [data, setData] = useState<Data>(DEFAULT_STATE);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [orderBy, setOrderBy] = useState<string>("");

  const fetchPlanets = useCallback(() => {
    setIsLoading(true);

    getPlanets(currentPage.current)
      .then((response) =>
        setData((prev) => {
          return {
            current: response,
            planets: prev.planets.concat(response.results),
          };
        })
      )
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    fetchPlanets();
  }, [fetchPlanets]);

  const getNextPage = () => {
    if (data.current?.next && !isLoading) {
      currentPage.current = currentPage.current + 1;
      fetchPlanets();
    }
  };

  return {
    isLoading,
    isError,
    planets: sort(data.planets, orderBy as keyof Planet),
    getNextPage,
    setOrderBy,
  };
};
