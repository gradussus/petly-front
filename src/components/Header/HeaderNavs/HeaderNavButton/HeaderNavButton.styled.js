import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const AccountBtn = styled(Link)`
  padding: 11px 28px;
  border-radius: 40px;
  transition: background 0.3s;
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${props => props.theme.colors.white};
  background: ${props => props.theme.colors.accent};
  font-weight: ${props => props.theme.fontWeights.middle};
  font-size: ${props => props.theme.fontSizes.m};
  line-height: ${props => props.theme.lineHeights.heading};

  &:hover {
    background: #f5a675;
  }
`;

export const LoginButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Login = styled(Link)`
  background: ${props => props.theme.colors.accent};
  color: ${props => props.theme.colors.white};
  transition: background 0.3s;
  padding: 11px 28px;
  border-radius: 40px;
  &:hover {
    background: #f5a675;
  }
`;
export const Registration = styled(Link)`
  color: ${props => props.theme.colors.primeText};
  border: 2px solid ${props => props.theme.colors.accent};
  background: ${props => props.theme.colors.white};
  transition: color 0.3s;
  padding: 9px 28px;
  border-radius: 40px;

  &:hover {
    color: ${props => props.theme.colors.accent};
  }
`;
