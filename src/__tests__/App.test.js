import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";

test("App", () => {
  render(<App />);

  expect(screen.getByRole("heading")).toHaveTextContent(/^0$/);

  fireEvent.click(screen.getByText("Increment"));
  expect(screen.getByRole("heading")).toHaveTextContent(/^1$/);

  for (let i = 0; i < 9; i++) {
    fireEvent.click(screen.getByText("Increment"));
  }
  expect(screen.getByRole("heading")).toHaveTextContent(/^10$/);

  fireEvent.click(screen.getByText("Reset"));
  expect(screen.getByRole("heading")).toHaveTextContent(/^0$/);
});
