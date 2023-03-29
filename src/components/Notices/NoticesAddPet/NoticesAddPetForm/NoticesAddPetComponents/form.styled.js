import styled from 'styled-components';
import { theme } from '../../../../../theme'
import { Form } from 'formik';

export const AddPetForm = styled(Form)`

margin-left:auto;
margin-right:auto;

width: 100%;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

padding: 20px;
border-radius: ${theme.radii.large};
background: ${theme.colors.white};

/* background: transparent; */

text-align: center;

@media screen and (min-width: 768px){
padding: 40px 80px;

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
`