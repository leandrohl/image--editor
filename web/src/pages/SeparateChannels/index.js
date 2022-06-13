import React from 'react';
import Canvas from '../../components/Canvas';
import { CANVAS_ID } from '../../config/constants';
import { getImageDataFromImage } from '../../utils/getImageDataFromImage';
import { reRenderImage } from '../../utils/reRenderImage';

import * as S from './styles';

function SeparateChannels() {
  const CANVAS_ID_RED = 'photo-preview-red'
  const CANVAS_ID_GREEN = 'photo-preview-green'
  const CANVAS_ID_BLUE = 'photo-preview-blue'

  const separateChannelRed = () => {
    const imageData = getImageDataFromImage(CANVAS_ID)

    const data = imageData.data

    for (let i = 0; i < data.length; i += 4) {
      data[i+1] = 0
      data[i+2] = 0
    }

    reRenderImage(imageData, CANVAS_ID_RED)
  }

  const separateChannelGreen = () => {
    const imageData = getImageDataFromImage(CANVAS_ID)

    const data = imageData.data

    for (let i = 0; i < data.length; i += 4) {
      data[i] = 0
      data[i+2] = 0
    }

    reRenderImage(imageData, CANVAS_ID_GREEN)
  }

  const separateChannelBlue = () => {
    const imageData = getImageDataFromImage(CANVAS_ID)

    const data = imageData.data

    for (let i = 0; i < data.length; i += 4) {
      data[i] = 0
      data[i+1] = 0
    }

    reRenderImage(imageData, CANVAS_ID_BLUE)
  }

  const separateChannelsOperation = () => {
    separateChannelRed()
    separateChannelGreen()
    separateChannelBlue()
  }

  return (
    <S.Container>
      <Canvas id={CANVAS_ID} applyOperation={separateChannelsOperation}/>
      <S.Channels>
        <Canvas id={CANVAS_ID_RED}/>
        <Canvas id={CANVAS_ID_GREEN} />
        <Canvas id={CANVAS_ID_BLUE} />
      </S.Channels>
    </S.Container>
  );
}

export default SeparateChannels;