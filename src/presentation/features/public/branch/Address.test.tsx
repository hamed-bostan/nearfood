import { render, screen } from "@testing-library/react";
import Address from "./Address";

// mock next/image
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

describe("Address", () => {
  it("renders address information correctly", () => {
    render(<Address />);

    expect(screen.getByText(/شهرک اکباتان، فاز ۳، مجتمع/i)).toBeInTheDocument();

    expect(screen.getByText("۰۲۱-۳۳۵۳۵۳۵۴")).toBeInTheDocument();
    expect(screen.getByText("همه روزه از ساعت ۱۲ الی ۲۳")).toBeInTheDocument();

    expect(screen.getByAltText("location icon")).toBeInTheDocument();
    expect(screen.getByAltText("phone call icon")).toBeInTheDocument();
    expect(screen.getByAltText("clock icon")).toBeInTheDocument();
  });
});
