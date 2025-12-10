import React, { useContext } from "react";
import { default as CloudIcon } from "../../assets/cloud.svg";
import HazeIcon from "../../assets/haze.svg";
import SnowIcon from "../../assets/icons/snow.svg";
import PinSvg from "../../assets/pin.svg";
import RainIcon from "../../assets/rainy.svg";
import SunIcon from "../../assets/sun.svg";
import ThunderIcon from "../../assets/thunder.svg";
import { WeatherContext } from "../../context";
import { getFormattedDate } from "../../utils/date-util";
export default function WeatherHeadLine() {
  const { weatherData } = useContext(WeatherContext);
  const { location, temperature, name, time, timezone, climate } = weatherData;

  function getWeatherIcon(climate) {
    switch (climate) {
      case "Clouds":
        return CloudIcon;
      case "Haze":
        return HazeIcon;
      case "Snow":
        return SnowIcon;
      case "Rain":
        return RainIcon;
      case "Thunderstorm":
        return ThunderIcon;
      case "Drizzle":
        return RainIcon;
      case "Mist":
        return HazeIcon;
      case "Fog":
        return HazeIcon;
      default:
        return SunIcon;
    }
  }
  const localTime = (time + timezone) * 1000;
  console.log(weatherData);
  return (
    <div>
      <div className="max-md:flex items-center justify-between md:-mt-10">
        <img src={getWeatherIcon(climate)} alt="climate" />
        <div className="max-md:flex items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
            {Math.round(temperature)}
          </h1>
          <div className="flex items-center space-x-4 md:mb-4">
            <img src={PinSvg} />
            <h2 className="text-2xl lg:text-[50px]">{location}</h2>
          </div>
        </div>
      </div>
      <p className="text-sm lg:text-lg">
        {localTime && getFormattedDate(localTime, "time")} -{" "}
        {localTime && getFormattedDate(localTime, "date")}
      </p>
    </div>
  );
}
