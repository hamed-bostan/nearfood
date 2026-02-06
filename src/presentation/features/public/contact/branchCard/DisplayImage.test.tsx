import { render, screen } from "@testing-library/react";
import DisplayImage from "./DisplayImage";
import { mockStaticImage } from "@/__mocks__/staticImage";

describe("DisplayImage", () => {
  it("renders main image and expand icon", () => {
    render(<DisplayImage image={mockStaticImage} title="Test Branch" />);

    expect(screen.getByAltText("Test Branch")).toBeInTheDocument();
    expect(screen.getByAltText("expand icon")).toBeInTheDocument();
  });
});
