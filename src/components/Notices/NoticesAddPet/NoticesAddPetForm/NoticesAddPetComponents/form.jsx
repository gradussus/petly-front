import * as SC from './form.styled';

export const AddPetForm = ({title, children}) => {

    return (
      <SC.AddPetForm autoComplete='off'>
      <SC.Title>{title}</SC.Title>
        {children}
      </SC.AddPetForm>
    );
  };