import React, { useState } from 'react';
import Canvas from '../../components/Canvas'
import * as S from './styles'
import { CANVAS_ID } from '../../config/constants';
import { getImageDataFromImage } from '../../utils/getImageDataFromImage';
import { reRenderImage } from '../../utils/reRenderImage';

const SaltAndPepper = () => {
  const [ rate, setRate ] = useState(10)

  const applySaltAndPepper = () => {
    const imageData = getImageDataFromImage(CANVAS_ID)

    const data = imageData.data
    const area = imageData.height * imageData.width
    const total = Math.round(area * (rate/100))
    let count = 0
    let noise

    for(let i = 0; i < data.length || count >= total; i+=4) {
        if(Math.random()*100 > rate) continue
        
        count++
        noise = Math.random()*255 < 127 ? 0 : 255

        data[i]   = noise
        data[i+1] = noise
        data[i+2] = noise
    }
    reRenderImage(imageData, CANVAS_ID)
  }
  
  return (
    <S.Container>
      <Canvas id={CANVAS_ID} applyOperation={applySaltAndPepper}/>
    </S.Container>
  )
}

export default SaltAndPepper;