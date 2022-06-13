import React from 'react';
import Button from '../Button';

import * as S from './styles';

const Canvas = (props) => {
  const { id, applyOperation, onMouseMove, title } = props

  return  (
    <S.Container>
      {title && <S.Title> {title} </S.Title>}
      <canvas 
      id={id} 
      onMouseMove={(event) => onMouseMove && onMouseMove(event)}
      >
      </canvas>
      {applyOperation && <Button action={applyOperation}>Aplicar Operação</Button>}
    </S.Container>
  );
}

export default Canvas;
