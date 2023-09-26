import { CityAPIResponse } from "../../src/services/getCityByNameService";

export const mockCityAPIResponse: CityAPIResponse = {
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
