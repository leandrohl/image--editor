import styled from 'styled-components'

export const Card = styled.div(({ theme }) => `
  text-align: center;
  border: 1px solid ${theme.gray2};
  box-shadow: ${theme.shadow};
  padding: 20px 10px;
  border-radius: 4px;
  width: 400px;
  color: ${theme.black};
  cursor: pointer;
  transition: all 0.2s;
  margin: 10px;

  > svg {
    font-size: 40pt;
    border: 1px solid ${theme.white};
    background: ${theme.primaryBlue};
    border-radius: 100%;
    fill: ${theme.white};
    padding: 12px;
    margin-bottom: 16px;
  }
  > p {
    font-weight: 500px;
    font-size: 16px;
    margin: 18px auto;
    max-width: 300px;
  }
  
  &:hover {
    box-shadow: ${theme.shadow3};
  }

  @media (max-width: 800px) {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    > p {
      font-size: 14px;
    }
  }
  
`);