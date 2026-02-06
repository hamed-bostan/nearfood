import { getProducts } from "@/infrastructure/apis/product.api";
import { api } from "@/infrastructure/axios/api.client";

jest.mock("@/infrastructure/axios/api.client", () => ({
  api: {
    get: jest.fn(),
    post: jest.fn(),
  },
}));

describe("getProducts", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("returns products on success", async () => {
    (api.get as jest.Mock).mockResolvedValue({
      data: {
        message: "success",
        result: [{ id: "1", name: "Pizza" }],
      },
    });

    const response = await getProducts();

    expect(response.result).toHaveLength(1);
    expect(api.get).toHaveBeenCalledWith("/products");
  });

  it("throws error on invalid response", async () => {
    (api.get as jest.Mock).mockResolvedValue({
      data: { message: "success", result: null },
    });

    await expect(getProducts()).rejects.toThrow("Invalid server response");
  });

  it("handles Axios server error", async () => {
    (api.get as jest.Mock).mockRejectedValue({
      isAxiosError: true,
      response: {
        data: {
          error: "ServerError",
          message: "Internal error",
        },
      },
    });

    await expect(getProducts()).rejects.toThrow("Internal error");
  });

  it("handles unexpected error", async () => {
    (api.get as jest.Mock).mockRejectedValue(new Error("Boom"));

    await expect(getProducts()).rejects.toThrow("Boom");
  });
});
