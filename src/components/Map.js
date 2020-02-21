import React, {useState} from 'react';
import MapGL, {Popup, Marker} from 'react-map-gl';

import Restaurant from './Restaurant'
import Markers from './Markers'
import RecipeReviewCard from './Card'
import logo from '../img/logo.svg';
import Pins from './pins';
import CityInfo from './city-info';

const CITIES = [
  {"city":"New York","population":"8,175,133","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Above_Gotham.jpg/240px-Above_Gotham.jpg","state":"New York","latitude":41.4,"longitude":-3.9},
  {"city":"Los Angeles","population":"3,792,621","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/5/57/LA_Skyline_Mountains2.jpg/240px-LA_Skyline_Mountains2.jpg","state":"California","latitude":40.9,"longitude":-3.8},
]
const MAPBOX_TOKEN = 'pk.eyJ1IjoibWlrZWR1d2VlIiwiYSI6ImNqbm00dndpZzA0NDczcm51b3Y5aG5uOXcifQ.N-ha9iC9A_qnLME7FtvSAg'; // Set your mapbox token here


const RESTAURANTS=[
  {name:'fff',latitude:41.4, longitude:-3.9, icon:<img src={logo} alt="logo" />},
  {name:'fff',latitude:40.9, longitude:-3.8, icon:Restaurant}
]


function Map() {
  const [visiblePopup, setPopup] = useState(true)
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
        <Markers data={RESTAURANTS} />,
        <Pins data={CITIES}
          onClick={(city => setPopupInfo(city))}
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
        // <Restaurant 
        //   latitude={41.4}
        //   longitude={-3.9} 
        //   draggable={true}>
        //   <div>Marker</div>
        // </Restaurant>
      
      ]}
    </MapGL>
  );
}

export default Map;