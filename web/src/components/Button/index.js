import React from 'react';

import * as S from './styles';

function Button(props) {
  const {action, children, loading} = props
  return (
    <S.Button onClick={action}>
      {loading ? <></> : children}
    </S.Button>
  )
}

export default Button;