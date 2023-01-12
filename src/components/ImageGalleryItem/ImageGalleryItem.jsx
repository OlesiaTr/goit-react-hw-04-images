// Core
import { useState } from 'react';

// Utils
import { PropTypes } from 'prop-types';

// Components
import { Modal } from 'components/Modal';

// Styles
import { GalleryItem, GalleryImg } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ webformatURL, tags, largeImageURL }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(prev => !prev);
  };

  return (
    <GalleryItem>
      <GalleryImg src={webformatURL} alt={tags} onClick={toggleModal} />

      {isModalOpen && (
        <Modal onClose={toggleModal} img={largeImageURL} desc={tags} />
      )}
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = PropTypes.shape({
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
}).isRequired;
