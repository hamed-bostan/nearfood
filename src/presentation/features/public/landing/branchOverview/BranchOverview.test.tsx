import { render, screen } from "@testing-library/react";
import { branchList } from "@/presentation/constants/landing";
import BranchOverview from ".";

describe("BranchOverview", () => {
  it("renders section title", () => {
    render(<BranchOverview />);
    expect(screen.getByText("ترخینه گردی")).toBeInTheDocument();
  });

  it("renders all branch items", () => {
    render(<BranchOverview />);
    const branchTitles = branchList.map((b) => b.title);

    branchTitles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });
});
