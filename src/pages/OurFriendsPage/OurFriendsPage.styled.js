import styled from 'styled-components';
import { theme } from '../../theme';

export const FriendsPageBody = styled.section`
  margin-left: auto;
  margin-right: auto;

  max-width: 280px;

  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const FriendsTitle = styled.h1`
  text-align: center;
  font-size: ${theme.fontSizes.ml};
  font-weight: ${theme.fontWeights.bold};
  line-height: 1.375;
  margin-bottom: 28px;
`;