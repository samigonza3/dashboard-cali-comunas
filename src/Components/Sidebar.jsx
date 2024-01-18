import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import MovieIcon from '@mui/icons-material/Movie';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import SettingsIcon from '@mui/icons-material/Settings';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import { Container } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../Themes/theme';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';

import Home from '../Pages/Home';
import Concejo from '../Pages/Concejo'
import GranLimonar from '../Pages/GranLimonar'
import LaHacienda from '../Pages/LaHacienda'
import LimonarCataya from '../Pages/LimonarCataya'
import Cineclubes from '../Pages/Cineclubes'

const drawerWidth = 240;

const Sidebar = () => {
  const menuItems = [
    { text: 'Home', icon: <HomeIcon />, link: '/' },
    {
      text: 'Barrios',
      icon: <LocationCityIcon />,
      link: '#',
      items: [
        { text: 'La Hacienda', link: '/la-hacienda' },
        { text: 'Gran Limonar', link: '/gran-limonar' },
        { text: 'Gran Limonar-Cataya', link: '/gran-limonar-cataya' },
      ],
    },
    { text: 'Cineclubes', icon: <MovieIcon />, link: '/cineclubes' },
    {
      text: 'Elecciones Regionales 2023',
      icon: <HowToVoteIcon />,
      link: '/Pages/Elecciones',
      items: [
        { text: 'Alcaldía', link: '/Pages/Alcaldia' },
        { text: 'Concejo', link: '/concejo' },
        { text: 'JAL', link: '/Pages/JAL' },
      ],
    },
    { text: 'Configuración', icon: <SettingsIcon />, link: '/Pages/Configuracion' },
  ];

  const [openMenu, setOpenMenu] = React.useState(null);

  const handleMenuToggle = (index) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ justifyContent: 'start', alignItems: 'flex-start', marginLeft: '0px', marginTop: '0px', backgroundColor: '#262a34', height: '100vh' }}>
        <Toolbar />
        <List>
          {menuItems.map((item, index) => (
            <React.Fragment key={index}>
              {item.items ? (
                <>
                  <ListItemButton onClick={() => handleMenuToggle(index)}>
                    {item.icon}
                    <ListItemText primary={item.text} sx={{ marginLeft: '4px' }} />
                  </ListItemButton>
                  <Collapse in={openMenu === index} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {item.items.map((subItem, subIndex) => (
                        <ListItem key={subIndex} disablePadding>
                          <ListItemButton component={Link} to={subItem.link}>
                            <ListItemText primary={subItem.text} sx={{ marginLeft: '16px' }} />
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                </>
              ) : (
                index === menuItems.length - 1 ? (
                  <>
                    <Divider sx={{ backgroundColor: '#39404d' }} />
                    <ListItemButton component={Link} to={item.link}>
                      {item.icon}
                      <ListItemText primary={item.text} sx={{ marginLeft: '4px' }} />
                    </ListItemButton>
                  </>
                ) : (
                  <ListItemButton component={Link} to={item.link}>
                    {item.icon}
                    <ListItemText primary={item.text} sx={{ marginLeft: '4px' }} />
                  </ListItemButton>
                )
              )}
            </React.Fragment>
          ))}
        </List>
      </Container>
    </ThemeProvider>
  );
};

const ResponsiveDrawer = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Router>
      <Box>
        <CssBaseline />
        <AppBar sx={{ marginBottom: '100px', width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h2" color="secondary" sx={{ marginTop: '20px' }}>
              Dashboard Cali Comunas
            </Typography>
          </Toolbar>
        </AppBar>
        <Box component="nav" sx={{ width: { sm: drawerWidth } }}>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            sx={{
              backgroundColor: '#262a34',
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { width: drawerWidth },
            }}
          >
            <Sidebar />
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              backgroundColor: '#262a34',
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { width: drawerWidth },
            }}
          >
            <Sidebar />
          </Drawer>
        </Box>

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/concejo' element={<Concejo />} />
          <Route path='/gran-limonar' element={<GranLimonar />} />
          <Route path='/la-hacienda' element={<LaHacienda />} />
          <Route path='/gran-limonar-cataya' element={<LimonarCataya />} />
          <Route path='/cineclubes' element={<Cineclubes />} />
        </Routes>
      </Box>
    </Router>
  );
};

export default ResponsiveDrawer;
