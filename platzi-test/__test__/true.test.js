import { isFalse, isNull, isTrue, isUndefined } from "../true";

describe("Truthy falsy", () => {
  it("should be truthy", () => {
    expect(isTrue()).toBeTruthy();
  });

  it("should be falsy", () => {
    expect(isFalse()).toBeFalsy();
  });

  it("should be null", () => {
    expect(isNull()).toBeNull();
  });

  it("should be undefined", () => {
    expect(isUndefined()).toBeUndefined();
  });

  it("should be not true", () => {
    expect(isFalse()).not.toBeTruthy();
  });
});
