import { fireEvent, render, screen } from "@testing-library/react-native";
import { SelectList } from ".";

describe("Component: SelectList", () => {
  it("should be return city details selected.", () => {
    const data = [
      { id: "1", name: "Rio de Janeiro", latitude: 123, longitude: 456 },
      { id: "2", name: "São Paulo", latitude: 789, longitude: 987 },
    ];
    const onPress = jest.fn();

    render(<SelectList data={data} onChange={() => {}} onPress={onPress} />);

    const selectedCity = screen.getByText(/rio/i);
    fireEvent.press(selectedCity);

    expect(onPress).toBeCalledTimes(1);
  });
});
