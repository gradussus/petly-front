import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px 20px;

  @media screen and (min-width: 768px) {
    width: 704px;
    display: flex;
    display: grid;
    padding: 32px 20px;
    gap: 0px 20px;
    grid-template-columns: 288px 1fr;
    grid-template-rows: repeat(4, auto);
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
  @media screen and (min-width: 768px) {
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
  @media screen and (min-width: 768px) {
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
  @media screen and (min-width: 768px) {
    grid-column: 2;
    grid-row: 1;
    margin: 0;
    margin-bottom: 20px;
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

  @media screen and (min-width: 768px) {
    width: 288px;
    height: 328px;
    grid-column: 1;
    grid-row: 1 / span 3;
    margin: 0;
  }
`;
export const Box = styled.ul`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: 1fr 2fr;
  margin-top: 16px;
  font-weight: ${p => p.theme.fontWeights.middle};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.fontWeights.heading};
  @media screen and (min-width: 768px) {
    grid-column: 2;
    grid-row: 2;

    font-weight: ${p => p.theme.fontWeights.interMiddle};
    font-size: ${p => p.theme.fontSizes.m};
    line-height: ${p => p.theme.fontWeights.heading};
  }
`;

export const Image = styled.img`
  /* width: 240px; */
  height: 100%;
  object-fit: cover;
  margin-right: auto;
  margin-left: auto;
  border-radius: 0px 0px 40px 40px;
  @media screen and (min-width: 768px) {
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
  font-weight: ${p => p.theme.fontWeights.middle};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: ${p => p.theme.fontWeights.heading};
  color: ${p => p.theme.colors.primeText};
`;

export const Text = styled.p`
  text-decoration: none;
  margin: 0;
  margin-top: 28px;
  margin-bottom: 40px;
  font-weight: ${p => p.theme.fontWeights.middle};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.fontWeights.heading};
  @media screen and (min-width: 768px) {
    grid-column: 1 / span 3;
    grid-row: 4;
    margin: 0;
    padding-top: 28px;
    padding-bottom: 32px;
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
  @media screen and (min-width: 768px) {
    font-weight: ${p => p.theme.fontWeights.interMiddle};
    font-size: ${p => p.theme.fontSizes.m};
    line-height: ${p => p.theme.fontWeights.heading};
    color: ${p => p.theme.colors.primeText};
  }
`;
export const ContainerBtn = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    grid-column: 2 / span 3;
    grid-row: 5;
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
  cursor: pointer;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`;
export const ContainerItem = styled.div`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: 1fr 2fr;
  margin-top: 8px;
  @media screen and (min-width: 768px) {
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
  align-items: center;
  gap: 10px;
  border-radius: ${p => p.theme.radii.large};
  background-color: ${p => p.theme.colors.background};
  color: ${p => p.theme.colors.primeText};
  font-weight: ${p => p.theme.fontWeights.middle};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.fontWeights.heading};
  border: ${p => p.theme.borders.large};
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }

  @media screen and (min-width: 768px) {
    margin-left: 10px;
  }
`;
