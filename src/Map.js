import React, {useState} from 'react';
import MapGL from 'react-map-gl';

const MAPBOX_TOKEN = 'pk.eyJ1IjoibWlrZWR1d2VlIiwiYSI6ImNqbm00dndpZzA0NDczcm51b3Y5aG5uOXcifQ.N-ha9iC9A_qnLME7FtvSAg'; // Set your mapbox token here

function Map() {
  const [viewport, setViewport] = useState({
    latitude: 40.4,
    longitude: -3.7,
    zoom: 5,
    bearing: 0,
    pitch: 0
  });

  return (
    <div className="Map">
        <MapGL
        {...viewport}
        width= "100vw"
        height= "80vh"
        mapStyle="mapbox://styles/mapbox/dark-v9"
        onViewportChange={setViewport}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        />
    </div>
  );
}

export default Map;