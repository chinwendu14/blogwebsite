import React from "react";
// import { render, screen } from "@testing-library/react";
// import App from "./App";

import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Home from "./pages/home";
import * as httpRequest from "./restApi/api";
import { blogDetailApi, blogApi } from "./restApi/api";
import BlogDetail from "./pages/blog-detail";
// Mocking Axios module
jest.mock("./restApi/api");
const getRequest = httpRequest.blogDetailApi as jest.Mock;
const getHomeRequest = httpRequest.blogApi as jest.Mock;

describe("DataFetcher", () => {
  beforeEach(() => {
    return {
      title: "man",
      body: "hum",
    };
  });
  it("fetches and displays data", async () => {
    // Mock successful response
    getRequest.mockResolvedValueOnce({ message: "Hello from API!" });

    render(<Home />);

    // After fetching data
    const resolvedSpan = await waitFor(() =>
      screen.getByTestId("data-display")
    );
    expect(resolvedSpan).toHaveTextContent("Hello from API!");
  });
});

describe("DataFetcher", () => {
  beforeEach(() => {
    return {
      title: "man",
      body: "hum",
    };
  });
  it("fetches and displays data", async () => {
    // Mock successful response
    getHomeRequest.mockResolvedValueOnce({ message: "Hello from API!" });

    // render(<Home />);j
    render(<BlogDetail />);

    // After fetching data
    const resolvedSpan = await waitFor(() =>
      screen.getByTestId("data-display")
    );
    expect(resolvedSpan).toHaveTextContent("Hello from API!");
  });
});
