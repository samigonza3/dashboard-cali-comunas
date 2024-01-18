import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet.js';
import { Typography } from '@mui/material';  // Importa IconButton de Material-UI
import LocationOnIcon from '@mui/icons-material/LocationOn';
import L from 'leaflet';
import ReactDOMServer from 'react-dom/server';

const GranLimonar = () => {
  
  const center = [3.44, -76.5303159];



  const markerCoordinates = [
    { lat: 3.4558323, lng:  -76.5256986 , label: 'Cine Quanon' },
    { lat: 3.4557832, lng:  -76.5302506 , label: 'Casa Mangle' },
    { lat: 3.392523, lng:  -76.5460429 , label: 'Oromo' },
    { lat: 3.4406607, lng:  -76.549231 , label: 'EnBiciArte' },
    { lat: 3.4095661, lng:  -76.5193826 , label: 'Cine Consciencia' },
    { lat: 3.4500471, lng:  -76.7071516 , label: 'Cinerrante' },
    { lat: 3.4529044, lng:  -76.5388781 , label: 'Cinestribos' },
    { lat: 3.4498315, lng:  -76.5387631 , label: 'Sala Audiovisual' },
    { lat: 3.4478189, lng:  -76.5412893 , label: 'Cafe Macondo' },
    { lat: 3.4447028, lng:  -76.5490525 , label: 'Los Cristales' },
    { lat: 3.4351843, lng:  -76.5447866 , label: 'Dulcencanto' },
    { lat: 3.4324338, lng:  -76.5480368 , label: 'Cinemandra' },
    { lat: 3.440148, lng:  -76.5356076 , label: 'La Negrona' },
  ];

  const locationOnIcon = L.divIcon({
    className: 'location-icon',
    html: ReactDOMServer.renderToString(<LocationOnIcon color="primary" fontSize="large" />),
  });
  
  // Modifica el tamaño del ícono, multiplicándolo por 2
  const doubleSize = 2;
  locationOnIcon.options.iconSize = [locationOnIcon.options.iconSize[0] * doubleSize, locationOnIcon.options.iconSize[1] * doubleSize];
  
  return (
    <>
      <Typography variant="h3" component="h4" color="primary" sx={{ marginTop: '20px' }}>
        Cineclubes de Cali
      </Typography>    
      <MapContainer center={center} zoom={12} style={{ height: '500px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='© OpenStreetMap contributors'
        />

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