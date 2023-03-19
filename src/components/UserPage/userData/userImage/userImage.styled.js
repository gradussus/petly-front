import styled from 'styled-components';

export const UserImg = styled.div`
  margin-bottom: 32px;

  img {
    width: 233px;
    height: 233px;
    margin: 0 auto;
    border-radius: 50%;
    max-width: 100%;
  }
`;

export const UserImgInputBody = styled.div`
  position: relative;
`;

export const UserImgInput = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

export const UserImgLabel = styled.label`
  cursor: pointer;
  position: absolute;
  right: 0;
  text-align: right;
  font-weight: ${props => props.theme.fontWeights.normal};
  font-size: ${props => props.theme.fontSizes.s};
  line-height: ${props => props.theme.lineHeights.heading};
  color: ${props => props.theme.colors.primeText};
  transition: color 0.3s;
  display: flex;
  align-items: center;
  gap: 5px;
  @media (max-width: 1080px) {
    top: 10px;
  }
  @media (max-width: 767px) {
    top: 0;
  }
  @media (min-width: 992px) {
    &:hover {
      color: ${props => props.theme.colors.accent};
    }
  }
`;
