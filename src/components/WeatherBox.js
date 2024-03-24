import React from 'react';
import '../css/WeatherBox.css';

const WeatherBox = ({ weather, time }) => {
  const toFahrenheit = (celsius) => {
    return Math.floor((celsius * 9 / 5) + 32);
  };

  return (
    <div className="box-wrap">
      <div className="box-left">
        {/* <h1 className="city">{ weather && weather.name }</h1> */}
        <h1 className="city">{ weather?.name }</h1>
        <img src={`https://openweathermap.org/img/wn/${weather && weather.weather[0].icon }.png`} alt="" />
        <p className="state">{ weather && weather.weather[0].description }</p>
        <span className="line"></span>
        <p className="time">{ time }</p>
      </div>
      <div className="box-right">
        <div className="box">
          <h3>섭씨</h3>
          <p>{ weather && weather.main.temp }°C</p>
        </div>
        <div className="box">
          <h3>화씨</h3>
          <p>{ toFahrenheit(weather && weather.main.temp) }°F</p>
        </div>
        <div className="box">
          <h3>체감온도</h3>
          <p>{ weather && weather.main.feels_like }°C</p>
        </div>
        <div className="box">
          <h3>최고온도</h3>
          <p>{ weather && weather.main.temp_max }°C</p>
        </div>
        <div className="box">
          <h3>최저온도</h3>
          <p>{ weather && weather.main.temp_min }°C</p>
        </div>
        <div className="box">
          <h3>습도</h3>
          <p>{ weather && weather.main.humidity }%</p>
        </div>
        <div className="box">
          <h3>기압</h3>
          <p>{ weather && weather.main.pressure }hPa</p>
        </div>
        <div className="box">
          <h3>풍속</h3>
          <p>{ weather && weather.wind.speed }km/h</p>
        </div>
        <div className="box">
        </div>
      </div>
    </div>
  )
}

export default WeatherBox;
