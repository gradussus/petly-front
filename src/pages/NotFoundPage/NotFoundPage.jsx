import * as SC from './NotFoundPage.styled';
import { HomeButtonNotFoundPage } from 'components/HomeButton/HomeButton';


import labro from './images/desktop/labrador.png';
import vectorL from './images/desktop/bg_desk_left.png';
import vectorSm from './images/tablet/bg_tablet.png';

const NotFoundPage = () => {
  return <SC.Home>
    <SC.Title>
     404 Not Found
      </SC.Title>
      <HomeButtonNotFoundPage/>
    <SC.Labro src={labro} alt="labrador" />
    <SC.BackgroundL src={vectorL} alt="background" /> 
    <SC.BackgroundSm src={vectorSm} alt="background" />
  
  </SC.Home>;
};


export default NotFoundPage;
