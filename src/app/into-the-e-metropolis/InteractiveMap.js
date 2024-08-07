import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import PropTypes from 'prop-types';

// Custom icon for the map markers
const icon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const InteractiveMap = ({ pins, mapboxToken }) => {
  const [selectedPin, setSelectedPin] = useState(null);

  const handleClick = (pin) => {
    setSelectedPin(pin);
  };

  const handleClose = () => {
    setSelectedPin(null);
  };

  return (
    <div style={{ position: 'relative', height: '100vh', width: '100vw' }}>
      {/* Map */}
      <MapContainer
        center={[5.1053, -1.2773]} // Approximate coordinates of Pedu, Cape Coast
        zoom={15}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token=${mapboxToken}`}
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors &copy; <a href='https://www.mapbox.com/about/maps/'>Mapbox</a>"
        />
        {pins.map((pin, index) => (
          <Marker
            key={index}
            position={pin.position}
            icon={icon}
            eventHandlers={{
              click: () => handleClick(pin),
            }}
          >
            <Popup>{pin.label}</Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Overlay for Pin Content */}
      {selectedPin && (
        <div
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'white',
            padding: '15px',
            borderRadius: '5px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
            maxWidth: '300px',
            zIndex: 1000,
          }}
        >
          <button onClick={handleClose} style={{ float: 'right', border: 'none', background: 'transparent', fontSize: '18px', cursor: 'pointer' }}>&times;</button>
          <h2>{selectedPin.label}</h2>
          <img src={selectedPin.image} alt={selectedPin.label} style={{ width: '100%', marginBottom: '10px' }} />
          <p>{selectedPin.description}</p>
        </div>
      )}
    </div>
  );
};

InteractiveMap.propTypes = {
  pins: PropTypes.arrayOf(
    PropTypes.shape({
      position: PropTypes.arrayOf(PropTypes.number).isRequired, // [latitude, longitude]
      label: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  mapboxToken: PropTypes.string.isRequired, // Mapbox Access Token
};

export default InteractiveMap;