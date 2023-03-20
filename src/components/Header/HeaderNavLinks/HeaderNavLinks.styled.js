import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const ItemLink = styled(NavLink)`
font-family: 'Manrope';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 27px;
display: flex;
align-items: center;
letter-spacing: 0.04em;
text-decoration: none;
color: ${props => props.theme.colors.black};

:hover{
    cursor: pointer;
}   

&.active{
    font-weight: 700;
color: ${props => props.theme.colors.accent};
text-decoration-line: underline;
text-decoration-thickness: 0.5px;
}

 `;