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

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <div style={{ background: 'black', height: '100vh', width: '100vw' }}>
        <CatContextProvider>
          <MyCatFloatingNav />
          <Router basepath="/app">
            <GachaCatWithNoContext path="/test" />
            <GachaCard path="/gacha" />
            <MyCat path="/mycat" />
          </Router>
        </CatContextProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;