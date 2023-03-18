import styled from "styled-components";

export const Container = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(17, 17, 17, 0.6);
  position: fixed;
  top: 0;
  left: 0;
`;

export const Modal = styled.div`
position: relative;  
  padding: 20px;
  width: 80vw;
  /* height: 95%; */
  background-color: ${p => p.theme.colors.white};
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  @media screen and (min-width: 767px){
    display: flex;
    width: 704px;
    height: 540px;
    display: flex;
     display: grid; 
     padding: 32px 32px 20px;    
 gap: 8px 20px;
   grid-template-columns: 288px 1fr 50px; 
  grid-template-rows: 76px 1fr 1fr 1fr 1fr; 
  
  }
`;
export const BtnClose = styled.button`
position: absolute;
right: 20px;
top: 20px;
width: 34px;
height: 34px;
background-color: ${p => p.theme.colors.background};
border: ${p => p.theme.borders.none};
border-radius: ${p => p.theme.radii.round};
@media screen and (min-width: 767px){
    right: 32px;
    top: 32px;
}


`;
export const Title = styled.h1`
text-decoration: none;
margin-top: 16px;
font-weight: ${p => p.theme.fontWeights.bold};
font-size: ${p => p.theme.fontSizes.ml};
line-height: ${p => p.theme.fontWeights.heading};
@media screen and (min-width: 767px){
    grid-row: 1/2;
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes.lx};
    line-height: ${p => p.theme.fontWeights.body};
}

`;
export const ContainerImg = styled.div`
position: relative;
height: 240px;
@media screen and (min-width: 767px){
    width: 288px;
    height: 328px; 
    grid-row: 1 / span 3;
}


  
`;
export const Box = styled.div`
 display: grid;
  grid-gap: 8px;
  grid-template-columns: 1fr 2fr;
margin-top: 16px;
font-weight: ${p => p.theme.fontWeights.middle};
font-size: ${p => p.theme.fontSizes.s};
line-height: ${p => p.theme.fontWeights.heading};
@media screen and (min-width: 767px){
    grid-column: 2;
    grid-row: 2;
    font-weight: ${p => p.theme.fontWeights.interMiddle};
    font-size: ${p => p.theme.fontSizes.m};
    line-height: ${p => p.theme.fontWeights.heading};
}
`;

export const Image = styled.img`
/* position: absolute; */
/* display: flex; */
width: 240px;
height: 100%;
object-fit: cover;
/* margin-top: 40px; */
/* justify-content: center; */
/* margin-left: 50%;
transform: translateX(-50%); */
margin-right: auto;
border-radius: 0px 0px 40px 40px;
 @media screen and (min-width: 767px){
    width: 288px;
} 
`;
export const Status = styled.a`
position: absolute;
display: flex;
padding: 6px;
z-index: 10;
top: 20px;
transform: translateY(100%);
left: 0;
width: 158px;
justify-content: center;
background-color: rgba(255, 255, 255, 0.6);
border-top-right-radius: ${p => p.theme.radii.large};
border-bottom-right-radius: ${p => p.theme.radii.large};
font-style: normal;
font-weight:${p => p.theme.fontWeights.middle};
font-size: ${p => p.theme.fontSizes.xs};
line-height: ${p => p.theme.fontWeights.heading};
color: ${p => p.theme.colors.primeText};
`;

export const Text = styled.p`
text-decoration: none;
margin: 0;
margin-bottom: 40px;
font-weight: ${p => p.theme.fontWeights.interMiddle};
font-size: ${p => p.theme.fontSizes.s};
line-height: ${p => p.theme.fontWeights.heading};
@media screen and (min-width: 767px){
    grid-column: 1 / span 3;
    grid-row: 4;
    font-weight: ${p => p.theme.fontWeights.middle};
font-size: ${p => p.theme.fontSizes.m};
line-height: ${p => p.theme.fontWeights.heading};

}
`;
export const Item = styled.a`
text-decoration: none;
margin: 0;
font-weight: ${p => p.theme.fontWeights.middle};
font-size: ${p => p.theme.fontSizes.s};
line-height: ${p => p.theme.fontWeights.heading};
color: ${p => p.theme.colors.primeText};
@media screen and (min-width: 767px){    
    font-weight: ${p => p.theme.fontWeights.interMiddle};
    font-size: ${p => p.theme.fontSizes.m};
    line-height: ${p => p.theme.fontWeights.heading};
    color: ${p => p.theme.colors.primeText};
}
`;
export const ContainerBtn = styled.div`
display: flex;
flex-direction: column;
align-items: center;
@media screen and (min-width: 767px){
    grid-column: 2 / span 3;
    grid-row: 5;
   flex-direction: row;
    align-items: baseline;
    justify-content: end;

}
`;
export const BtnContact = styled.button`
width: 240px;
padding-top: 9px;
padding-bottom: 9px;
border-radius: ${p => p.theme.radii.large};
background-color: ${p => p.theme.colors.accent};
color: ${p => p.theme.colors.white};
font-weight: ${p => p.theme.fontWeights.middle};
font-size: ${p => p.theme.fontSizes.m};
line-height: ${p => p.theme.fontWeights.heading};
border: ${p => p.theme.borders.none};
margin-bottom: 12px;

`;

export const ContainerItem = styled.div`
display: grid;
  grid-gap: 8px;
  grid-template-columns: 1fr 2fr;
  margin-top: 8px;
  @media screen and (min-width: 767px){
    grid-column: 2;
    grid-row: 3;
    font-weight: ${p => p.theme.fontWeights.interMiddle};
    font-size: ${p => p.theme.fontSizes.m};
    line-height: ${p => p.theme.fontWeights.heading};
}
`;

export const BtnAdd = styled.button`
width: 240px;
/* height: 40px; */
padding-top: 9px;
padding-bottom: 9px;
border-radius: ${p => p.theme.radii.large};
background-color: ${p => p.theme.colors.background};
color: ${p => p.theme.colors.primeText};
font-weight: ${p => p.theme.fontWeights.middle};
font-size: ${p => p.theme.fontSizes.m};
line-height: ${p => p.theme.fontWeights.heading};
border: ${p => p.theme.borders.large};
@media screen and (min-width: 767px){
    margin-left: 10px;
}

`;
