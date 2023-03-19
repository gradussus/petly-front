
import * as HeaderStyle from './Header.styled';


import { HeaderLogo } from './HeaderLogo/HeaderLogo';
import { HeaderNavLinks } from './HeaderNavLinks/HaderNavLinks';
import { LoginUserButton } from './HeaderButtons/AuthorisedNavButton';
import {UnauthorizedUserButton} from './HeaderButtons/UnathorisedNavButtons';



export const Header = () => {
    return ( 
        
    <HeaderStyle.HeaderBody>
             
     <HeaderLogo/>
     <HeaderNavLinks/>
     <LoginUserButton/>
     <UnauthorizedUserButton/>
           
   
    </HeaderStyle.HeaderBody>
      
        );
};




  // auth nav  login nav - два компонента, 
  // user nav gap 20px -> 2 buttons login + register (link from reactRouterDOM) styled component 
  // header обернуть -> logo в компонент вынести и 
  // header body flex
