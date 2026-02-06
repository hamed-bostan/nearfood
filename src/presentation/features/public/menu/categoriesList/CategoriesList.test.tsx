import { render, screen } from "@testing-library/react";
import CategoriesList from ".";

const mockSetSelectedCategory = jest.fn();

const mockProducts = [
  { id: 1, category: "پیتزا" },
  { id: 2, category: "برگر" },
  { id: 3, category: "پیتزا" }, // duplicate on purpose
] as any[];

describe("CategoriesList", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders derived category options", () => {
    render(
      <CategoriesList products={mockProducts} selectedCategory="پیتزا" setSelectedCategory={mockSetSelectedCategory} />
    );

    expect(screen.getByText("نمایش همه")).toBeInTheDocument();
    expect(screen.getByText("پیتزا")).toBeInTheDocument();
    expect(screen.getByText("برگر")).toBeInTheDocument();
    expect(screen.getByText("پرفروش‌ترین")).toBeInTheDocument();
    expect(screen.getByText("اقتصادی‌ترین")).toBeInTheDocument();
  });

  it("renders correct number of category cards", () => {
    render(
      <CategoriesList products={mockProducts} selectedCategory="" setSelectedCategory={mockSetSelectedCategory} />
    );

    // unique categories = 2 + 3 fixed items
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(5);
  });
});
