import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const NoticesButtonsBody = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const NoticesButtonsItem = styled(NavLink)`
  padding: 10px 28px;
  background: ${props => props.theme.colors.itemBackground};
  border: ${props => props.theme.borders.large};
  border-radius: ${props => props.theme.radii.large};
  font-weight: ${props => props.theme.fontWeights.middle};
  font-size: ${props => props.theme.fontSizes.mx};
  line-height: 27px;
  color: ${props => props.theme.colors.primeText};
  transition: all 0.3s;

  :hover,
  &.active {
    background: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.accentText};
  }
`;
