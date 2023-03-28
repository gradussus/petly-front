import styled from 'styled-components';
import { theme } from '../../../../theme'
import { Field } from 'formik';

export const Input = styled(Field)`
  width: 100%;
  box-sizing: border-box;
  margin-left:auto;
  margin-right:auto;
  border-radius: ${theme.radii.large};
  padding: 12px 32px;
  border: ${theme.borders.normal};
  background: ${theme.colors.background};
  color: ${theme.colors.primeText};
  &:focus-visible {
  outline: none;
  }
`;