import styled from 'styled-components';

export const NoticesItemsBody = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 32px;
  grid-row-gap: 32px;

  @media (max-width: 1279px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const NoticesItemBody = styled.div`
  background: #fff;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 0 0 40px 40px;
  position: relative;

  display: flex;
  flex-direction: column;
`;

export const NoticesItemContent = styled.div`
  padding: 20px;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
`;

export const NoticesItemImg = styled.div`
  img {
    height: 288px;
    width: 100%;
  }
`;

export const NoticesItemTitle = styled.div`
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  margin-bottom: 20px;
  flex: 1 1 auto;
`;

export const NoticesItemText = styled.div`
  display: flex;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  div {
    flex: 0 0 60px;
  }
`;

export const NoticesItemBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 28px;
  margin-top: 20px;

  height: 38px;

  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;
  color: #f59256;

  background: #ffffff;
  border: 2px solid #f59256;
  border-radius: 40px;

  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #ffffff;
    background: #f59256;
    transform: scale(1.05);
  }
`;

export const NoticesLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
  width: 100%;
`;
