import { render, screen } from "@testing-library/react";
import FoodImage from "./FoodImage";

jest.mock("next/image", () => (props: any) => {
  return <img {...props} />;
});

describe("FoodImage", () => {
  it("renders image with alt text", () => {
    render(<FoodImage image="test.png" title="پیتزا" />);

    const img = screen.getByAltText("پیتزا");
    expect(img).toBeInTheDocument();
  });

  it("falls back when image is missing", () => {
    render(<FoodImage image={null as any} title="پیتزا" />);

    const img = screen.getByAltText("پیتزا");
    expect(img).toBeInTheDocument();
  });
});
