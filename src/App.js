import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import WeatherBox from './components/WeatherBox';
import WeatherButton from './components/WeatherButton';

// 1. 앱이 실행되자마자 현재 위치기반의 날씨가 보인다.
// 2. 도시, 섭씨, 화씨, 날씨 상태정보가 보인다.
// 3. 5개의 버튼이 있다. (1개는 현재위치, 나머지는 다른도시)
// 4. 도시 버튼을 클릭할때마다 각 도시의2번이 보인다.
// 5. 현재 위치 기반의 버튼을 클릭하면 다시 현재위치 기반으로 돌아온다.
// 6. 데이터를 불러오는 동안 loading
// APIKey = acf059b9bd86fab63152d717e9d9db3c 
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API_key}
// const city = {
//   incheon: {
//     name: "incheon",
//     img: `https://a.cdn-hotels.com/gdcs/production49/d918/3b4285a3-1f5e-4684-8df0-c210f3d32076.jpg`
//   },
//   tokyo: {
//     name: "tokyo",
//     img: `https://a.cdn-hotels.com/gdcs/production34/d497/b8255c6f-fbc1-4733-95e3-9b28deaac126.jpg`
//   }
// }

const App = () => {
  const [weather, setWeather] = useState(null);
  // const [city, setCity] = useState('');
  const [cities, setCities] = useState(["tokyo", "paris"]);

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  const showPosition = (position) => {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    getWeatherByCurrentLocation(lat, lon);
  }
  const getWeatherByCurrentLocation = async(lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=acf059b9bd86fab63152d717e9d9db3c`;
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
  }

  useEffect(() => {
    getCurrentLocation();
  }, []);
  
  return (
    <div className="main">
      <WeatherBox weather={ weather }/>
      <WeatherButton cities={ cities } setCities={ setCities } />
    </div>
  )
}

export default App
