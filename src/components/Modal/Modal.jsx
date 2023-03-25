import { ModalContent, ModalBackdrop, BtnClose } from './Modal.Style';
import Cross from 'components/Notices/ItemPetModal/image/Cross.svg';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');

export const ModalSample = ({ toggleModal, children }) => {
  useEffect(() => {
    const close = e => {
      if (e.code === 'Escape') {
        toggleModal();
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  });
  return createPortal(
    <ModalBackdrop>
      <ModalContent>
        <BtnClose type="button" onClick={toggleModal}>
          <img src={Cross} className="Cross" alt="Cross" />
        </BtnClose>
        {children}
      </ModalContent>
    </ModalBackdrop>,
    modalRoot
  );
};
