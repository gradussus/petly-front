import styled from "styled-components";

export const Container = styled.div`
 width: 100%;
 height: 100%;
 padding: 20px;
  
  @media screen and (${p => p.theme.media.fromTablet}){
    /* display: flex; */
    width: 704px;
    height: 540px;
    display: flex;
     display: grid; 
     padding: 32px 32px 20px;    
 gap: 0px 20px;
   grid-template-columns: 288px 1fr 50px; 
  grid-template-rows: 76px auto auto 1fr 90px;   
  }
`;

export const Modal = styled.div`
position: absolute; 
top: 50%;
left: 50%;
transform: translate(-50% -50%);
  padding: 20px;
  width: 80vw;
  background-color: ${p => p.theme.colors.white};  
  border-radius: 20px;
  @media screen and (${p => p.theme.media.fromTablet}){
    display: flex;
    width: 704px;
    height: 540px;
    display: flex;
     display: grid; 
     padding: 32px 32px 20px;    
 gap: 0px 20px;
   grid-template-columns: 288px 1fr 50px; 
  grid-template-rows: 76px auto auto 1fr 90px; 
  
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
@media screen and (${p => p.theme.media.fromTablet}){
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
@media screen and (${p => p.theme.media.fromTablet}){
    grid-column: 2;
    grid-row: 1;
    margin: 0;
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes.mm};
    line-height: ${p => p.theme.fontWeights.body};
}

`;
export const ContainerImg = styled.div`
position: relative;
left: 50%;
transform: translateX(-50%);
height: 240px;
margin-top: 40px;

@media screen and (${p => p.theme.media.fromTablet}){
    width: 288px;
    height: 328px; 
    grid-column: 1;
    grid-row: 1 / span 3;
    margin: 0;
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
@media screen and (${p => p.theme.media.fromTablet}){
    grid-column: 2;
    grid-row: 2;
    margin-top: 20px;    
    font-weight: ${p => p.theme.fontWeights.interMiddle};
    font-size: ${p => p.theme.fontSizes.m};
    line-height: ${p => p.theme.fontWeights.heading};
}
`;

export const Image = styled.img`
width: 240px;
height: 100%;
object-fit: cover;
margin-right: auto;
border-radius: 0px 0px 40px 40px;
 @media screen and (min-width: 768){
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
@media screen and (${p => p.theme.media.fromTablet}){
    grid-column: 1 / span 3;
    grid-row: 4;
    margin-top: 28px;
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
@media screen and (${p => p.theme.media.fromTablet}){   
    
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
@media screen and (${p => p.theme.media.fromTablet}){
    grid-column: 2 / span 3;
    grid-row: 4;
   flex-direction: row;
    align-items: baseline;
    align-self: end;

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
&:focus, :hover {
    background-color: ${p => p.theme.colors.white};
    box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  }
`;
export const ContainerItem = styled.div`
display: grid;
  grid-gap: 8px;
  grid-template-columns: 1fr 2fr;
  margin-top: 8px;
  /* &:focus, :hover {
    background-color: ${p => p.theme.colors.white};
    box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  } */
  @media screen and (${p => p.theme.media.fromTablet}){
    grid-column: 2;
    grid-row: 3;
    margin: 0px;
    align-items: flex-start;
    font-weight: ${p => p.theme.fontWeights.interMiddle};
    font-size: ${p => p.theme.fontSizes.m};
    line-height: ${p => p.theme.fontWeights.heading};    
}
`;
export const BtnAdd = styled.button`
width: 240px;
padding-top: 9px;
padding-bottom: 9px;
display: flex;
justify-content: center;
align-items: baseline;
gap: 10px;
border-radius: ${p => p.theme.radii.large};
background-color: ${p => p.theme.colors.background};
color: ${p => p.theme.colors.primeText};
font-weight: ${p => p.theme.fontWeights.middle};
font-size: ${p => p.theme.fontSizes.m};
line-height: ${p => p.theme.fontWeights.heading};
border: ${p => p.theme.borders.large};
/* &:focus, :hover {
    background-color: ${p => p.theme.colors.white};
    box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  } */
@media screen and (${p => p.theme.media.fromTablet}){
    margin-left: 10px;
}
`;
