import React from 'react';
import { Container, CssBaseline, ThemeProvider, Grid } from '@mui/material';
import Sidebar from './Components/Sidebar';
import GranLimonar from './Maps/GranLimonar';
import Concejo from './Pages/Concejo';
import MetricsBox from './Components/MetricsBox';
import theme from './Themes/theme.js';
import DenunciasList from './Components/DenunciasList'
import Home from './Pages/Home';
import Test from './Pages/Test';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
            <Sidebar />
    </ThemeProvider>
  );
};

export default App;
