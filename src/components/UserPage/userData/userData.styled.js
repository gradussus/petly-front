import styled from 'styled-components';

export const UserDataBody = styled.div`
  padding-right: 0;
  margin-bottom: 20px;

  @media (min-width: 1280px) {
    flex: 0 0 35%;
    padding-right: 32px;
  }
`;

export const UserDataHead = styled.div`
  font-weight: ${props => props.theme.fontWeights.middle};
  font-size: ${props => props.theme.fontSizes.lx};
  margin-bottom: 24px;
`;

export const UserDataContent = styled.div`
  padding: 20px 16px 18px;
  background: ${props => props.theme.colors.white};
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  @media (min-width: 1280px) {
    border-radius: 40px;
    display: block;
  }

  @media (max-width: 1280px) {
    padding-left: 0;
    border-radius: 0 40px 40px 0;
    position: relative;
    &:before {
      content: '';
      min-height: 100%;
      position: absolute;
      left: -40px;
      top: 0;
      width: 40px;
      background: ${props => props.theme.colors.white};
    }
  }

  @media (max-width: 767px) {
    display: block;
  }
`;
