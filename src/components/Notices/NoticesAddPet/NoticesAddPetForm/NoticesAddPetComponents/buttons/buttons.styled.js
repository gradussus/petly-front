import styled from 'styled-components';
import { theme } from '../../../../../../theme';

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

  margin-left: 12px;
  margin-right: 12px;
  margin-top: 12px;
  float: left;
  cursor: pointer;

  :hover,
  &.active {
    background: #f59256;
    color: #fff;
  }
`;

export const TypeofAddBtnActive = styled(TypeofAddBtn)`
  background: ${theme.colors.accent};
  color: ${theme.colors.white};
`;

export const DoneBtn = styled.button`
  margin-top: 12px;
  padding: 9px 60px;
  background: #ffffff;
  border: 2px solid #f59256;
  border-radius: 40px;
  font-size: 20px;
  transition: all 0.3s;

  margin-top: 12px;
  @media screen and (min-width: 768px) {
    padding: 9px 65px;
  }
  @media (max-width: 767px) {
    width: 100%;
    margin: 0;
  }

  /* margin-right: 20px;
  width: 180px; */
  color: ${theme.colors.white};
  background-color: ${theme.colors.accent};
  cursor: pointer;
  :hover,
  &.active {
    background: ${theme.colors.backgroundSecondary};
  }
`;

export const CancelBtn = styled(TypeofAddBtn)`
  width: 180px;
  padding: 9px 28px;
  margin-left: 0;
  @media (max-width: 767px) {
    width: 100%;
    margin: 0 0 20px;
  }
`;
// export const BackBtn = styled(TypeofAddBtn)`
//   padding: 9px 101px;
//   margin-right: 20px;
//   margin-top: 0px;
//   margin-bottom: 0px;
//   /* width: 180px; */
// `;
export const NextBtn = styled.button`
  margin-top: 12px;
  padding: 9px 60px;
  background: #ffffff;
  border: 2px solid #f59256;
  border-radius: 40px;
  font-size: 20px;
  transition: all 0.3s;
  color: ${theme.colors.white};
  background-color: ${theme.colors.accent};
  cursor: pointer;
  :hover,
  &.active {
    background: ${theme.colors.backgroundSecondary};
  }
  @media (max-width: 767px) {
    width: 100%;
    margin: 0;
  }
`;

export const AddPetFormError = styled.div`
  color: red;
  position: absolute;
  bottom: -25px;
  left: 20px;
`;

export const AddPetFormErrorLocation = styled.div`
  color: red;
  position: absolute;
  bottom: -25px;
  left: 20px;
`;

export const AddPetFormErrorComment = styled.div`
  color: red;
  position: absolute;
  bottom: 10px;
  left: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  max-width: 380px;
  margin: 0 auto;

  @media (max-width: 767px) {
    display: block;
    margin: 0;
    width: 100%;
    padding: 20px;
  }
`;

export const TypeOfSexBtn = styled.button`
  width: 100%;
  font-weight: 500;
  font-size: 20px;
  background-color: transparent;
  color: ${theme.colors.black};
  border: none;
  :hover,
  &.active {
    color: ${theme.colors.accent};
  }
`;
export const ActiveTypeOfSexBtn = styled.button`
  width: 100%;
  font-weight: 500;
  font-size: 20px;
  background-color: transparent;
  color: ${theme.colors.accent};
  border: none;
`;
