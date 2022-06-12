import React from 'react';

import * as S from './styles';

function Card(props) {
  const { title, icon, action } = props
  return (
    <S.Card onClick={action}>
      {icon}
      <p>{title}</p>
    </S.Card>
  );
}

export default Card;