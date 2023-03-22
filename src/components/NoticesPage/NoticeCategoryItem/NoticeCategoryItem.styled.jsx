import styled from 'styled-components';

export const CardWrapper = styled.div`
  position: relative;
  overflow: hidden;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 280px;

  border-bottom-right-radius: 40px;
  border-bottom-left-radius: 40px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  ul {
    padding: 0 20px;
  }
`;

export const CategoryOverlay = styled.div`
  position: absolute;
  top: ${props => props.theme.space[6]}px;
  left: 0;

  display: flex;
  align-items: center;
  width: 158px;
  height: 28px;
  padding-left: ${props => props.theme.space[5]}px;

  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const Category = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;

  letter-spacing: 0.04em;

  color: #111111;
`;

export const Img = styled.img`
  width: 100%;
  height: 288px;
  object-fit: cover;
  margin-bottom: 20px;
`;

export const HeartButton = styled.button`
  position: absolute;
  right: 12px;
  top: 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 44px;
  height: 44px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
  border: none;
  border-radius: 50%;

  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;
export const Title = styled.p`
  align-self: flex-start;
  width: 240px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  max-height: calc(2 * var(--line-height)); /* высота двух строк */
  overflow: hidden;
  text-overflow: ellipsis; /* добавление трех точек */
  white-space: normal; /* разрешение переноса слов */
  -webkit-line-clamp: 2; /* необязательное свойство для браузеров, поддерживающих line-clamp */
  
  padding: 0 20px;
  margin: 0 0 20px 0;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: -0.01em;
  color: #111111;
`;
export const NoticeList = styled.ul`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
`;

export const NoticeItem = styled.li`
  width: 240px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;

  color: #111111;

  :not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const NoticeItemName = styled.span`
  display: inline-block;
  min-width: 90px;
`;

export const BtnOverlay = styled.div`
  margin-top: auto;
  width: 100%;
  align-self: flex-end;
  padding: 20px 15px 30px 15px;
`;

export const LearnMoreButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 28px;

  width: 248px;
  height: 38px;

  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;

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

export const DeleteButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
  padding: 8px 28px;

  width: 248px;
  height: 38px;

  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;

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

export const DetailsWrapper = styled.div`
  margin-top: auto;
`;