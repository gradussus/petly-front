import styled from 'styled-components';
import { Field, Form } from 'formik';

export const BtnSubmit = styled.button`
  font-family: ${p => p.theme.fonts.manrope};
  font-weight: ${p => p.theme.fontWeights.middle};
  text-align: center;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.primeText};
  @media screen and (${p => p.theme.media.mobile}) {
    font-size: ${p => p.theme.fontSizes.s};
    line-height: 1.357;
    padding: 8px 28px;
  }
  font-size: ${p => p.theme.fontSizes.mx};
  line-height: 1.35;
  padding: 10px 28px;
  background-color: ${p => p.theme.colors.white};
  border: 2px solid ${p => p.theme.colors.accent};
  border-radius: 40px;
  transition: background-color 200ms, color 200ms;
  &:hover,
  &:focus,
  &.active {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
  cursor: pointer;
`;
export const BtnNext = styled.button`
  font-family: ${p => p.theme.fonts.manrope};
  font-weight: ${p => p.theme.fontWeights.middle};
  text-align: center;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.primeText};
  @media screen and (${p => p.theme.media.mobile}) {
    font-size: ${p => p.theme.fontSizes.s};
    line-height: 1.357;
    padding: 8px 28px;
  }
  font-size: ${p => p.theme.fontSizes.mx};
  line-height: 1.35;
  padding: 10px 28px;
  background-color: ${p => p.theme.colors.white};
  border: 2px solid ${p => p.theme.colors.accent};
  border-radius: 40px;
  transition: background-color 200ms, color 200ms;
  &:hover,
  &:focus,
  &.active {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
  cursor: pointer;
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
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.middle};
  font-size: 18px;
`;
