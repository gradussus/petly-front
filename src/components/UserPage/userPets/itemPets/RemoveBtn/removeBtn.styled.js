import styled from 'styled-components';

export const ItemPetsRemoveBtn = styled.div`
  position: absolute;
  width: 44px;
  height: 44px;
  background: ${props => props.theme.colors.background};
  border-radius: 50%;
  top: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media (max-width: 580px) {
    right: 10px;
    top: 265px;
    background: ${props => props.theme.colors.white};
  }
  &:hover * {
    transition: 0.4s;
    fill: ${props => props.theme.colors.accent};
  }
`;
