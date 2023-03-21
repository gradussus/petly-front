import styled from "styled-components";
import myImage from './Img404/labrador.jpg';

export const NotFoundPage = styled.article`
display: flex;
flex-direction: column;
justify-content: center;

`
export const Title = styled.h1`
font-weight: ${props => props.theme.fontWeights.middle};
  font-size: ${props => props.theme.fontSizes.mx};
  line-height: ${props => props.theme.lineHeights.heading};
  color: ${props => props.theme.colors.headerText};

`

export const Image = styled.div`
background-image: url(${myImage});
height: 100vh;
align-items: center

`