import scss from './Home.module.scss';
import heart from '../Home/images/desktop/heart.png';
import Container from 'components/Container';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();
  return (
    <div className={scss.home__container}>
      <Container>
        <h1 className={scss.home__title}>
          <span>{t('Take good care of')}</span>
          <br />
          <span>{t('your small pets')}</span>
        </h1>
        <img src={heart} alt="heart" className={scss.home__heart} />
      </Container>
    </div>
  );
}

export default Home;