import { screen } from "@testing-library/react";
import { createProduct } from "@/tests/factories/product.factory";
import { renderWithProviders } from "@/tests/utils/renderWithProviders";
import { ProductType } from "@/application/schemas/product.schema";
import Foods from ".";

// Mock products
const products: ProductType[] = [
  createProduct({ id: "1", category: "غذاهای غیر ایرانی", title: "Burger" }),
  createProduct({ id: "2", category: "غذاهای ایرانی", title: "Kebab" }),
  createProduct({ id: "3", category: "پیتزاها", title: "Pizza" }),
  createProduct({ id: "4", category: "ساندویچ‌ها", title: "Sandwich" }),
];

describe("Foods", () => {
  it("renders all categories when 'نمایش همه' is selected", () => {
    renderWithProviders(<Foods selectedCategory="نمایش همه" products={products} />);

    // Match the actual titles used in FoodList
    expect(screen.getByText("غذاهای غیر ایرانی")).toBeInTheDocument();
    expect(screen.getByText("غذاهای ایرانی")).toBeInTheDocument();
    expect(screen.getByText("پیتزاها")).toBeInTheDocument();
    expect(screen.getByText("ساندویچ‌ها")).toBeInTheDocument();
  });

  it("renders only the selected category when not 'نمایش همه'", () => {
    renderWithProviders(<Foods selectedCategory="غذاهای ایرانی" products={products} />);

    expect(screen.getByText("غذاهای ایرانی")).toBeInTheDocument();
    expect(screen.queryByText("غذاهای غیر ایرانی")).not.toBeInTheDocument();
  });
});
