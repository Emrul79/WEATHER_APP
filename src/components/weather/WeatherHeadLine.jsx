import React, { useContext } from "react";
import Cloud from "../../assets/cloud.svg";
import PinSvg from "../../assets/pin.svg";
import { WeatherContext } from "../../context";
import { getFormattedDate } from "../../utils/date-util";
export default function WeatherHeadLine() {
  const { weatherData } = useContext(WeatherContext);
  const { location, temperature, name, time, timezone } = weatherData;
  const localTime = (time + timezone) * 1000;
  console.log(weatherData);
  return (
    <div>
      <div className="max-md:flex items-center justify-between md:-mt-10">
        <img src={Cloud} alt="cloud" />
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
