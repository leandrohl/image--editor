import React from 'react';
import { useApp } from '../../context/AppContext';
import MenuLateral from '../MenuLateral';
import ModalRGBHSL from '../ModalRGBHSL';


import * as S from './styles';

function ContainerApp({ children }) {
  const { openModalHSLRGB } = useApp()

  return (
    <S.Container>
      <S.Menu>
        <MenuLateral />
      </S.Menu>
      <S.Body>
        { children }
      </S.Body>
      {openModalHSLRGB && <ModalRGBHSL /> }
    </S.Container>
  );
}

export default ContainerApp;