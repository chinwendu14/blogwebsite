import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import Button from "./Button";

describe("ButtonComponent", () => {
  test("checks button click", () => {
    // mock function to simulate button click
    const mockOnClick = jest.fn();

    render(<Button onClickbtn={mockOnClick} />);

    // Find the button using the data-testid attribute
    const buttonElement = screen.getByTestId("myButton");

    // Simulate the button click
    userEvent.click(buttonElement);
  });
});
