import styled from 'styled-components';

export const NoticesSearchInputBody = styled.div`
  flex: 0 1 600px;
  display: flex;
  position: relative;
`;

export const NoticesSearchInput = styled.input`
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: ${props => props.theme.radii.large};
  padding: 8px 20px;
  height: 44px;
  width: 100%;
  margin: 0 auto;
  background: ${props => props.theme.colors.itemBackground};
  border: none;
  font-weight: ${props => props.theme.fontWeights.middle};
  font-size: ${props => props.theme.fontSizes.ml};
  line-height: 27px;
`;

export const NoticesSearchImage = styled.div`
  flex: 0 0 24px;
  height: 24px;
  position: absolute;
  top: 9px;
  right: 15px;
`;
