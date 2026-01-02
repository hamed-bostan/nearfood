import { render, screen } from "@testing-library/react";
import RestaurantMenuItem from "./RestaurantMenuItem";

// Mock next/image
jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} />;
  },
}));

describe("RestaurantMenuItem component", () => {
  const props = {
    image: "/pizza.png",
    text: "پیتزا",
  };

  it("renders the menu item image with correct alt text", () => {
    render(<RestaurantMenuItem {...props} />);

    const image = screen.getByAltText(props.text);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", props.image);
  });

  it("renders the menu item text", () => {
    render(<RestaurantMenuItem {...props} />);

    expect(screen.getByText(props.text)).toBeInTheDocument();
  });

  it("renders inside a list item", () => {
    render(<RestaurantMenuItem {...props} />);

    const listItem = screen.getByText(props.text).closest("li");
    expect(listItem).toBeInTheDocument();
  });
});
