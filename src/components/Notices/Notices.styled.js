import styled from 'styled-components';

export const NoticeTitle = styled.div`
  text-align: center;
  font-weight: 700;
  font-size: 48px;
  line-height: 66px;

  @media (${props => props.theme.media.mobile}) {
    font-weight: 700;
    font-size: 24px;
    line-height: 33px;
  }
`;

export const NoticeBody = styled.div`
  margin: 60px 0;

  @media (${props => props.theme.media.mobile}) {
    margin: 40px 0;
  }
  @media (${props => props.theme.media.tablet}) {
    margin: 90px 0;
  }
`;

export const NoticesSearchBody = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;

export const NoticesHead = styled.div`
  margin: 40px 0 60px;
  display: flex;
`;

export const NoticesHeadBtn = styled.div`
  flex: 0 0 160px;
  display: flex;
  justify-content: flex-end;

  @media (${props => props.theme.media.mobile}) {
    position: fixed;
    top: 420px;
    right: 20px;
    z-index: 2;
  }
`;

export const NoticesPreview = styled.div`
  text-align: center;
  font-weight: 700;
  font-size: 24px;
  line-height: 66px;
`;
