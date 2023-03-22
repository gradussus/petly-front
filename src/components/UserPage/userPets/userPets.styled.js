import styled from 'styled-components';

export const UserPetsBody = styled.div`
  flex: 1 1 65%;
`;

export const UserPetsHead = styled.div`
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  font-weight: ${props => props.theme.fontWeights.middle};
  font-size: ${props => props.theme.fontSizes.lx};
`;

export const NoUserPets = styled.div`
  font-size: 24px;
  font-weight: ${props => props.theme.fontWeights.middle};
  padding: 20px;
  text-align: center;
`;
