import styled from 'styled-components';

export const UserFormItem = styled.div`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const UserFormLabel = styled.label`
  font-weight: ${props => props.theme.fontWeights.middle};
  font-size: ${props => props.theme.fontSizes.m};
  line-height: ${props => props.theme.lineHeights.heading};
  flex: 0 0 85px;
  @media (max-width: 992px) {
    margin-right: 36px;
  }
  @media (max-width: 450px) {
    margin-right: 0;
  }
  @media (max-width: 400px) {
    font-size: ${props => props.theme.fontSizes.s};
    flex: 0 0 60px;
  }
`;

export const UserFormInput = styled.input`
  outline: 0;
  padding: 4px 12px;
  flex: 1 1 auto;
  background: none;
  background: ${props => props.theme.colors.background};
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  @media (max-width: 1200px) {
    flex: 1 1 150px;
    font-size: ${props => props.theme.fontSizes.s};
  }
  @media (max-width: 1080px) {
    font-size: ${props => props.theme.fontSizes.xm};
    flex: 1 1 400px;
  }
  @media (max-width: 400px) {
    font-size: 14px;
  }
  &:disabled {
    border: none;
    background: none;
  }
  &:invalid {
    border: 1px solid red;
  }
`;
