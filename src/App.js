import { useEffect, useState } from 'react';
import './App.css';
import Weather from './components/Weather';

const API_URL = 'https://api.openweathermap.org/data/2.5/weather?';
const ICON_URL = 'http://openweathermap.org/img/wn/';
const API_KEY = 'API_KEY_HERE';


function App() {
  if (isLoading) {
      return <p>Loading...</p>;
    }
    else {
      return (
        <div className="content">
          <h3>Your position</h3>
          <p>
            Position:&nbsp;
            {lat.toFixed(3)},
            {lng.toFixed(3)}
          </p>
          <Weather lat={lat} lng={lng} />
        </div>
      );
    }
}

export default App;
