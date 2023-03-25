import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  ::before {
    content: ' ';
    height: 4px;
    margin-bottom: 4px;
    background: linear-gradient(90deg, #ff634e 0%, #ffdf48 105.44%);
    border-radius: 40px;
    width: 200px;
  }
`;

export const Title = styled.h3`
  margin-bottom: 16px;
  @media (${p => p.theme.media.mobile}) {
    font-weight: 700;
    font-size: 24px;
    line-height: 1.36;
    letter-spacing: -0.01em;
    span {
      display: none;
      padding: 2px 3px;
      margin-left: 0;

      &:hover {
        display: inline-block;
        position: absolute;
        background: #fdf7f2;
        border: 1px solid #f59256;
        font-size: 18px;
        border-radius: 10px;
        color: #535353;
      }
    }
  }
`;

export const Elem = styled.p`
  margin-bottom: 20px;
  @media (${p => p.theme.media.mobile}) {
    height: 154px;
    overflow-y: hidden;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #111321;
    margin-bottom: 40px;
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Link = styled.a`
  color: ${p => p.theme.colors.accent};
  font-weight: 500;
`;

export const Data = styled.span`
  color: rgba(17, 17, 17, 0.6);
  font-size: 16px;
  line-height: 22px;
`;
