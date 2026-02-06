import { render, screen } from "@testing-library/react";
import FoodTypesList from ".";

// Mock constants
jest.mock("@/presentation/constants/food-types", () => ({
  foodTypes: [
    { id: 1, type: "غذای اصلی" },
    { id: 2, type: "پیش غذا" },
    { id: 3, type: "دسر" },
  ],
}));

describe("FoodTypesList", () => {
  it("renders all food types", () => {
    render(<FoodTypesList />);

    expect(screen.getByText("غذای اصلی")).toBeInTheDocument();
    expect(screen.getByText("پیش غذا")).toBeInTheDocument();
    expect(screen.getByText("دسر")).toBeInTheDocument();
  });

  it("renders correct number of list items", () => {
    render(<FoodTypesList />);

    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(3);
  });

  it("renders a list element", () => {
    render(<FoodTypesList />);

    expect(screen.getByRole("list")).toBeInTheDocument();
  });
});
