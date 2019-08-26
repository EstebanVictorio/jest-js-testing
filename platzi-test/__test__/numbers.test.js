import { numbers } from "../numbers";

describe("Number comparison testing", () => {
  it("Comparisons", () => {
    expect(numbers(2, 2)).toBeGreaterThanOrEqual(3);
  });

  it("Comparisons should fail", () => {
    expect(numbers(2, 0)).not.toBeGreaterThanOrEqual(3);
  });

  it("Less than or equal", () => {
    expect(numbers(5, 5)).toBeLessThanOrEqual(10);
  });

  it("Less than or equal should fail", () => {
    expect(numbers(5, 5)).not.toBeLessThanOrEqual(9);
  });

  it("Floating Less than or equal should fail", () => {
    expect(numbers(0.1, 0.3)).not.toBeLessThanOrEqual(0.2);
  });

  it("Floating Close to", () => {
    expect(numbers(0.1, 0.3)).toBeCloseTo(0.4);
  });
});
