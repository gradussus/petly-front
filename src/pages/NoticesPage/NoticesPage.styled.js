import styled from 'styled-components';
import { theme } from '../../theme';

const Section = styled.section`
  background-color: ${theme.colors.background};
  height: auto;
  padding-bottom: 100px;
  @media screen and (${theme.media.mobile}) {
    padding-top: 100px;
  }
  @media screen and (${theme.media.tablet}) {
    padding-top: 160px;
  }
  @media screen and (${theme.media.desktop}) {
    padding-top: 126px;
    padding-bottom: 200px;
  }
`;

const Container = styled.div`
  margin: 0 auto;
  @media screen and (${theme.media.mobile}) {
    padding: 0 20px;
    width: 320px;
  }
  @media screen and (${theme.media.tablet}) {
    padding: 0 32px;
    width: 768px;
  }
  @media screen and (${theme.media.desktop}) {
    padding: 0 16px;
    width: 1280px;
  }
`;

const elements = { Section, Container };

export default elements;
