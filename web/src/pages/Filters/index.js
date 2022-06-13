import React from 'react';
import Canvas from '../../components/Canvas';
import { CANVAS_ID } from '../../config/constants';
import { getImageDataFromImage } from '../../utils/getImageDataFromImage';
import { getImageGrayscale } from '../../utils/getImageGrayscale';
import { reRenderImage } from '../../utils/reRenderImage';

import * as S from './styles';

function Filters() {
  const CANVAS_ID_MAIN = 'photo-preview-red'
  const CANVAS_ID_MEDIAN = 'photo-preview-green'

  const filterMain = () => {
    const imageData = getImageDataFromImage(CANVAS_ID)

    let width = imageData.width;
    let height = imageData.height;

    let mask = [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1]
    ]

    const data = imageData.data
    let x, y;
    let meanData = [];
    let grayscaleData = getImageGrayscale(imageData);

    function bindPixelAt(data) {
      return function(x, y, i) {
        i = i || 0;
        return data[((width * y) + x) * 4 + i];
      };
    }

    let pixelAt = bindPixelAt(data);

    pixelAt = bindPixelAt(grayscaleData);


    for (y = 0; y < height; y++) {
      for (x = 0; x < width; x++) {
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
        ) / 9;

        meanData.push(pixel, pixel, pixel, 255);
      }
    }

    for (let i = 0; i < data.length; i += 4) {
      data[i] = meanData[i+0]
      data[i+1] = meanData[i+1]
      data[i+2] = meanData[i+2]
    }

    reRenderImage(imageData, CANVAS_ID_MAIN)
  }

  const filterMedian = () => {
    const imageData = getImageDataFromImage(CANVAS_ID)
    
    let width = imageData.width;
    let height = imageData.height;

    let medianData = [];
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

        let neighborhood = [
            pixelAt(x - 1, y - 1),
            pixelAt(x, y - 1),
            pixelAt(x + 1, y - 1),
            pixelAt(x - 1, y),
            pixelAt(x, y),
            pixelAt(x + 1, y),
            pixelAt(x - 1, y + 1),
            pixelAt(x, y + 1),
            pixelAt(x + 1, y + 1)
        ]

        let pixel = neighborhood.sort()[4]

        medianData.push(pixel, pixel, pixel, 255);
      }

    }

    for (let i = 0; i < data.length; i += 4) {
      data[i] = medianData[i+0]
      data[i+1] = medianData[i+1]
      data[i+2] = medianData[i+2]
    }
    
    reRenderImage(imageData, CANVAS_ID_MEDIAN)
  }

  const filterImage = () => {
    filterMain()
    filterMedian()
  }

  
  return (
    <S.Container>
      <Canvas id={CANVAS_ID} applyOperation={filterImage}/>
      <S.Filters>
        <Canvas id={CANVAS_ID_MAIN} title="Filtro da média" />
        <Canvas id={CANVAS_ID_MEDIAN} title="Filtro da mediana"/>
      </S.Filters>
    </S.Container>
  );
}

export default Filters;