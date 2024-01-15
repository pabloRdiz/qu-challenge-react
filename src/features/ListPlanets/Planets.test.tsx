import { render, screen, waitFor } from "../../utils/test-utils";
import { Planets } from "./Planets";

describe("Planets feature verification", () => {
  test("01 - fshould render loading indicator", () => {
    render(<Planets />);

    const loderComponent = screen.getByRole("status");

    expect(loderComponent).toBeInTheDocument();
  });

  test("02 - should render title", () => {
    render(<Planets />);

    const loderComponent = screen.getByText("qubeyond challenge");

    expect(loderComponent).toBeInTheDocument();
  });

  test("03 - should not render loading indicator", async () => {
    render(<Planets />);

    await waitFor(() => expect(screen.queryByRole("status")).toBeNull());
  });

  test("04 - should render Tatooine planet", async () => {
    render(<Planets />);
    await waitFor(() => expect(screen.getByText("Tatooine")).not.toBeNull());
  });

  test("05 - should render 10 planets", async () => {
    const { container } = render(<Planets />);

    container.querySelectorAll("article");

    await waitFor(() =>
      expect(container.querySelectorAll("article").length).toBe(10)
    );
  });
});
