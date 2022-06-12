import React from 'react';
import MenuLateral from '../MenuLateral';

import * as S from './styles';

function ContainerApp({ children }) {
  return (
    <S.Container>
      <S.Menu>
        <MenuLateral />
      </S.Menu>
      <S.Body>
        { children }
      </S.Body>
    </S.Container>
  );
}

export default ContainerApp;