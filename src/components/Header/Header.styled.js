import styled from 'styled-components';
import { theme } from '../../theme';

export const HeaderBody = styled.div`
display: flex;
padding: 20px 0px;
background-color: ${theme.colors.background};
gap: 20px;

`
export const Logo = styled.a`
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

export const NavLink = styled.a`
font-family: 'Manrope';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 27px;
display: flex;
align-items: center;
letter-spacing: 0.04em;

:hover{
    cursor: pointer;
}

 `;

export const ActiveLink = styled(NavLink)`
font-weight: 700;
color: ${theme.colors.accent};
text-decoration-line: underline;
text-decoration-thickness: 0.5px;
`;


export const SimpleButton = styled.button`
display: flex;
align-items: center;
font-family: 'Manrope';
font-weight: ${theme.fontWeights.normal};
font-size: ${theme.fontSizes.mx};
height: 47px;
border-radius: ${theme.radii.large};
border: ${theme.borders.large};
background: ${theme.colors.white};
color: ${theme.colors.black};
padding: 10px 20px;
`;

export const ActiveButton = styled(SimpleButton)`

background: ${theme.colors.accent};
color: ${theme.colors.white};

`;

