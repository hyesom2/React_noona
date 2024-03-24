import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import ClipLoader from "react-spinners/ClipLoader";
import WeatherBox from './components/WeatherBox';
import WeatherButton from './components/WeatherButton';

const App = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');
  const [cities] = useState(["tokyo", "paris", "italy", "Seattle", "vietnam"]);
  const [time, setTime] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorApi, setErrorApi] = useState('');

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  const showPosition = (position) => {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    getWeatherByCurrentLocation(lat, lon);
  }
  const getWeatherByCurrentLocation = async(lat, lon) => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;
      setLoading(true);
      let response = await fetch(url);
      let data = await response.json();
      setWeather(data);
      setLoading(false);
    } catch(error) {
      setErrorApi(error.message);
      setLoading(false);
    }
  }
  const getWeatherByCity = async() => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;
      setLoading(true);
      let response = await fetch(url);
      let data = await response.json();
      setWeather(data);
      setLoading(false);
    } catch(error) {
      setErrorApi(error.message);
      setLoading(false);
    }
  }
  const getTime = () => {
    let data = new Date();
    let years = data.getFullYear();
    let months = data.getMonth()+1;
    let day = data.getDate();
    let hours = data.getHours();
    let minutes = data.getMinutes();
    let currentTime = `${years}/${months}/${day} ${hours}:${minutes}`
    setTime(currentTime);
  }

  useEffect(() => {
    setInterval(getTime, 1000);
    if(city === "") {
      setLoading(true);
      getCurrentLocation();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    } else {
      setLoading(true);
      getWeatherByCity();
    }
     // eslint-disable-next-line
  }, [city]);
  
  return (
    <div className="main">
      {
        loading 
        ?
        <ClipLoader loading={ loading } size={ 130 } />
        :
          !errorApi
          ?
          <div>
            <WeatherBox weather={ weather } time={ time } />
            <WeatherButton cities={ cities } setCity={ setCity } selected={ city }/>
          </div>
          : errorApi     
      }
    </div>
  )
}

export default App
