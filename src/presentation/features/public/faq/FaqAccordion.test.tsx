import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import FaqAccordion from "./FaqAccordion";
import { FaqSection } from "@/types/faq.types";

const mockSection: FaqSection = {
  id: "panel-1",
  title: "سوال تستی",
  information: "پاسخ تستی",
  category: "faq",
};

describe("FaqAccordion", () => {
  it("toggles accordion using aria-expanded", () => {
    render(<FaqAccordion details={[mockSection]} />);

    const summaryButton = screen.getByRole("button", {
      name: mockSection.title,
    });

    // Initially collapsed
    expect(summaryButton).toHaveAttribute("aria-expanded", "false");

    // Expand
    fireEvent.click(summaryButton);
    expect(summaryButton).toHaveAttribute("aria-expanded", "true");

    // Collapse
    fireEvent.click(summaryButton);
    expect(summaryButton).toHaveAttribute("aria-expanded", "false");
  });
});
