import styled from 'styled-components';

export const NoticesItemsBody = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 32px;
  grid-row-gap: 32px;

  @media (max-width: 1279px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const NoticesItemBody = styled.div`
  background: ${props => props.theme.colors.itemBackground};
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 0 0 40px 40px;
  position: relative;

  display: flex;
  flex-direction: column;
`;

export const NoticesItemContent = styled.div`
  padding: 20px;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
`;

export const NoticesItemImg = styled.div`
  img {
    object-fit: cover;
    height: 288px;
    width: 100%;
  }
`;

export const NoticesItemTitle = styled.div`
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.mm};
  line-height: 38px;
  margin-bottom: 20px;
  flex: 1 1 auto;
`;

export const NoticesItemText = styled.div`
  display: flex;
  font-weight: ${props => props.theme.fontWeights.middle};
  font-size: ${props => props.theme.fontSizes.m};
  line-height: 22px;

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  div {
    flex: 0 0 60px;
  }
`;


export const NoticesItemBtn = styled.button`
  margin: 20px 0 12px;
  border: ${props => props.theme.borders.large};
  border-radius: ${props => props.theme.radii.large};
  padding: 8px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 28px;
  margin-top: 20px;

  height: 38px;

  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;
  color: ${props => props.theme.colors.accent};

  background: ${props => props.theme.colors.itemBackground};

  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.accentText};
    background: ${props => props.theme.colors.accent};
    transform: scale(1.05);
  }
`;

export const NoticesLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
  width: 100%;
`;
