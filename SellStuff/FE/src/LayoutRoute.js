import React from "react";
import TopNav from "./LayoutComponents/TopNav";
import ResponsiveAppBar from "./LayoutComponents/Header";
import Footer from "./LayoutComponents/Footer";
import { Route } from 'react-router-dom';
import { Box } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { UserContext } from './UserContext';
import { grey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#00ADB5',
    },
    Secondary: {
      // This is green.A700 as hex.
      main: '#00ADB5',
    },
  },
});


function LayoutRoute(props) {
  return (

    <ThemeProvider theme={theme}>
      <Box
        sx={
          {
            display: 'flex',
            flexDirection: 'column',
            minheight: '100vh',
          }
        }>
        <TopNav />
        <ResponsiveAppBar {...props} />
        <Route path={props.path} exact={props.exact} component={props.component} />
        <Footer />
      </Box>
    </ThemeProvider>

  )
}

export default LayoutRoute