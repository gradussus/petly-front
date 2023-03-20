import heartImg from './images/desktop/heart.png';
import labro from './images/mobile/labro.png';
import vector from './images/mobile/Vector.png';
import { Container } from './Container/Container';
import styles from "../HomePage/HomePage.module.css";

const HomePage = ({heart, labrador, background}) => {
  return <home>
    <Container className={styles.container}>
      <div className={styles.home_title}>
        <span>Take good care of</span>
        <br />
        <span>your small pets</span>
      </div>
    <img className={styles.img_heart} src={heartImg} alt="heart" />
      <img className={styles.img_labro} src={labro} alt="labrador" />
    <img className={styles.img_vector} src={vector} alt="background" />
    </Container>
  </home>;
};

export default HomePage;