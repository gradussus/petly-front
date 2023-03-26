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
  margin-top: -15px;
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

// export const CurrentDay = styled.h4`
//   font-size: ${theme.fontSizes.xs};
//   font-weight: ${theme.fontWeights.middle};
//   color: ${theme.colors.secondaryText};
//   line-height: ${theme.lineHeights.heading};

//   @media screen and (${theme.media.tablet}) {
//     font-size: ${theme.fontSizes.s};
//     line-height: 1.38;
//   }

//   @media screen and (${theme.media.desktop}) {
//     font-size: ${theme.fontSizes.m};
//     line-height: 1.3;
//   }
// `;

export const CurrentDayButton = styled.button`
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

  @media screen and (${theme.media.tablet}) {
    font-size: ${theme.fontSizes.s};
    line-height: 1.38;

  }

  @media screen and (${theme.media.desktop}) {
    font-size: ${theme.fontSizes.m};
    line-height: 1.3;
  }
`;

export const AltScheduleContainer = styled.div`
  width: 120px;
`;

export const Notification = styled.p`
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeights.middle};
  color: ${theme.colors.secondaryText};
  line-height: ${theme.lineHeights.heading};

`;