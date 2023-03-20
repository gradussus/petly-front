import { Title } from "./App.Style";
import { lazy } from 'react';
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));

export const App = () => {


  
  return (
    <Title>
      <LoginPage />
    </Title>
  );
};