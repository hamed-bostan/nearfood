import { render, screen } from "@testing-library/react";
import CardItem from "./CardItem";

// Mock icon component
const MockIcon = () => <svg data-testid="icon" />;

describe("CardItem component", () => {
  const props = {
    icon: MockIcon,
    text: "Test Card Text",
  };

  it("renders the card text", () => {
    render(<CardItem {...props} />);

    expect(screen.getByText("Test Card Text")).toBeInTheDocument();
  });

  it("renders the icon", () => {
    render(<CardItem {...props} />);

    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("renders inside a list item", () => {
    render(<CardItem {...props} />);

    const listItem = screen.getByText("Test Card Text").closest("li");
    expect(listItem).toBeInTheDocument();
  });
});
