import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const NavMenu = styled.nav`
  display: flex;
  align-items: center;
  gap: 80px;
  flex: 1 1 auto;

  @media (${props => props.theme.media.tablet}) {
    position: absolute;
    top: -100%;
    left: 0;
    z-index: 989;
    display: block;
    width: 100vw;
    height: 100%;
    overflow: auto;
    background: ${props => props.theme.colors.background};
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

  @media (${props => props.theme.media.mobile}) {
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

  @media (${props => props.theme.media.desktop}) {
    flex: 1 1 auto;
  }

  @media (${props => props.theme.media.mobile}) {
    position: absolute;
    top: -100%;
    z-index: 989;
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
    z-index: 991;
  }

  @media (${props => props.theme.media.mobile}) {
    justify-content: center;
    margin-bottom: 60px;
    margin-top: 46px;
    z-index: 990;
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
