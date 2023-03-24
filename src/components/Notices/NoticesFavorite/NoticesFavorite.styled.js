import styled from 'styled-components';

export const NoticesFavoriteBody = styled.div`
  position: absolute;
  width: 100%;
  top: 20px;
  left: 0;
  display: flex;
  align-items: center;
`;

export const NoticesFavoriteTitle = styled.div`
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
  padding: 6px 50px 6px 20px;
  border-radius: 0 40px 40px 0;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
`;

export const NoticesFavoriteBtnBody = styled.div`
  flex: 1 1 auto;
  display: flex;
  justify-content: flex-end;
  padding-right: 12px;
`;

export const NoticesFavoriteBtn = styled.div`
  flex: 0 0 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);

  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  cursor: pointer;

  @media (min-width: 768px) {
    &:hover * {
      transition: 0.4s;
      fill: ${props => props.theme.colors.accent};
    }
  }
`;
