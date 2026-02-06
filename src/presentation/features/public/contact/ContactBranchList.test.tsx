import { render, screen } from "@testing-library/react";
import ContactBranchList from "./ContactBranchList";
import { contactBranchesData } from "@/presentation/constants/contact";

describe("ContactBranchList", () => {
  it("renders all branch cards", () => {
    render(<ContactBranchList />);

    contactBranchesData.forEach((branch) => {
      expect(screen.getByText(branch.title)).toBeInTheDocument();
    });
  });
});
