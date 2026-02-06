import { apiCallErrorHandler } from "./apiCallErrorHandler";

describe("apiCallErrorHandler", () => {
  it("rethrows domain errors", () => {
    expect(() => apiCallErrorHandler(new Error("Custom error"), "do something")).toThrow("Custom error");
  });

  it("throws auth error on 401", () => {
    expect(() =>
      apiCallErrorHandler(
        {
          isAxiosError: true,
          response: { status: 401 },
        },
        "fetch data"
      )
    ).toThrow("Authentication failed");
  });

  it("throws validation error messages", () => {
    expect(() =>
      apiCallErrorHandler(
        {
          isAxiosError: true,
          response: {
            data: {
              error: "ValidationError",
              details: [{ message: "Invalid input" }],
            },
          },
        },
        "submit form"
      )
    ).toThrow("Invalid input");
  });

  it("throws generic fallback error", () => {
    expect(() => apiCallErrorHandler({}, "load data")).toThrow("Unexpected error while trying to load data");
  });
});
