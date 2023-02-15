import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import { Redirect, Route } from 'react-router-dom';
import Footer from "./LayoutComponents/Footer";
import { UserContext } from './UserContext';
import ResponsiveAppBar from "./LayoutComponents/Header";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#00ADB5',
    },
    Secondary: {
      // This is green.A700 as hex.
      main: '#00897b',
    },
  },
});


function GuestLayoutRoute(props) {
  const { loggedIn } = useContext(UserContext);
  if (!loggedIn) {
    return (
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
          }}>
          <ResponsiveAppBar {...props} />
          <Route path={props.path} exact={props.exact} component={props.component} />
          <Footer />
        </Box>
      </ThemeProvider>
    )
  } else {
    return (
      <Redirect to={'/'} />

    )
  }
}

export default GuestLayoutRoute;