import styled from 'styled-components'

export const Button = styled.button`
   border: 0;
   padding: 14px 8px;
   border-radius: 4px;
   background-color: ${props => props.theme.white};
   color: ${props => props.theme.primaryBlue};
   font-size: 16px;
   font-weight: bold;
   transition: all .5s;
   &:hover, &:disabled {
     background-color: ${props => props.theme.primaryBlue};
     color: ${props => props.theme.white};
   }
`;