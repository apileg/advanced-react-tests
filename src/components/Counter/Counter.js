import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../store/reducers/counterReducer";
import { getCounterValue } from "../../store/reducers/selectors/getCounterValue/getCounterValue";

const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  const onIncrement = () => {
    dispatch(increment());
  };
  const onDecrement = () => {
    dispatch(decrement());
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <div data-testid="counter-value">{counterValue}</div>
      <button data-testid="increment-btn" onClick={onIncrement}>
        Increment
      </button>

      <button data-testid="decrement-btn" onClick={onDecrement}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
