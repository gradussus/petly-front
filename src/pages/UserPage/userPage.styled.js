import styled from 'styled-components';

export const UserPageBody = styled.div`
  display: block;
  margin-top: 60px;

  @media (${props => props.theme.media.desktop}) {
    display: flex;
  }
`;
