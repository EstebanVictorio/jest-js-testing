let user = null;
let secondUser = null;
let thirdUser = null;
beforeEach(() => {
  user = {
    name: "Esteban",
    lastname: "Victorio"
  };

  secondUser = {
    ...user
  };

  thirdUser = {
    name: "Chevere",
    lastname: "Tito"
  };
});

describe("Common matchers", () => {
  it("Object equality", () => {
    expect(user).toEqual(secondUser);
  });

  it("Object inequality", () => {
    expect(user).not.toEqual(thirdUser);
  });
});
