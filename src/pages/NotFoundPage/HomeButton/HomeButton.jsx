import { HomeButton } from './HomeButton.styled';

export const HomeButtonNotFoundPage = ({ handleMenu }) => {
  return (
    <HomeButton to="/" onClick={() => handleMenu(false)}>
     Home
    </HomeButton>
  );
};