import React from 'react';
import logo from './img/logo.svg';
import './App.css';
import Map from './Map'
import 'mapbox-gl/dist/mapbox-gl.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <p>
            Foodie or what?
          </p>
          <Map></Map>
      </header>
    </div>
  );
}

export default App;
