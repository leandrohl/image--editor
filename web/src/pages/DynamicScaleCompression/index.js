import React from 'react';
import Canvas from '../../components/Canvas'
import * as S from './styles'
import { CANVAS_ID } from '../../config/constants';

const DynamicScaleCompression = () => {
  const dynamicScaleCompression = () => {
  }
  
  return (
    <S.Container>
      <Canvas id={CANVAS_ID} applyOperation={dynamicScaleCompression}/>
    </S.Container>
  )
}

export default DynamicScaleCompression;