import React from 'react';
import Canvas from '../../components/Canvas'
import * as S from './styles'
import { CANVAS_ID } from '../../config/constants';
import { getImageDataFromImage } from '../../utils/getImageDataFromImage';
import { getImageGrayscale } from '../../utils/getImageGrayscale';

const GrayscaleImage = () => {

  const grayscaleImageOperation = () => {
    const imageData = getImageDataFromImage(CANVAS_ID)

    getImageGrayscale(imageData, CANVAS_ID)

  }

  return (
    <S.Container>
      <Canvas id={CANVAS_ID} applyOperation={grayscaleImageOperation}/>
    </S.Container>
  )
}

export default GrayscaleImage;