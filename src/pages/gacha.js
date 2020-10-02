import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import CatContextProvider from '../context/catContextProvider';
import MyCatFloatingNav from '../components/myCatFloatingNav';
import GachaCatWithNoContext from '../components/gachaCatWithNoContext';
import MyCat from './gacha/mycat';
import GachaCard from './gacha/gachaCard';
import { Router } from "@reach/router"

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const GachaCat = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <div style={{ background: 'black', height: '100vh', width: '100vw' }}>
        <CatContextProvider>
          <MyCatFloatingNav />
          <Router basepath="gacha">
            <GachaCard path="/" />
            <MyCat path="mycat" />
            <GachaCatWithNoContext path="test" />
          </Router>
        </CatContextProvider>
      </div>
    </ThemeProvider>
  );
}

export default GachaCat;