import { callbackHell } from "../callback";

describe("Testing callbacks", () => {
  it("should run callback successfully", done => {
    const anotherCallback = data => {
      expect(data).toBe("Hello from JavaScript");
      done();
    };

    callbackHell(anotherCallback);
  });
});
