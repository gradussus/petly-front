import { Input } from '../LoginPage/Input/Input'
import { AccentButton, TransparentButton, NextBtn } from '../LoginPage/Buttons/Buttons';
import { AuthForm }  from 'components/AuthForm/AuthForm';
import { RedirectLink } from 'components/RegisterPage/RedirectLink/RedirectLink';
import { useState } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://petly-vxdt.onrender.com/';

export const RegisterForm = () => {
  const [isSecondStep, setSecondStep] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');

  const handleChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case "email":
        setEmail(value)
        break;
      case "password":
        setPassword(value)
        break;
      case "confPassword":
        setConfPassword(value)
        break;
      case "name":
        setName(value)
        break;
      case "city":
        setCity(value)
        break;
        case "tel":
        setPhone(value)
        break;

        default:
          console.log("Sorry"); 
  };
}
  
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    const data = {email, password, name, city, phone};

    // const req = async () => {
    //   try {
    //     const res = await axios.post('/api/auth/register', data)
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     return res.data;
    //   } catch (error) {
    //     return error.message;
    //   }
    // };
    // req();
  

    console.log(data);
    form.reset();
  };

      return (
          <AuthForm title="Registration" onSubmit={handleSubmit}>
            {isSecondStep ? (
              <>
              <Input placeholder="Name" type="text" name="name" value={name} onChange={handleChange} />
              <Input placeholder="City, region" type="text" name="city" value={city} onChange={handleChange} />
              <Input placeholder="Mobile phone" type="tel" name="tel" value={phone} onChange={handleChange} />
              <AccentButton type="submit">Register</AccentButton>
              <TransparentButton type="button" onClick={() => setSecondStep(!isSecondStep)}>Back</TransparentButton>
              </>
              ):(
              <>
              <Input placeholder="Email" type="email" name="email" value={email} onChange={handleChange} />
              <Input placeholder="Password" type="password" name="password" value={password} onChange={handleChange} />
              <Input placeholder="Confirm Password" type="password" name="confPassword" value={confPassword} onChange={handleChange} />
              <NextBtn onClick={() => setSecondStep(!isSecondStep)}>Next</NextBtn>
            
              </>
              )}
              <RedirectLink/>
          </AuthForm>
      
      );
    };
