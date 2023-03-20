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
  font-weight: ${props => props.theme.fontWeights.normal};
  font-size: ${props => props.theme.fontSizes.s};
  line-height: ${props => props.theme.lineHeights.heading};
  color: ${props => props.theme.colors.primeText};

  cursor: pointer;
  text-align: right;
  transition: color 0.3s;

  position: absolute;
  right: 0;
  top: 0;

  display: flex;
  align-items: center;
  gap: 5px;

  @media (${props => props.theme.media.tablet}) {
    top: 10px;
  }

  @media (min-width: 768px) {
    &:hover {
      color: ${props => props.theme.colors.accent};
    }
  }
`;
