import { render, screen } from "@testing-library/react";
import CheckoutButton from "./CheckoutButton";

jest.mock("@mui/icons-material/ShoppingCartOutlined", () => ({
  __esModule: true,
  default: () => <svg data-testid="cart-icon" />,
}));

jest.mock("next/link", () => {
  return ({ href, children }: any) => <a href={href}>{children}</a>;
});

describe("CheckoutButton", () => {
  it("renders checkout button with text", () => {
    render(<CheckoutButton />);
    expect(screen.getByText("تکمیل خرید")).toBeInTheDocument();
  });

  it("links to checkout page", () => {
    render(<CheckoutButton />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/checkout");
  });

  it("renders shopping cart icon", () => {
    render(<CheckoutButton />);
    expect(screen.getByTestId("cart-icon")).toBeInTheDocument();
  });
});
