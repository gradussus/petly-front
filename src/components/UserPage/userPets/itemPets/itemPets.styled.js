import styled from 'styled-components';

export const ItemPetsBody = styled.div`
  position: relative;
  background: ${props => props.theme.colors.white};
  padding: 20px;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 40px;
  display: flex;
  margin-bottom: 22px;
  @media (max-width: 580px) {
    display: block;
    padding: 16px 20px 28px;
  }
`;

export const ItemPetsImg = styled.div`
  flex: 0 0 160px;
  margin-right: 32px;
  height: 160px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  img {
    min-width: 100%;
    height: 100%;
    border-radius: 40px;
  }
  @media (max-width: 580px) {
    width: 240px;
    height: 240px;
    margin: 0 auto 20px;
    img {
      max-height: 100%;
      border-radius: 20px;
    }
  }
`;

export const ItemPetsText = styled.div`
  font-weight: ${props => props.theme.fontWeights.middle};
  font-size: ${props => props.theme.fontSizes.m};
  line-height: ${props => props.theme.lineHeights.body};
  margin-bottom: 12px;
  span {
    font-weight: ${props => props.theme.fontWeights.normal};
  }
  @media (max-width: 580px) {
    font-size: ${props => props.theme.fontSizes.s};
  }
`;
