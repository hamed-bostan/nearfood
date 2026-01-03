import { screen } from "@testing-library/react";
import RestaurantBranch from "@/presentation/features/public/branch";

jest.mock("swiper/react");
jest.mock("swiper/modules");

jest.mock("@/infrastructure/apis/testimonial.api", () => ({
  getTestimonials: jest.fn(),
}));

jest.mock("@/infrastructure/apis/product.api", () => ({
  getProducts: jest.fn(),
}));

import { getTestimonials } from "@/infrastructure/apis/testimonial.api";
import { getProducts } from "@/infrastructure/apis/product.api";
import { renderWithProviders } from "@/tests/utils/renderWithProviders";

describe("RestaurantBranch", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders main sections correctly", async () => {
    (getTestimonials as jest.Mock).mockResolvedValue({
      message: "ok",
      result: [{ id: "1", text: "Great food!" }],
    });

    (getProducts as jest.Mock).mockResolvedValue({
      message: "ok",
      result: [
        {
          id: "1",
          title: "Pizza",
          description: "desc",
          category: "غذاهای محبوب",
          price: 100,
          discount: 0,
          score: 4,
          mostsale: false,
          createdAt: new Date(),
        },
      ],
    });

    const Component = await RestaurantBranch();
    renderWithProviders(Component);

    // hero
    expect(screen.getByText("طعم بی‌نظیر طبیعت!")).toBeInTheDocument();

    // product
    expect(screen.getByText(/pizza/i)).toBeInTheDocument();

    // integration boundary
    expect(getTestimonials).toHaveBeenCalled();
    expect(getProducts).toHaveBeenCalled();

    // swiper rendered
    expect(screen.getAllByTestId("swiper").length).toBeGreaterThan(0);
  });
});
