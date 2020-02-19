import React, {PureComponent} from 'react';
import {Marker} from 'react-map-gl';

class Markers extends PureComponent {
    render() {
      const {data} = this.props;
      return data.map(
          city => <Marker
          key={city.name}
          longitude={city.longitude}
          latitude={city.latitude} >
              {city.icon}
            {/* <img src="pin.png" /> */}
        </Marker>
      )
    }
}

export default Markers;