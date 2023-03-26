import { useState } from 'react';
import { Popover2 } from '@blueprintjs/popover2';

import {
  ScheduleBox,
  Button,
  WorkingDay,
  ScheduleContainer,
  CurrentDay,
} from './WorkTime.styled';

export const WorkTime = ({ workDays }) => {
  const [isOpen, setIsOpen] = useState(false);

  // console.log(workDays);

  const DAYS_OF_WEEK = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
  const currentDayIndex = new Date().getDay();

  const handleInteraction = nextOpenState => {
    setIsOpen(nextOpenState);
  };

  return (
    <>
      <Popover2
        content={
          <ScheduleBox>
            {workDays &&
              workDays.length > 0 &&
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
              ))}
          </ScheduleBox>
        }
        interactionKind="click"
        isOpen={isOpen}
        onInteraction={nextOpenState => handleInteraction(nextOpenState)}
        placement="bottom-start"
      >
        <Button type="button">Time:</Button>
      </Popover2>
      <CurrentDay>
        {workDays && workDays[currentDayIndex]?.isOpen
          ? `${workDays[currentDayIndex].from} - ${workDays[currentDayIndex].to}`
          : 'Closed'}
      </CurrentDay>
    </>
  );
};
