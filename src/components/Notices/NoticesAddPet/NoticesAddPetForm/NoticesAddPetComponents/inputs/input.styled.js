import styled from 'styled-components';
import { Field } from 'formik';
import { theme } from '../../../../../../theme'

export const FileInput = styled.input`
opacity: 0;
 visibility: hidden;
/* background-color: red;
width: 100%;
height: 100% */
`
export const LabelFileInput = styled.label`
width: 140px;
height: 140px;
background: #FDF7F2;
border-radius: 20px;
margin-right: auto;
`
export const CommentsInput= styled(Field)`

  width: 100%;
  box-sizing: border-box;
  margin-left:auto;
  margin-right:auto;
  border-radius: ${theme.radii.large};
  margin-bottom: 40px;
  padding: 12px 32px;
  border: ${theme.borders.normal};
  background: ${theme.colors.background};
  color: ${theme.colors.primeText};

  @media screen and (min-width: 768px){
    /* min-height: 113px;
    width: 448px; */
}

`