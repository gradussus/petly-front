import { Title } from "./App.Style";
import { lazy } from 'react';

const LoginPage = lazy(() => import('../pages/Login/Login'));

export const App = () => {


  
  return (
     <Title>
      <LoginPage/>
    </Title>
  );
};
