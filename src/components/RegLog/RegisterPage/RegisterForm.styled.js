import styled from 'styled-components';
import bgDesktop from './bg-img/bgi-desktop.png'
import bgTablet from './bg-img/bgi-tablet.png'
import bgMobile from './bg-img/bgi-mobile.png'

export const Wrapper = styled.div`
position:relative;
height:100%;
padding-top: 20px;

width: calc(100vw+40px);
height: calc(100vh - 88px);


background-image: url(${bgMobile});
background-repeat: no-repeat;
background-position:bottom;
background-size: contain;

@media screen and (min-width: 768px){
    padding-top: 134px;
    background-image: url(${bgTablet});

}

@media screen and (min-width: 1280px){
    background-image: url(${bgDesktop});
    padding-top: 24px;

}
`

export const LoginWrapper = styled(Wrapper)`


@media screen and (min-width: 768px){
padding-top: 180px;
}

@media screen and (min-width: 1280px){
padding-top: 66px;
}
`
