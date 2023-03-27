import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  z-index: 10;
  background-color: rgba(17, 17, 17, 0.6);
`;
export const ModalContent = styled.div`
  overflow: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  background-color: ${p => p.theme.colors.white};
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 20px;
  /* height: calc(50vh - 20px); */
  max-height: min(901px, calc(100% - 20px));

  @media (max-width: 767px) {
    height: calc(100vh - 20px);
    max-height: none;
  }
`;

export const BtnClose = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 20px;
  top: 20px;
  width: 34px;
  height: 34px;
  background-color: ${p => p.theme.colors.background};
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.round};
  cursor: pointer;
`;
