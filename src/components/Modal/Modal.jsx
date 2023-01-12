// Core
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

// Utils
import { PropTypes } from 'prop-types';

// Styles
import { Overlay, ModalWindow } from './Modal.styled';

// Variables
const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, img, desc }) => {
  useEffect(() => {
    const closeModalOnEsc = e => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', closeModalOnEsc);

    return () => window.removeEventListener('keydown', closeModalOnEsc);
  }, [onClose]);

  const closeModal = e => {
    if (e.target === e.currentTarget) onClose();
  };

  return createPortal(
    <Overlay onClick={closeModal}>
      <ModalWindow>
        <img src={img} alt={desc} />
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
};

Modal.propTypes = PropTypes.shape({
  img: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
}).isRequired;
