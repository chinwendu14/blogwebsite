import Header from "./Header";
import { render, screen } from "@testing-library/react";

describe("header", () => {
  test("header component", () => {
    render(<Header />);

    const h1Element = screen.getByTestId("header");

    expect(h1Element).toBeInTheDocument();
  });

  test("blog ", () => {
    render(<Header />);

    const h1Element = screen.getByTestId("header-blog");

    expect(h1Element).toBeInTheDocument();
  });
});
