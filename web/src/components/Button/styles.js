import styled from 'styled-components'

export const Button = styled.button`
   border: 0;
   padding: 14px 8px;
   border-radius: 4px;
   background-color: theme.primaryBlue;
   color: theme.white;
   font-size: 16px;
   font-weight: bold;
   transition: all .2s;
   &:hover, &:disabled {
     background-color: #80ccd6 ;
   }
`;