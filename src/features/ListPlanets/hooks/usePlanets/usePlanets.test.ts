import { renderHook } from "@testing-library/react-hooks";
import { useGetPlanets } from "./usePlanets";

describe("useGetPlanets hook verification", () => {
  test("01 - should mount and first states shold be: loading = true, error = false, planets = 0", async () => {
    const { result } = renderHook(() => useGetPlanets());

    expect(result.current.isLoading).toBe(true);
    expect(result.current.isError).toBe(false);
    expect(result.current.planets.length).toEqual(0);
  });

  test("02 - should fetch planets and update state on mount", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useGetPlanets());

    await waitForNextUpdate();

    expect(result.current.isLoading).toBe(false);
    expect(result.current.isError).toBe(false);
    expect(result.current.planets.length).toEqual(10);
  });
});
