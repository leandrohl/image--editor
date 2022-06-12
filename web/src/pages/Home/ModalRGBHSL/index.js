import React, { useEffect, useState } from 'react';
import Input from '../../../components/Input'
import Modal from '../../../components/Modal'
import * as S from './styles';

function ModalRGBHSL(props) {
  const {open, onClose} = props
  const [RGBValues, setRGBValue] = useState({
    red: 0,
    green: 0,
    blue: 0
  })
  const [HSLValues, setHSLValue] = useState({
    hue: 0,
    saturation: 0,
    lightness: 0
  })

  const MAX_COLOR = 255;
  const MAX_COLOR_HSL = 240;
  const MIN_COLOR = 0;

  useEffect(() => {
    let hoveredColor = document.getElementById('color-preview-converter');

    const rgba = `rgba(${RGBValues.red}, ${RGBValues.green}, ${RGBValues.blue}, ${255})`;

    hoveredColor.style.background = rgba;

  }, [RGBValues, HSLValues])

  
  const HSLtoRGB = (h, s, l) => {
    s /= MAX_COLOR_HSL
    l /= MAX_COLOR_HSL

    const c = (1 - Math.abs(2 * l - 1)) * s
    const x = c * (1 - Math.abs((h / 40) % 2 - 1))
    const m = l - c/2

    let r = 0
    let g = 0
    let b = 0

    if (0 <= h && h < 40) {
      r = c; g = x; b = 0;  
    } else if (40 <= h && h < 80) {
        r = x; g = c; b = 0;
    } else if (80 <= h && h < 120) {
        r = 0; g = c; b = x;
    } else if (120 <= h && h < 160) {
        r = 0; g = x; b = c;
    } else if (160 <= h && h < 200) {
        r = x; g = 0; b = c;
    } else if (200 <= h && h < MAX_COLOR_HSL) {
        r = c; g = 0; b = x;
    }

    r = Math.round((r + m) * MAX_COLOR)
    g = Math.round((g + m) * MAX_COLOR)
    b = Math.round((b + m) * MAX_COLOR)

    setRGBValue({
      red: r,
      green: g,
      blue: b
    })
  }


  const RGBtoHSL = (r, g, b) => {
    r /= MAX_COLOR
    g /= MAX_COLOR
    b /= MAX_COLOR

    const minRGB = Math.min(r, g, b)
    const maxRGB = Math.max(r, g, b) 

    let h = 0
    let s = 0
    let l = 0

    const delta = maxRGB - minRGB

    if (delta === 0) h = 0
    else if (maxRGB === r) h = ((g - b) / delta) % 6
    else if (maxRGB === g) h = (b - r) / delta + 2
    else h = (r - g) / delta + 4

    h = Math.round(h * 40)

    if ( h < 0 ) h += MAX_COLOR_HSL 

    l = (maxRGB + minRGB) / 2

    s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1))

    s = Math.round(s * MAX_COLOR_HSL)
    l = Math.round(l * MAX_COLOR_HSL)

    setHSLValue({
      hue: h,
      saturation: s,
      lightness: l
    })
  }

  return (
    <Modal title={"Conversão de RGB para HSL"} closeModal={onClose}>
      <S.ContainerContent>
        <S.ContainerInputs>
          <Input 
            label="R" 
            type="number"
            value={RGBValues.red}
            onChange={(e) => {
              const { green, blue } = RGBValues
              const red = e.target.value
              RGBtoHSL(red, green, blue)
              setRGBValue({...RGBValues, red})
            }}
            max={MAX_COLOR}
            min={MIN_COLOR}
          />
          <Input 
            label="G" 
            type="number"
            value={RGBValues.green}
            onChange={(e) => {
              const { red, blue } = RGBValues
              const green = e.target.value
              RGBtoHSL(red, green, blue)
              setRGBValue({...RGBValues, green})
            }}
            max={MAX_COLOR}
            min={MIN_COLOR}
          />
          <Input 
            label="B" 
            type="number"
            value={RGBValues.blue}
            onChange={(e) => {
              const { red, green } = RGBValues
              const blue = e.target.value
              RGBtoHSL(red, green, blue)
              setRGBValue({...RGBValues, blue})
            }}
            max={MAX_COLOR}
            min={MIN_COLOR}
          />
        </S.ContainerInputs>
        <S.PreviewColor>
          <p>Vizualização de cores</p>
          <div id="color-preview-converter"></div>
        </S.PreviewColor>
        <S.ContainerInputs>
          <Input 
            label="H" 
            type="number"
            value={HSLValues.hue}
            onChange={(e) => {
              const { lightness, saturation } = HSLValues
              const hue = e.target.value
              HSLtoRGB(hue, saturation, lightness)
              setHSLValue({...HSLValues, hue})
            }}
            min={MIN_COLOR}
            max={MAX_COLOR_HSL}
          />
          <Input 
            label="S" 
            type="number"
            value={HSLValues.saturation}
            onChange={(e) => {
              const { hue, lightness } = HSLValues
              const saturation = e.target.value
              HSLtoRGB(hue, saturation, lightness)
              setHSLValue({...HSLValues, saturation})
            }}
            min={MIN_COLOR}
            max={MAX_COLOR_HSL}
          />
          <Input 
            label="I" 
            type="number"
            value={HSLValues.lightness}
            onChange={(e) => {
              const { hue, saturation } = HSLValues
              const lightness = e.target.value
              HSLtoRGB(hue, saturation, lightness)
              setHSLValue({...HSLValues, lightness})
            }}
            min={MIN_COLOR}
            max={MAX_COLOR_HSL}
          />
        </S.ContainerInputs>
      </S.ContainerContent>
    </Modal>
  )
}

export default ModalRGBHSL;