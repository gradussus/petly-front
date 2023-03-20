import { Input } from './Input/Input'
import { AccentButton } from './Buttons/Buttons';
import { AuthForm }  from 'components/AuthForm/AuthForm';
import { RedirectLink } from 'components/LoginPage/RedirectLink/RedirectLink';
import { useState } from 'react';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleEmailChange = e => {
    setEmail(e.target.value );
  };

  const handlePassChange = e => {
    setPassword(e.target.value );
  };

  const handleSubmit = e => {
     e.preventDefault();
     const form = e.currentTarget;
   
     console.log(JSON.stringify({email, password}));
     alert(JSON.stringify({email, password}));
     form.reset();
   };

      return (
        <AuthForm title="Login" onSubmit={handleSubmit}>
            <Input placeholder="Email" type="email" name="email" value={email} onChange={handleEmailChange} autoComplete="off" />
            <Input placeholder="Password" type="password" name="password" value={password} onChange={handlePassChange} autoComplete="off" />
            <AccentButton>Login</AccentButton>
            <RedirectLink/>
        </AuthForm>
      );
    };
