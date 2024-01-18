
import { Container, ThemeProvider, Grid, CssBaseline } from '@mui/material';
import GranLimonar from '../Maps/GranLimonar';
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
          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <GranLimonar />
              </Grid>
              <Grid item xs={6}>
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
            {/* <Concejo /> */}
          </Grid>
        </Grid>

      </Container>
    </ThemeProvider></>
  );
};

export default App;
