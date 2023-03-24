import styled from 'styled-components';
import { theme } from '../../theme';

const Section = styled.section`
 overflow-x: hidden;
  background-color: ${theme.colors.background};
  height: auto;
  padding-top: 42px ;
  padding-bottom: 100px;
  
  @media screen and (${theme.media.tablet}) {
    padding-top: 90px;
  }
  @media screen and (${theme.media.desktop}) {
    padding-top: 60px;
    padding-bottom: 200px;
  }
`;

const Container = styled.div`
  margin: 0 auto;
 
  padding: 0 20px;
    /* width: 320px; */
  @media screen and (min-width: 768px) {
    display: grid; 
    gap: 12px;
    grid-template-columns: 1fr 130px;
    /* padding: 0 32px; */
    /* width: 768px; */
  }
  @media screen and (${theme.media.desktop}) {
   
    gap: 12px;
    
    padding: 0 16px;
    /* width: 1280px; */
  }
`;

const elements = { Section, Container };

export default elements;
