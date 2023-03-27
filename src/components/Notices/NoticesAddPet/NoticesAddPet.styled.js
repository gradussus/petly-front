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
    border-radius: ${p => p.theme.radii.round};
    background: ${props => props.theme.colors.accent};
  }
`;

export const NoticesAddPetTitle = styled.div`
  font-weight: ${props => props.theme.fontWeights.middle};
  font-size: ${props => props.theme.fontSizes.mx};
  line-height: ${props => props.theme.lineHeights.heading};

  @media (${props => props.theme.media.mobile}) {
    font-size: ${props => props.theme.fontSizes.xs};
    color: ${props => props.theme.colors.accentText};
  }
`;

export const NoticesAddPetButton = styled.div`
  width: 40px;
  height: 40px;
  background: ${props => props.theme.colors.accent};
  border: none;
  border-radius: ${p => p.theme.radii.round};
  font-size: ${props => props.theme.fontSizes.l};
  color: ${props => props.theme.colors.itemBackground};
  transition: background 0.2s;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 2px;
  @media (min-width: 768px) {
    &:hover {
      background: ${props => props.theme.colors.backgroundSecondary};
    }
  }
  @media (${props => props.theme.media.mobile}) {
    background: none;
    span {
      padding-top: 40px;
    }
  }
`;
