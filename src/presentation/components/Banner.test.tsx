import { render, screen } from "@testing-library/react";
import Banner from "./Banner";

// Mock Next.js Image component
jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} />;
  },
}));

// Mock CustomButton component
jest.mock("./CustomButton", () => ({
  __esModule: true,
  default: ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <button className={className}>{children}</button>
  ),
}));

describe("Banner component", () => {
  const defaultProps = {
    imageSrc: "/test-image.jpg",
    text: "Test Banner Text",
  };

  it("renders the banner image with correct alt text", () => {
    render(<Banner {...defaultProps} />);

    const image = screen.getByAltText(defaultProps.text);

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", defaultProps.imageSrc);
  });

  it("renders the heading with correct text", () => {
    render(<Banner {...defaultProps} />);

    const heading = screen.getByRole("heading", {
      name: defaultProps.text,
    });

    expect(heading).toBeInTheDocument();
  });

  it("renders the button when isButton is true", () => {
    render(<Banner {...defaultProps} isButton />);

    const button = screen.getByRole("button", {
      name: "سفارش آنلاین غذا",
    });

    expect(button).toBeInTheDocument();
  });

  it("does not render the button when isButton is false", () => {
    render(<Banner {...defaultProps} isButton={false} />);

    const button = screen.queryByRole("button", {
      name: "سفارش آنلاین غذا",
    });

    expect(button).not.toBeInTheDocument();
  });

  it("applies additional container styles when provided", () => {
    const customClass = "bg-red-500";

    render(<Banner {...defaultProps} styleContainer={customClass} />);

    const section = screen.getByRole("heading", { name: defaultProps.text }).closest("section");

    expect(section).toHaveClass(customClass);
  });
});
