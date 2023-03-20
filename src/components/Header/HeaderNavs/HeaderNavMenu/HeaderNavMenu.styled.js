import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const NavMenu = styled.nav`
  display: flex;
  align-items: center;
  gap: 80px;
  flex: 1 1 auto;

  @media (min-width: 768px) and (max-width: 1279px) {
    position: absolute;
    top: -100%;
    left: 0;
    display: block;
    width: 100vw;
    height: 100%;
    overflow: auto;
    padding-top: 88px;
    transition: top 0.3s;
    a {
      display: block;
      text-align: center;
      &:not(:last-child) {
        margin-bottom: 60px;
      }
    }

    &.active {
      top: 0;
    }
  }

  @media (max-width: 767px) {
    display: block;

    a {
      display: block;
      width: 100vw;
      text-align: center;
      &:not(:last-child) {
        margin-bottom: 40px;
      }
    }
  }
`;

export const NavsBody = styled.div`
  display: flex;

  @media (min-width: 1280px) {
    flex: 1 1 auto;
  }

  @media (max-width: 767px) {
    position: absolute;
    top: -1000px;
    left: 0;
    flex-direction: column-reverse;
    width: 100vw;
    height: 100%;
    overflow: scroll;
    transition: top 0.3s;
    padding-top: 88px;
    background: ${props => props.theme.colors.background};

    &.active {
      top: 0;
    }
  }
`;

export const NavButtons = styled.div`
  display: flex;
  align-items: center;
  font-weight: ${props => props.theme.fontWeights.middle};
  font-size: ${props => props.theme.fontSizes.mx};
  line-height: ${props => props.theme.lineHeights.heading};

  @media (max-width: 1279px) {
    position: relative;
    z-index: 3;
  }

  @media (max-width: 767px) {
    justify-content: center;
    margin-bottom: 60px;
    margin-top: 46px;
    z-index: 1;
  }
`;

export const NavItem = styled(NavLink)`
  font-weight: ${props => props.theme.fontWeights.middle};
  font-size: ${props => props.theme.fontSizes.mx};
  line-height: ${props => props.theme.lineHeights.heading};
  color: ${props => props.theme.colors.headerText};
  transition: color 0.3s;

  &.active {
    color: ${props => props.theme.colors.accent};
  }

  &:hover {
    color: ${props => props.theme.colors.accent};
  }

  @media (max-width: 1279px) {
    font-size: ${props => props.theme.fontSizes.xxm};
    line-height: ${props => props.theme.lineHeights.body};
  }
`;
