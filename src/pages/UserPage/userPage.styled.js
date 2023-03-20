import styled from 'styled-components';

export const UserPageBody = styled.div`
  display: block;

  @media (${props => props.theme.media.desktop}) {
    display: flex;
  }
`;
