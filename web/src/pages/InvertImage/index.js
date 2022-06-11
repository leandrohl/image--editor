import React from 'react';
import Canvas from '../../components/Canvas'
import * as S from './styles'
import {getImageDataFromImage} from '../../utils/getImageDataFromImage'
import { reRenderImage } from '../../utils/reRenderImage';
import { CANVAS_ID, MAX_COLOR_RGB } from '../../config/constants';

const InvertImage = () => {


  const invertImageOperation = () => {
    const imageData = getImageDataFromImage(CANVAS_ID)

    const data = imageData.data
    
    for (let i = 0; i < data.length; i += 4) {
      data[i] = MAX_COLOR_RGB - data[i]
      data[i+1] = MAX_COLOR_RGB - data[i+1]
      data[i+2] = MAX_COLOR_RGB - data[i+2]
    }
    
    reRenderImage(imageData, CANVAS_ID)
  }
  
  return (
    <S.Container>
      <Canvas id={CANVAS_ID} applyOperation={invertImageOperation}/>
    </S.Container>
  )
}

export default InvertImage;