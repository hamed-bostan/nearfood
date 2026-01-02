import { screen } from "@testing-library/react";
import { createProduct } from "@/tests/factories/product.factory";
import FoodCard from "./FoodCard";
import { renderWithProviders } from "@/tests/utils/renderWithProviders";

describe("FoodCard", () => {
  it("renders food title", () => {
    const product = createProduct({ title: "پیتزا مخصوص" });

    renderWithProviders(<FoodCard foodItem={product} />);

    expect(screen.getByText("پیتزا مخصوص")).toBeInTheDocument();
  });
});
