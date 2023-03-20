import styled from 'styled-components';
import { theme } from '../../../theme'
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display:flex;
  margin-top: 40px;
`

export const RedirectLink = styled(Link)`
  text-decoration: underline;
  color:${theme.colors.secondary};
  
  &:hover{
    color:  ${theme.colors.accent};
}
` 
export const TextBeforeLink = styled.p`
  margin-right: 5px;
  color:${theme.colors.grey};
`