import { render, screen } from "@testing-library/react";
import BranchList from "./BranchList";

// mock next/image
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

// mock swiper
jest.mock("swiper/react", () => ({
  Swiper: ({ children }: { children: React.ReactNode }) => <div data-testid="swiper">{children}</div>,
  SwiperSlide: ({ children }: { children: React.ReactNode }) => <div data-testid="swiper-slide">{children}</div>,
}));

jest.mock("swiper/modules", () => ({
  Navigation: {},
  Pagination: {},
}));

describe("BranchList", () => {
  it("renders branch title and images", () => {
    render(<BranchList />);

    expect(screen.getByText("شعبه اکباتان")).toBeInTheDocument();

    const slides = screen.getAllByTestId("swiper-slide");
    expect(slides).toHaveLength(3);

    expect(screen.getByLabelText("Previous slide")).toBeInTheDocument();
    expect(screen.getByLabelText("Next slide")).toBeInTheDocument();
  });
});
