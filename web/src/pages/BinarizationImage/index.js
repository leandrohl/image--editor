import React from 'react';
import Canvas from '../../components/Canvas'
import * as S from './styles'
import {getImageDataFromImage} from '../../utils/getImageDataFromImage'
import { reRenderImage } from '../../utils/reRenderImage';
import { CANVAS_ID, MAX_COLOR } from '../../config/constants';

const BinarizationImage = () => {
  const CANVAS_ID_BINARIZATION = 'photo-preview-binarization'

  const binarizationImage = () => {
    const imageData = getImageDataFromImage(CANVAS_ID)

    const data = imageData.data
    let s = 128
    
    for (let i = 0; i < data.length; i += 4) {
      if (data[i] < s) {
        data[i] = 0
        data[i+1] = 0
        data[i+2] = 0
      } else {
        data[i] = MAX_COLOR
        data[i+1] = MAX_COLOR
        data[i+2] = MAX_COLOR
      }
    }
    
    reRenderImage(imageData, CANVAS_ID_BINARIZATION)
  }
  
  return (
    <S.Container>
      <Canvas id={CANVAS_ID} applyOperation={binarizationImage}/>
      <Canvas id={CANVAS_ID_BINARIZATION} title="Resultado da binarização" />
    </S.Container>
  )
}

export default BinarizationImage;