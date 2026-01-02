import { getTestimonials } from "./testimonial.api";
import { api } from "../axios/api.client";

jest.mock("../axios/api.client", () => ({
  api: {
    get: jest.fn(),
  },
}));

describe("getTestimonials", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("returns testimonials on success", async () => {
    (api.get as jest.Mock).mockResolvedValue({
      data: {
        message: "ok",
        result: [{ id: 1, text: "Nice" }],
      },
    });

    const result = await getTestimonials();

    expect(result.result).toHaveLength(1);
    expect(api.get).toHaveBeenCalledWith("/testimonials");
  });

  it("throws validation error from API", async () => {
    (api.get as jest.Mock).mockRejectedValue({
      isAxiosError: true,
      response: {
        data: {
          error: "ValidationError",
          details: [{ message: "Invalid field" }],
        },
      },
    });

    await expect(getTestimonials()).rejects.toThrow("Invalid field");
  });
});
