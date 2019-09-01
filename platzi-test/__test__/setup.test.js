// After each test
afterEach(() => console.log("After each test"));

// After all tests
afterAll(() => console.log("After all tests"));

// Before each test
beforeEach(() => console.log("Before each test"));

// Before all tests
beforeAll(() => console.log("Before all tests"));

describe("setup before run", () => {
  it("should be truthy", () => {
    expect(true).toBeTruthy();
  });

  it("should be falsy", () => {
    expect(false).toBeFalsy();
  });
});
