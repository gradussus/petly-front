import { HomePageContainer } from './HomePage.styled';
import { HomePage } from 'pages/HomePage/HomePage';
import HomeLabro from '../../pages/HomePage/images/mobile/labro.png';
import HomeHeart from '../../pages/HomePage/images/desktop/heart.png';
import { Wrapper } from './SharedLayout.styled';

export const HomePage = ({ HomeHeart, HomeLabro }) => {

    return (
        <Wrapper>
        <HomePageContainer>
            <h1>
                <span>Take good care of</span>
                  <br />
                <span>your small pets</span>
            </h1>
            <img src={HomeHeart} alt={HomeHeart} />
            <img src={HomeLabro} alt={HomeLabro} />
            {/* <HomeLabro />
            <HomeHeart /> */}
            </HomePageContainer>
            </Wrapper>
    );
  };