import "./Card.styles.css";

type Props = {
  children: React.ReactNode;
};

/**
 * Card component.
 *
 * Represents a simple card container.
 *
 * @ui_component
 *
 * @param {object} props - React props for the component.
 * @param {React.ReactNode} props.children - The content to be displayed inside the card.
 * @returns {React.ReactElement} The rendered Card component.
 */
export const Card = (props: Props) => {
  const { children } = props;

  return <article className="card-container">{children}</article>;
};
