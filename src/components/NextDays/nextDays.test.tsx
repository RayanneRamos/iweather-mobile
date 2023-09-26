import { render, screen } from "@testing-library/react-native";
import { NextDays } from ".";
import clearDay from "../../assets/clear_day.svg";

describe("Component: NextDays", () => {
  it("should be render day", () => {
    render(
      <NextDays
        data={[
          {
            day: "18/07",
            min: "30°c",
            max: "34°c",
            icon: clearDay,
            weather: "Céu limpo",
          },
          {
            day: "19/07",
            min: "13°c",
            max: "20°c",
            icon: clearDay,
            weather: "Chuva fraca",
          },
          {
            day: "20/07",
            min: "25°c",
            max: "30°c",
            icon: clearDay,
            weather: "Nublado",
          },
          {
            day: "21/07",
            min: "27°c",
            max: "29°c",
            icon: clearDay,
            weather: "Céu limpo",
          },
          {
            day: "22/07",
            min: "28°c",
            max: "32°c",
            icon: clearDay,
            weather: "Tempestade",
          },
        ]}
      />
    );

    expect(screen.getByText("19/07")).toBeTruthy();
  });
});
