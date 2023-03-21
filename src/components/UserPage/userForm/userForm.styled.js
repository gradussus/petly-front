import styled from 'styled-components';

export const UserFormBody = styled.div`
  padding-right: 0;

  @media (${props => props.theme.media.tablet}) {
    margin-bottom: 0;
    flex: 1 1 auto;
    padding-right: 52px;
  }
`;

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

  @media (${props => props.theme.media.mobile}) {
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

  @media (${props => props.theme.media.mobile}) {
    font-size: 12px;
  }

  &:disabled {
    border: none;
    background: none;
  }
`;
