import { render } from "@testing-library/react-native";
import { Routes } from ".";

describe("Routes", () => {
  it("should be render Search scrren when not city selected.", () => {
    render(<Routes />);
  });
});
