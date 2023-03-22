import styled from 'styled-components';
import { theme } from '../../theme';

import { NavLink } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const NoticesCategoriesNavLink = styled(NavLink)`
  font-family: ${theme.fonts.manrope};
  font-weight: ${theme.fontWeights.middle};
  text-align: center;
  letter-spacing: 0.04em;
  color: ${theme.colors.primeText};
  @media screen and (${theme.media.mobile}) {
    font-size: ${theme.fontSizes.s};
    line-height: 1.357;
    padding: 8px 28px;
  }
  font-size: 20px;
  line-height: 1.35;
  padding: 10px 28px;
  background-color: ${theme.colors.white};
  border: 2px solid ${theme.colors.accent};
  border-radius: 40px;
  transition: background-color 200ms, color 200ms;
  &:hover,
  &:focus, &.active {
    background-color: ${theme.colors.accent};
    color: ${theme.colors.white};
  }
  cursor: pointer;
`;

const elements = { NoticesCategoriesNavLink, Container };

export default elements;
