import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  /* @media screen and (${props => props.theme.media.mobile}) {
    display: grid;
    grid-template-columns: 1fr 80px;
  } */
`;

const NoticesCategoriesNavLink = styled(NavLink)`
  font-family: ${props => props.theme.fonts.manrope};
  font-weight: ${props => props.theme.fontWeights.middle};
  text-align: center;
  letter-spacing: 0.04em;
  color: ${props => props.theme.colors.primeText};
  @media screen and (${props => props.theme.media.mobile}) {
    font-size: ${props => props.theme.fontSizes.s};
    line-height: 1.357;
    padding: 8px 28px;
  }
  font-size: ${props => props.theme.fontSizes.mx};
  line-height: 1.35;
  padding: 10px 28px;
  background-color: ${props => props.theme.colors.itemBackground};
  border: ${props => props.theme.borders.large};
  border-radius: ${props => props.theme.radii.large};
  transition: background-color 200ms, color 200ms;
  &:hover,
  &:focus,
  &.active {
    background-color: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.accentText};
  }
  cursor: pointer;
`;
const ContainerBtn = styled.div`
  @media screen and (${props => props.theme.media.mobile}) {
    display: flex;
    flex-wrap: wrap;
    grid-column: 1;
  }
`;

const elements = { NoticesCategoriesNavLink, Container, ContainerBtn };

export default elements;
