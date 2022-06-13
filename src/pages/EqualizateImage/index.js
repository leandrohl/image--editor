import React from 'react';
import Canvas from '../../components/Canvas';
import { CANVAS_ID } from '../../config/constants';
import { getImageDataFromImage } from '../../utils/getImageDataFromImage';
import { reRenderImage } from '../../utils/reRenderImage';

import * as S from './styles';

function EqualizateImage() {
  const CANVAS_ID_EQUALIZATE = 'photo-preview-equalize'

  const equalizateImage = () => {
    const imageData = getImageDataFromImage(CANVAS_ID)
    
    reRenderImage(imageData, CANVAS_ID_EQUALIZATE)
  }
  
  return (
    <S.Container>
      <Canvas id={CANVAS_ID} applyOperation={equalizateImage}/>
      <Canvas id={CANVAS_ID_EQUALIZATE} title="Resultado da Equalização" />
    </S.Container>
  )
}

export default EqualizateImage;