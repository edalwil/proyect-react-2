import axios from "axios";
import { useState, useEffect } from "react";

const useApi = () => {
  const [location, setLocation] = useState();
  





  const success = (pos) => {
    let lat = pos.coords?.latitude
    let lon = pos.coords?.longitude
   
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=528b9cc5bfe8a63444aee99710414cb9`)
     .then((res) => {
        
        setLocation(res.data);
     })
     
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);


  return [location, ];
};

export default useApi;