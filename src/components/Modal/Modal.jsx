// Core
import { Component } from 'react';
import { createPortal } from 'react-dom';

// Utils
import { PropTypes } from 'prop-types';

// Styles
import { Overlay, ModalWindow } from './Modal.styled';

// Variables
const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  static propTypes = PropTypes.shape({
    img: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
  }).isRequired;

  componentDidMount() {
    window.addEventListener('keydown', this.closeModalOnEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModalOnEsc);
  }

  closeModalOnEsc = e => {
    if (e.key === 'Escape') this.props.onClose();
  };

  closeModal = e => {
    if (e.target === e.currentTarget) this.props.onClose();
  };

  render() {
    const { img, desc } = this.props;

    return createPortal(
      <Overlay onClick={this.closeModal}>
        <ModalWindow>
          <img src={img} alt={desc} />
        </ModalWindow>
      </Overlay>,
      modalRoot
    );
  }
}
