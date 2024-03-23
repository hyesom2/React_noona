import React from 'react';
import '../css/WeatherButton.css';

const WeatherButton = ({ cities, setCities }) => {
  return (
    <div className="button-group">
      <button type="button">현재위치</button>
      {
        cities.map((item, index) => 
          <button type="button" key={index}>{ item }</button>
        )
      }
    </div>
  )
}

export default WeatherButton;
