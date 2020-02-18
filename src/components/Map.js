import React, {useState} from 'react';
import MapGL, {Popup, Marker} from 'react-map-gl';

const MAPBOX_TOKEN = 'pk.eyJ1IjoibWlrZWR1d2VlIiwiYSI6ImNqbm00dndpZzA0NDczcm51b3Y5aG5uOXcifQ.N-ha9iC9A_qnLME7FtvSAg'; // Set your mapbox token here

function Map() {
  const [visiblePopup, setPopup] = useState(true)
  const [viewport, setViewport] = useState({
    latitude: 40.4,
    longitude: -3.7,
    zoom: 5,
    bearing: 0,
    pitch: 0,
    showPopup: true
  });
  return (
    <MapGL
      {...viewport}
      width="100vw"
      height="75vh"
      mapStyle="mapbox://styles/mapbox/dark-v9"
      onViewportChange={setViewport}
      mapboxApiAccessToken={MAPBOX_TOKEN}
    >
      {
      [visiblePopup && <Popup
          latitude={40.4}
          longitude={-3.7}
          closeButton={true}
          closeOnClick={true}
          onClose={() => setPopup(false)}
          anchor="top" >
          <div>Popup1</div>
        </Popup>,
        <Popup
          latitude={41.4}
          longitude={-3.9}
          closeButton={false}
          closeOnClick={false}
          anchor="top" >
          <div>Popup2</div>
        </Popup>,
        <Marker 
          latitude={39.78}
          longitude={-3.4} 
          offsetLeft={-20} 
          offsetTop={-10}
          draggable={true}>
          <div>Marker</div>
        </Marker>
      
      ]}
    </MapGL>
  );
}

export default Map;