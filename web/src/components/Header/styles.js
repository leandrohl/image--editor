import styled from "styled-components";

export const Header = styled.header`
  height: 100vh;
  max-height: 100vh;

  padding: 16px 16px;

  background: ${props => props.theme.gray2};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  white-space: nowrap;

  position: fixed;

`