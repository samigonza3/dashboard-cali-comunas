import { MapContainer, TileLayer, Polygon, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet.js';
import { Typography } from '@mui/material';  // Importa IconButton de Material-UI
import LocationOnIcon from '@mui/icons-material/LocationOn';
import L from 'leaflet';
import ReactDOMServer from 'react-dom/server';

const GranLimonar = () => {
  
  const center = [3.3951742596, -76.529816];

  const zona1 = [
    { lat: 3.397497, lng: -76.527832 },
    { lat: 3.397038, lng: -76.524221 },
    { lat: 3.392471, lng: -76.524474 },
    { lat: 3.392886, lng: -76.528138 },
  ];
  const zona2 = [
    { lat: 3.397853, lng: -76.532221 },
    { lat: 3.397420, lng: -76.527959 },
    { lat: 3.392911, lng: -76.528240 },
    { lat: 3.393268, lng: -76.532246 },
  
  ];

  const zona3 = [
    { lat: 3.397930, lng: -76.534926 },
    { lat: 3.397853, lng: -76.532425 },
    { lat: 3.391687, lng: -76.532562 },
    { lat: 3.392006, lng: -76.535369 },
  
  ];

  const zona4 = [
    { lat: 3.396904, lng: -76.540857 },
    { lat: 3.395761, lng: -76.540849 },
    { lat: 3.395894, lng: -76.5382 },
    { lat: 3.396851, lng: -76.538139 },
  
  ];


  const markerCoordinates = [
    { lat: 3.3953091387162466, lng: -76.53082652224637, label: 'Parque' },
    { lat: 3.3952639558878492, lng: -76.52963092757798, label: 'Parque' },
    { lat: 3.395728787005886, lng: -76.52981962392562, label: 'Iglesia' },
    { lat: 3.3953710, lng: -76.52699163390733, label: 'Parque' },
    { lat: 3.3948998156824968, lng: -76.52569032228432, label: 'Parque' },
    { lat: 3.395763, lng:  -76.539995 , label: 'Hueco' },
  ];

  const locationOnIcon = L.divIcon({
    className: 'location-icon',
    html: ReactDOMServer.renderToString(<LocationOnIcon color="primary" fontSize="large" />),
  });
  
  // Modifica el tamaño del ícono, multiplicándolo por 2
  const doubleSize = 3;
  locationOnIcon.options.iconSize = [locationOnIcon.options.iconSize[0] * doubleSize, locationOnIcon.options.iconSize[1] * doubleSize];
  
  return (
    <>
      <Typography variant="h3" component="h4" color="primary" sx={{ marginTop: '20px' }}>
        Barrio La Hacienda
      </Typography>    
      <MapContainer center={center} zoom={16} style={{ height: '500px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='© OpenStreetMap contributors'
        />

        <Polygon positions={zona1} color="blue" fillOpacity={0.2} />
        <Polygon positions={zona2} color="blue" fillOpacity={0.2} />
        <Polygon positions={zona3} color="blue" fillOpacity={0.2} />
        <Polygon positions={zona4} color="blue" fillOpacity={0.2} />

        {markerCoordinates.map((coordinate, index) => (
          <Marker key={index} position={[coordinate.lat, coordinate.lng]} icon={locationOnIcon}>
            <Popup>{coordinate.label}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
};

export default GranLimonar;