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
    width: 704px;
    height: 540px;
    display: flex;
     display: grid; 
    
  grid-gap: 8px;
   grid-template-columns: 2fr 1fr 1fr; 
  grid-template-rows: 1fr 1fr 1fr; 
  
  }
`;
export const BtnClose = styled.button`
position: absolute;
right: 0px;
top: 0px;
width: 34px;
height: 34px;
background-color: ${p => p.theme.colors.background};
border: ${p => p.theme.borders.none};
border-radius: ${p => p.theme.radii.round};

`;
export const Title = styled.h1`
text-decoration: none;
margin-top: 316px;
font-weight: ${p => p.theme.fontWeights.bold};
font-size: ${p => p.theme.fontSizes.ml};
line-height: ${p => p.theme.fontWeights.heading};
`;
export const ContainerImg = styled.div`
position: relative;


  
`;
export const Box = styled.div`
 display: grid;
  grid-gap: 8px;
  grid-template-columns: 1fr 2fr;
margin-top: 16px;


font-weight: ${p => p.theme.fontWeights.middle};
font-size: ${p => p.theme.fontSizes.s};
line-height: ${p => p.theme.fontWeights.heading};
`

export const Image = styled.img`
position: absolute;
/* display: flex; */
width: 240px;
height: 240px;
object-fit: cover;
margin-top: 40px;
/* justify-content: center; */
margin-left: 50%;
transform: translateX(-50%);
margin-right: auto;
border-radius: 0px 0px 40px 40px;
/* @media screen and (min-width: 767px){
grid-template-columns: 1;
  grid-template-rows: 1 / span 2;} */
`;
export const Status = styled.a`
position: absolute;
display: flex;
padding: 6px;
z-index: 10;
top: 46px;
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
font-weight: ${p => p.theme.fontWeights.middle};
font-size: ${p => p.theme.fontSizes.s};
line-height: ${p => p.theme.fontWeights.heading};
`;
export const Item = styled.a`
text-decoration: none;
margin: 0;
font-weight: ${p => p.theme.fontWeights.middle};
font-size: ${p => p.theme.fontSizes.s};
line-height: ${p => p.theme.fontWeights.heading};
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
export const ContainerBtn = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;
export const ContainerItem = styled.div`
display: grid;
  grid-gap: 8px;
  grid-template-columns: 1fr 2fr;
  margin-top: 8px;
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
`;
