import { api } from "./api";
import { getCityByNameService } from "./getCityByNameService";

describe("API: getCityByNameService", () => {
  it("should return city details", async () => {
    const data = {
      id: "1",
      name: "Rio de Janeiro",
      sys: {
        country: "BR",
      },
      coord: {
        lat: 123,
        lon: 456,
      },
    };

    jest.spyOn(api, "get").mockResolvedValue({
      data,
    });
    const response = await getCityByNameService("Rio de Janeiro");
    expect(response.length).toBeGreaterThan(0);
  });
});
