import React from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';

import Theme from './theme';

const styles = ({ children }) => (
  <SCThemeProvider theme={Theme}>{children}</SCThemeProvider>
);

export default styles;