import { render, screen } from "@testing-library/react";
import ActionButtons from "./ActionButtons";

describe("ActionButtons", () => {
  it("renders action buttons", () => {
    render(<ActionButtons />);

    expect(screen.getByRole("link", { name: "صفحه شعبه" })).toBeInTheDocument();
    expect(screen.getByText("دیدن در نقشه")).toBeInTheDocument();
  });
});
