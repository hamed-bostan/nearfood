import { render, screen } from "@testing-library/react";
import { BranchProps } from "@/types/landing.types";
import DisplayingDetails from "./DisplayingDetails";
import imageMock from "@/assets/images/branchImages/branch-01.jpg";

const mockBranch: BranchProps = {
  id: 1,
  title: "شعبه ولیعصر",
  address: "تهران، ولیعصر",
  image: imageMock,
  phoneNumber: "021-12345678",
  workTime: "12-23",
};

describe("DisplayingDetails", () => {
  it("renders branch title and address", () => {
    render(<DisplayingDetails branch={mockBranch} />);

    expect(screen.getByText(mockBranch.title)).toBeInTheDocument();
    expect(screen.getByText(mockBranch.address)).toBeInTheDocument();
  });

  it("renders link to branch page", () => {
    render(<DisplayingDetails branch={mockBranch} />);

    const link = screen.getByRole("link", { name: /View/i });
    expect(link).toHaveAttribute("href", "/branch");
  });
});
