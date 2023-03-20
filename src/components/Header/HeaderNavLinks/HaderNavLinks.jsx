import * as LinksStyle from './HeaderNavLinks.styled';
// мокап пока нема з беку цього
import NavMenu from '../Data/NavMenu.json';

export const HeaderNavLinks = () => {
  return (
    <>
      {NavMenu.map(item => (
        <LinksStyle.ItemLink key={item.href} to={item.href}>
          {item.title}
        </LinksStyle.ItemLink>
      ))}
    </>
  );
};
