// Components
import { ImageGalleryItem } from 'components/ImageGalleryItem';

// Utils
import PropTypes from 'prop-types';

// Styles
import { GalleryList } from './ImageGallery.styled';

export const ImageGallery = ({ data }) => {
  return (
    <GalleryList>
      {data.map(({ id, ...otherProps }) => {
        return <ImageGalleryItem key={id} {...otherProps} />;
      })}
    </GalleryList>
  );
};

ImageGallery.propType = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
