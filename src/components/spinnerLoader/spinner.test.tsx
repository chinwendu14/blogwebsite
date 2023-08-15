import { render, screen } from "@testing-library/react";
import SpinnerLoader from "./SpinnerLoader";

describe("header", () => {
  test("spinner component", () => {
    render(<SpinnerLoader />);

    const h1Element = screen.getByTestId("spinner");

    expect(h1Element).toBeInTheDocument();
  });

  test("spinner Element ", () => {
    render(<SpinnerLoader />);

    const h1Element = screen.getByTestId("spinner-Element");

    expect(h1Element).toBeInTheDocument();
  });
});
