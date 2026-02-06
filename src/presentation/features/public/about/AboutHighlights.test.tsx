import { render, screen } from "@testing-library/react";
import AboutHighlights from "./AboutHighlights";
import { aboutHighlightsData } from "@/presentation/constants/about.constants";
import type { SVGProps } from "react";

/* -------------------- icon mock -------------------- */
jest.mock("@/presentation/constants/about.constants", () => {
  const MockIcon = (props: SVGProps<SVGSVGElement>) => <svg data-testid="icon" {...props} />;

  return {
    aboutHighlightsData: [
      { id: "1", text: "کیفیت بالا", icon: MockIcon },
      { id: "2", text: "ارسال سریع", icon: MockIcon },
      { id: "3", text: "پشتیبانی ۲۴ ساعته", icon: MockIcon },
      { id: "4", text: "مواد تازه", icon: MockIcon },
    ],
  };
});

describe("AboutHighlights", () => {
  it("renders all highlight items", () => {
    render(<AboutHighlights />);

    aboutHighlightsData.forEach((item) => {
      expect(screen.getByText(item.text)).toBeInTheDocument();
    });
  });

  it("renders correct number of icons", () => {
    render(<AboutHighlights />);

    expect(screen.getAllByTestId("icon")).toHaveLength(aboutHighlightsData.length);
  });
});
