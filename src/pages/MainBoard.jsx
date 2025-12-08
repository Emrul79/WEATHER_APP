import React from "react";
import Header from "../components/Header";
import WeatherBoard from "../components/weather/WeatherBoard";

export default function MainBoard() {
  return (
    <>
      <div className="grid place-items-center h-screen">
        <Header />
        <main>
          <section>
            <WeatherBoard />
          </section>
        </main>
      </div>
    </>
  );
}
