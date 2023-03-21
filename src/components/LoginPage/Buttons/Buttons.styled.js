import styled from 'styled-components';
import { theme } from '../../../theme'

export const AccentButton = styled.button`
  font-weight: ${theme.fontWeights.bold};
  font-size: ${theme.fontSizes.mx};
  width: 100%;
  border-radius: ${theme.radii.large};
  padding: 10px;
  border: ${theme.borders.large};
  background: ${theme.colors.accent};
  color: ${theme.colors.white};
  &:hover{
    cursor: pointer;
  }
  
`;

export const TransparentButton = styled(AccentButton)`
  background: ${theme.colors.background};
  color: ${theme.colors.black};
  margin-top: 16px;
`;

export const NextBtn = styled(AccentButton)``;