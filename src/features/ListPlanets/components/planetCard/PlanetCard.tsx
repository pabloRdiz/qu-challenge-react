import { Pill } from "..";
import { Card } from "../../../../ui-components";
import { CLIMATE_COLORS, TERRAIN_COLOR } from "../../constants";
import "./PlanetCard.styles.css";

type Props = {
  name: string;
  diameter: string;
  rotationPeriod: string;
  orbitalPeriod: string;
  residents?: number;
  films?: number;
  terrains?: string[];
  climates?: string[];
};

/**
 * PlanetCard component.
 *
 * Represents a card displaying information about a planet.
 *
 * @feature_component
 *
 * @param {object} props - React props for the component.
 * @param {string} props.name - The name of the planet.
 * @param {string} props.diameter - The diameter of the planet.
 * @param {string} props.rotationPeriod - The rotation period of the planet.
 * @param {string} props.orbitalPeriod - The orbital period of the planet.
 * @param {number} [props.residents] - The number of residents on the planet.
 * @param {number} [props.films] - The number of films the planet appeared in.
 * @param {string[]} [props.terrains] - The terrains present on the planet.
 * @param {string[]} [props.climates] - The climates of the planet.
 * @returns {React.ReactElement} The rendered PlanetCard component.
 */
export const PlanetCard = (props: Props) => {
  const {
    name,
    diameter,
    rotationPeriod,
    orbitalPeriod,
    residents,
    films,
    terrains,
    climates,
  } = props;

  const getPills = ({
    values,
    colors,
  }: {
    values?: string[];
    colors: Record<string, string>;
  }) => {
    if (!values || values.length === 0) return;

    return (
      <div className="pills-container" role="list">
        {values.map((current) => (
          <Pill key={current} value={current} colors={colors} />
        ))}
      </div>
    );
  };

  return (
    <Card>
      <h1 className="planet-title">{name}</h1>
      <p className="planet-diameter">
        {diameter} <span className="planet-diameter-unit">km</span>
      </p>

      <div className="planet-boby">
        <div className="text-left">
          <p>
            Rotation period
            <span className="planet-props-values"> {rotationPeriod}</span> hours
          </p>
          <p>
            Orbital period{" "}
            <span className="planet-props-values">{orbitalPeriod}</span> days
          </p>
        </div>
        <div className="text-right">
          <p>
            Residents
            <span className="planet-props-values"> {residents}</span>
          </p>
          <p>
            Films
            <span className="planet-props-values"> {films}</span>
          </p>
        </div>
      </div>
      <div>
        {getPills({ values: climates, colors: CLIMATE_COLORS })}
        {getPills({ values: terrains, colors: TERRAIN_COLOR })}
      </div>
    </Card>
  );
};
