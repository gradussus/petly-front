import * as SC from './AuthForm.styled';

export const AuthForm = ({title, children, onSubmit}) => {

    return (
      <SC.AuthForm onSubmit={onSubmit} autoComplete='off'>
      <SC.Title>{title}</SC.Title>
        {children}
      </SC.AuthForm>
    );
  };
  