import styled from 'styled-components';
import { Field } from 'formik';
import { theme } from '../../../../../../theme';

export const FileInput = styled.input`
  opacity: 0;
  visibility: hidden;
  /* background-color: red;
width: 100%;
height: 100% */
`;
export const LabelFileInput = styled.label`
padding: 34px;
text-align: start;
display: inline-block;
justify-content: start;
align-items: center;
margin-top: 8px;
/* margin-bottom: 28px; */
/* width: 140px;
height: 140px; */
background: #FDF7F2;
border-radius: 20px;
`;
export const Text = styled.p`

margin: 0;
margin-top: 20px;
margin-bottom: 8px;
text-align: start;
font-weight: ${props => props.theme.fontWeights.middle};
font-size: ${props => props.theme.fontSizes.ms};
line-height: ${props => props.theme.lineHeights.body};
`;
export const ContainerImg = styled.div`
display: flex;
justify-content: start;
margin-bottom: 28px;
margin-right: auto;
`;
export const CommentsInput= styled(Field)`

  width: 100%;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  border-radius: ${theme.radii.large};
  margin-bottom: 40px;
  padding: 12px 32px;
  border: ${theme.borders.normal};
  background: ${theme.colors.background};
  color: ${theme.colors.primeText};

  @media screen and (min-width: 768px) {
    /* min-height: 113px;
    width: 448px; */
  }
`;
export const FormAddPet = styled.div`
  margin-bottom: 28px;
  position: relative;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
`;

export const LabelTitle = styled.label`
  font-family: ${p => p.theme.fonts.manrope};
  font-weight: ${p => p.theme.fontWeights.middle};
  font-size: ${p => p.theme.fontSizes.ml};
  line-height: 26px;
  margin-bottom: 12px;
  float: left;
`;

export const AddPetFormInput = styled(Field)`
  width: 100%;
  background: ${p => p.theme.colors.background};
  border: 1px solid ${p => p.theme.colors.accent};
  outline: none;
  border-radius: ${p => p.theme.radii.large};
  padding: 10px 16px;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 26px;
  cursor: pointer;
  &:focus-within,
  &:hover {
    box-shadow: 0 0 0 1px ${p => p.theme.colors.accent};
    @media screen and (min-width: 768px) {
      box-shadow: 0 0 0 1px ${p => p.theme.colors.accent};
    }
  }
`;

export const TypeOfAddNav = styled.div`
  margin: -12px;
  margin-bottom: 28px;
  padding-left: 20px;
  padding-right: 20px;
`;



