import styled from 'styled-components';

export const Home = styled.div`
  display: block;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0;

  @media (${props => props.theme.media.tablet}) {
    padding: 0;
  };

  @media (${props => props.theme.media.desktop}) {
  display: block;
  box-sizing: border-box;
  max-width: 1280px;
  padding: 0;
  margin: 0 auto;
  };
`;

export const Title = styled.h1`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: ${props => props.theme.fontSizes.lx};
  line-height: 44px;
  max-width: 280px;
  line-height: 1.37;
  padding-top: 30px;
  opacity: 0%;
  animation-name: title;
  animation-duration: 1000ms;;
  animation-timing-function: linear;
  animation-delay: 300ms;
  animation-fill-mode: forwards;

  @media (${props => props.theme.media.tablet}) {
    font-size: ${props => props.theme.fontSizes.xl};
    max-width: 588px;
    padding-top: 72px;
  };

  @media (${props => props.theme.media.desktop}) {
    font-size: ${props => props.theme.fontSizes.xl};
    max-width: 588px;
    padding-top: 72px;
  };

  @keyframes title {
    0% {
      margin-left: -1000px;
      opacity: 0%;
    };
    100% {
      opacity: 100%;
    };
  };
`;

export const Heart = styled.img`
  position: absolute;
  width: 0px;
  animation-name: heart;
  animation-duration: 2000ms;
  animation-timing-function: linear;
  animation-delay: 700ms;
  animation-fill-mode: forwards;

  @media (${props => props.theme.media.desktop}) {
    opacity: 0%;
    width: 92px;
    right: 40%;
    bottom: 75%;
  };
  @keyframes heart {
    0% {
      scale: 0%;
    };
    40% {
      scale: 0%;
    };
    80% {
      scale: 150%;
      opacity: 100%;
    };
    100% {
      scale: 100%;
      opacity: 100%;
    };
  };
`;

export const Labro = styled.img`
  opacity: 1;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 280px;
  z-index: 100;

  @media screen and (min-width: 320px) {
    width: 280px;
  };

  @media(min-width: 320px)and (max-height:700px) {
    width: 280px;
  };

  @media(min-width: 320px)and (max-height:550px) {
    width:230px
  };

  @media screen and (min-width: 460px) {
    width:320px
  };

  @media(min-width: 460px)and (min-height:1281px) {
    width: 524px;
  };

  @media(min-width: 460px)and (max-height:1280px) {
    width: 524px;
  };

  @media(min-width: 460px)and (max-height:1000px) {
    width: 380px;
  };

  @media(min-width: 460px)and (max-height:600px) {
    width: 380px;
  };

  @media(min-width: 460px)and (max-height:500px) {
    width: 320px;
  };

  @media(min-width: 460px)and (max-height:400px) {  
    width: 205px;
  };

  @media screen and (min-width: 768px) {  
    width: 636px;
  };

  @media(min-width: 768px)and (max-height:800px) {
    width: 380px;
  };

  @media(min-width: 768px)and (max-height:718px) { 
    width: 320px;
  };

  @media(min-width: 768px)and (max-height:600px) {
    width: 380px;
  };

  @media(min-width: 768px)and (max-height:500px) {
    width: 320px;
  };

  @media(min-width: 768px)and (max-height:400px) { 
    width: 230px;
  };

  @media screen and (min-width: 1280px) {
    z-index: 100;
    width: 524px;
    right: 32px;
  };

  @media(min-width: 1280px)and (max-height:718px) {
    width: 500px;
  };

  @media(min-width: 1280px)and (max-height:600px) {
    width: 380px;
  };

  @media(min-width: 1280px)and (max-height:500px) {
    width: 320px;
  };

  @media(min-width: 1280px)and (max-height:400px) {
    width: 230px; 
  };
`;

export const BackgroundL = styled.img`
  position: absolute;
  width: 0px;

  @media (${props => props.theme.media.desktop}) {
    align-items: flex-start;
    width: 100vw;
    left: 0;
    bottom: 0;
    z-index: 90;
  };
`;

export const BackgroundR = styled.img`
  position: absolute;
  width: 0px;
  
  @media (${props => props.theme.media.desktop}) {
    align-items: flex-end;
    width: calc(100vw - 70%);
    height: calc(100vh - 45%);
    bottom: 0;
    right: 0;
  };
`;

export const BackgroundSm = styled.img`
  position: absolute;
  display: flex;
  align-items: flex-start;
  width: 1279px;
  z-index: -1;
  padding: 0;
  bottom: 0;
  left: 0;  
  display: flex;
  flex-direction: column;
  height: calc(100vh - 152px);

  @media (${props => props.theme.media.tablet}) {
    height: calc(100vh - 72px);
    padding-top: 50px;
  };
  
  @media (${props => props.theme.media.desktop}) {
    width: 0px; 
  };
`;

  //=============================
  //Mobile: max-width 767px
  //Tablet: min-width 768px, max-width 1279px
  //Desktop: min-width 1280 px