import { render, screen } from "@testing-library/react";
import ActionButton from "./ActionButton";

// mock next/link
jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ href, children }: { href: string; children: React.ReactNode }) => <a href={href}>{children}</a>,
}));

describe("ActionButton", () => {
  it("renders button with correct text and link", () => {
    render(<ActionButton />);

    const link = screen.getByRole("link", { name: "مشاهده منوی کامل" });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/menu");
  });
});
