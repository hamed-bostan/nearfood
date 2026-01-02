import { render, screen } from "@testing-library/react";
import { Branch } from "@/types/contact.types";
import BranchCard from ".";
import { mockStaticImage } from "@/__mocks__/staticImage";

const mockBranch: Branch = {
  id: 1,
  title: "شعبه ونک",
  address: "تهران، ونک",
  phoneNumber: "02112345678",
  workTime: "9 الی 23",
  image: mockStaticImage,
};

describe("BranchCard", () => {
  beforeEach(() => {
    render(<BranchCard {...mockBranch} />);
  });

  it("renders branch title", () => {
    expect(screen.getByText(mockBranch.title)).toBeInTheDocument();
  });

  it("renders branch image with correct alt text", () => {
    expect(screen.getByAltText(mockBranch.title)).toBeInTheDocument();
  });
});
