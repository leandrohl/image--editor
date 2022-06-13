import React, { useState } from 'react';

import * as S from './styles';
import Card from '../../components/Card';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';

function Home() {
  const navigate = useNavigate()
  const { getMenu } = useApp()

  const itemsMenu = getMenu()

  const toNavigate = (to) => {
    if (typeof to === 'string') {
      navigate(to)
    } else to()
  }

  return (
    <S.Container>
      {
        itemsMenu.map(item => {
          return (
            <Card
              key={item.id}
              title={item.title}
              icon={item.icon}
              action={() => toNavigate(item.navigate)}
            />
          )
        })
      }
    </S.Container>
  );
}

export default Home;