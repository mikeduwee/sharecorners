import React from 'react';
import {Marker} from 'react-map-gl';

function Restaurant(draggable=false, latitude=41.4, longitude=-3.9, content='XXX') {

    return(
        // TODO: hacer que coja como valor inicial latitude y longitud
        <Marker 
            latitude={latitude}
            longitude={longitude} 
            offsetLeft={-20} 
            offsetTop={-10}
            draggable={draggable}>
            <h2>{content}</h2>
        </Marker>
    )
}


export default Restaurant;