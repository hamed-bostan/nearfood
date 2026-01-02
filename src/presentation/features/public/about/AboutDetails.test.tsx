import { render, screen } from "@testing-library/react";
import AboutDetails from "./AboutDetails";
import { aboutDetailsText } from "@/presentation/constants/about.constants";

const normalize = (text: string) => text.replace(/\s+/g, " ").trim();

describe("AboutDetails", () => {
  it("renders about section title", () => {
    render(<AboutDetails />);
    expect(screen.getByText("درباره ما")).toBeInTheDocument();
  });

  it("renders all about detail paragraphs", () => {
    render(<AboutDetails />);

    const paragraphs = screen.getAllByText((_, element) => {
      return element?.tagName.toLowerCase() === "p";
    });

    expect(paragraphs).toHaveLength(aboutDetailsText.length);

    paragraphs.forEach((p, index) => {
      expect(p).toHaveTextContent(normalize(aboutDetailsText[index]));
    });
  });

  it("renders about image", () => {
    render(<AboutDetails />);
    expect(screen.getByAltText("About us image")).toBeInTheDocument();
  });
});
