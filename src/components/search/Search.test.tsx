import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Search from "./Search";

describe("Search component", () => {
  render(<Search />);

  test("renders search component correctly", () => {
    const inputElement = screen.getByTestId("search-Element");
    expect(inputElement).toBeInTheDocument();
  });

  test("renders input correctly", () => {
    render(<Search />);

    const inputElement = screen.getByTestId("search-Element-input");
    expect(inputElement).toBeInTheDocument();
  });

  test("can accept input", () => {
    render(<Search />);
    const inputElement = screen.getByTestId("search-Element-input");

    fireEvent.change(inputElement);
  });

  test("calls onInputChange prop on value change", () => {
    const mockOnChange = jest.fn();
    render(<Search onChange={mockOnChange} />);
    const inputElement = screen.getByTestId("search-Element-input");

    fireEvent.change(inputElement);
  });
});
