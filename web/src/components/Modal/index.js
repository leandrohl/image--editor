import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

import * as S from './styles'

const Modal = ({ children, closeModal, title }) =>  (
  <S.Container>
    <S.Content>
      <S.Header>
        <h3>{title}</h3>
        {closeModal && (
          <AiOutlineClose aria-label="fechar modal" onClick={() => closeModal()} />
        )}
      </S.Header>
      {children}
    </S.Content>
  </S.Container>
)

export default Modal