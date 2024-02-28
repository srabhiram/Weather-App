import { useState, useEffect } from "react";
import { Weather } from "./Weather";
import clear_sky_day from "./assets/day.svg";
import clear_sky_night from "./assets/night.svg";
import few_clouds_day from "./assets/cloudy-day-1.svg";
import few_clouds_night from "./assets/cloudy-night-1.svg";
import cloudy from "./assets/cloudy.svg";
import shower_rain_night from "./assets/rainy-7.svg";
import shower_rain_day from "./assets/rainy-2.svg";
import rain_day from "./assets/rainy-3.svg";
import rain_night from "./assets/rainy-6.svg";
import thunder from "./assets/thunder.svg";

function App() {
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [weatherData, setWeatherData] = useState("");

  useEffect(() => {
    const fetchData = () => {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (lat !== "" && long !== "") {
        try {
          const response = await fetch(
            `${
              import.meta.env.VITE_URL
            }lat=${lat}&lon=${long}&units=metric&appid=${
              import.meta.env.VITE_API_KEY
            }`
          );
          const data = await response.json();
          setWeatherData(data);
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      }
    };

    fetchWeatherData();
  }, [lat, long]);
  if (!weatherData) {
    return <div>Loading...</div>;
  }

  if (!weatherData.weather || weatherData.weather.length === 0) {
    return <div>Error: Weather data is incomplete</div>;
  }

  let WeatherIcon;
  const currentTime = new Date().getHours(); // Get current hour
  const isDayTime = currentTime >= 6 && currentTime < 18; // Assuming day time is between 6 AM and 6 PM

  switch (weatherData.weather[0].description || []) {
    case "clear sky":
      WeatherIcon = isDayTime ? clear_sky_day : clear_sky_night;
      break;
    case "few clouds":
      WeatherIcon = isDayTime ? few_clouds_day : few_clouds_night;
      break;
    case "scattered clouds" || "broken clouds":
      WeatherIcon = cloudy;
      break;
    case "shower rain":
      WeatherIcon = isDayTime ? shower_rain_day : shower_rain_night;
      break;
    case "rain":
      WeatherIcon = isDayTime ? rain_day : rain_night;
      break;
    case "thunderstorm":
      WeatherIcon = thunder;
      break;
  }

  return (
    <div>
      <Weather icon={WeatherIcon} data={weatherData} />
    </div>
  );
}

export default App;
