import React from 'react';

import * as S from './styles';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';

function MenuLateral() {
  const { getMenu } = useApp()
  const navigate = useNavigate()

  const itemsMenu = getMenu()

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

  const toNavigate = (to) => {
    if (typeof to === 'string') {
      navigate(to)
    } else to()
  }

  return (
    <S.Menu>
      <ul>
        <S.Item>
          <input 
              accept=".png, .jpg"
              id="button-file"
              type="file"
              style={{ display: 'none' }}
              className="inputFile"
              value=''
              onChange={(e) => { renderImageSelected(e) }}
          />
          <label htmlFor="button-file">
            Escolher Arquivo
          </label>
        </S.Item>
        <S.Item onClick={() => navigate('/')}>
          <p>Home</p>
        </S.Item>
        {
          itemsMenu.map(item => {
            return (
              <S.Item key={item.id} onClick={() => toNavigate(item.navigate)}>
                <p>{item.title}</p>
              </S.Item>
            )
          })
        }
      </ul>
    </S.Menu>
  );
}

export default MenuLateral;