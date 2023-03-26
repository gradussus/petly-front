import { ModalContent, ModalBackdrop, BtnClose } from './Modal.Style';
import Cross from '../Notices/ItemPetModal/image/Cross.svg';
import { createPortal } from 'react-dom';
import { useEffect, useRef } from 'react';

const modalRoot = document.querySelector('#modal-root');

export const ModalSample = ({ toggleModal, children }) => {

  const modalRef = useRef()
  document.body.style.overflow = "hidden";
  useEffect(() => {
    const close = e => {
      e.stopPropagation();
      if (e.code === 'Escape') {
        toggleModal();
        document.body.style.overflow = "";
      }
    };
    return () => window.removeEventListener('keydown', close);
  });
  useEffect(() => {
    
    const close = e => {
      e.preventDefault()
      if (!modalRef.current.contains(e.target)) {
        toggleModal();
       
      }
    };
    window.addEventListener('mousedown', close);
    return () => window.removeEventListener('mousedown', close);
  });
  return createPortal(
    <ModalBackdrop  >
      <ModalContent ref={modalRef}>
        <BtnClose type="button" onClick={toggleModal}>
          <img src={Cross} className="Cross" alt="Cross" />
        </BtnClose>
        {children}
      </ModalContent>
    </ModalBackdrop>,
    modalRoot
  );
};
