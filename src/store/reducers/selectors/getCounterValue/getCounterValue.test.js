import { getCounterValue } from "./getCounterValue";

describe("getCounterValue", () => {
  test("work with empty counter", () => {
    expect(getCounterValue({})).toBe(0);
  });

  test("work with filled counter", () => {
    expect(
      getCounterValue({
        counter: {
          value: 100,
        },
      })
    ).toBe(100);
  });
});
