import * as NavButton from './HeaderUserButtons.styled';
export const UnauthorizedUserButton = () => {
  return (<>
    <NavButton.Button to="/login"> Login </NavButton.Button>
    <NavButton.Button to="/register"> Register </NavButton.Button>
  </>
  );
};
