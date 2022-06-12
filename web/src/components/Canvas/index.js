import React from 'react';
import Button from '../Button';

import { Container } from './styles';

const Canvas = (props) => {
  const { id, applyOperation, onMouseMove } = props

  return (
    <Container>
      <canvas id={id} onMouseMove={(event) => onMouseMove && onMouseMove(event)}></canvas>
      {applyOperation && <Button action={applyOperation}>Aplicar Operação</Button>}
    </Container>
  );
}

export default Canvas;