import { render, screen } from "@testing-library/react";
import DescriptionDetails from "./DescriptionDetails";

// Mock CustomButton
jest.mock("@/presentation/components/CustomButton", () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => <button>{children}</button>,
}));

// Mock constants
jest.mock("@/presentation/constants/landing", () => ({
  descriptionContent: {
    title: "Test Title",
    paragraph: "Test paragraph content",
    buttonLabel: "More Info",
  },
}));

describe("DescriptionDetails component", () => {
  it("renders title, paragraph and button label", () => {
    render(<DescriptionDetails />);

    expect(screen.getByRole("heading", { name: "Test Title" })).toBeInTheDocument();

    expect(screen.getByText("Test paragraph content")).toBeInTheDocument();

    expect(screen.getByRole("button", { name: "More Info" })).toBeInTheDocument();
  });
});
