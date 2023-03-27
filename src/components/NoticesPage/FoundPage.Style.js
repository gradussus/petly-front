import styled from 'styled-components';
import { Field, Form } from 'formik';

export const BtnSubmit = styled.button`
  position: absolute;
  text-align: center;
  right: 0;

  width: 40px;
  height: 40px;
  border-radius: ${p => p.theme.radii.round};
  border: ${p => p.theme.borders.none};
  background-color: ${p => p.theme.colors.itemBackground};
`;
export const Input = styled(Field)`
  /* position: relative; */
  width: 280px;
  padding: 9px 12px;
  border: ${p => p.theme.borders.none};
  border-radius: 20px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (${p => p.theme.media.tablet}) {
    width: 608px;
    padding: 8px 20px;
    &::placeholder {
      font-weight: ${p => p.theme.fontWeights.middle};
      font-size: ${p => p.theme.fontSizes.mx};
      line-height: ${p => p.theme.lineHeights.heading};
    }
  }
  @media screen and (${p => p.theme.media.desktop}) {
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes.ml};
    line-height: ${p => p.theme.lineHeights.heading};
  }
`;
export const Forma = styled(Form)`
  position: relative;
  display: flex;
  margin: 28px 0px;
  justify-content: center;
`;
export const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
`;
