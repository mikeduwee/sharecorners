import React, {useState} from 'react';
import MapGL, {Popup} from 'react-map-gl';

import Pins from './pins';
import CityInfo from './city-info';


import CORNERS from '../.data/corners.json';

const MAPBOX_TOKEN = 'pk.eyJ1IjoibWlrZWR1d2VlIiwiYSI6ImNqbm00dndpZzA0NDczcm51b3Y5aG5uOXcifQ.N-ha9iC9A_qnLME7FtvSAg'; // Set your mapbox token here


function Map() {
  const [popupInfo, setPopupInfo] = useState();
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
      [
        <Pins data={CORNERS}
          onClick={(corner => setPopupInfo(corner))}
        />,
        popupInfo && (
          <Popup
            tipSize={5}
            anchor="top"
            longitude={popupInfo.longitude}
            latitude={popupInfo.latitude}
            closeOnClick={false}
            onClose={() =>setPopupInfo(null)}
          >
            <CityInfo info={popupInfo} />
          </Popup>
        )
      ]}
    </MapGL>
  );
}

export default Map;