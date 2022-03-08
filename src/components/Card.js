import React from "react";
import { useState } from "react";
import useApi from "../hooks/useApi";


const Card = () => {
  const [isF, setIsF] = useState(true);
  const [location,] = useApi()

  const searchDegrees = location?.main.temp 
  const degreesFahrenheit = (((searchDegrees - 273.15)*1.8) + 32).toFixed(2)
  const degreesCelsius = ((degreesFahrenheit - 32) / 1.8).toFixed(2)


  const convert = () => {
    setIsF(!isF)
  };







  return (
    <div className="card-wheather">
      <h1>Wheather App</h1>
      <p>
        {location?.name}, {location?.sys.country}
      </p>
      <div className="counter-card-wheather">
        <div className="temperature">
          <p> <b className="text-black"> {isF ? `${degreesFahrenheit} °F` : `${degreesCelsius}°C`}</b></p>
          <img src={location?.weather  ?`http://openweathermap.org/img/wn/${location?.weather[0].icon}@2x.png`  : null }   alt="" />
        </div>
        <div className="weather-data">
          <p>"{location?.weather[0].description}"</p>
          <p>
            wind speed: <b className="text-black">{location?.wind.speed}m/s</b>
          </p>
          <p>
            Clouds: <b className="text-black">{location?.clouds.all}%</b>
          </p>
          <p>
            Pressure: <b className="text-black">{location?.main.pressure} mb</b>
          </p>
        </div>
      </div>
      <button  onClick={convert}>Degrees to {isF ? "°C" : "°F"}</button>
    </div>
  );
};

export default Card;
