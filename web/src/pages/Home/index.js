import React, { useState } from 'react';

import * as S from './styles';
import Card from '../../components/Card';
import { useNavigate } from 'react-router-dom';
import ModalRGBHSL from './ModalRGBHSL';
import { getMenu } from '../../services/menu';

// IoIosColorPalette, IoIosColorPalette

function Home() {
  const navigate = useNavigate()
  const [openModalHSLRGB, setOpenModalHSLRGB] = useState(false)

  const itemsMenu = getMenu()

  return (
    <S.Container>
      {
        itemsMenu.map(item => {
          return (
            <Card
              key={item.id}
              title={item.title}
              icon={item.icon}
              action={() => navigate(item.navigate)}
            />
          )
        })
      }
      { openModalHSLRGB && <ModalRGBHSL open={openModalHSLRGB} onClose={() => setOpenModalHSLRGB(false)}  /> }
    </S.Container>
  );
}

export default Home;