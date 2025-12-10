import React from "react";
import Header from "../components/Header";
import WeatherBoard from "../components/weather/WeatherBoard";
import { WeatherProvider } from "../provider";

export default function MainBoard() {
  return (
    <>
      <WeatherProvider>
        <div className="grid place-items-center h-screen">
          <Header />
          <main>
            <section>
              <WeatherBoard />
            </section>
          </main>
        </div>
      </WeatherProvider>
    </>
  );
}
