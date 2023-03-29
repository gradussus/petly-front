import styled from 'styled-components';

export const FooterContainer = styled.footer`
    display: none;
    @media screen and (min-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: space-around;
        backdrop-filter: blur(20px);
        background: hsla(0,0%,100%,.1);
        bottom: 0;
        left: 0;
        box-shadow: -1px -5px 10px -1px rgba(0,0,0,.5);
        display: flex;
        font-size: 14px;
        height: 30px;
        position: fixed;
        width: 100vw;
        z-index: 1001;
    };  
`;

export const FooterSection = styled.div`
    max-width: 1280px;
    padding: 0 16px;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
    flex-wrap: wrap;
`;

export const FooterContent = styled.p`
    color: #fff;
    text-align: center;
    margin: 10px 20px;
    font-size: 14px;
`;

export const FooterMenu = styled.ul`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 15px;
    flex-wrap: wrap;
`;

export const MenuItem = styled.li`
    list-style: none;
`;

export const MenuItemLink = styled.a`
    font-size: 14px;
    color: #fff;
    margin: 0 10px;
    display: inline-block;
    transition: 0.5s;
    text-decoration: none;
    opacity: 0.75;
    &:hover {
        opacity: 1;
        transform: translateY(-3px);
    };
`;

/********** Modal */

export const TeamWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-height: 95%;
    width: 180px;
    overflow: auto;
    background-color: #fff;
    border-radius: 15px;
    @media screen and (min-width: 460px) {
        width: 360px;
    };
    @media screen and (max-width: (768px - 1)) {
        width: 420px;
    };
    @media screen and (min-width: 768px) {
        margin: -30px;
        width: 480px;
        border-radius: 25px;
    };
    @media screen and (min-width: 1280px) {
        width: 480px;
    };
`;

export const TeamCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: inherit;
    margin: 10px 15px;
    width: calc((100% - 60px) / 2);
    @media screen and (min-width: 768px) {
        width: calc((100% - 120px) / 4);
    };
    @media screen and (min-width: 1280px) {
        margin: 10px 20px;
        width: calc((100% - 160px) / 4);
    };
    &:hover {
        transform: translate(5px, 15px);
    };
`;   

export const TeamImage = styled.img`
    z-index: 100;
    position: relative;
    margin-bottom: 10px;
    width: 100%;
    border-radius: 50%;
    box-shadow: 5px 5px 11px -2px #000000;
`;

export const TeamName = styled.p`
    margin-bottom: 5px;
    color: black;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
`;

export const TeamRole = styled.p`
    font-family: 'Roboto', sans-serif;
    color: #545454;
    @media screen and (max-width: (768px - 1)) {
        font-size: 14px;
    };
`;