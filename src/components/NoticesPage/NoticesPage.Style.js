import styled from "styled-components";

export const Title = styled.h1`
width: 100vw;
text-align: center;
text-decoration: 0;
margin: 0;
/* margin-top: 42px; */
font-weight: ${p => p.theme.fontWeights.bold};
font-size: ${p => p.theme.fontSizes.ml};
line-height: ${p => p.theme.lineHeights.heading};
@media screen  and (min-width: 768px){
    margin-top: 90px;
    margin-top: 40px;
    font-weight: ${p => p.theme.fontWeights.bold};
font-size: ${p => p.theme.fontSizes.ll};
line-height: ${p => p.theme.lineHeights.heading};
}
@media screen  and (${p => p.theme.media.desktop}){
font-weight: ${p => p.theme.fontWeights.bold};
font-size: ${p => p.theme.fontSizes.ml};
line-height: ${p => p.theme.lineHeights.heading};
}
`;

export const ImgFound = styled.img`
position: absolute;
resize: 50%;
`;

export const ContainerBtn = styled.div`
margin-top: 28px;
margin-bottom: 30px;
@media screen  and (${p => p.theme.media.tablet}){
    display: grid; 
    gap: 12px;
    grid-template-columns: 1fr 130px;
    margin-top: 40px;
margin-bottom: 30px;
  
}
`;


export const BtnAdd = styled.button`
position: fixed;
display: flex;
gap: 5px;
flex-direction: column;
align-items: center;
justify-content: center;
bottom: 40px;
right: 40px;
width: 80px;
height: 80px;
z-index: 5;
transform: translate(-50% -50%);
text-align: center;
border: ${p => p.theme.borders.none};
border-radius: ${p => p.theme.radii.round};
background-color: ${p => p.theme.colors.accent};
color: ${p => p.theme.colors.white};
font-weight: ${p => p.theme.fontWeights.normal};
font-size: ${p => p.theme.fontSizes.xs};
line-height: ${p => p.theme.lineHeights.heading};
@media screen  and (min-width: 768px){
  position: static;
  width: 44px;
height: 44px;
align-items: center;
justify-content: center;
}
`;
export const Span = styled.span`
@media screen  and (min-width: 768px){
 display: none;  
}
`;

export const ContainerAdd = styled.div`
display: flex;
gap: 12px;
margin-left: auto;
align-items: baseline;

`;
export const Img = styled.img`
display: inline-block;
`;
export const Label = styled.label`
 position: relative;
  
`;
export const FoundImg = styled.img`
 position: absolute;
 top: 50%;
 right: 16px;
 transform: translateY(-50% ) translateX(-50% );
  
`;


export const ContainerCard = styled.div`
margin-top: 30px;
margin-left: auto;
  margin-right: auto;
@media screen  and (${p => p.theme.media.tablet}){
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
  width: 768px;
}
@media screen  and (${p => p.theme.media.desktop}){
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
  width: 1280px;
}

`;
export const Ul = styled.ul`
display: flex;
flex-wrap: wrap;
gap: 12px;
justify-content: center;
margin-right: auto;
margin-left: auto;
margin-top: 30px;
/* flex-direction: column; */

@media screen  and (${p => p.theme.media.tablet}){
  margin-top: 30px;
  display: flex;
flex-wrap: wrap;
gap: 12px;
justify-content: center;
}
@media screen  and (${p => p.theme.media.desktop}){
  margin-top: 30px;
  display: flex;
flex-wrap: wrap;
gap: 12px;
justify-content: center;
}
`;

export const Li = styled.li`
/* margin-top: 32px; */

`;
export const ImgCart = styled.img`
width: 280px;
height: 288px;

`;
export const P = styled.p`
opacity: 0;
@media screen  and (min-width: 768px){
  opacity: 1;
  color: ${p => p.theme.colors.primeText};
font-weight: ${p => p.theme.fontWeights.normal};
font-size: ${p => p.theme.fontSizes.mx};
line-height: ${p => p.theme.lineHeights.heading};
}
`; 
