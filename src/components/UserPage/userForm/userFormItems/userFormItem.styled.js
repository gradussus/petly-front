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

  @media (max-width: 375px) {
    font-size: ${props => props.theme.fontSizes.s};
    flex: 0 0 60px;
  }
`;

export const UserFormInput = styled.input`
  outline: 0;
  background: none;

  flex: 1 1 auto;
  padding: 4px 12px;
  background: ${props => props.theme.colors.background};

  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;

  @media (max-width: 400px) {
    font-size: 14px;
  }

  &:disabled {
    border: none;
    background: none;
  }
`;
