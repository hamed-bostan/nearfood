import { render, screen } from "@testing-library/react";
import RestaurantBranch from "@/presentation/features/public/branch";
import React from "react";

// Mock API calls
jest.mock("@/infrastructure/apis/testimonial.api", () => ({
  getTestimonials: jest.fn(),
}));

jest.mock("@/infrastructure/apis/product.api", () => ({
  getProducts: jest.fn(),
}));

// Import mocked functions
import { getTestimonials } from "@/infrastructure/apis/testimonial.api";
import { getProducts } from "@/infrastructure/apis/product.api";

describe("RestaurantBranch", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders all main sections correctly", async () => {
    // Arrange (mock API responses)
    (getTestimonials as jest.Mock).mockResolvedValue({
      result: [
        { id: 1, text: "Great food!" },
        { id: 2, text: "Amazing service!" },
      ],
    });

    (getProducts as jest.Mock).mockResolvedValue({
      result: [
        { id: 1, name: "Pizza" },
        { id: 2, name: "Burger" },
      ],
    });

    // Act
    const Component = await RestaurantBranch();
    render(Component);

    // Assert
    expect(screen.getByText("طعم بی‌نظیر طبیعت!")).toBeInTheDocument();

    // These depend on how your components render text
    expect(screen.getByText(/pizza/i)).toBeInTheDocument();
    expect(screen.getByText(/burger/i)).toBeInTheDocument();

    expect(screen.getByText(/great food/i)).toBeInTheDocument();
    expect(screen.getByText(/amazing service/i)).toBeInTheDocument();
  });
});
