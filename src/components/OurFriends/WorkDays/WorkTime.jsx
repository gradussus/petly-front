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










//--------------------------------------------------------//
// import { useState } from 'react';
// import { Popover2 } from '@blueprintjs/popover2';

// // const workDays = ['MN','TU','WE','TH','FR','SA','SU'];

// const WorkHoursPopover = ({ workDaysData }) => {
//   const [popoverOpen, setPopoverOpen] = useState(false);
//   const handlePopoverOpen = () => setPopoverOpen(true);
//   const handlePopoverClose = () => setPopoverOpen(false);

//   const renderDayContent = dayData => {
//     if (dayData.isOpen) {
//       return (
//         <div>
//           From: {dayData.from} To: {dayData.to}
//         </div>
//       );
//     } else {
//       return <div>Closed</div>;
//     }
//   };

//   return (
//     <div>
//       {workDays.map(day => (
        // <Popover2
        //   key={day}
        //   content={renderDayContent(workDaysData[day.toLowerCase()])}
        //   isOpen={popoverOpen}
        //   onOpen={handlePopoverOpen}
        //   onClose={handlePopoverClose}
        // >
        //   <div>{day}</div>
        // </Popover2>
//       ))}
//     </div>
//   );
// };

// export default WorkHoursPopover;


// //------------------------------------------------//

// import React, { useState } from "react";
// import { Button, Popover2, Position } from "@blueprintjs/popover2";

// // const workDays = ["Sun", "Mon", "Tu", "Wed", "Th", "Fri", "Sat"];

// const popoverContent = (dayOfWeek, workDays) => {
//   const dayIndex = workDays.indexOf(dayOfWeek);
//   const workDay = workDays[dayIndex];

//   return (
//     <div>
//       <p>{workDay}:</p>
//       <ul>
//         {workDays.map((day) => (
//           <li key={day}>
//             {day.isOpen
//               ? `Open from ${day.from} to ${day.to}`
//               : "Closed"}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// const PopoverExample = () => {
//   const [selectedDay, setSelectedDay] = useState(null);

//   const handleClick = (dayOfWeek) => {
//     setSelectedDay(dayOfWeek);
//   };

//   return (
//     <div>
//       {workDays.map((day) => (
//         <Button
//           key={day}
//           onClick={() => handleClick(day)}
//           style={{ margin: "5px" }}
//         >
//           {day}
//         </Button>
//       ))}

//       <Popover2
//         isOpen={selectedDay !== null}
//         onClose={() => setSelectedDay(null)}
//         content={popoverContent(selectedDay, workDays)}
//         position={Position.RIGHT_TOP}
//       >
//         <div style={{ display: "none" }} />
//       </Popover2>
//     </div>
//   );
// };



// //---------------------------------------------//

// import { Popover2 } from '@blueprintjs/popover2';
// import { Button } from '@blueprintjs/core';

// const workDays = ['Sun', 'Mon', 'Tu', 'Wed', 'Th', 'Fri', 'Sat'];
// const openingHours = [
//   {
//     isOpen: false,
//   },
//   {
//     isOpen: false,
//   },
//   {
//     isOpen: false,
//   },
//   {
//     isOpen: false,
//   },
//   {
//     isOpen: false,
//   },
//   {
//     isOpen: true,
//     from: '11:00',
//     to: '16:00',
//   },
//   {
//     isOpen: true,
//     from: '11:00',
//     to: '16:00',
//   },
// ];

// const PopoverContent = ({ hours }) => (
//   <div>
//     {workDays.map((day, index) => (
//       <div key={index}>
//         <h3>{day}</h3>
//         {hours[index].isOpen ? (
//           <p>
//             Open from {hours[index].from} to {hours[index].to}
//           </p>
//         ) : (
//           <p>Closed</p>
//         )}
//       </div>
//     ))}
//   </div>
// );

// const ExamplePopover = () => (
//   <Popover2
//     content={<PopoverContent hours={openingHours} />}
//     placement="bottom"
//   >
//     <Button>View Opening Hours</Button>
//   </Popover2>
// );


// //--------------------------------------//
