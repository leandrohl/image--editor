import React from 'react';
import Canvas from '../../components/Canvas'
import * as S from './styles'
import { CANVAS_ID } from '../../config/constants';
import { getImageDataFromImage } from '../../utils/getImageDataFromImage';
import { reRenderImage } from '../../utils/reRenderImage';

const GrayscaleImage = () => {
  const CANVAS_ID_GRAYSCALE = 'photo-preview-grayscale'

  const grayscaleImageOperation = () => {
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

    reRenderImage(imageData, CANVAS_ID_GRAYSCALE)
  }

  return (
    <S.Container>
      <Canvas id={CANVAS_ID} applyOperation={grayscaleImageOperation}/>
      <Canvas id={CANVAS_ID_GRAYSCALE} title="Imagem em tons de cinza" />
    </S.Container>
  )
}

export default GrayscaleImage;