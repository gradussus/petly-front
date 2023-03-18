import imgHeart from '../../pages/HomePage/images/desktop/heart.png';
import titleImg from '../../pages/HomePage/images/mobile/labro.png';
import bgrImage from '../../pages/HomePage/images/mobile/Vector.png';


const Home = ({
    heart = imgHeart,
    labro = titleImg,
    vector = bgrImage
}) => {
    return (
        <div className="home">
        
                <h1>
                    <span>Take good care of</span>
                    <br />
                    <span>your small pets</span>
                </h1>
            <img src={heart} alt={heart} />
            <img src={labro} alt={labro} />
            <img src={vector} alt={vector} />
     
           
        </div>
    );
};

export default Home;