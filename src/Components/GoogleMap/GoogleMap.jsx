import React from 'react';
import GoogleMapReact from 'google-map-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const AnyReactComponent = ({ text }) => (
    <div className="map-marker">
        <FontAwesomeIcon icon={faLocationDot} className="icon" />
        {text}
    </div>
);

const GoogleMap = () => {

    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627,
        },
        zoom: 11,
    };


    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                    lat={defaultProps.center.lat}
                    lng={defaultProps.center.lng}
                    text="Trinitwin"
                />
            </GoogleMapReact>
        </div>
    );
};

export default GoogleMap;
