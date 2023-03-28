import * as SC from './ErrorMessages.styled';

export const ErrorMessages = (props) => {
  return (
  <>
  {/* <SC.Border/> */}
  <SC.ErrorMessages  {...props} />
  
  </>)
};

export const ErrorWrapper = (props) => {
  return <SC.ErrorWrapper  {...props} />
};

