import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TextField from "./TextField";

import BlogDetail from "../../pages/blog-detail";

describe("Search component", () => {
  render(<TextField />);

  test("renders search component correctly", () => {
    const inputElement = screen.getByTestId("input-Element");
    expect(inputElement).toBeInTheDocument();
  });

  test("renders input correctly", () => {
    render(<TextField />);

    const inputElement = screen.getByTestId("input-Element-input");
    expect(inputElement).toBeInTheDocument();
  });

  test("can accept input", () => {
    render(<TextField />);
    const inputElement = screen.getByTestId("input-Element-input");

    fireEvent.change(inputElement);
  });

  test("calls onInputChange prop on value change", () => {
    const mockOnChange = jest.fn();
    render(<TextField onChange={mockOnChange} />);
    const inputElement = screen.getByTestId("input-Element-input");

    fireEvent.change(inputElement);
  });
});

describe("Search component", () => {
  render(<BlogDetail />);

  test("renders search component correctly", () => {
    const inputElement = screen.getByTestId("input-Element");
    expect(inputElement).toBeInTheDocument();
  });

  test("renders input correctly", () => {
    render(<BlogDetail />);

    const inputElement = screen.getByTestId("input-Element-input");
    expect(inputElement).toBeInTheDocument();
  });

  test("can accept input", () => {
    render(<BlogDetail />);
    const inputElement = screen.getByTestId("input-Element-input");

    fireEvent.change(inputElement);
  });

  test("calls onInputChange prop on value change", () => {
    const inputElement = screen.getByTestId("input-Element-input");

    fireEvent.change(inputElement);
  });
});
