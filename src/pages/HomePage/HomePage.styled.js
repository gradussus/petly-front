import styled from 'styled-components';
// import { theme } from '../../theme';

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('pages/HomePage/images/mobile/labro.png'), url('pages/HomePage/images/mobile/Vector.png');
  background-position: right bottom, bottom;
  background-repeat: no-repeat;
  background-size: 20rem, 100vw;
  padding-top: 50px;
  height: calc(100vh - 72px);
  @media screen and (min-width: 768px) {
    align-items: flex-start;
    background-image: url('pages/HomePage/images/tablet/labro.png'), url('pages/HomePage/images/tablet/Vector.png');
    background-size: 31rem, 100vw;
  }

  @media screen and (min-width: 1280px) {
    background-image: url('pages/HomePage/images/desctop/labro.png/'), url('pages/HomePage/images/desctop/Vector.png');
    background-size: 35rem, 100vw;
  }
`;

export const HomeTitle = styled.h1`
  transition-duration: 1s;
  max-width: 280px;
  font-weight: 700;
  font-size: 32;
  line-height: 1.37;
  height: 88px;
  opacity: 0%;
  color: var(--text__color);
  animation-name: title;
  animation-duration: var(--animation__duration__labro);
  animation-timing-function: linear;
  animation-delay: 500ms;
  animation-fill-mode: forwards;
  
  @media (min-width: 320px) and (min-height: 768px) {
    font-size: 50px;
    max-width: 700px;
  }
  
  @media screen and (min-width: 768px) {
    font-size: 68px;
    max-width: 588px;
  }
  
  @media (min-width: 768px) and (max-height: 800px) {
    max-width: 700px;
  }
  
  @media screen and (min-width: 1280px) {
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
  
  
  
export const HomeLabro = styled.img`
    position: absolute;
    width: 230px;
    bottom: 0px;
    right: 0px;
    opacity: 1;
    transition-duration: 1s;
  
    //=================================================================
    @media screen and (min-width: 320px) {
      width: 320px;
    }
  
    @media (min-width: 320px) and (max-height: 700px) {
      width: 320px;
    }
  
    @media (min-width: 320px) and (max-height: 550px) {
      width: 230px;
    }
  
    //=================================================================
  
    @media screen and (min-width: 460px) {
      width: 320px;
    }
  
    @media (min-width: 460px) and (min-height: 1281px) {
      width: 699px;
    }
  
    @media (min-width: 460px) and (max-height: 1280px) {
      width: 624px;
    }
  
    @media (min-width: 460px) and (max-height: 1000px) {
      width: 500px;
    }
  
    @media (min-width: 460px) and (max-height: 600px) {
      width: 400px;
    }
  
    @media (min-width: 460px) and (max-height: 500px) {
      width: 320px;
    }
  
    @media (min-width: 460px) and (max-height: 400px) {
      width: 230px;
    }
  
    //=================================================================
  
    @media screen and (min-width: 768px) {
      width: 699px;
    }
  
    @media (min-width: 768px) and (max-height: 800px) {
      width: 624px;
    }
  
    @media (min-width: 768px) and (max-height: 718px) {
      width: 500px;
    }
  
    @media (min-width: 768px) and (max-height: 600px) {
      width: 400px;
    }
  
    @media (min-width: 768px) and (max-height: 500px) {
      width: 320px;
    }
  
    @media (min-width: 768px) and (max-height: 400px) {
      width: 230px;
    }
  
    //=================================================================
  
    @media screen and (min-width: 1280px) {
      width: 624px;
    }
  
    @media (min-width: 1280px) and (max-height: 718px) {
      width: 500px;
    }
  
    @media (min-width: 1280px) and (max-height: 600px) {
      width: 400px;
    }
  
    @media (min-width: 1280px) and (max-height: 500px) {
      width: 320px;
    }
  
    @media (min-width: 1280px) and (max-height: 400px) {
      width: 230px;
    }
    `;

  
export const HomePageHeart = styled.img`
position: absolute;
width: 0px;
animation-name: heart;
animation-duration: var(--animation__duration__labro);
animation-timing-function: linear;
animation-delay: 1500ms;
animation-fill-mode: forwards;

@media screen and (min-width: 1280px) {
  opacity: 0%;
  width: 92px;
  right: 40%;
  bottom: 70%;
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

  
  //=============================
  //1280x768  768x1193 320x601
  