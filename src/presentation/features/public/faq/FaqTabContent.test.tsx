import { render, screen } from "@testing-library/react";
import FaqTabContent from "./FaqTabContent";
import { faqSectionsData } from "@/presentation/constants/faq.constants";
import { ActiveTab } from "@/types/faq.types";

/**
 * Mock child component
 */
jest.mock("./FaqAccordion", () => ({
  __esModule: true,
  default: ({ details }: { details: { title: string }[] }) => (
    <div>
      {details.map((d) => (
        <span key={d.title}>{d.title}</span>
      ))}
    </div>
  ),
}));

describe("FaqTabContent", () => {
  it("renders only sections matching activeTab", () => {
    const activeTab: ActiveTab = "faq";

    render(<FaqTabContent activeTab={activeTab} />);

    const matching = faqSectionsData.filter((s) => s.category === activeTab);
    const nonMatching = faqSectionsData.filter((s) => s.category !== activeTab);

    matching.forEach((section) => {
      expect(screen.getByText(section.title)).toBeInTheDocument();
    });

    nonMatching.forEach((section) => {
      expect(screen.queryByText(section.title)).not.toBeInTheDocument();
    });
  });
});
