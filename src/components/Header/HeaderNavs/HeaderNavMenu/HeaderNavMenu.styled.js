import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const NavsBody = styled.div`
  overflow: hidden;
  display: flex;
  position: absolute;
  flex-direction: column-reverse;
  height: 100%;
  background: ${props => props.theme.colors.background};
  z-index: 989;
  padding-top: 88px;
  left: 0;
  top: -100%;
  justify-content: flex-end;
  gap: 20px;
  padding-top: 20px;
  transition: top 0.3s;

  &.active {
    top: 88px;
  }

  @media (${props => props.theme.media.tablet}) {
    display: flex;
    flex-direction: row;
    flex: 1 1 auto;
    position: relative;
    top: 0;
    padding-top: 0px;

    &.active {
      top: 0;
    }
  }

  @media (${props => props.theme.media.desktop}) {
    display: flex;
    flex-direction: row;
    flex: 1 1 auto;
    position: relative;
    top: 0;
    padding-top: 0px;

    &.active {
      top: 0;
    }
  }
`;

export const NavMenu = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  flex: 1 1 auto;
  background: ${props => props.theme.colors.background};
  padding-top: 20px;
  width: 100vw;

  @media (${props => props.theme.media.tablet}) {
    position: fixed;
    display: flex;
    width: 100vw;
    height: 100vh;
    left: 0px;
    top: -100%;
    transition: top 0.3s;

    &.active {
      top: 88px;
    }
  }
  @media (${props => props.theme.media.desktop}) {
    flex-direction: row;
    gap: 80px;
    padding: 0;
  }
`;

export const NavButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.background};
  font-weight: ${props => props.theme.fontWeights.middle};
  font-size: ${props => props.theme.fontSizes.mx};
  line-height: ${props => props.theme.lineHeights.heading};
`;

export const NavItem = styled(NavLink)`
  font-weight: ${props => props.theme.fontWeights.middle};
  font-size: ${props => props.theme.fontSizes.mx};
  line-height: ${props => props.theme.lineHeights.heading};
  color: ${props => props.theme.colors.headerText};
  transition: color 0.3s;

  &.active {
    color: ${props => props.theme.colors.accent};
    text-decoration: underline;
  }

  &:hover {
    color: ${props => props.theme.colors.accent};
  }

  @media (${props => props.theme.media.tablet}) {
    font-size: ${props => props.theme.fontSizes.xxm};
    line-height: ${props => props.theme.lineHeights.body};
  }

  @media (${props => props.theme.media.mobile}) {
    font-size: ${props => props.theme.fontSizes.llx};
  }
`;
