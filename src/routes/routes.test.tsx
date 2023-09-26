import { render, screen, waitFor } from "../../__tests__/utils/customRender";
import { Routes } from ".";
import { saveStorageCity } from "@libs/asyncStorage/cityStorage";

describe("Routes", () => {
  it("should be render Search scrren when not city selected.", async () => {
    render(<Routes />);

    const title = await waitFor(() => screen.findByText(/^escolha um local/i));
    expect(title).toBeTruthy();
  });

  it("shoud be render Dashboard screen when has city selected", async () => {
    const city = {
      id: "1",
      name: "Rio de Janeiro",
      latitude: 123,
      longitude: 456,
    };

    await saveStorageCity(city);

    render(<Routes />);
  });
});
