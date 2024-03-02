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
import search_icon from "./assets/search-icon.svg";
import gps from "./assets/gps-navigator.png";
import { Skeleton } from "./skeleton";
import windflow from "./assets/windflow.png";
import humidity from "./assets/humidity.png";
import pressure from "./assets/pressure.png";

function App() {
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState("abhi");

  console.log(lat);
  
  useEffect(() => {
    const fetchData = () => {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
    };
    fetchData();

    if (lat === "" && long === "") {
      const initial = {
        weather: [{ id: 1, description: " " }],
        main: {
          temp: " ",
          humidity: " ",
        },
        wind: { speed: " ", deg: 200 },
        name: " ",
      };
      setWeatherData(initial);
    }
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

  console.log(weatherData);
  
  const fetchData = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
  };

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

  const weatherBycity = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_URL}q=${city}&units=metric&appid=${
        import.meta.env.VITE_API_KEY
      }`
    );

    const data = await response.json();
    setWeatherData(data);
    console.log(data);
  };

  const handleSearch = () => {
    weatherBycity();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // Refetch weather data after 2 seconds
      weatherBycity();
    }, 2000);
  };
  const Handleclick = (event) => {
    event.preventDefault();
    fetchData();
    setLoading(true);

    // Refetch weather data after 2 seconds
    fetchWeatherData();
    setTimeout(() => {
      fetchData();
      fetchWeatherData();
      setLoading(false);
    }, 2000);
  };

  if (loading || !weatherData) {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    return (
      <div>
        <Skeleton />
      </div>
    );
  }

  if (!weatherData?.weather || weatherData.weather.length === 0) {
    return <div>Error: Weather data is incomplete</div>;
  }

  let WeatherIcon;
  const currentTime = new Date().getHours(); // Get current hour
  const isDayTime = currentTime >= 6 && currentTime < 18; // Assuming day time is between 6 AM and 6 PM

  switch (true) {
    case weatherData?.weather[0].id === 800:
      WeatherIcon = isDayTime ? clear_sky_day : clear_sky_night;
      break;
    case weatherData?.weather[0].id === 801:
      WeatherIcon = isDayTime ? few_clouds_day : few_clouds_night;
      break;
    case weatherData?.weather[0].id > 801:
      WeatherIcon = cloudy;
      break;
    case weatherData?.weather[0].id > 511:
      WeatherIcon = isDayTime ? shower_rain_day : shower_rain_night;
      break;
    case weatherData?.weather[0].id >= 300 && weatherData?.weather[0].id <= 321:
      WeatherIcon = isDayTime ? shower_rain_day : shower_rain_night;
      break;
    case weatherData?.weather[0].id >= 500 && weatherData?.weather[0].id < 520:
      WeatherIcon = isDayTime ? rain_day : rain_night;
      break;
    case weatherData?.weather[0].id < 233 && weatherData?.weather[0].id >= 200:
      WeatherIcon = thunder;
      break;
  }

  return (
    <div>
      <Weather
        city={city}
        setCity={setCity}
        handlesearch={handleSearch}
        click={Handleclick}
        pressure={pressure}
        humidity={humidity}
        windflow={windflow}
        gps={gps}
        search={search_icon}
        icon={WeatherIcon}
        data={weatherData}
      />
    </div>
  );
}

export default App;
