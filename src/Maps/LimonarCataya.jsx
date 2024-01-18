import { MapContainer, TileLayer, Polygon, Marker, Popup, LayersControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet.js';
import { Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import L from 'leaflet';
import ReactDOMServer from 'react-dom/server';

const { BaseLayer, Overlay } = LayersControl;

const GranLimonar = () => {

  const center = [3.3984224839695862, -76.5401101741356];

  const zona1 = [
    { lat: 3.397988, lng: -76.542426 },
    { lat: 3.397003, lng: -76.542800 },
    { lat: 3.396984, lng: -76.540155 },
    { lat: 3.397991, lng: -76.540159 },
  ];
  const zona2 = [
    { lat: 3.397991, lng: -76.540159 },
    { lat: 3.397992, lng: -76.53808 },
    { lat: 3.396961, lng: -76.53813 },
    { lat: 3.396984, lng: -76.540155 },
  
  ];
  
  const zona3 = [
    { lat: 3.396934, lng: -76.542803 },
    { lat: 3.395594, lng: -76.543243 },
    { lat: 3.395761, lng: -76.540849 },
    { lat: 3.396904, lng: -76.540857 },
  
  ];
  const zona4 = [
    { lat: 3.396904, lng: -76.540857 },
    { lat: 3.395761, lng: -76.540849 },
    { lat: 3.395894, lng: -76.5382 },
    { lat: 3.396851, lng: -76.538139 },
  
  ];    

  const zona5 = [
    { lat: 3.401750, lng: -76.536947 },
    { lat: 3.401169, lng: -76.539551 },
    { lat: 3.398299, lng: -76.539521 },
    { lat: 3.398209, lng: -76.538058 },
  
  ];
  
const zona6 = [
  { lat: 3.400891, lng: -76.541519 },
  { lat: 3.401152, lng: -76.539555 },
  { lat: 3.398305, lng: -76.539599 },
  { lat: 3.398305, lng: -76.542336 },

];

  const markerCoordinates = [
    { lat: 3.396063275732282, lng: -76.54206818671648, label: 'Parque Cataya' },
    { lat: 3.3964381254899467, lng: -76.54014236064378, label: 'Parque Limonar' },
    { lat: 3.3977494446551546, lng: -76.53913693210097, label: 'Parque Cra. 66' },
    { lat: 3.3999733557797853, lng: -76.53903799405079, label: 'Parque El Limonar' },
    { lat: 3.3972199545161264, lng: -76.53917676539842, label: 'Iglesia Nuestra Sra. del Camino' },
    { lat: 3.3966741371725355, lng: -76.5403328438722, label: 'Parque Javier Adad' },
    { lat: 3.395763, lng: -76.539995, label: 'Hueco' },
    { lat: 3.397487704037055, lng: -76.54011553855364, label: 'Hueco' },
    { lat: 3.396983797409074, lng: -76.54011553855364, label: 'Hueco' },
    { lat: 3.39588254799276, lng: -76.53838544888312, label: 'Hueco' },
  ];

  const locationOnIcon = L.divIcon({
    className: 'location-icon',
    html: ReactDOMServer.renderToString(<LocationOnIcon color="primary" fontSize="large" />),
  });

  const doubleSize = 3;
  locationOnIcon.options.iconSize = [locationOnIcon.options.iconSize[0] * doubleSize, locationOnIcon.options.iconSize[1] * doubleSize];

  const markersGroup = (
    <Overlay name="Huecos">
      {markerCoordinates.map((coordinate, index) => (
        <Marker key={index} position={[coordinate.lat, coordinate.lng]} icon={locationOnIcon}>
          <Popup>{coordinate.label}</Popup>
        </Marker>
      ))}
    </Overlay>
  );

  return (
    <>
      <Typography variant="h3" component="h4" color="primary" sx={{ marginTop: '20px' }}>
        Barrio Gran Limonar - Cataya
      </Typography>
      <MapContainer center={center} zoom={16} style={{ height: '500px', width: '100%' }}>
        <LayersControl position="topright">
          <BaseLayer checked name="OpenStreetMap">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='© OpenStreetMap contributors'
            />
          </BaseLayer>
              <Polygon positions={zona1} color="blue" fillOpacity={0.2} />
              <Polygon positions={zona2} color="blue" fillOpacity={0.2} />
              <Polygon positions={zona3} color="blue" fillOpacity={0.2} />
              <Polygon positions={zona4} color="blue" fillOpacity={0.2} />
              <Polygon positions={zona5} color="blue" fillOpacity={0.2} />
              <Polygon positions={zona6} color="blue" fillOpacity={0.2} />
          <Overlay name="Huecos">
            {markerCoordinates.map((coordinate, index) => (
              <Marker key={index} position={[coordinate.lat, coordinate.lng]} icon={locationOnIcon}>
                <Popup>{coordinate.label}</Popup>
              </Marker>
            ))}
          </Overlay>
        </LayersControl>
      </MapContainer>
    </>
  );
};

export default GranLimonar;
