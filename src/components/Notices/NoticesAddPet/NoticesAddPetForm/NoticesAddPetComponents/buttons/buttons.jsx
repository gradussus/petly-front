import * as SC from './buttons.styled';

export const TypeofAddBtn = props => {
  return <SC.TypeofAddBtn type="button" {...props} />;
};
export const TypeofAddBtnActive = props => {
  return <SC.TypeofAddBtnActive type="button" {...props} />;
};

export const CancelBtn = props => {
  return <SC.CancelBtn type="button" {...props} />;
};

export const NextBtn = props => {
  return <SC.NextBtn type="submit" {...props} />;
};
export const DoneBtn = props => {
  return <SC.DoneBtn type="Submit" {...props}></SC.DoneBtn>;
};

export const Wrapper = ({ children }) => {
  return <SC.Wrapper>{children}</SC.Wrapper>;
};

export const TypeOfSexBtn = props => {
  return <SC.TypeOfSexBtn type="button" {...props}></SC.TypeOfSexBtn>;
};

export const ActiveTypeOfSexBtn = props => {
  return (
    <SC.ActiveTypeOfSexBtn type="button" {...props}></SC.ActiveTypeOfSexBtn>
  );
};
