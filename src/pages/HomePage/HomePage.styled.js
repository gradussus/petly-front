import styled from 'styled-components';

export const Home = styled.div`
display: block;
box-sizing: border-box;
margin: 0 auto;
padding: 0 20px;


@media (${props => props.theme.media.tablet}) {
  padding: 0 32px;
}

@media (${props => props.theme.media.desktop}) {
  display: block;
box-sizing: border-box;
  max-width: 1280px;
padding: 0px 16px;
margin: 0 auto;
}
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
  animation-delay: 500ms;
  animation-fill-mode: forwards;

  @media (${props => props.theme.media.tablet}) {
    font-size: ${props => props.theme.fontSizes.xl};
    max-width: 588px;
    padding-top: 72px;
  }

  @media (${props => props.theme.media.desktop}) {
    font-size: ${props => props.theme.fontSizes.xl};
    max-width: 588px;
    padding-top: 72px;
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

export const Heart = styled.img`
  position: absolute;
  width: 0px;
  animation-name: heart;
  animation-duration: 2000ms;
  animation-timing-function: linear;
  animation-delay: 1000ms;
  animation-fill-mode: forwards;

  @media (${props => props.theme.media.desktop}) {
    opacity: 0%;
    width: 92px;
    right: 40%;
    bottom: 75%;
  }
  @keyframes heart {
    0% {
      scale: 0%;
    }
    40% {
      scale: 0%;
    }
    80% {
      scale: 150%;
      opacity: 100%;
    }
    100% {
      scale: 100%;
      opacity: 100%;
    }
  }
`;

export const Labro = styled.img`
  position: absolute;
  align-item: centre;
  width: 280px;
  bottom: 0;
  right: 0px;
  padding-top: 29px;
  opacity: 1;
  z-index: 100;
  transition-duration: 1000ms;

  @media (${props => props.theme.media.tablet}) {
    background: url(./images/mobile/labro_mobile.png);
    width: 436px;
    padding-top: 352px;
    bottom: 0px;
  }; 

  @media (${props => props.theme.media.desktop}) {
    background: url(./images/desktop/labro_desk.png);
    width: 524px;
    right: 18px;
    overflow-block:hidden;
  }
`;

export const BackgroundL = styled.img`
    position: absolute;
    width: 0px;

    @media (${props => props.theme.media.desktop}) {
      align-items: flex-start;
      width: 1580px;
     left: 32px;
      bottom: 0;

      height: calc(100vh - 320px);
      padding-top: 50px;
      
    };
`;

export const BackgroundR = styled.img`
    position: absolute;
    width: 0px;
    z-index: 90;

    @media (${props => props.theme.media.desktop}) {
      align-items: flex-start;
      width: 350px;
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
    left: -20px; 
    
    
    // background-position: 100% 100%,bottom;
    // background-repeat: no-repeat;
 
    // display: flex;
    // flex-direction: column;
    height: calc(100vh - 172px);
    // padding-top: 50px;

    @media (${props => props.theme.media.tablet}) {
      // align-items: flex-start;
      // background-size: 31rem,100vw;
      // background-position: 100% 100%,bottom;
      // background-repeat: no-repeat;
      // background-size: 20rem,100vw;
      // display: flex;
      // flex-direction: column;
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
  //Desctop: min-width 1280 px