import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  
  @media screen and (min-width: 768px) {
    padding: 0 32px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    padding: 0 16px;
  }
`;
