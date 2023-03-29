import styled from 'styled-components';
import { Field } from 'formik';

export const PetForm = styled.div`
  padding: 40px 80px;

  @media (max-width: 767px) {
    padding: 40px 20px;
  }
`;

export const PetFormTitle = styled.div`
  font-weight: 500;
  font-size: 36px;
  line-height: 49px;
  text-align: center;
  margin-bottom: 40px;
`;

export const PetFormInputBody = styled.div`
  width: 450px;
  margin-bottom: 28px;
  position: relative;

  @media (max-width: 767px) {
    width: 300px;
  }
`;

export const PetFormInputTitle = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 26px;
  margin-bottom: 12px;
`;

export const PetFormInput = styled(Field)`
  width: 100%;
  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  padding: 10px 16px;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
`;

export const PetFormInputArea = styled.div`
  textarea {
    width: 100%;
    height: 150px;
    background: #fdf7f2;
    border: 1px solid rgba(245, 146, 86, 0.5);
    border-radius: 20px;
    padding: 10px 16px;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
  }

  @media (max-width: 767px) {
    height: 100px;
    margin-bottom: 100px;
  }
`;

export const PetFormButtons = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 24px;

  @media (max-width: 767px) {
    margin-top: 40px;
    display: block;
  }
`;

export const PetFormBack = styled.div`
  border: 2px solid #f59256;
  border-radius: 40px;
  flex: 1 1 50%;
  display: flex;
  justify-content: center;
  padding: 10px 0;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  cursor: pointer;
  transition: all 0.3s;
  @media (max-width: 767px) {
    text-align: center;
    margin-bottom: 12px;
  }

  @media (min-width: 768px) {
    &:hover {
      background: #f59256;
      color: #fdf7f2;
    }
  }
`;

export const PetFormSubmit = styled.button`
  cursor: pointer;
  background: #f59256;
  border-radius: 40px;
  flex: 1 1 50%;
  display: flex;
  justify-content: center;
  padding: 10px 0;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  border: none;
  color: #ffffff;
  @media (max-width: 767px) {
    text-align: center;
    width: 100%;
  }
`;

export const PetFormImgBody = styled.div`
  width: 300px;
  margin: 0 auto 40px;
`;

export const PetFormImgTitle = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  margin-bottom: 20px;
`;

export const PetFormInputImg = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

export const PetFormInputImgLabel = styled.label`
  margin: 0 auto;
  width: 182px;
  height: 182px;
  background: #fdf7f2;
  border-radius: 40px;
  display: flex;
  cursor: pointer;
  align-items: center;

  &.active {
    background: none;
  }
`;

export const PetFormImgPreview = styled.div`
  width: 100%;
  height: 100%;

  img {
    border-radius: 40px;
    height: 100%;
    max-width: 100%;
  }
`;

export const PetFormAddImg = styled.div`
  height: 48px;
  width: 48px;
  margin: 40px auto 0;
  position: relative;

  &:before {
    content: '';
    background: #000;
    height: 1px;
    width: 48px;
    position: absolute;
  }
  &:after {
    content: '';
    background: #000;
    height: 1px;
    width: 48px;
    position: absolute;
    transform: rotate(90deg);
  }
`;

export const PetFormError = styled.div`
  color: red;
  position: absolute;
  bottom: -25px;
  left: 0;
`;

export const PetFormErrorArea = styled.div`
  color: red;
  position: absolute;
  bottom: -25px;
  left: 0;

  @media (max-width: 767px) {
    bottom: -75px;
  }
`;
