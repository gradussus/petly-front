import { ModalContent, ModalBackdrop, BtnClose } from './Modal.Style';
import {ReactComponent as Cross} from '../Notices/ItemPetModal/image/Cross.svg';
import { createPortal } from 'react-dom';
import { useEffect, useRef } from 'react';

const modalRoot = document.querySelector('#modal-root');

export const ModalSample = ({ toggleModal, children }) => {

const modalRef = useRef()
  document.body.style.overflow = "hidden";
  useEffect(() =>{
    const close = (e) => {
        if(e.code === 'Escape'){            
        toggleModal()
        }
      }
      window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
})
  useEffect(() => {
    
    const closeModal = e => {
     
      if (!modalRef.current.contains(e.target)) {
        toggleModal();       
      }
    };
    window.addEventListener('mousedown', closeModal);
    return () => window.removeEventListener('mousedown', closeModal);
  });
  
  return createPortal(
    <ModalBackdrop  >
      <ModalContent ref={modalRef}>
        <BtnClose type="button" onClick={toggleModal}>
          <Cross/>
        </BtnClose>
        {children}
      </ModalContent>
    </ModalBackdrop>,
    modalRoot
  );
};
