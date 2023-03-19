import styled from 'styled-components';

export const FormBtn = styled.div`
  flex: 0 0 32px;
  height: 32px;
  margin-left: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fdf7f2;
  border-radius: 50%;
  cursor: pointer;
  @media (min-width: 767px) {
    &:hover * {
      transition: 0.4s;
      fill: ${props => props.theme.colors.accent};
    }
  }
  @media (max-width: 1280px) {
    * {
      fill: ${props => props.theme.colors.accent};
    }
  }
`;
