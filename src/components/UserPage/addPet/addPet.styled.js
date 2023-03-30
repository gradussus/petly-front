import styled from 'styled-components';

export const AddPetBody = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const AddPetTitle = styled.div`
  font-weight: ${props => props.theme.fontWeights.middle};
  font-size: ${props => props.theme.fontSizes.mx};
  line-height: ${props => props.theme.lineHeights.heading};
`;

export const AddPetButton = styled.div`
  width: 40px;
  height: 40px;
  background: #f59256;
  border: none;
  border-radius: 50%;
  font-size: ${props => props.theme.fontSizes.l};
  color: white;
  transition: background 0.2s;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 8px;
  @media (min-width: 768px) {
    &:hover {
      background: #f5a675;
    }
  }
`;
