import React, { useState } from 'react';
import Canvas from '../../components/Canvas'
import Input from '../../components/Input'
import * as S from './styles'
import { CANVAS_ID } from '../../config/constants';
import { getImageDataFromImage } from '../../utils/getImageDataFromImage';
import { reRenderImage } from '../../utils/reRenderImage';

const DynamicScaleCompression = () => {
  const CANVAS_ID_DYNAMICSCALE = 'photo-preview-dynamicscale'

  const [gamma, setGamma] = useState(0.1)

  const dynamicScaleCompression = () => {
    const imageData = getImageDataFromImage(CANVAS_ID)

    const data = imageData.data
    
    for(let i=0; i < data.length; i+=4) {
        data[i]   = Math.round(255*((data[i]/255)**gamma))
        data[i+1] = Math.round(255*((data[i+1]/255)**gamma))
        data[i+2] = Math.round(255*((data[i+2]/255)**gamma))
    }

    reRenderImage(imageData, CANVAS_ID_DYNAMICSCALE)

  }
  
  return (
    <S.Container>
      <S.ContainerForm>
        <Canvas id={CANVAS_ID} applyOperation={dynamicScaleCompression}/>
        <Input label="γ" value={gamma} onChange={(event) => setGamma(event.target.value)} type="number"/>
      </S.ContainerForm>
      <Canvas id={CANVAS_ID_DYNAMICSCALE} title="S = c*r^y"/>
    </S.Container>
  )
}

export default DynamicScaleCompression;