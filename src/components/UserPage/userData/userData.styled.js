import styled from 'styled-components';

export const UserDataBody = styled.div`
  padding-right: 0;
  margin-bottom: 20px;

  @media (${props => props.theme.media.desktop}) {
    flex: 0 0 35%;
    padding-right: 32px;
  }

  @media (${props => props.theme.media.mobile}) {
    margin-bottom: 47px;
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

  @media (${props => props.theme.media.desktop}) {
    border-radius: 40px;
    display: block;
  }

  @media (max-width: 1279px) {
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

  @media (${props => props.theme.media.mobile}) {
    display: block;
  }
`;

export const UserLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
`;
