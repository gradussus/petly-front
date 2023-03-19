import * as LinksStyle from './HeaderNavLinks.styled';
import NavMenu from '../Data/NavMenu.json';

console.log(NavMenu);

export const HeaderNavLinks = () => {
  return ( <>
  {NavMenu.map(item => (<LinksStyle.ItemLink key={item.href} to={item.href}>{item.title}</LinksStyle.ItemLink>))}


  </>
 
  );
};

