import { render, screen } from "@testing-library/react";
import FoodTypesItem from "./FoodTypesItem";

describe("FoodTypesItem", () => {
  it("renders active food type with active styles", () => {
    render(<FoodTypesItem type="غذای اصلی" />);

    const item = screen.getByText("غذای اصلی");

    expect(item).toBeInTheDocument();
    expect(item).toHaveClass("text-primary-500");
    expect(item).toHaveClass("border-primary-500");
    expect(item).toHaveClass("font-medium");
  });

  it("renders inactive food type with default styles", () => {
    render(<FoodTypesItem type="پیش غذا" />);

    const item = screen.getByText("پیش غذا");

    expect(item).toBeInTheDocument();
    expect(item).toHaveClass("text-gray-700");
    expect(item).toHaveClass("border-transparent");
    expect(item).toHaveClass("text-sm");
  });
});
