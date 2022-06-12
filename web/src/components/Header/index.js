import React, { useState } from 'react';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';

import * as S from './styles';
import ModalRGBHSL from '../../pages/Home/ModalRGBHSL';
function Header() {
  const navigate = useNavigate()
  const [openModalHSLRGB, setOpenModalHSLRGB] = useState(false)

  const renderImageSelected = (e) => {
    if (e.target.files) {
      let file = Array.from(e.target.files)[0]
      let render = new FileReader()
      render.readAsDataURL(file)
      render.onload = function(event) {
        let canvas = document.getElementById('photo-preview')

        let image = new Image()

        image.src = event.target.result
        
        let ctx = canvas.getContext('2d')

        image.onload = function() {
          const { width, height } = image
          canvas.width = width
          canvas.height = height

          //limpar o contexto
          ctx.clearRect(0, 0, width, height)

          //desenhar a imagem no contexto

          ctx.drawImage(image, 0, 0)

          canvas.src = image.src
        }
      }
    }

  }

  const redirectMenu = (route) => {
    navigate(route)
  }

  return (
    <S.Header>
      <Button>
        <input 
            accept=".png, .jpg"
            id="button-file"
            type="file"
            style={{ display: 'none' }}
            className="inputFile"
            value=''
            onChange={(e) => {
              renderImageSelected(e)
            }}
        />
        <label htmlFor="button-file">
          Escolher Arquivo
        </label>
      </Button>
      <Button action={() => redirectMenu('/')}>
        Home
      </Button>
      <Button action={() => redirectMenu('/invertimage')}>
        Inverter imagem
      </Button>
      <Button action={() => redirectMenu('/separatechannels')}>
        Separar canais RGB
      </Button>
      <Button action={() => redirectMenu('/viewpixels')}>
        Ver pixels
      </Button>
      <Button action={() => redirectMenu('/binarization')}>
        Binarização de imagem
      </Button>
      <Button action={() => redirectMenu('/grayscale')}>
        Converter para tons de cinza
      </Button>
      <Button action={() => redirectMenu('/filters')}>
        Filtros
      </Button>
      <Button action={() => redirectMenu('/dynamicscale')}>
        S = c*r^y
      </Button>
      <Button action={() => redirectMenu('/saltandpepper')}>
        Ruído sal e pimenta
      </Button>
      <Button action={() => {setOpenModalHSLRGB(true)}}>
        Converter HSL para RGB
      </Button>
      { openModalHSLRGB && <ModalRGBHSL open={openModalHSLRGB} onClose={() => setOpenModalHSLRGB(false)}  /> }
    </S.Header>
  );
}

export default Header;