import { render, screen, fireEvent } from "@testing-library/react";
import { faqTabsData } from "@/presentation/constants/faq.constants";
import Faq from ".";

/**
 * Mock next/image once (if not globally mocked)
 */
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

describe("Faq", () => {
  it("renders FAQ banner text", () => {
    render(<Faq />);

    expect(screen.getByText("سوالات متداول از ترخینه")).toBeInTheDocument();
  });

  it("activates default tab", () => {
    render(<Faq />);

    const defaultTab = faqTabsData.find((t) => t.id === "faq");
    expect(screen.getByText(defaultTab!.label)).toHaveClass("font-bold");
  });

  it("changes active tab on click", () => {
    render(<Faq />);

    const targetTab = faqTabsData.find((t) => t.id !== "faq");
    if (!targetTab) throw new Error("No secondary tab found");

    const button = screen.getByText(targetTab.label);

    fireEvent.click(button);

    expect(button).toHaveClass("font-bold");
  });
});
