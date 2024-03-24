import React, { useState , useEffect } from 'react'
import './App.css';
import WeatherBox from './components/WeatherBox';
import WeatherButton from './components/WeatherButton';
import ClipLoader from "react-spinners/ClipLoader";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const cities = ["tokyo", "paris", "italy", "Seattle", "vietnam"];
  const [time, setTime] = useState('');

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };
  const getWeatherByCurrentLocation = async(lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=acf059b9bd86fab63152d717e9d9db3c&units=metric`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
  }
  const getWeatherByCities = async() => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=acf059b9bd86fab63152d717e9d9db3c&units=metric`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
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
    if( city === "") {
      getCurrentLocation();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    } else {
      getWeatherByCities();
      // eslint-disable-next-line
    }
    setInterval(getTime, 1000);
    // eslint-disable-next-line
  }, [city]);

  return (
    <div className="main">
      {
        loading ?
        <ClipLoader loading={ loading } size={ 130 } /> :
        <>
          <WeatherBox weather={ weather } time={ time } />
          <WeatherButton cities={ cities } setCity={ setCity } selected={ city } />
        </>
      }
    </div>
  )
}

export default App;
