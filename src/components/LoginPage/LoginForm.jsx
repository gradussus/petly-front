import { Input } from './Input/Input'
import { AccentButton } from './Buttons/Buttons';
import { AuthForm }  from 'components/AuthForm/AuthForm';
import { RedirectLink } from 'components/LoginPage/RedirectLink/RedirectLink';
import { useState } from 'react';

import axios from 'axios';

axios.defaults.baseURL = 'https://petly-vxdt.onrender.com/';

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
   
     const data = { email, password };

     const req = async () => {
      try {
        const res = await axios.post('/api/auth/login', data)
        .then((response) => {
          console.log(response);
        })
        return res.data;
      } catch (error) {
        return error.message;
      }
    };
    req();

    console.log(data);;
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
