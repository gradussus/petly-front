import styled from 'styled-components';

export const LogoutBody = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 24px;
  span {
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: rgba(17, 17, 17, 0.6);
    cursor: pointer;
    transition: color 0.3s;
    @media (min-width: 992px) {
      &:hover {
        color: ${props => props.theme.colors.accent};
      }
    }
  }
`;
