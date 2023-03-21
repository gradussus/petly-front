import styled from 'styled-components';
import { theme } from '../../../theme';

export const FriendsItem = styled.li`
  background-color: ${theme.colors.white};
  border-radius: 20px;
  padding: 12px 4px;

  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;
export const FriendsWrapper = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
  align-items: flex-start;
  padding-top: 12px;
`;

export const FriendsTitle = styled.h3`
text-align: center;
color: ${theme.colors.accent};
font-size: ${theme.fontSizes.xs};
font-weight: ${theme.fontWeights.bold};
`
export const FriendsLink = styled.a`
text-decoration: underline;
position: relative;
color: ${theme.colors.accent}
`
export const FriendsPar = styled.p`
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeights.middle};
`;

export const FriendsLogo = styled.div`
margin-right: 12px;
`

// export const FriendsInfo = styled.div`
  
// `;

