import styled from 'styled-components';
import { theme } from '../../../theme';

export const FriendsItem = styled.li`
  background-color: ${theme.colors.itemBackground};
  border-radius: 20px;

  transition: transform 0.3s ease-in-out 0s;

  @media screen and (${theme.media.mobile}) {
    width: 280px;
    margin-left: auto;
    margin-right: auto;

    &:not(:last-child) {
      margin-bottom: 12px;
    }
  }

  @media screen and (${theme.media.tablet}) {
    width: 336px;

    &:nth-last-child(-n + 2) {
      margin-bottom: 0;
    }
  }

  @media screen and (${theme.media.desktop}) {
    width: 395px;
  }
`;

export const FriendsWrapper = styled.div`
  display: flex;
  padding: 10px 4px;

  @media screen and (${theme.media.tablet}) {
    padding: 16px 4px;
  }

  @media screen and (${theme.media.desktop}) {
    padding: 16px 4px;
  }
`;

export const FriendsTitle = styled.h3`
  padding-top: 14px;
  text-align: center;
  color: ${theme.colors.accent};
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeights.bold};

  @media screen and (${theme.media.tablet}) {
    font-size: ${theme.fontSizes.m};
    line-height: 1.38;
  }

  @media screen and (${theme.media.desktop}) {
    font-size: ${theme.fontSizes.mx};
    line-height: 1.35;
  }
`;

export const FriendsLinkToAddress = styled.a`
  text-decoration: underline;
  color: ${theme.colors.accent};
`;

export const FriendsLinkToContacts = styled.a`
  text-decoration: none;
  color: ${theme.colors.primeText};

  &:hover, &:focus {
    color: ${theme.colors.accent};
  }
`;

export const FriendsAddress = styled.span`
  text-decoration: underline;
  color: ${theme.colors.secondaryText};

  &:hover,
  &:focus {
    color: ${theme.colors.accent};
  }
`;

export const FriendsPar = styled.h4`
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeights.middle};
  color: ${theme.colors.secondaryText};
  line-height: ${theme.lineHeights.heading};

  &:not(:last-child) {
    padding-bottom: 4px;
  }

  @media screen and (${theme.media.tablet}) {
    font-size: ${theme.fontSizes.s};
    line-height: 1.38;

    &:not(:last-child) {
      padding-bottom: 8px;
    }
  }

  @media screen and (${theme.media.desktop}) {
    font-size: ${theme.fontSizes.m};
    line-height: 1.3;

    &:not(:last-child) {
      padding-bottom: 12px;
    }
  }
`;

export const FriendsLogoWrapper = styled.div`
  margin-right: 12px;
  

  @media screen and (${theme.media.tablet}) {
    margin-right: 14px;
  }

  @media screen and (${theme.media.desktop}) {
    margin-right: 16px;
  }
`;

export const FriendsImg = styled.img`
  object-fit: cover;
  max-width: fit-content;
  width: 110px;

  @media screen and (${theme.media.tablet}) {
    width: 120px;
  }

  @media screen and (${theme.media.desktop}) {
    width: 158px;
  }
`;
