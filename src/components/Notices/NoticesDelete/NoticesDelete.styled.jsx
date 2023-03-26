import styled from 'styled-components';
import { ReactComponent as DeleteIcon } from './image/icon-delete.svg';

export const DeleteButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
  padding: 8px 28px;

  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;
  color: #ff6101;

  height: 38px;

  background: #ffffff;
  border: 2px solid #ff6101;
  border-radius: 40px;
  fill: #ff6101;

  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #ffffff;
    background: #ff6101;
    transform: scale(1.05);
    fill: #ffffff;
  }
`;

export const DeleteIcons = styled(DeleteIcon)`
  margin-left: 13px;
`;
