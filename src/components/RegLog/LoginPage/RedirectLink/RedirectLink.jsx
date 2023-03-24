import * as SC from './RedirectLink.styled'

export const RedirectLink = () => {
  return <SC.Wrapper>
  <SC.TextBeforeLink>Don't have an account?</SC.TextBeforeLink>
  <SC.RedirectLink to='/register'>Register</SC.RedirectLink>
  </SC.Wrapper>
};
