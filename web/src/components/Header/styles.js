import styled from "styled-components";

export const Header = styled.header`
  width: 100%; 
  height: 80px;

  padding: 0 16px;

  background: ${props => props.theme.gray2};
  display: flex;
  align-items: center;
  justify-content: space-between;
`