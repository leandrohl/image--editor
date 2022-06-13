import React from 'react';
import Canvas from '../../components/Canvas';
import { CANVAS_ID } from '../../config/constants';
import { getImageDataFromImage } from '../../utils/getImageDataFromImage';
import { reRenderImage } from '../../utils/reRenderImage';
import { getImageGrayscale } from '../../utils/getImageGrayscale'

import * as S from './styles';

function Laplace() {
  const CANVAS_ID_LAPLACE_FOUR = 'photo-preview-laplaciano-four'
  const CANVAS_ID_LAPLACE_EIGHT = 'photo-preview-laplaciano-eight'

  function Laplace4(imageData) {
    let width = imageData.width;
    let height = imageData.height;
  
    let mask = [
      [0, 1, 0],
      [1,-4, 1],
      [0, 1, 0]
    ]
  
    let laplaceData = [];
    let grayscaleData = getImageGrayscale(imageData);
  
    function bindPixelAt(data) {
      return function(x, y, i) {
        i = i || 0;
        return data[((width * y) + x) * 4 + i];
      };
    }
  
    let data = imageData.data;
    let pixelAt = bindPixelAt(data);
 
    pixelAt = bindPixelAt(grayscaleData);
  
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        let pixel = (
            (mask[0][0] * pixelAt(x - 1, y - 1)) +
            (mask[0][1] * pixelAt(x, y - 1)) +
            (mask[0][2] * pixelAt(x + 1, y - 1)) +
            (mask[1][0] * pixelAt(x - 1, y)) +
            (mask[1][1] * pixelAt(x, y)) +
            (mask[1][2] * pixelAt(x + 1, y)) +
            (mask[2][0] * pixelAt(x - 1, y + 1)) +
            (mask[2][1] * pixelAt(x, y + 1)) +
            (mask[2][2] * pixelAt(x + 1, y + 1))
        );
  
        laplaceData.push(pixel, pixel, pixel, 255);
      }
    }
    for (let i = 0; i < data.length; i += 4) {
      data[i] = laplaceData[0]
      data[i+1] = laplaceData[i+1]
      data[i+2] = laplaceData[i+2]
    }
    
    reRenderImage(imageData, CANVAS_ID_LAPLACE_FOUR)
  }

  function Laplace8(imageData) {
    let width = imageData.width;
    let height = imageData.height;
  
    let mask = [
      [1, 1, 1],
      [1,-8, 1],
      [1, 1, 1]
    ]
  
    let laplaceData = [];
    let grayscaleData = getImageGrayscale(imageData);
  
    function bindPixelAt(data) {
      return function(x, y, i) {
        i = i || 0;
        return data[((width * y) + x) * 4 + i];
      };
    }
  
    let data = imageData.data;
    let pixelAt = bindPixelAt(data);
  
    pixelAt = bindPixelAt(grayscaleData);
  
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        let pixel = (
            (mask[0][0] * pixelAt(x - 1, y - 1)) +
            (mask[0][1] * pixelAt(x, y - 1)) +
            (mask[0][2] * pixelAt(x + 1, y - 1)) +
            (mask[1][0] * pixelAt(x - 1, y)) +
            (mask[1][1] * pixelAt(x, y)) +
            (mask[1][2] * pixelAt(x + 1, y)) +
            (mask[2][0] * pixelAt(x - 1, y + 1)) +
            (mask[2][1] * pixelAt(x, y + 1)) +
            (mask[2][2] * pixelAt(x + 1, y + 1))
        );
  
        laplaceData.push(pixel, pixel, pixel, 255);
      }
    }
    for (let i = 0; i < data.length; i += 4) {
      data[i] = laplaceData[i]
      data[i+1] = laplaceData[i+1]
      data[i+2] = laplaceData[i+2]
    }
    
    reRenderImage(imageData, CANVAS_ID_LAPLACE_EIGHT)
  }
  

  const applyLaplace = () => {
    const imageData = getImageDataFromImage(CANVAS_ID)

    Laplace4(imageData)
    Laplace8(imageData)
  }

  
  return (
    <S.Container>
      <Canvas id={CANVAS_ID} applyOperation={applyLaplace}/>
      <S.Filters>
        <Canvas id={CANVAS_ID_LAPLACE_FOUR} title="Laplaciano vizinhança de 4" />
        <Canvas id={CANVAS_ID_LAPLACE_EIGHT} title="Laplaciano vizinhança de 8"/>
      </S.Filters>
    </S.Container>
  );
}

export default Laplace;