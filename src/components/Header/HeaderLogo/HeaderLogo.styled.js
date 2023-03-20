import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { theme } from '../../../theme';


export const Logo = styled(NavLink)`
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 48px;
letter-spacing: 0.07em;
color: #111111;
margin-right: 80px;

:hover{
    cursor: pointer;
}
`

export const Accent = styled.span`
color: ${theme.colors.accent};
`