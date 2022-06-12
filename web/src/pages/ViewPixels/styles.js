import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 40px;
  align-items: center;
`

export const InfoImage = styled.div`
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  padding: 16px;
`

export const HoverColor = styled.div`
  width: 100%;
  height: 44px;
  border: 1px solid ${props => props.theme.gray3};
  border-radius: 4px;
  margin: 8px 0;
`