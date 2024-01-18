import React from 'react';
import { Container, ThemeProvider, Grid, CssBaseline } from '@mui/material';
import Comuna from '../Maps/Comuna';
import Concejo from '../Pages/Concejo';
import MetricsBox from '../Components/MetricsBox';
import theme from '../Themes/theme.js';
import DenunciasList from '../Components/DenunciasList';

const App = () => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Container>
          <Grid container spacing={3}>
            {/* Columna izquierda */}
            <Grid item xs={12} md={6}>
              <Comuna />
            </Grid>
            {/* Columna derecha */}
            <Grid item xs={12} md={6}>
              <Concejo />
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <MetricsBox
                    metric1={144.520}
                    description1={'Habitantes'}
                    metric2={'133 Hab./Hect.'}
                    description2={'Densidad'}
                    metric3={'1.255 Hec.'}
                    description3={'Superficie'}
                  />
                  <DenunciasList />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default App;
