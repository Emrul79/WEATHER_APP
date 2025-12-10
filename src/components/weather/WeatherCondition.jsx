import React, { useContext } from "react";
import cloudy from "../../assets/icons/cloud.svg";
import hunidity from "../../assets/icons/humidity.svg";
import tempMax from "../../assets/icons/temp-max.svg";
import tempMin from "../../assets/icons/temp-min.svg";
import windy from "../../assets/icons/wind.svg";
import { WeatherContext } from "../../context";
export default function WeatherCondition() {
  const { weatherData } = useContext(WeatherContext);
  const {
    cloudPercentage,
    climate,
    humidity,
    wind,
    maxTemperature,
    minTemperature,
  } = weatherData;
  return (
    <div>
      <p className="text-sm lg:text-lg font-bold uppercase mb-8">{climate}</p>
      <ul className="space-y-6 lg:space-y-6">
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Temp max</span>
          <div className="inline-flex space-x-4">
            <p>{maxTemperature}</p>
            <img src={tempMax} alt="temp-max" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Temp min</span>
          <div className="inline-flex space-x-4">
            <p>{minTemperature}</p>
            <img src={tempMin} alt="temp-min" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Humadity</span>
          <div className="inline-flex space-x-4">
            <p>{humidity}</p>
            <img src={hunidity} alt="humidity" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Cloudy</span>
          <div className="inline-flex space-x-4">
            <p>{cloudPercentage}</p>
            <img src={cloudy} alt="cloudy" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Wind</span>
          <div className="inline-flex space-x-4">
            <p>{wind}km/h</p>
            <img src={windy} alt="wind" />
          </div>
        </li>
      </ul>
    </div>
  );
}
