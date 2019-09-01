import { fetchError, getDataFromAPI } from "../promise";

describe("Async/Await test for API", () => {
  it("should get data from API", async () => {
    const url = "https://rickandmortyapi.com/api/character/";
    const response = await getDataFromAPI(url);
    expect(response).not.toBeUndefined();
  });

  it("should get data from API", async () => {
    const url = "https://rickandmortyapi.com/api/character/";
    const { results } = await getDataFromAPI(url);
    expect(results.length).toBeGreaterThan(0);
  });

  it("should get data from API with Error", async () => {
    const apiError = "http://httpstat.us/404";
    const response = await fetchError(apiError);
    const responseText = response.text();
    expect(responseText).resolves.toBe("404 Not Found");
  });
});
