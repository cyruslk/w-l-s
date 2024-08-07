'use client';

import React from 'react';
import InteractiveMap from './InteractiveMap';

const pinsData = [
  {
    position: [5.106, -1.278], // Example coordinates
    label: 'Scrap Dealers',
    image: '/images/place1.jpg',
    description: 'hhhh-This is a description for Place 1.',
  },
  {
    position: [5.107, -1.279],
    label: 'Place 2',
    image: '/images/place2.jpg',
    description: 'This is a description for Place 2.',
  },
  {
    position: [5.108, -1.280],
    label: 'Place 3',
    image: '/images/place3.jpg',
    description: 'This is a description for Place 3.',
  },
];

const NewPage = () => {
  const mapboxToken = 'YOUR_MAPBOX_ACCESS_TOKEN'; // Replace with your Mapbox access token
  return (
    <div>
      <InteractiveMap pins={pinsData} mapboxToken={mapboxToken} />;
    </div>
  );
};

export default NewPage;