import { colorArray, fruitArray } from "../arrays";

describe("array tests", () => {
  it("should contain banana", () => {
    expect(fruitArray()).toContain("banana");
  });

  it("should not contain strawberry", () => {
    expect(fruitArray()).not.toContain("strawberry");
  });

  it("should be 5 of length", () => {
    expect(colorArray()).toHaveLength(5);
  });

  it("should not be 7 of length", () => {
    expect(colorArray()).not.toHaveLength(7);
  });
});
