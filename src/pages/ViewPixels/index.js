import React, {  useState } from 'react';
import Canvas from '../../components/Canvas';
import Input from '../../components/Input';
import { CANVAS_ID } from '../../config/constants';

import * as S from './styles';

function ViewPixels() {
  const [valueColor, setValueColor] = useState('')
  const [position, setPosition] = useState({
    X: 0,
    Y: 0
  })


  const pick = (event) => {
    let hoveredColor = document.getElementById('hovered-color');
    let canvas = document.getElementById(CANVAS_ID)

    let x = event.nativeEvent.offsetX;
    let y = event.nativeEvent.offsetY;

    let ctx = canvas.getContext('2d')

    let pixel = ctx.getImageData(x, y, 1, 1);

    let data = pixel.data

    const rgba = `rgba(${data[0]}, ${data[1]}, ${data[2]}, ${data[3] / 255})`;

    hoveredColor.style.background = rgba;
    setValueColor(rgba)
    setPosition({
      X: x,
      Y: y
    })
    return rgba
  }

  return (
    <S.Container>
      <Canvas id={CANVAS_ID} onMouseMove={(event) => pick(event)}/>
      <S.InfoImage>
        <S.HoverColor id="hovered-color"/>
        <Input label="RGB" placeHolder={valueColor}/>
        <Input label="X" placeHolder={position.X}/>
        <Input label="Y" placeHolder={position.Y}/>
      </S.InfoImage>
    </S.Container>
  );
}

export default ViewPixels;