import { getDataFromAPI } from "../promise";
let data = null;
beforeEach(() => {
  const url = "https://rickandmortyapi.com/api/character/";
  return getDataFromAPI(url).then(jsonData => (data = jsonData));
});

afterEach(() => {
  data = null;
});

describe("API Fetch", () => {
  it("should get data from API", done => {
    expect(data).not.toBeUndefined();
    done();
  });

  it("should have results on array", done => {
    const { results } = data;
    expect(results.length).toBeGreaterThan(0);
    done();
  });

  it("should resolve as expected", () => {
    return expect(Promise.resolve("Hello!")).resolves.toBe("Hello!");
  });

  it("should reject the promise", () => {
    return expect(Promise.reject("Testing reject")).rejects.toBe(
      "Testing reject"
    );
  });

  
});
