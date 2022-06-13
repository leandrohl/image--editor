import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    width: 100%;
  }
`

export const Title = styled.h3`
  color ${props => props.theme.gray4};
  font-size: 16px;
  margin-top: 16px;
  margin-bottom: 8px;
`
