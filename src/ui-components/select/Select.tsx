import { ChangeEvent } from "react";
import "./Select.styles.css";

type Option = {
  value: string;
  text: string;
};

type Props = {
  options: Option[];
  onSelect: (selectedValue: string) => void;
  placeholder?: string;
};

/**
 * Select component.
 *
 * Represents a custom select dropdown.
 *
 * @ui_component
 * @example
 * // Usage example
 * <Select
 *   options={[
 *     { value: "option1", text: "Option 1" },
 *     { value: "option2", text: "Option 2" },
 *     // ...
 *   ]}
 *   onSelect={(selectedValue) => console.log(selectedValue)}
 *   placeholder="Select an option"
 * />
 *
 * @param {SelectProps} props - React props for the component.
 * @returns {React.ReactElement} The rendered Select component.
 */
export const Select = (props: Props) => {
  const { options, onSelect, placeholder } = props;

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    onSelect(selectedValue);
  };

  return (
    <div className="custom-select-container">
      <label className="custom-select-label">Sort by</label>
      <select
        className="custom-select"
        onChange={handleChange}
        aria-label={placeholder || "Select an option"}
      >
        {placeholder && (
          <option value="" disabled selected>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
};
