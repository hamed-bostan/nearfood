import { render, screen } from "@testing-library/react";
import TestimonialsCarousel from "./TestimonialsCarousel";
import { TestimonialType } from "@/application/schemas/testimonial.schema";
import type { ImgHTMLAttributes, ReactNode } from "react";

/* -------------------- next/image mock -------------------- */
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: ImgHTMLAttributes<HTMLImageElement>) => {
    return <img {...props} />;
  },
}));

/* -------------------- swiper mocks -------------------- */
type ChildrenProps = { children?: ReactNode };

jest.mock("swiper/react", () => ({
  Swiper: ({ children }: ChildrenProps) => <div data-testid="swiper">{children}</div>,
  SwiperSlide: ({ children }: ChildrenProps) => <div data-testid="swiper-slide">{children}</div>,
}));

jest.mock("swiper/modules", () => ({
  Navigation: {},
  Pagination: {},
}));

/* -------------------- test data -------------------- */
const testimonials: TestimonialType[] = [
  {
    id: "1",
    name: "علی رضایی",
    comment: "غذا خیلی خوشمزه بود",
    image: "/user-1.png",
    createdAt: new Date(),
  },
  {
    id: "2",
    name: "مریم احمدی",
    comment: "ارسال سریع و کیفیت عالی",
    image: "/user-2.png",
    createdAt: new Date(),
  },
];

/* -------------------- tests -------------------- */
describe("TestimonialsCarousel", () => {
  it("renders testimonials correctly", () => {
    render(<TestimonialsCarousel testimonial={testimonials} />);

    expect(screen.getByText("نظرات کاربران")).toBeInTheDocument();

    const slides = screen.getAllByTestId("swiper-slide");
    expect(slides).toHaveLength(testimonials.length);

    testimonials.forEach(({ name, comment }) => {
      expect(screen.getByText(name)).toBeInTheDocument();
      expect(screen.getByText(comment)).toBeInTheDocument();
    });
  });
});
