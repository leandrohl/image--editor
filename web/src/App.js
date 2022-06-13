/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import GlobalStyle from './theme/global';
import ThemeMain from './theme/themeMain';
import { BrowserRouter } from 'react-router-dom'
import RoutesDom from './routes'
import ContainerApp from './components/ContainerApp';
import { AppProvider } from './context/AppContext';

function App() {

  return (
    <ThemeMain>
      <AppProvider>
        <BrowserRouter>
          <ContainerApp>
            <RoutesDom />
          </ContainerApp>
        </BrowserRouter>
      </AppProvider>
      <GlobalStyle />
    </ThemeMain>
  );
}

export default App;



