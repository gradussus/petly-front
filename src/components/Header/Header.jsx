
import * as HeaderStyle from './Header.styled';

export const Header = () => {
    return ( 
        <HeaderStyle.HeaderBody>
    
            <HeaderStyle.Logo>pet<HeaderStyle.Accent>l</HeaderStyle.Accent>y</HeaderStyle.Logo>
    
            <HeaderStyle.NavLink>News</HeaderStyle.NavLink>
            <HeaderStyle.ActiveLink>Find pet</HeaderStyle.ActiveLink>
            <HeaderStyle.NavLink>Our friends</HeaderStyle.NavLink>
    
            <HeaderStyle.SimpleButton>Login</HeaderStyle.SimpleButton>
            <HeaderStyle.ActiveButton>Registration</HeaderStyle.ActiveButton>
    
        </HeaderStyle.HeaderBody>
      
        );
};



  // auth nav  login nav - два компонента, 
  // user nav gap 20px -> 2 buttons login + register (link from reactRouterDOM) styled component 
  // header обернуть -> logo в компонент вынести и 
  // header body flex
  // навигация -> массив из него рендерим все ссылки в массиве href or title 
  // [{href: '/news', title: "News"},]
  // [{href: '/find', title: "Find pet"}]
  // 