import React from 'react';
import '../css/WeatherBox.css';

const WeatherBox = ({ weather }) => {
  console.log(weather);

  const toFahrenheit = (celsius) => {
    return Math.floor((celsius * 9 / 5) + 32);
  };

  return (
    <div className="box-wrap">
      {/* <h1 className="city">{ weather && weather.name }</h1> */}
      <h1 className="city">{ weather?.name }</h1>
      <img src={`${process.env.PUBLIC_URL}images/sun.png`} alt="" />
      <p>{ weather && weather.weather[0].description }</p>
      <p>{ weather && weather.main.temp }°C</p>
      <p>{ toFahrenheit(weather && weather.main.temp) }°F</p>
    </div>
  )
}

export default WeatherBox;
