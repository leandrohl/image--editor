import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 4px 0;

  > label {
    padding: 2px 0;
  }
`

export const Label = styled.label(({ color, theme }) => `
  font-weight: bold;
  font-size: 16px;
  color: ${color || theme.gray4};
`);


export const Input = styled.input(({
  theme, error, type, disabled,
}) => `
   padding: 14px 10px;
   width: 100%;
   background-color: ${disabled ? theme.gray2 : 'transparent'};
   border-radius: 4px;
   outline-color: ${theme.primaryBlue};
   outline-width: thin;
   border: 1px solid ${error ? theme.red : theme.gray3};
   padding-right: ${type === 'password' && '40px'};
   ::placeholder {
     color: ${theme.gray3};
   }
`);