import styled from 'styled-components';

export const HeaderBody = styled.header`
  display: flex;
  align-items: center;
  padding: 20px 0;
  gap: 20px;

  @media (max-width: 1279px) {
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 88px;
      z-index: 2;
      background: ${props => props.theme.colors.background};
    }
  }
`;

export const BurgerMenu = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  span,
  &::before,
  &::after {
    content: '';
    height: 3px;
    width: 100%;
    background: #000;
    border-radius: 4px;
    transition: all 0.3s ease 0s;
  }

  @media (min-width: 1280px) {
    display: none;
  }

  @media (max-width: 1279px) {
    position: relative;
    z-index: 3;
    &.active {
      span {
        display: none;
      }
      &::before {
        top: calc(50%);
        transform: rotate(-45deg);
        position: absolute;
      }
      &::after {
        bottom: calc(50% - 3px);
        transform: rotate(45deg);
        position: absolute;
      }
    }
  }
`;
