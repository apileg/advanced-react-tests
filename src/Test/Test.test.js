import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Test from "./Test";

test("renders learn react link", async () => {
  render(<Test />);
  const helloWorldElement = screen.getByText(/hello world/i);
  const btnElement = screen.getByRole("button");
  const input = screen.getByPlaceholderText(/text/i);

  expect(helloWorldElement).toBeInTheDocument();
  expect(btnElement).toBeInTheDocument();
  expect(input).toBeInTheDocument();
  expect(input).toMatchSnapshot();

  const helloWorldElem = screen.queryByText(/hello2/i);
  expect(helloWorldElem).toBeNull();

  const helloWorldElem2 = await screen.findByText(/data/i);
  expect(helloWorldElem2).toHaveStyle({ color: "red" });
  expect(helloWorldElem2).toBeInTheDocument();

  //screen.debug();
});

test("Click event", () => {
  render(<Test />);
  const btn = screen.getByTestId("toggle-btn");

  expect(screen.queryByTestId("toggle-elem")).toBeNull();
  fireEvent.click(btn);
  expect(screen.getByTestId("toggle-elem")).toBeInTheDocument();
  fireEvent.click(btn);
  expect(screen.queryByTestId("toggle-elem")).toBeNull();
});

test("input event", () => {
  render(<Test />);

  const input = screen.getByPlaceholderText(/text/i);
  const valueElem = screen.queryByTestId("value-elem");
  expect(valueElem).toContainHTML("");
  // fireEvent.input(input, {
  //   target: { value: "123" },
  // });
  userEvent.type(input, "123");
  expect(valueElem).toContainHTML("123");
});
