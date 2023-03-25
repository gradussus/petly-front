import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const NoticesButtonsBody = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const NoticesButtonsItem = styled(NavLink)`
  padding: 10px 28px;
  background: #ffffff;
  border: 2px solid #f59256;
  border-radius: 40px;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  color: #111111;
  transition: all 0.3s;

  :hover,
  &.active {
    background: #f59256;
    color: #fff;
  }
`;
