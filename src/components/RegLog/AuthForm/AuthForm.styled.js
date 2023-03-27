import styled from 'styled-components';
import { theme } from '../../../theme';
import { Form } from 'formik';

export const AuthForm = styled(Form)`

margin-left:auto;
margin-right:auto;
/* margin-top: 12px; */

  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  padding: 0px;
  border-radius: ${theme.radii.large};
  background: transparent;

  text-align: center;

  @media screen and (min-width: 768px) {
    padding: 60px 80px;


    /* margin-top: 134px; */
    background: ${theme.colors.white};

    width: 608px;
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  }


@media screen and (min-width: 1280px){
    /* margin-top: 60px; */

    width: 620px;
  }
`;

export const Title = styled.h3`
  margin-bottom: 40px;

  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.middle};
  font-size: ${theme.fontSizes.l};
  line-height: 49px;
  letter-spacing: 0.04em;
`;
