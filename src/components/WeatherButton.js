import React from 'react';
import '../css/WeatherButton.css';

const WeatherButton = ({ cities, setCity, selected }) => {
  return (
    <div className="button-group">
      <button type="button" onClick={ () => setCity("") } className={`${selected === "" ? 'is-active' : null}`}>
        현재위치
      </button>
      {
        cities.map((item, index) => (
          <button 
            type="button" 
            key={ index } 
            onClick={ () => setCity(item) }
            className={`${selected === item ? 'is-active' : null }`}
          >{ item }</button>
        ))
      }
    </div>
  )
}

export default WeatherButton;
