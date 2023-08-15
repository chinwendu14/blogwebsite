import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Cards from "./Cards";

describe("Cards", () => {
  const mockData = {
    headerText: "Sample Card",
    text: "This is a sample description",
    onClickcomment: jest.fn(),
    onClickheader: jest.fn(),
  };

  beforeEach(() => {
    render(<Cards {...mockData} />);
  });

  test("renders card correctly", () => {
    const cardElement = screen.getByTestId("card");
    expect(cardElement).toBeInTheDocument();
  });

  test("displays title", () => {
    const titleElement = screen.getByTestId("card-title");
    expect(titleElement).toHaveTextContent(mockData.headerText);
  });

  test("displays description", () => {
    const descriptionElement = screen.getByTestId("card-description");
    expect(descriptionElement).toHaveTextContent(mockData.text);
  });

  test("handles comment click event", () => {
    const cardElement = screen.getByTestId("card-title");
    fireEvent.click(cardElement);
    expect(mockData.onClickheader).toHaveBeenCalledTimes(1);
  });

  test("handles title click event", () => {
    const cardElement = screen.getByTestId("card-title");
    fireEvent.click(cardElement);
    expect(mockData.onClickheader).toHaveBeenCalledTimes(1);
  });
});
