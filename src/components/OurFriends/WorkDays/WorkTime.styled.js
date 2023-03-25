import styled from 'styled-components';
import { theme } from '../../../theme';

export const ScheduleBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: #ffffff;
  border: 1px solid #f59256;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 12px;
`;

export const ScheduleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-right: 12px;
`;

export const WorkingDay = styled.p`
  font-weight: ${theme.fontWeights.middle};
  font-size: ${theme.fontSizes.xs};
  line-height: 1.33;
`;

export const Button = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;

  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeights.middle};
  color: ${theme.colors.black};
  line-height: ${theme.lineHeights.heading};
  padding-bottom: 4px;

  @media screen and (${theme.media.tablet}) {
    font-size: ${theme.fontSizes.s};
    line-height: 1.38;

    padding-bottom: 8px;
  }

  @media screen and (${theme.media.desktop}) {
    font-size: ${theme.fontSizes.m};
    line-height: 1.3;
    padding-bottom: 12px;
  }
`;
