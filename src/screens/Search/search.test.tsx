import {
  render,
  screen,
  fireEvent,
  waitFor,
} from "@__tests__/utils/customRender";
import { Search } from ".";
import { api } from "@services/api";
import { mockCityAPIResponse } from "@__tests__/mocks/api/mockCityAPIResponse";

describe("Screen: Search", () => {
  it("should be show city options", async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: mockCityAPIResponse });
    render(<Search />);

    const searchInput = screen.getByTestId("search-input");
    fireEvent.changeText(searchInput, "Rio de Janeiro");

    const option = await waitFor(() => screen.findByText(/rio de janeiro/i));
    expect(option).toBeTruthy();
  });
});
