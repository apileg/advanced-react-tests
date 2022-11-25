import React, { useEffect, useState } from "react";

const Test = () => {
  const [data, setData] = useState();
  const [toggle, setToggle] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const onClickHandler = () => {
    setToggle((prev) => !prev);
  };

  useEffect(() => {
    setTimeout(() => {
      setData({});
    }, 100);
  }, []);

  return (
    <div>
      <h1 data-testid="value-elem">{inputValue}</h1>
      {toggle === true && <div data-testid="toggle-elem">toggle</div>}
      {data && <div style={{ color: "red" }}>data</div>}
      <h1>Hello World</h1>
      <button data-testid="toggle-btn" onClick={onClickHandler}>
        click me
      </button>
      <input
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        placeholder="text"
      />
    </div>
  );
};

export default Test;
