import styled from 'styled-components';
import bgDesktop from './bg-img/bgi-desktop.png'
import bgTablet from './bg-img/bgi-tablet.png'
import bgMobile from './bg-img/bgi-mobile.png'
// import { theme } from '../../../theme';

export const Wrapper = styled.div`
position:relative;
height:100%;

 width: calc(100vw+40px);
 height: calc(100vh - 88px);


background-image: url(${bgMobile});
background-repeat: no-repeat;
background-position:bottom;
background-size: contain;

@media screen and (min-width: 768px){
    background-image: url(${bgTablet});

}

@media screen and (min-width: 1280px){
    background-image: url(${bgDesktop});

}
`
// export const MobileImg = styled.img`
//   position: absolute;
//   display:block;
//   width: 100vw;
//   top: 50%;
// left: 50%;
// transform: translate(-50%, 0%);

//   @media screen and (min-width: 767px){
//     display:none;
// }
// `
// export const TabletImg = styled.img`
//     position: absolute;
//     display:none;
//   @media screen and (min-width: 768px){
//     display:block;
//     width: 100vw;
//     bottom:0;
//     right:0;
//   }
//   @media screen and (min-width: 1279px){
//     display:none;
// }
// `
// export const DesktopImg = styled.img`
//     display:none;
//     position: absolute;
//   @media screen and (min-width: 1280px){
//   display:block;
//   width: 100vw;
//   top: 50%;
// left: 50%;
// transform: translate(-50%, 0%);
//   }
// `