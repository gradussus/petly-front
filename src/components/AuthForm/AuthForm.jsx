import * as SC from './AuthForm.styled';

export const AuthForm = ({title, children}) => {

    return (
      <SC.AuthForm autoComplete='off'>
      <SC.Title>{title}</SC.Title>
        {children}
      </SC.AuthForm>
    );
  };
  