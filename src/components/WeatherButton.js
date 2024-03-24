import React from 'react';
import '../css/WeatherButton.css';

const WeatherButton = ({ cities, setCity, selected }) => {
  return (
    <div className="button-group">
      <button 
        type="button"
        className={`${selected ===  "" ? 'is-active' : null }`} 
        onClick={ () => { setCity('') } }>현재위치</button>
      {
        cities.map((item, index) => 
          <button 
            type="button" 
            key={index}
            value={index} 
            className={`${selected === item ? 'is-active' : null }`}
            onClick={ () => { setCity(item) } }>{ item }</button>
        )
      }
    </div>
  )
}

export default WeatherButton;
