import React from 'react';
import Canvas from '../../components/Canvas';
import { CANVAS_ID } from '../../config/constants';
import { getImageDataFromImage } from '../../utils/getImageDataFromImage';
import { reRenderImage } from '../../utils/reRenderImage';
import {getImageGrayscale} from '../../utils/getImageGrayscale'

import * as S from './styles';

function Sobel() {
  const CANVAS_ID_SOBEL = 'photo-preview-sobel'

  const applySobel = () => {
    const imageData = getImageDataFromImage(CANVAS_ID)

    let width = imageData.width;
    let height = imageData.height;

    let kernelX = [
      [-1,0,1],
      [-2,0,2],
      [-1,0,1]
    ];

    let kernelY = [
      [-1,-2,-1],
      [0,0,0],
      [1,2,1]
    ];

    let sobelData = [];

    function bindPixelAt(data) {
      return function(x, y, i) {
        i = i || 0;
        return data[((width * y) + x) * 4 + i];
      };
    }

    let data = imageData.data;
    let pixelAt = bindPixelAt(data);
    let grayscaleData = getImageGrayscale(imageData);

    pixelAt = bindPixelAt(grayscaleData);

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        let pixelX = (
            (kernelX[0][0] * pixelAt(x - 1, y - 1)) +
            (kernelX[0][1] * pixelAt(x, y - 1)) +
            (kernelX[0][2] * pixelAt(x + 1, y - 1)) +
            (kernelX[1][0] * pixelAt(x - 1, y)) +
            (kernelX[1][1] * pixelAt(x, y)) +
            (kernelX[1][2] * pixelAt(x + 1, y)) +
            (kernelX[2][0] * pixelAt(x - 1, y + 1)) +
            (kernelX[2][1] * pixelAt(x, y + 1)) +
            (kernelX[2][2] * pixelAt(x + 1, y + 1))
        );

        let pixelY = (
          (kernelY[0][0] * pixelAt(x - 1, y - 1)) +
          (kernelY[0][1] * pixelAt(x, y - 1)) +
          (kernelY[0][2] * pixelAt(x + 1, y - 1)) +
          (kernelY[1][0] * pixelAt(x - 1, y)) +
          (kernelY[1][1] * pixelAt(x, y)) +
          (kernelY[1][2] * pixelAt(x + 1, y)) +
          (kernelY[2][0] * pixelAt(x - 1, y + 1)) +
          (kernelY[2][1] * pixelAt(x, y + 1)) +
          (kernelY[2][2] * pixelAt(x + 1, y + 1))
        );

        let magnitude = Math.sqrt((pixelX * pixelX) + (pixelY * pixelY))>>>0;

        sobelData.push(magnitude, magnitude, magnitude, 255);
      }
    }

    for (let i = 0; i < data.length; i += 4) {
      data[i] = sobelData[i]
      data[i+1] = sobelData[i+1]
      data[i+2] = sobelData[i+2]
    }
    
    reRenderImage(imageData, CANVAS_ID_SOBEL)
  }

  return (
    <S.Container>
      <Canvas id={CANVAS_ID} applyOperation={applySobel}/>
      <Canvas id={CANVAS_ID_SOBEL} title="Resultado do Sobel" />
    </S.Container>
  )
}

export default Sobel;