import { add, multiply, subtract, divide } from "./../maths";

describe("Math calcs", () => {
  it("Addition test", () => {
    expect(add(1, 2)).toBe(3);
  });

  it("Addition test fail", () => {
    expect(add(1, 1)).not.toBe(3);
  });

  it("Multiply", () => {
    expect(multiply(3, 2)).toBe(6);
  });

  it("Multiply must fail", () => {
    expect(multiply(3, 2)).not.toBe(9);
  });

  it("Subtract", () => {
    expect(subtract(3, 2)).toBe(1);
  });

  it("Subtract must fail", () => {
    expect(subtract(3, 2)).not.toBe(6);
  });

  it("Divide", () => {
    expect(divide(10, 2)).toBe(5);
  });

  it("Divide must fail", () => {
    expect(divide(10, 2)).not.toBe(4);
  });
});
