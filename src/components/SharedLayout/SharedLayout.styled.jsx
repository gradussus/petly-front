import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto;

  @media screen and (min-width: 320px) {
    max-width: 320px;
    padding: 0 ${props => props.theme.space[5]}px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 ${props => props.theme.space[6]}px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    padding: 0 ${props => props.theme.space[4]}px;
  }
`;
