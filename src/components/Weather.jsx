// Weather.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MdLocationOn } from 'react-icons/md';

const Weather = ({ latitude, longitude }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if (latitude && longitude) {
      axios
        .get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=YOUR_API_KEY`)
        .then((response) => {
          setWeatherData(response.data);
        })
        .catch((error) => {
          console.error('Error fetching weather data:', error);
        });
    }
  }, [latitude, longitude]);

  if (!weatherData) {
    return (
      <div className="flex items-center">
        <MdLocationOn size={24} className="mr-2 text-gray-500" />
        <div>Loading weather...</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center">
        <MdLocationOn size={24} className="mr-2 text-gray-500" />
        <p>{weatherData.name}</p>
      </div>
      <p>{weatherData.weather[0].description}</p>
      <p>{Math.round(weatherData.main.temp - 273.15)}°C</p>
    </div>
  );
};

export default Weather;
