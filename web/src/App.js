/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import GlobalStyle from './theme/global';
import ThemeMain from './theme/themeMain';
import { BrowserRouter } from 'react-router-dom'
import RoutesDom from './routes'

function App() {

  return (
    <ThemeMain>
      <BrowserRouter>
        <Header />
        <RoutesDom />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeMain>
  );
}

export default App;



