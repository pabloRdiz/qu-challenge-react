import { render } from "@testing-library/react";
import { Card } from "./Card";

describe("Card component verification", () => {
  test("01 - renders children correctly", () => {
    const { getByText } = render(
      <Card>
        <div>Child Content</div>
      </Card>
    );

    const childElement = getByText("Child Content");

    expect(childElement).toBeInTheDocument();
  });
});
