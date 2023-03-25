import styled from 'styled-components';

export const Home = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    background-image: url('./images/mobile/labro_mobile.png'), url('./images/mobile/bg_mobile.png');
    background-position: right bottom, bottom;
    background-repeat: no-repeat;
    background-size: 20rem, 100vw;
    padding-top: 60px;
    height: calc(100vh - 72px);
    max-height: 601px

`;

export const BackgroundL = styled.img`
    position: absolute;
    width: 0px;

    @media (${props => props.theme.media.desktop}) {
      width: 100vw;
      bottom: 0;
    };
`;

export const BackgroundSm = styled.img`
    position: absolute;
    width: 100vw;
    z-index: -1;
    padding: 0;
    bottom: 0;
    
    @media (${props => props.theme.media.tablet}) {
      bottom: -320px;
    };
  
    @media (${props => props.theme.media.desktop}) {
      width: 0px;
      
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

  opacity: 0%;
  animation-name: title;
  animation-duration: 1000ms;;
  animation-timing-function: linear;
  animation-delay: 100ms;
  animation-fill-mode: forwards;

  @media (${props => props.theme.media.tablet}) {
    font-size: ${props => props.theme.fontSizes.xl};
    max-width: 588px;
  }

  @media (${props => props.theme.media.fromTablet}) {
    max-width: 700px;
  }

  @media (${props => props.theme.media.desktop}) {
    font-size: ${props => props.theme.fontSizes.xl};
    max-width: 588px;
  }

  @keyframes title {
    0% {
      margin-left: -1000px;
      opacity: 0%;
    }
    100% {
      opacity: 100%;
    }
  }
`;

export const Labro = styled.img`
  position: absolute;
  align-item: centre;
  width: 380px;
  bottom: 0px;
  left: 0px;
  padding: 0 auto;
  z-index: 100;
  background: url(./images/mobile/labro_mobile.png);
  transition-duration: 1000ms;

  opacity: 0%;
  animation-name: labro;
  animation-duration: 5000ms;;
  animation-timing-function: linear;
  animation-delay: 100ms;
  animation-fill-mode: forwards;

  @media (${props => props.theme.media.tablet}) {
    background: url(./images/mobile/labro_mobile.png);
    width: 260px;

  } 

  @media (${props => props.theme.media.fromTablet}) {
    background: url(./images/tablet/labro_tablet.png);
    right: 200px;
    bottom: 0px;
  } 

  @media (${props => props.theme.media.desktop}) {
    background: url(./images/desktop/labro_desk.png);
    width: 400px;
    right: 0;
  }

  @keyframes labro {
    0% {
      
      opacity: 100%;
    }
    100% {
      opacity: 0%;
    }
  }
`;
