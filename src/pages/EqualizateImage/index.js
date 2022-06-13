import React from 'react';
import Canvas from '../../components/Canvas';
import { CANVAS_ID } from '../../config/constants';
import { getImageDataFromImage } from '../../utils/getImageDataFromImage';
import { reRenderImage } from '../../utils/reRenderImage';

import * as S from './styles';

function EqualizateImage() {
  const CANVAS_ID_EQUALIZATE = 'photo-preview-equalize'

  const applyEqualizate = () => {
    const imageData = getImageDataFromImage(CANVAS_ID)

    const data = imageData.data
    let gray

    for(let i = 0; i < data.length; i+=4) {
        gray = data[i] !== data[i+1] || data[i] !== data[i+2]
            ? Math.round((0.299*data[i] + 0.587*data[i+1] + 0.114*data[i+2]) / 3)
            : data[i]
        data[i]   = gray
        data[i+1] = gray
        data[i+2] = gray
    }

    reRenderImage(imageData, CANVAS_ID_EQUALIZATE)
  }
  
  return (
    <S.Container>
      <Canvas id={CANVAS_ID} applyOperation={applyEqualizate}/>
      <Canvas id={CANVAS_ID_EQUALIZATE} title="Resultado da Equalização" />
    </S.Container>
  )
}

export default EqualizateImage;