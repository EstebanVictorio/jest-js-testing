describe("Check strings", () => {
  const text = "a nice and beautiful text";
  it("should have 'beautiful'", () => {
    expect(text).toMatch(/beautiful/);
  });

  it("should not have 'ugly'", () => {
    expect(text).not.toMatch(/ugly/);
  });

  it("should have length of '25'", () => {
    expect(text).toHaveLength(25);
  });

  it("should not have length of  '31'", () => {
    expect(text).not.toHaveLength(31);
  });
});
