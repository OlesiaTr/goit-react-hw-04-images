// Core
import { Component } from 'react';

// Utils
import { PropTypes } from 'prop-types';

// Components
import { Modal } from 'components/Modal';

// Styles
import { GalleryItem, GalleryImg } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  static propTypes = PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired;

  toggleModal = () => {
    this.setState(({ isModalOpen }) => ({
      isModalOpen: !isModalOpen,
    }));
  };

  render() {
    const { webformatURL, tags, largeImageURL } = this.props;
    const { isModalOpen } = this.state;

    return (
      <GalleryItem>
        <GalleryImg src={webformatURL} alt={tags} onClick={this.toggleModal} />

        {isModalOpen && (
          <Modal onClose={this.toggleModal} img={largeImageURL} desc={tags} />
        )}
      </GalleryItem>
    );
  }
}
