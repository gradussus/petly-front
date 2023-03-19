import heartImg from './images/desktop/heart.png';
import labro from './images/mobile/labro.png';
import vector from './images/mobile/Vector.png';

const HomePage = ({heart, labrador, background}) => {
  return <home>
    <span>Take good care of</span>
    <br />
    <span>your small pets</span>
    <img src={heartImg} alt="heart" />
    <img src={labro} alt="labrador" />
    <img src={vector} alt="background" />
  </home>;
};

export default HomePage;