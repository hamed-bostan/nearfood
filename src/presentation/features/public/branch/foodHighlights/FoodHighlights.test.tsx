import { screen } from "@testing-library/react";
import FoodHighlights from ".";
import { ProductType } from "@/application/schemas/product.schema";
import { renderWithProviders } from "@/tests/utils/renderWithProviders";

const products: ProductType[] = [
  {
    id: "1",
    title: "Pizza",
    description: "Italian pizza",
    price: 120000,
    discount: 10,
    score: 4.5,
    mostsale: true,
    category: "غذاهای غیر ایرانی",
    filter: "پیشنهاد ویژه",
    createdAt: new Date(),
  },
  {
    id: "2",
    title: "Burger",
    description: "Beef burger",
    price: 90000,
    discount: 0,
    score: 4,
    mostsale: false,
    category: "غذاهای غیر ایرانی",
    filter: "غذاهای محبوب",
    createdAt: new Date(),
  },
  {
    id: "3",
    title: "Kebab",
    description: "Iranian kebab",
    price: 150000,
    discount: 15,
    score: 5,
    mostsale: true,
    category: "ایرانی",
    filter: "غذاهای محبوب",
    createdAt: new Date(),
  },
];

describe("FoodHighlights", () => {
  it("renders all food sections", () => {
    renderWithProviders(<FoodHighlights products={products} />);

    expect(screen.getByText("پیشنهاد ویژه")).toBeInTheDocument();
    expect(screen.getByText("غذاهای محبوب")).toBeInTheDocument();
    expect(screen.getByText("غذاهای غیر ایرانی")).toBeInTheDocument();
  });
});
