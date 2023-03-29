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

export const NoticesAddPetButton = styled.button`
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
export const ContainerModal = styled.div`
  margin-right: auto;
  display: flex;
  justify-content: start;
`;
export const Text = styled.p`
  margin-top: 20px;
  margin-bottom: 18px;
  margin-right: auto;
  text-align: start;
  font-weight: ${props => props.theme.fontWeights.middle};
  font-size: ${props => props.theme.fontSizes.ms};
  line-height: ${props => props.theme.lineHeights.body};
  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.ml};
    margin-bottom: 31px;
  }
`;

export const Male = styled.div`
  margin-right: 50px;
  margin-left: auto;
  margin-bottom: 32px;
  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  margin-bottom: 16px;
  font-weight: ${props => props.theme.fontWeights.middle};
  font-size: ${props => props.theme.fontSizes.ms};
  line-height: ${props => props.theme.lineHeights.body};
  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.ml};

    margin-bottom: 28px;
  }
`;

export const LabelComments = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 32px;
  width: 100%;
  font-weight: ${props => props.theme.fontWeights.middle};
  font-size: ${props => props.theme.fontSizes.ms};
  line-height: ${props => props.theme.lineHeights.body};
  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.ml};
    margin-top: 28px;
  }
`;

export const ContainerBtn = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;
export const WrapperModal = styled.div`
  display: flex;
  margin-right: auto;
`;
