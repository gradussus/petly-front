import { Title } from "./App.Style";
import { lazy } from 'react';
import { FoundPets } from "components/FundPets/FoundPets";
const LoginPage = lazy(() => import('../pages/Login/Login'));

export const App = () => {


  
  return (
     <Title>
      <LoginPage/>
      <FoundPets/>
    </Title>
  );
};
