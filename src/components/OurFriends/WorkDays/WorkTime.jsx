//--------------------------------------------------------//
import { useState } from 'react';
import { Popover2 } from '@blueprintjs/popover2';

import { ScheduleBox, Button } from './WorkTime.styled';


export const WorkTime = () => {


  const [isOpen, setIsOpen] = useState(false);

  const handleInteraction = nextOpenState => {
    setIsOpen(nextOpenState);
  };


  return (
    <Popover2
      content={
        <ScheduleBox>
          <p>MN:</p>
          <p>TU:</p>
          <p>WE:</p>
          <p>TH:</p>
          <p>FR:</p>
          <p>SA:</p>
          <p>SU:</p>
        </ScheduleBox>
      }
      interactionKind="click"
      isOpen={isOpen}
      onInteraction={nextOpenState => handleInteraction(nextOpenState)}
      placement="bottom-start"
    >
      <Button type="button">Time:</Button>
    </Popover2>
  );
};

