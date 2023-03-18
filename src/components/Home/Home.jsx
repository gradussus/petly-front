import imgHeart from '../../pages/HomePage/images/desktop/heart.png';
import titleImg from '../../pages/HomePage/images/mobile/labro.png';


const Home = ({heart = imgHeart, labro = titleImg}) => {
    return (
        <div>
        
                <h1>
                    <span>Take good care of</span>
                    <br />
                    <span>your small pets</span>
                </h1>
            <img src={heart} alt={heart} />
            <img src={labro} alt={labro} />
            
     
           
        </div>
    );
};

// ReactDOM.render(<App />, document.querySelector('#root'));

export default Home;

// export const Home = () => {
//     return (
//         <div className={scss.home__container}>
//             <Container>
//                 <h1 className={scss.home__title}>
//                     <span>{t('Take good care of')}</span>
//                     <br />
//                     <span>{t('your small pets')}</span>
//                 </h1>
//                 <img src={heart} alt="heart" className={scss.home__heart} />
//             </Container>
//         </div>
//     );
// };