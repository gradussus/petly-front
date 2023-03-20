import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderLogotype = styled(NavLink)`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 48px;
  letter-spacing: 0.07em;
  color: #111111;
  margin-right: 80px;

  &:hover {
    cursor: pointer;
  }

  span {
    color: ${props => props.theme.colors.accent};
  }

  @media (max-width: 1279px) {
    flex: 1 1 auto;
    position: relative;
    z-index: 3;
  }
`;
