import React from 'react';
import Header from '../Header';

import * as S from './styles';

function ContainerApp({ children }) {
  return (
    <S.Container>
      <Header />
      <S.Body>
        { children }
      </S.Body>
    </S.Container>
  );
}

export default ContainerApp;