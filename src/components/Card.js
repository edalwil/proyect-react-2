import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const Card = () => {
  const [location, setLocation] = useState();
  const [fahrenheit, setFahrenheit] = useState();
  const [isF, setIsF] = useState(true);

 

  const convert = () => {
    if (isF) {
      setFahrenheit( ((fahrenheit - 32) /1.8) )
      setIsF(false)
    }else {
      setFahrenheit((fahrenheit * 1.8 ) +32)
      setIsF(true)
    }
  };



 

  useEffect(() => {
    const success = (pos) => {
      const latitude = pos.coords.latitude;
      const longitude = pos.coords.longitude;
  
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=528b9cc5bfe8a63444aee99710414cb9`
        )
        .then((res) => {
          setLocation(res.data);
          setFahrenheit(res.data?.main.temp - 221.07);
        });
 
    };
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  console.log(location);


  return (
    <div className="card-wheather">
      <h1>Wheather App</h1>
      <p>
        {location?.name}, {location?.sys.country}
      </p>
      <div className="counter-card-wheather">
        <div className="temperature">
          <p> <b className="text-black">{fahrenheit} {isF ? "°F" : "°C"}</b></p>
          <img src={`http://openweathermap.org/img/wn/${location?.weather[0].icon}@2x.png` }             alt="" />
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