import { getCharacter } from "../snapshot";
import rick from "../rick.json";

describe("Time for instant snapshots", () => {
  it("should snapshot", () => {
    expect(getCharacter(rick)).toMatchSnapshot();
  });

  it("should always fail", () => {
    const user = {
      createdAt: new Date(),
      id: Math.floor(Math.random() * 20)
    };

    expect(user).toMatchSnapshot();
  });

  it("should bring out an exception", () => {
    const user = {
      id: Math.floor(Math.random() * 20),
      name: "Steve Victory"
    };

    expect(user).toMatchSnapshot({ id: expect.any(Number) });
  });
});
