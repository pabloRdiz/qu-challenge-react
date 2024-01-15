import InfiniteScroll from "react-infinite-scroll-component";
import { Spinner, Select } from "../../ui-components";
import { useGetPlanets } from "./hooks";
import { PlanetCard, Title } from "./components";
import { splitText } from "../../utils";
import "./Planets.styles.css";

const options = [
  { value: "name", text: "name" },
  { value: "climate", text: "climate" },
  { value: "terrain", text: "terrain" },
];

/**
 * Planets component.
 *
 * Displays a list of planets with infinite scroll and ordering options.
 *
 * @feature
 */
export const Planets = () => {
  const { isLoading, planets, getNextPage, setOrderBy } = useGetPlanets();

  const handleSelect = (selectedValue: string) => {
    setOrderBy(selectedValue);
  };

  const renderPlanets = () =>
    planets.map((current, index) => {
      const {
        name,
        diameter,
        rotation_period,
        orbital_period,
        residents,
        films,
        terrain,
        climate,
      } = current;
      const climates = splitText(climate);
      const terrains = splitText(terrain);
      return (
        <PlanetCard
          key={`current.name${index}`}
          name={name}
          diameter={diameter}
          rotationPeriod={rotation_period}
          orbitalPeriod={orbital_period}
          residents={residents.length}
          films={films.length}
          climates={climates}
          terrains={terrains}
        />
      );
    });

  return (
    <InfiniteScroll
      dataLength={planets.length}
      next={getNextPage}
      hasMore={true}
      loader={<Spinner />}
    >
      <Title title="qubeyond challenge" />
      <div className="planets-order-container">
        <Select
          options={options}
          onSelect={handleSelect}
          placeholder="Select option"
        />
      </div>
      {isLoading && planets.length === 0 && <Spinner />}
      <div className="container">
        <div className="planets-list">{planets && renderPlanets()}</div>
      </div>
    </InfiniteScroll>
  );
};
