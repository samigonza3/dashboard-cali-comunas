import { MapContainer, TileLayer, Polygon, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet.js';
import { Typography } from '@mui/material';  // Importa IconButton de Material-UI
import LocationOnIcon from '@mui/icons-material/LocationOn';
import L from 'leaflet';
import ReactDOMServer from 'react-dom/server';

const GranLimonar = () => {
  
  const center = [3.3973428929748386, -76.54360095568084];

  // Define coordenadas para los polígonos
  const zona1 = [
    [3.400461, -76.546166],
    [3.400963, -76.541977],
    [3.398312, -76.542924],
    [3.398334, -76.546174],
  ];

  const zona2 = [
    { lat: 3.398098, lng: -76.546153 },
    { lat: 3.398119, lng: -76.543020 },
    { lat: 3.395552, lng: -76.543838 },
    { lat: 3.395410, lng: -76.545853 },
  
  ];

  const zona3 = [
    { lat: 3.395332, lng: -76.545841 },
    { lat: 3.395483, lng: -76.543854 },
    { lat: 3.392591, lng: -76.544832 },
    { lat: 3.392598, lng: -76.545379 },
  
  ];


  const markerCoordinates = [
    { lat: 3.397620305680829, lng: -76.54450006000526, label: 'Parque La 66' },
    { lat: 3.3972199545161264, lng: -76.53917676539842, label: 'Iglesia Nuestra Sra. del Camino' },
    { lat: 3.3966741371725355, lng: -76.5403328438722, label: 'Parque Javier Adad' },
    { lat: 3.395763, lng:  -76.539995 , label: 'Hueco' },
    { lat: 3.397487704037055, lng:  -76.54011553855364 , label: 'Hueco' },
    { lat: 3.396983797409074, lng:  -76.54011553855364 , label: 'Hueco' },
    { lat: 3.39588254799276, lng:  -76.53838544888312 , label: 'Hueco' },
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
        Barrio Gran Limonar
      </Typography>    
      <MapContainer center={center} zoom={16} style={{ height: '500px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='© OpenStreetMap contributors'
        />

        <Polygon positions={zona1} color="blue" fillOpacity={0.2} />
        <Polygon positions={zona2} color="blue" fillOpacity={0.2} />
        <Polygon positions={zona3} color="blue" fillOpacity={0.2} />

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