
import { Container, ThemeProvider, Grid, CssBaseline } from '@mui/material';
import Cineclubes from '../Maps/Cineclubes';
import MetricsBox from '../Components/MetricsBox';
import theme from '../Themes/theme.js';
import DenunciasList from '../Components/DenunciasList';
import List from '../Components/List';

const App = () => {
  return (
    <>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <Container>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Cineclubes />
                <List title="Lista de Cineclubes" campos={['Cine Quanon', 'Casa Mangle', 'Cinestribos', 'Cine Café', 'Café Macondo', 'La Negrona', 'Teatro Los Cristales', 'EnBiciArte', 'Dulcencanto', 'Cinemandra', 'Cine Consciencia', 'Fanscineros', 'Cinerrante', 'La Truca', 'DeBorondo', 'Cali Terror']} />
              </Grid>
              <Grid item xs={12} md={6}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                  <MetricsBox
                    metric1={'2.343'}
                    description1={'Habitantes'}
                    metric2={'133 Hab./Hect.'}
                    description2={'Densidad'}
                    metric3={'18 Hec.'}
                    description3={'Superficie'}
                  />                    <DenunciasList />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
          </Grid>
        </Grid>

      </Container>
    </ThemeProvider></>
  );
};

export default App;
