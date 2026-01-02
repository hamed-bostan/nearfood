import { render, screen } from "@testing-library/react";
import TestimonialCard from "./TestimonialCard";
import type { ImgHTMLAttributes } from "react";

/* -------------------- next/image mock -------------------- */
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: ImgHTMLAttributes<HTMLImageElement>) => {
    return <img {...props} />;
  },
}));

describe("TestimonialCard", () => {
  it("renders testimonial card content", () => {
    render(<TestimonialCard name="حسین محمدی" comment="کیفیت غذا عالی بود" image="/profile.png" />);

    expect(screen.getByText("حسین محمدی")).toBeInTheDocument();
    expect(screen.getByText("کیفیت غذا عالی بود")).toBeInTheDocument();

    expect(screen.getByAltText("Profile image of حسین محمدی")).toBeInTheDocument();

    expect(screen.getByAltText("star rate icon")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
  });
});
