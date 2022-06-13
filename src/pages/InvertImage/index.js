import React from 'react';
import Canvas from '../../components/Canvas'
import * as S from './styles'
import {getImageDataFromImage} from '../../utils/getImageDataFromImage'
import { reRenderImage } from '../../utils/reRenderImage';
import { CANVAS_ID, MAX_COLOR } from '../../config/constants';

const InvertImage = () => {
  const CANVAS_ID_INVERT = 'photo-preview-invert'

  const invertImageOperation = () => {
    const imageData = getImageDataFromImage(CANVAS_ID)

    const data = imageData.data
    
    for (let i = 0; i < data.length; i += 4) {
      data[i] = MAX_COLOR - data[i]
      data[i+1] = MAX_COLOR - data[i+1]
      data[i+2] = MAX_COLOR - data[i+2]
    }
    
    reRenderImage(imageData, CANVAS_ID_INVERT)
  }
  
  return (
    <S.Container>
      <Canvas id={CANVAS_ID} applyOperation={invertImageOperation}/>
      <Canvas id={CANVAS_ID_INVERT} title="Imagem Invertida"/>
    </S.Container>
  )
}

export default InvertImage;