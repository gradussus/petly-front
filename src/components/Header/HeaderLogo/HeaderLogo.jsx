import { HeaderLogotype } from './HeaderLogo.styled';

export const HeaderLogo = ({ handleMenu }) => {
  return (
    <HeaderLogotype to="/" onClick={() => handleMenu(false)}>
      pet<span>l</span>y
    </HeaderLogotype>
  );
};
