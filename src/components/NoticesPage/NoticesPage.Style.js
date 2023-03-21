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
@media screen  and (${p => p.theme.media.fromTablet}){
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
export const Found = styled.div`
position: relative;
display: flex;
margin: 28px 0px;
justify-content: center;

`;
export const ImgFound = styled.img`
position: absolute;
resize: 50%;
`;
export const Input = styled.input`
/* position: relative; */
width: 280px;
padding: 9px 12px;
border: ${p => p.theme.borders.none};
border-radius: 20px;
margin-left: auto;
margin-right: auto;
@media screen  and (${p => p.theme.media.fromTablet}){
    width: 608px;
padding: 8px 20px;
&::placeholder{
   font-weight: ${p => p.theme.fontWeights.middle};
font-size: ${p => p.theme.fontSizes.mx};
line-height: ${p => p.theme.lineHeights.heading};
}
}
@media screen  and (${p => p.theme.media.desktop}){
    font-weight: ${p => p.theme.fontWeights.bold};
font-size: ${p => p.theme.fontSizes.ml};
line-height: ${p => p.theme.lineHeights.heading};
}

`;
export const ContainerBtn = styled.div`
margin-top: 28px;
margin-bottom: 30px;
@media screen  and (${p => p.theme.media.fromTablet}){
    display: grid; 
    gap: 12px;
    grid-template-columns: 1fr 130px;
    margin-top: 40px;
margin-bottom: 30px;
  
}
`;
export const Btn = styled.div`
display: flex;
flex-wrap: wrap;
gap: 12px;

`;

export const BtnLost = styled.button`
width: 131px;
padding: 8px;
border: ${p => p.theme.borders.large};
border-radius: 20px;
background-color: ${p => p.theme.colors.white};
color: ${p => p.theme.colors.primeText};
font-weight: ${p => p.theme.fontWeights.normal};
font-size: ${p => p.theme.fontSizes.mx};
line-height: ${p => p.theme.lineHeights.heading};
&:hover,
  &:focus,
  &.active {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
@media screen  and (${p => p.theme.media.fromTablet}){
width: 162px;
font-weight: ${p => p.theme.fontWeights.middle};
padding: 10px 28px;
}
`;
export const BtnGood = styled.button`
width: 155px;
padding: 8px;
grid-column: 1;
grid-row: 2;
border: ${p => p.theme.borders.none};
border-radius: 20px;
background-color: ${p => p.theme.colors.accent};
color: ${p => p.theme.colors.white};
font-weight: ${p => p.theme.fontWeights.normal};
font-size: ${p => p.theme.fontSizes.mx};
line-height: ${p => p.theme.lineHeights.heading};
&:hover,
  &:focus,
  &.active {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
@media screen  and (${p => p.theme.media.fromTablet}){
width: 197px;
font-weight: ${p => p.theme.fontWeights.middle};
padding: 10px 28px;

}
`;
export const BtnFavorite = styled.button`
width: 140px;
padding: 8px;
grid-column: 1;
grid-row: 3;
border: ${p => p.theme.borders.large};
border-radius: 20px;
color: ${p => p.theme.colors.primeText};
background-color: ${p => p.theme.colors.white};
font-weight: ${p => p.theme.fontWeights.normal};
font-size: ${p => p.theme.fontSizes.mx};
line-height: ${p => p.theme.lineHeights.heading};
&:hover,
  &:focus,
  &.active {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
@media screen  and (${p => p.theme.media.fromTablet}){
width: 175px;
padding: 10px 28px;
font-weight: ${p => p.theme.fontWeights.middle};

}
`;
export const BtnSell = styled.button`
width: 81px;
padding: 8px;
grid-column: 2;
grid-row: 2;
border: ${p => p.theme.borders.large};
border-radius: 20px;
color: ${p => p.theme.colors.primeText};
background-color: ${p => p.theme.colors.white};
font-weight: ${p => p.theme.fontWeights.normal};
font-size: ${p => p.theme.fontSizes.mx};
line-height: ${p => p.theme.lineHeights.heading};
&:hover,
  &:focus,
  &.active {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
@media screen  and (${p => p.theme.media.fromTablet}){
width: 91px;
padding: 10px 28px;
font-weight: ${p => p.theme.fontWeights.middle};

}
`;
export const BtnMy = styled.button`
width: 105px;
padding: 8px;
grid-column: 2;
grid-row: 3;
border: ${p => p.theme.borders.large};
border-radius: 20px;
color: ${p => p.theme.colors.primeText};
background-color: ${p => p.theme.colors.white};
font-weight: ${p => p.theme.fontWeights.normal};
font-size: ${p => p.theme.fontSizes.mx};
line-height: ${p => p.theme.lineHeights.heading};
&:hover,
  &:focus,
  &.active {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
@media screen  and (${p => p.theme.media.fromTablet}){
width: 126px;
padding: 10px 28px;
font-weight: ${p => p.theme.fontWeights.middle};

}
`;
export const BtnAdd = styled.button`
position: fixed;
bottom: 100px;
right: 100px;
width: 80px;
height: 80px;
transform: translate(-50% -50%);
text-align: center;
border: ${p => p.theme.borders.none};
border-radius: ${p => p.theme.radii.round};
background-color: ${p => p.theme.colors.accent};
color: ${p => p.theme.colors.white};
font-weight: ${p => p.theme.fontWeights.normal};
font-size: ${p => p.theme.fontSizes.xs};
line-height: ${p => p.theme.lineHeights.heading};

`;
export const TabletBtnAdd = styled.button`
width: 44px;
height: 44px;
text-align: center;
border: ${p => p.theme.borders.none};
border-radius: ${p => p.theme.radii.round};
background-color: ${p => p.theme.colors.accent};
color: ${p => p.theme.colors.white};
font-weight: ${p => p.theme.fontWeights.normal};
font-size: ${p => p.theme.fontSizes.xs};
line-height: ${p => p.theme.lineHeights.heading};

`;

export const ContainerAdd = styled.div`
display: flex;
gap: 12px;
margin-right: auto;
align-items: baseline;
`;
export const Img = styled.img`
display: inline-block;
`;
export const Ul = styled.ul`
display: flex;
flex-wrap: wrap;
gap: 12px;
/* flex-direction: column; */
justify-content: center;
/* @media screen  and (${p => p.theme.media.fromTablet}){
  display: grid; 
  gap: 32px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;}
@media screen  and (${p => p.theme.media.desktop}){
  display: grid;   
  grid-template-columns: repeat(4, 1fr);
} */
`;

export const Li = styled.li`
margin-top: 32px;

`;
export const ImgCart = styled.img`
width: 280px;
height: 288px;

`;
export const P = styled.p`
color: ${p => p.theme.colors.primeText};
font-weight: ${p => p.theme.fontWeights.normal};
font-size: ${p => p.theme.fontSizes.mx};
line-height: ${p => p.theme.lineHeights.heading};
`; 