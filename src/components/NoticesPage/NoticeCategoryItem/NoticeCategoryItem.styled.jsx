import styled from 'styled-components';
import { ReactComponent as DeleteIcon } from './tmp/icon-delete.svg';

export const CardWrapper = styled.div`
  position: relative;
  overflow: hidden;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;

  border-bottom-right-radius: ${props => props.theme.radii.large};
  border-bottom-left-radius: ${props => props.theme.radii.large};
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  ul {
    padding: 0 20px;
  }

  @media screen and (${props => props.theme.media.tablet}) {
    width: 336px;
  }
`;

export const CategoryOverlay = styled.div`
  position: absolute;
  top: 20px;
  left: 0;

  display: flex;
  align-items: center;
  width: 158px;
  height: 28px;
  padding-left: 20px;

  background: ${props => props.theme.colors.grayBackground};
  backdrop-filter: blur(2px);
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const Category = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: ${props => props.theme.fontWeights.middle};
  font-size: ${props => props.theme.fontSizes.xs};
  line-height: 15px;

  letter-spacing: 0.04em;

  color: ${props => props.theme.colors.primeText};
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
  background: ${props => props.theme.colors.grayBackground};
  backdrop-filter: blur(2px);
  border: none;
  border-radius: ${props => props.theme.radii.round};

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
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.mm};
  line-height: 38px;
  letter-spacing: -0.01em;
  color: ${props => props.theme.colors.primeText};
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
  font-weight: ${props => props.theme.fontWeights.middle};
  font-size: ${props => props.theme.fontSizes.m};
  line-height: 22px;

  color: ${props => props.theme.colors.primeText};

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
  font-weight: ${props => props.theme.fontWeights.middle};
  font-size: ${props => props.theme.fontSizes.m};
  line-height: 22px;
  letter-spacing: 0.04em;
  color: ${props => props.theme.colors.accent};

  background: ${props => props.theme.colors.itemBackground};
  border: ${props => props.theme.borders.large};
  border-radius: 40px;

  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.accentText};
    background: ${props => props.theme.colors.accent};
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
  font-weight: ${props => props.theme.fontWeights.middle};
  font-size: ${props => props.theme.fontSizes.m};
  line-height: 22px;
  letter-spacing: 0.04em;
  color: ${props => props.theme.colors.activeAccent};

  background: ${props => props.theme.colors.itemBackground};
  border: 2px solid ${props => props.theme.colors.activeAccent};
  border-radius: ${props => props.theme.radii.large};
  fill: ${props => props.theme.colors.activeAccent};

  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.accentText};
    background: ${props => props.theme.colors.activeAccent};
    transform: scale(1.05);
    fill: ${props => props.theme.colors.itemBackground};
  }
`;

export const DetailsWrapper = styled.div`
  margin-top: auto;
`;

export const DeleteIcons = styled(DeleteIcon)`
  margin-left: 13px;
`;
