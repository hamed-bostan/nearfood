import { render, screen } from "@testing-library/react";
import FoodList from "./FoodList";
import { ProductType } from "@/application/schemas/product.schema";

/**
 * Mock FoodCard to isolate FoodList behavior
 */
jest.mock("./FoodCard", () => ({
  __esModule: true,
  default: ({ item }: { item: ProductType }) => <div data-testid="food-card">{item.title}</div>,
}));

/**
 * Swiper mocks (UI library – not our concern)
 */
jest.mock("swiper/react", () => ({
  Swiper: ({ children }: { children: React.ReactNode }) => <div data-testid="swiper">{children}</div>,
  SwiperSlide: ({ children }: { children: React.ReactNode }) => <div data-testid="swiper-slide">{children}</div>,
}));

/**
 * Valid domain products (matches ProductSchema)
 */
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

describe("FoodList", () => {
  it("renders section title", () => {
    render(<FoodList title="غذاهای محبوب" filter="غذاهای محبوب" products={products} />);

    expect(screen.getByText("غذاهای محبوب")).toBeInTheDocument();
  });

  it("renders foods matching filter", () => {
    render(<FoodList title="غذاهای محبوب" filter="غذاهای محبوب" products={products} />);

    expect(screen.getByText("Burger")).toBeInTheDocument();
    expect(screen.getByText("Kebab")).toBeInTheDocument();
  });

  it("renders foods matching non-Iranian category", () => {
    render(<FoodList title="غذاهای غیر ایرانی" filter="غذاهای غیر ایرانی" products={products} />);

    expect(screen.getByText("Pizza")).toBeInTheDocument();
    expect(screen.getByText("Burger")).toBeInTheDocument();
  });
});
