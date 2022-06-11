import React from 'react';
import Button from '../Button';

import { Container } from './styles';

const Canvas = (props) => {
  const { id, applyOperation } = props
  return (
    <Container>
      <canvas id={id}></canvas>
      {applyOperation && <Button action={applyOperation}>Aplicar Operação</Button>}
    </Container>
  );
}

export default Canvas;