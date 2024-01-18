import React from 'react';
import { Typography, Paper, Card, CardContent, Grid, ThemeProvider } from '@mui/material';
import theme from '../Themes/theme.js';

const MetricsBox = ({ metric1, description1, metric2, description2, metric3, description3 }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Typography variant="h3" color="primary" sx={{ marginTop: '20px' }}>
          Datos Generales
        </Typography>
        <Paper elevation={3} style={{ padding: 30, marginTop: 0 }}>

          <Grid container spacing={2} sx={{ alignItems:'center', textAlign:'center' }}>
            <Grid item xs={12} sm={4}>
            <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h3" gutterBottom sx={{ color: '#35ae6b' }}>
                    {metric1}
                  </Typography>
                  <Typography variant="h5">
                    {description1}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={4}>
            <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h3" gutterBottom sx={{ color: '#35ae6b' }}>
                    {metric2}
                  </Typography>
                  <Typography variant="h5">
                    {description2}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h3" gutterBottom sx={{ color: '#35ae6b' }}>
                    {metric3}
                  </Typography>
                  <Typography variant="h5">
                    {description3}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Paper>
      </>
    </ThemeProvider>
  );
};

export default MetricsBox;
