import "./Pill.styles.css";

type Props = {
  value: string;
  colors: Record<string, string>;
};

/**
 * Pill component.
 *
 * Represents a colored pill with a specified value.
 *
 * @feature_component
 * @example
 * // Usage example
 * const pillColors = {
 *   red: "#FF0000",
 *   blue: "#0000FF",
 *   green: "#00FF00",
 * };
 * <Pill value="red" colors={pillColors} />
 *
 * @param {object} props - React props for the component.
 * @param {string} props.value - The value to be displayed on the pill.
 * @param {Record<string, string>} props.colors - A mapping of values to color codes.
 * @returns {React.ReactElement} The rendered Pill component.
 */
export const Pill = (props: Props) => {
  const { value, colors } = props;

  const colorStyle = colors[value];

  return (
    <>
      <span
        className="text"
        style={{
          color: colorStyle,
        }}
      >
        ●
        <span aria-label={value} className="text-color">
          {value}
        </span>
      </span>
    </>
  );
};
