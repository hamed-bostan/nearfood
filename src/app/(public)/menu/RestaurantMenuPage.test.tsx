import { render, screen } from "@testing-library/react";
import RestaurantMenuPage from "@/app/(public)/menu/page";
import { getProducts } from "@/infrastructure/apis/product.api";

// Mock API
jest.mock("@/infrastructure/apis/product.api", () => ({
  getProducts: jest.fn(),
}));

// Mock presentation component
jest.mock("@/presentation/features/public/menu", () => ({
  __esModule: true,
  default: ({ products }: { products: any[] }) => (
    <div>
      <h1>Restaurant Menu</h1>
      <span data-testid="product-count">{products.length}</span>
    </div>
  ),
}));

describe("RestaurantMenuPage", () => {
  it("renders menu with fetched products", async () => {
    (getProducts as jest.Mock).mockResolvedValue({
      message: "success",
      result: [
        { id: "1", name: "Pizza" },
        { id: "2", name: "Burger" },
      ],
    });

    const Page = await RestaurantMenuPage();
    render(Page);

    expect(screen.getByText("Restaurant Menu")).toBeInTheDocument();
    expect(screen.getByTestId("product-count")).toHaveTextContent("2");
    expect(getProducts).toHaveBeenCalledTimes(1);
  });

  it("throws error when API fails", async () => {
    (getProducts as jest.Mock).mockRejectedValue(new Error("API failed"));

    await expect(RestaurantMenuPage()).rejects.toThrow("API failed");
  });
});
