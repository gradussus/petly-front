import { useState } from 'react';
import { Popover2 } from '@blueprintjs/popover2';

import {
  ScheduleBox,
  CurrentDayButton,
  WorkingDay,
  ScheduleContainer,
  AltScheduleContainer,
  Notification,
} from './WorkTime.styled';

export const WorkTime = ({ workDays }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPopoverClicked, setIsPopoverClicked] = useState(false);


  const DAYS_OF_WEEK = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
  const currentDayIndex = new Date().getDay();

  const handleInteraction = nextOpenState => {
    setIsOpen(nextOpenState);
    setIsPopoverClicked(nextOpenState);
  };

  return (
    <>
      <Popover2
        content={
          <ScheduleBox>
            {workDays && workDays.length > 0 ? (
              DAYS_OF_WEEK.map((day, index) => (
                <ScheduleContainer key={index}>
                  <div>
                    <WorkingDay>{day}</WorkingDay>
                  </div>
                  <div>
                    <WorkingDay>
                      {workDays[index]?.isOpen
                        ? `${workDays[index].from} - ${workDays[index].to}`
                        : 'Closed'}
                    </WorkingDay>
                  </div>
                </ScheduleContainer>
              ))
            ) : (
              <AltScheduleContainer>
                <Notification>
                  We have flexible working schedule. Feel free to contact us any
                  time by email or phone.
                </Notification>
              </AltScheduleContainer>
            )}
          </ScheduleBox>
        }
        interactionKind="click"
        isOpen={isOpen}
        onInteraction={nextOpenState => handleInteraction(nextOpenState)}
        placement="bottom-start"
      >
        <CurrentDayButton
          type="button"
          className={isPopoverClicked && isOpen ? 'active' : ''}
        >
          {workDays === null || workDays.length === 0
            ? 'Free schedule'
            : workDays[currentDayIndex]?.isOpen
            ? `${workDays[currentDayIndex].from} - ${workDays[currentDayIndex].to}`
            : 'Closed'}
        </CurrentDayButton>
      </Popover2>
    </>
  );
};
