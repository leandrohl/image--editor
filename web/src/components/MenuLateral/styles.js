import styled from "styled-components";

export const Menu = styled.nav`
  height: 100vh;

  padding: 16px 16px;

  position: fixed;
  display: flex;
  align-items: center;

  border: 1px solid ${props => props.theme.gray2};
  box-shadow: ${props => props.theme.shadow2};
  background: ${props => props.theme.primaryBlue};
`

export const Item = styled.li`
  display: flex;
  cursor: pointer;

  > p {
    font-size: 16px;
    margin: 12px auto;
    max-width: 300px;
    color: ${props => props.theme.white};
  }

  > label {
    font-size: 16px;
    margin: 18px auto;
    max-width: 300px;
    color: ${props => props.theme.white};
  }
`