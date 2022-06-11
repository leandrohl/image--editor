import React from 'react';

import * as S from './styles';

function Input(props) {
  const {
    label,
    onChange,
    value,
    type,
    disabled,
    error,
    max,
    min
  } = props
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Input 
        disabled={disabled} 
        error={error} 
        onChange={onChange} 
        value={value} 
        type={type} 
        max={max}
        min={min}
      />
    </S.Container>
  );
}

export default Input;