import React from "react";
import { render } from "@testing-library/react";
import Display from "../../components/Display";

test("renders App", () => {
  const { getByRole } = render(<Display buffer="123" />);
  expect(getByRole("textbox")).toHaveTextContent("123");
});
