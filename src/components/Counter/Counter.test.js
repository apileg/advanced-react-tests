import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import Counter from "./Counter";
import { createReduxStore } from "../../store/store";

describe("render Counter test", () => {
  test("increment button click", () => {
    render(
      <Provider
        store={createReduxStore({
          counter: { value: 10 },
        })}
      >
        <Counter />
      </Provider>
    );
    const btnElement = screen.getByTestId("increment-btn");
    const counterValue = screen.getByTestId("counter-value");

    expect(counterValue).toHaveTextContent("10");
    userEvent.click(btnElement);
    expect(counterValue).toHaveTextContent("11");
  });
});
