import * as SC from '../../LoginPage/RedirectLink/RedirectLink.styled'

export const RedirectLink = () => {
    return <SC.Wrapper>
    <SC.TextBeforeLink>Already have an account?</SC.TextBeforeLink>
    <SC.RedirectLink to='/login'>Login</SC.RedirectLink>
    </SC.Wrapper>
  };