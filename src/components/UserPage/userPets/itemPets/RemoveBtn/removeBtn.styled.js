import styled from 'styled-components';

export const ItemPetsRemoveBtn = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;

  position: absolute;
  right: 10px;

  background: ${props => props.theme.colors.white};
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 767px) {
    top: 255px;
  }

  @media (min-width: 1279px) {
    top: 20px;
    right: 20px;
    background: ${props => props.theme.colors.background};

    &:hover * {
      transition: 0.4s;
      fill: ${props => props.theme.colors.accent};
    }
  }
`;
