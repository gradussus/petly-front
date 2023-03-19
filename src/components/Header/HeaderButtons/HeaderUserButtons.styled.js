import styled from 'styled-components';
import { theme } from '../../../theme';
import { NavLink } from 'react-router-dom';


export const Button = styled(NavLink)`
type: button;
display: flex;
align-items: center;
font-family: 'Manrope';
font-weight: ${props => props.theme.fontWeights.normal};
font-size: ${theme.fontSizes.mx};
height: 47px;
border-radius: ${props => props.theme.radii.large};
border: ${props => props.theme.borders.large};
background: ${props => props.theme.colors.white};
color: ${props => props.theme.colors.black};
padding: 10px 20px;

:hover{
    cursor: pointer;
};

&.active{
    background: ${props => props.theme.colors.accent};
color: ${props => props.theme.colors.white};

}


`;