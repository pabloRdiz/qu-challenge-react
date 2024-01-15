import "./Title.styles.css";

type Props = {
  title: string;
};

/**
 * Title component.
 *
 * Represents a title with an optional logo.
 *
 * @feature_component
 *
 * @param {object} props - React props for the component.
 * @param {string} props.title - The text content of the title.
 * @returns {React.ReactElement} The rendered Title component.
 */
export const Title = (props: Props) => {
  const { title } = props;

  return (
    <div className="title-container">
      <img
        className="title-logo"
        src="https://www.qubeyond.com/wp-content/uploads/2021/10/QU-logo.png"
        alt="QUBEYOND"
      />
      <div>
        <h1 className="title" aria-label={title}>
          {title}
        </h1>
      </div>
    </div>
  );
};
