import { describe, expect, test } from "vitest";

import { PlanetCard } from "./PlanetCard";
import { render } from "../../../../utils/test-utils";

const mockProps = {
  name: "Tatooine",
  diameter: "10465",
  rotationPeriod: "23",
  orbitalPeriod: "304",
  residents: 200000,
  films: 5,
  terrains: ["Desert"],
  climates: ["Arid"],
};

describe("PlanetCard component verification", () => {
  test("01 - renders children correctly", () => {
    const { getByText } = render(<PlanetCard {...mockProps} />);

    expect(getByText("Tatooine")).toBeInTheDocument();
    expect(getByText("10465")).toBeInTheDocument();
    expect(getByText("23")).toBeInTheDocument();
    expect(getByText("304")).toBeInTheDocument();
    expect(getByText("200000")).toBeInTheDocument();
    expect(getByText("5")).toBeInTheDocument();
    expect(getByText("Arid")).toBeInTheDocument();
    expect(getByText("Desert")).toBeInTheDocument();
    expect(getByText("km")).toBeInTheDocument();
    expect(getByText("Residents")).toBeInTheDocument();
    expect(getByText("Films")).toBeInTheDocument();
  });
});
