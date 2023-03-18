import { Input } from '../Input/Input'
import { AccentButton } from '../Buttons/Buttons';
import { AuthForm }  from 'components/AuthForm/AuthForm';

export const LoginForm = () => {

      return (
        <AuthForm title = "Login">
            <Input placeholder="Email" type="email" name="email" autoComplete="off" />
            <Input placeholder="Password" type="password" name="password" autoComplete="off" />
            <AccentButton>Login</AccentButton>

        </AuthForm>
      );
    };