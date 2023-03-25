import * as SC from './HomePage.styled.js';

import heartImg from './images/desktop/heart.png';
import labro from './images/desktop/labro_desk.png';
// import labro from './labro_524_d_1x.png';
import vectorL from './images/desktop/bg_desk_left.png';
import vectorR from './images/desktop/bg_desk_right.png';
import vectorSm from './images/tablet/bg_tablet.png';


const HomePage = () => {
  return <SC.Home>
    <SC.Title>
        <span>Take good care of</span>
        <br />
        <span>your small pets</span>
      </SC.Title>
    <SC.Heart src={heartImg} alt="heart" />
    
      {/* <source media='(max-width: 767px)' srcSet='labro_280_m_1x.png' />
      <source media='(min-width: 768px) and (max-width: 1279px)' srcset='labro_636_t_1x.png' />
      <source media='(min-width: 1280px)' srcSet='labro_524_d_1x.png' /> */}
      {/* <SC.Labrador src={labro} alt='Labrador'/> */}
    
    <SC.Labro src={labro} alt="labrador" />
    <SC.BackgroundL src={vectorL} alt="background" /> 
    <SC.BackgroundR src={vectorR} alt="background" />
    <SC.BackgroundSm src={vectorSm} alt="background" />
  </SC.Home>;
};

export default HomePage;