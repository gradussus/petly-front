import styled from 'styled-components';

export const NoticesAddPetBody = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  @media (${props => props.theme.media.mobile}) {
    flex-direction: column-reverse;
    align-items: center;

    padding: 16px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: ${props => props.theme.colors.accent};
  }
`;

export const NoticesAddPetTitle = styled.div`
  font-weight: ${props => props.theme.fontWeights.middle};
  font-size: ${props => props.theme.fontSizes.mx};
  line-height: ${props => props.theme.lineHeights.heading};

  @media (${props => props.theme.media.mobile}) {
    font-size: ${props => props.theme.fontSizes.xs};
    color: #fff;
  }
`;

export const NoticesAddPetButton = styled.button`
  width: 40px;
  height: 40px;
  background: #f59256;
  border: none;
  border-radius: 50%;
  font-size: ${props => props.theme.fontSizes.l};
  color: white;
  transition: background 0.2s;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 2px;
  @media (min-width: 768px) {
    &:hover {
      background: #f5a675;
    }
  }
  @media (${props => props.theme.media.mobile}) {
    background: none;
    span {
      padding-top: 40px;
    }
  }
`;
