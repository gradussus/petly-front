import styled from 'styled-components';

export const ItemPetsBody = styled.div`
  position: relative;
  display: flex;

  background: ${props => props.theme.colors.white};
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);

  padding: 20px;
  border-radius: 40px;
  margin-bottom: 22px;

  @media (${props => props.theme.media.mobile}) {
    display: block;
    padding: 16px 20px 28px;
  }
`;

export const ItemPetsImg = styled.div`
  flex: 0 0 160px;
  height: 160px;

  margin-right: 32px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  img {
    min-width: 100%;
    height: 100%;
    border-radius: 40px;
  }

  @media (${props => props.theme.media.mobile}) {
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
  @media (${props => props.theme.media.mobile}) {
    font-size: ${props => props.theme.fontSizes.s};
  }
`;
