import { useEffect, useRef, useState } from 'react';
import './App.css';
import Weather from './comp/Weather/Weather';

function App() {
  const AppComp = useRef()

  const token = 'your OpenWeatherMap token'

  const [weather, setWeather] = useState({syncDay: 0, temp: 0, tempFeel: 0, condition: '', wind: 0})
  const [city, setCity] = useState('')
  const [dataExist, setDataExist] = useState(false)

  async function handleSearch(city) {
      const data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${token}&units=metric&lang=ru`).then(res => res.json())
      const day = data.list[0]
      
      setWeather({syncDay: day.dt_txt, temp: Math.floor(day.main.temp), tempFeel: Math.floor(day.main.feels_like), condition: day.weather[0].description, wind: day.wind.speed})
      setDataExist(true)
      const temp = Math.floor(day.main.temp)
      let color;
      if (temp < -10) {
        color = 'blue'
      } else if (-10 <= temp && temp < 0) {
        color = 'cyan'
      } else if (0 <= temp && temp < 10) {
        color = 'yellow'
      } else if (10 <= temp) {
        color = 'red'
      }
      
      AppComp.current.style = `border-left: 1px solid ${color}; border-right: 1px solid ${color}`
    }

  return (
    <div className="App" ref={AppComp}>
      <input value={city} onChange={(e) => setCity(e.target.value)} className='city-input' placeholder='Введите город'></input>
      <button onClick={() => handleSearch(city)} className='search-button'>Поиск</button>
      {dataExist ? <Weather weather={weather}/> : ''}
    </div>
  );
}

export default App;
