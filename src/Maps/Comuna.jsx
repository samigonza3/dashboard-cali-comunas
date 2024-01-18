import { Typography } from '@mui/material';
import React, { useState } from 'react';
import { MapContainer, TileLayer, Polygon, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import L from 'leaflet';
import ReactDOMServer from 'react-dom/server';


const Comuna = () => {
  const [selectedPolygon, setSelectedPolygon] = useState(null);

  const locationOnIcon = new L.divIcon({
    className: 'custom-location-icon',
    html: ReactDOMServer.renderToString(<LocationOnIcon fontSize="24px" color="secondary" />),
  });
  
  // Modifica el tamaño del ícono, multiplicándolo por 2
  const doubleSize = 3;
  locationOnIcon.options.iconSize = [locationOnIcon.options.iconSize[0] * doubleSize, locationOnIcon.options.iconSize[1] * doubleSize];
  

  // Coordenadas para la zona 1
  const zona1 = [
    { lat: 3.400107,  lng: -76.546400 },
    { lat: 3.399680,  lng: -76.542301 },
    { lat: 3.410256,  lng: -76.538681 },
    { lat: 3.405517,  lng: -76.522732 },
    { lat: 3.393571,  lng: -76.513318 },
    { lat: 3.388414,  lng: -76.510011 },
    { lat: 3.388186464199814, lng: -76.513385796698 },
    { lat: 3.363012,  lng: -76.513882 },
    { lat: 3.362812,  lng: -76.524399 },
    { lat: 3.374303,  lng: -76.524717 },
    { lat: 3.374371,  lng: -76.529179 },
    { lat: 3.367572,  lng: -76.529713 },
    { lat: 3.373610,  lng: -76.541772 },
    { lat: 3.398191,  lng: -76.546516 },
  ];

  const markerCoordinates = [
    { position: [3.3999617483659454, -76.53906928441614], label: 'Parque' },
    { position: [3.3972474, -76.5747762], label: 'Universidad' },
  ];

  const zona1Polygon = {
    positions: zona1,
    color: "#0000FF",
    weight: 3,
    fillColor: "#0000FF",
    fillOpacity: 0.35,
  };


  return (
    <>
    <Typography variant="h3" component="h4" color="primary">
      Comuna 17
      </Typography>    
      <MapContainer center={[3.3865264, -76.5303159]} zoom={13} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      <Polygon
        positions={zona1Polygon.positions}
        color={zona1Polygon.color}
        weight={zona1Polygon.weight}
        fillColor={zona1Polygon.fillColor}
        fillOpacity={zona1Polygon.fillOpacity}
        eventHandlers={{
          click: () => setSelectedPolygon(zona1Polygon),
        }}
      />

      {markerCoordinates.map((marker, index) => (
        <Marker key={index} position={marker.position} icon={locationOnIcon}>
          <Popup>{marker.label}</Popup>
        </Marker>
      ))}

      {selectedPolygon && (
        <Popup position={selectedPolygon.positions[0]}>
          Información de la zona 1
        </Popup>
      )}
    </MapContainer></>
  );
};

export default Comuna;
