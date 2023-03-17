import styled from "styled-components";

export const Title = styled.div`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
font-size: ${p => p.theme.fontSizes.lx}px;
font-weight: ${p => p.theme.fontWeights.bold};
color: ${p => p.theme.colors.primeText};
background-color: ${p => p.theme.colors.background};
font-family: ${p => p.theme.fonts.body};
`;