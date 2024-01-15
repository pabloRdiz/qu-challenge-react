import { render, screen, fireEvent } from "../../utils/test-utils";
import { Select } from "./Select";

const options = [
  { value: "option1", text: "Opción 1" },
  { value: "option2", text: "Opción 2" },
  { value: "option3", text: "Opción 3" },
];

test("01 - renders the CustomSelect component correctly", () => {
  render(<Select options={options} onSelect={() => {}} />);

  const selectElement = screen.getByRole("combobox");

  expect(selectElement).toBeInTheDocument();
  expect(selectElement).toHaveClass("custom-select");
});

test("02 - selects an option correctly", () => {
  const handleSelect = vi.fn();
  render(<Select options={options} onSelect={handleSelect} />);

  const selectElement = screen.getByRole("combobox");

  fireEvent.change(selectElement, { target: { value: options[1].value } });

  expect(handleSelect).toHaveBeenCalledWith(options[1].value);
});

test("03 - renders a placeholder correctly", () => {
  const placeholder = "Selecciona una opción";
  render(
    <Select options={options} onSelect={() => {}} placeholder={placeholder} />
  );

  const placeholderOption = screen.getByText(placeholder);

  expect(placeholderOption).toBeInTheDocument();
  expect(placeholderOption).toHaveAttribute("disabled");
});
