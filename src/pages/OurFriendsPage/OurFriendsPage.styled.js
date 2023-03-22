import styled from 'styled-components';
import { theme } from '../../theme';

export const FriendsPageBody = styled.section`
  margin-bottom: 100px;
`;

export const FriendsTitle = styled.h1`
  text-align: center;
  font-size: ${theme.fontSizes.ml};
  font-weight: ${theme.fontWeights.bold};
  line-height: ${theme.lineHeights.heading};
  margin-top: 40px;
  margin-bottom: 28px;

  @media screen and (${theme.media.tablet}) {
    font-size: ${theme.fontSizes.xxm};
    line-height: 1.38;

    margin-top: 90px;
    margin-bottom: 40px;
  }

  @media screen and (${theme.media.desktop}) {
    font-size: ${theme.fontSizes.xxm};
    line-height: 1.38;

    margin-top: 60px;
    margin-bottom: 60px;
  }
`;