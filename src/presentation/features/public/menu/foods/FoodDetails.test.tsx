import { render, screen } from "@testing-library/react";
import FoodDetails from "./FoodDetails";
import { createProduct } from "@/tests/factories/product.factory";
import { Provider } from "react-redux";
import { store } from "@/store";

describe("FoodDetails", () => {
  it("renders add to cart button", () => {
    const product = createProduct({ discount: 0 });

    render(
      <Provider store={store}>
        <FoodDetails foodItem={product} />
      </Provider>
    );

    expect(screen.getByText("افزودن به سبد خرید")).toBeInTheDocument();
  });
});
