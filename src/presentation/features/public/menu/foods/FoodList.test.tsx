import { screen } from "@testing-library/react";
import FoodList from "./FoodList";
import { renderWithProviders } from "@/tests/utils/renderWithProviders";
import { ProductType } from "@/application/schemas/product.schema";

const mockProducts: ProductType[] = [
  {
    id: "1",
    title: "Pizza",
    category: "Fast Food",
    description: "",
    price: 100,
    discount: 0,
    score: 4,
    mostsale: false,
    createdAt: new Date(),
  },
  {
    id: "2",
    title: "Burger",
    category: "Fast Food",
    description: "",
    price: 80,
    discount: 0,
    score: 3,
    mostsale: false,
    createdAt: new Date(),
  },
  {
    id: "3",
    title: "Salad",
    category: "Healthy",
    description: "",
    price: 50,
    discount: 0,
    score: 5,
    mostsale: false,
    createdAt: new Date(),
  },
];

describe("FoodList", () => {
  it("renders only filtered products", () => {
    renderWithProviders(<FoodList products={mockProducts} filter="Fast Food" title="Fast Food" />);

    expect(screen.getByText("Pizza")).toBeInTheDocument();
    expect(screen.getByText("Burger")).toBeInTheDocument();
    expect(screen.queryByText("Salad")).not.toBeInTheDocument();
  });
});
