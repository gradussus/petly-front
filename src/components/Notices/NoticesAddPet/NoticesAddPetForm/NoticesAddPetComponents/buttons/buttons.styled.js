import styled from 'styled-components';
import { theme } from '../../../../../../theme'

export const TypeofAddBtn = styled.button`
  padding: 10px 28px;
  background: #ffffff;
  border: 2px solid #f59256;
  border-radius: 40px;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  color: #111111;
  transition: all 0.3s;

  margin-right: auto;

  :hover,
  &.active {
    background: #f59256;
    color: #fff;
  }`;
export const TypeofAddBtnActive = styled(TypeofAddBtn)`
  background:  ${theme.colors.accent};
    color:  ${theme.colors.white};

`

export const DoneBtn = styled.button`

padding: 10px 28px;
  background: #ffffff;
  border: 2px solid #f59256;
  border-radius: 40px;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  transition: all 0.3s;

  margin-right: 20px;
  width: 180px;
  color: ${theme.colors.white};
  background-color: ${theme.colors.accent};
:hover,
  &.active {
    background:${theme.colors.white};
    color: ${theme.colors.black};
  }
`

export const CancelBtn = styled(TypeofAddBtn)`
margin-right: 20px;
width: 180px;
`
export const NextBtn = styled.div`

  padding: 10px 28px;
  background: #ffffff;
  border: 2px solid #f59256;
  border-radius: 40px;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  transition: all 0.3s;

  margin-right: 20px;
  width: 180px;
  color: ${theme.colors.white};
  background-color: ${theme.colors.accent};
:hover,
  &.active {
    background: ${theme.colors.white};
    color: ${theme.colors.black};
  }
`

export const Wrapper = styled.div`
display:flex;
max-width: 380px;
`

export const TypeOfSexBtn = styled.button`
width:100%;
background-color: transparent;
color: ${theme.colors.black};
border: none;
:hover,
  &.active {
    color: ${theme.colors.accent};
  }
`
export const ActiveTypeOfSexBtn = styled.button`
width:100%;
background-color: transparent;
color: ${theme.colors.accent};
border: none;


`

