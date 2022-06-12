import React from 'react';
import Canvas from '../../components/Canvas';
import { CANVAS_ID } from '../../config/constants';

import * as S from './styles';

function Filters() {
  const CANVAS_ID_MAIN = 'photo-preview-red'
  const CANVAS_ID_MEDIAN = 'photo-preview-green'

  ////////////////////////////////////////////////////////////////

  const filterMain = () => {
    // const imageData = getImageDataFromImage(CANVAS_ID)

    // const data = imageData.data

    // for (let i = 0; i < data.length; i += 4) {
    //   data[i] = 0
    //   data[i+2] = 0
    // }

    // reRenderImage(imageData, CANVAS_ID_GREEN)
  }

  const filterMedian = () => {
    // const imageData = getImageDataFromImage(CANVAS_ID)

    // const data = imageData.data

    // for (let i = 0; i < data.length; i += 4) {
    //   data[i] = 0
    //   data[i+1] = 0
    // }

    // reRenderImage(imageData, CANVAS_ID_BLUE)
  }

  const filterImage = () => {
    filterMain()
    filterMedian()
  }

  
  return (
    <S.Container>
      <Canvas id={CANVAS_ID} applyOperation={filterImage}/>
      <S.Filters>
        <Canvas id={CANVAS_ID_MAIN} />
        <Canvas id={CANVAS_ID_MEDIAN} />
      </S.Filters>
    </S.Container>
  );
}

export default Filters;