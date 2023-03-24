import styled from 'styled-components';
import { theme } from '../../theme';

export const FriendsList = styled.ul`
  margin: 0 auto;
  justify-content: center;

  @media screen and (${theme.media.tablet}) {
    display: grid;
    grid-template-columns: repeat(2, 336px);
    grid-gap: 32px;
  }

  @media screen and (${theme.media.desktop}) {
    display: grid;
    grid-template-columns: repeat(3, 395px);
    grid-gap: 32px;

  }
`;

