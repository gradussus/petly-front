import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const HomeButton = styled(Link)`
padding: 11px 28px;
border-radius: 40px;
transition: background 0.3s;
display: flex;
align-items: center;
color: ${props => props.theme.colors.white};
background: ${props => props.theme.colors.accent};
font-weight: ${props => props.theme.fontWeights.middle};
font-size: ${props => props.theme.fontSizes.mx};
line-height: ${props => props.theme.lineHeights.heading};
z-index: 100;
border: solid 1px ${props => props.theme.colors.background};


@media (${props => props.theme.media.tablet}) {
  border: solid 1px ${props => props.theme.colors.background};
}

@media (${props => props.theme.media.desktop}) {
  border: none;
}


&:hover {
  background: #f5a675;
}
`;