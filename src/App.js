import "./App.css";
import React, { useState } from "react";
import CurrentWeather from "./components/current-weather/current-weather";
import Search from "./components/search/search";
import { weatherapiURL, weatherapiKEY } from "../src/components/environment";
import Forecast from "./components/forecast/forecast-weather";

function App() {
  const [currentweather, setcurrentweather] = useState(null);
  const [forecast, setforecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    console.log(searchData)
    console.log(lat)
    console.log(lon)
    const currentWeather = fetch(
      `${weatherapiURL}/weather?lat=${lat}&lon=${lon}&appid=${weatherapiKEY}`
    );
    const forecastweather = fetch(
      `${weatherapiURL}/forecast?lat=${lat}&lon=${lon}&appid=${weatherapiKEY}`
    );

    Promise.all([currentWeather, forecastweather])
      .then(async (response) => {
        const weatherresponse = await response[0].json();
        const forecastweather = await response[1].json();

        setcurrentweather({ city: searchData.label, ...weatherresponse });
        setforecast({ city: searchData.label, ...forecastweather });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // console.log(currentweather);
  // console.log(forecast)

  return (
    <>
      <div className="container">
        <Search onSearchChange={handleOnSearchChange} />
        {currentweather && <CurrentWeather data={currentweather} />}
        {forecast && <Forecast data={forecast}/>}
      </div>
    </>
  );
}

export default App;
