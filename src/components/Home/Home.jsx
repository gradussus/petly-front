import ReactDOM from "react-dom";

function Home() {
    return (
        <div>
            <h1>
                <span>Take good care of</span>
                <br />
                <span>your small pets</span>
                <img src={heart} alt="heart" className={scss.home__heart} />
            </h1>
            <img src="" alt="" width={} />
            
        </div>
    );
};

ReactDOM.render(<Home />, document.querySelector('#root'));

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