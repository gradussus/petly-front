import * as SC from './AuthForm.styled';

export const AuthForm = ({title, children}) => {

    const handleSubmit = e => {
      e.preventDefault();
      const form = e.currentTarget;
      alert('Minions are working...')
      form.reset();
    };
    return (
      <SC.AuthForm  onSubmit={handleSubmit}>
      <h3>{title}</h3>
        {children}
      </SC.AuthForm>
    );
  };
 