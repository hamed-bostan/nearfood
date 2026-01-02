import { fireEvent, render, screen } from "@testing-library/react";
import CategoryCard from "./CategoryCard";

jest.mock("@mui/icons-material/ArrowBackOutlined", () => ({
  __esModule: true,
  default: () => <svg data-testid="arrow-icon" />,
}));

describe("CategoryCard", () => {
  it("renders category label", () => {
    render(<CategoryCard item="پیتزا" isSelected={false} setSelectedCategory={jest.fn()} />);

    expect(screen.getByText("پیتزا")).toBeInTheDocument();
    expect(screen.getByTestId("arrow-icon")).toBeInTheDocument();
  });

  it("calls setSelectedCategory when clicked", () => {
    const setSelectedCategory = jest.fn();

    render(<CategoryCard item="پیتزا" isSelected={false} setSelectedCategory={setSelectedCategory} />);

    fireEvent.click(screen.getByRole("button"));

    expect(setSelectedCategory).toHaveBeenCalledWith("پیتزا");
    expect(setSelectedCategory).toHaveBeenCalledTimes(1);
  });

  it("applies selected styles when active", () => {
    render(<CategoryCard item="پیتزا" isSelected={true} setSelectedCategory={jest.fn()} />);

    const text = screen.getByText("پیتزا");
    expect(text).toHaveClass("text-primary-500");
  });

  it("applies default styles when inactive", () => {
    render(<CategoryCard item="پیتزا" isSelected={false} setSelectedCategory={jest.fn()} />);

    const text = screen.getByText("پیتزا");
    expect(text).toHaveClass("text-gray-800");
  });
});
