import { render, screen } from "@testing-library/react";
import UserAction from "./UserActions";

test("Renders Title of the application", () => {
  render(<UserAction/>);
  const linkElement = screen.getByText(/CURD operation in React/i);
  expect(linkElement).toBeInTheDocument();
});