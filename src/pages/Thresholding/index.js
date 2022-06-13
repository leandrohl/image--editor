import React, { useState } from 'react';
import Canvas from '../../components/Canvas';
import { CANVAS_ID, MAX_COLOR } from '../../config/constants';
import { getImageDataFromImage } from '../../utils/getImageDataFromImage';
import { reRenderImage } from '../../utils/reRenderImage';
import Input from '../../components/Input';

import * as S from './styles'
import { getImageGrayscale } from '../../utils/getImageGrayscale';

function Thresholding() {
  const CANVAS_ID_THRESHOLDING = 'photo-preview-thresholding'

  const [limiar, setLimiar] = useState(0)

  const thresholdingImage = () => {
    const imageData = getImageDataFromImage(CANVAS_ID)

    let grayscaleData = getImageGrayscale(imageData);

    let data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      if (grayscaleData[i] < limiar) {
        data[i] = 0
        data[i+1] = 0
        data[i+2] = 0
      } else {
        data[i] = MAX_COLOR
        data[i+1] = MAX_COLOR
        data[i+2] = MAX_COLOR
      }
    }
    
    reRenderImage(imageData, CANVAS_ID_THRESHOLDING)
  }

  return (
    <S.Container>
      <S.ContainerForm>
        <Canvas id={CANVAS_ID} applyOperation={thresholdingImage}/>
        <Input label="Limiar" value={limiar} onChange={(event) => setLimiar(event.target.value)} type="number" />
      </S.ContainerForm>
      <Canvas id={CANVAS_ID_THRESHOLDING} title="Limirização da imagem"/>
    </S.Container>
  );
}

export default Thresholding;