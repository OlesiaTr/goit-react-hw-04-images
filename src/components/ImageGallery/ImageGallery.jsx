// Components
import { ImageGalleryItem } from 'components/ImageGalleryItem';

export const ImageGallery = () => {
  return (
    <ul class="gallery">
      {/* Set <li> with images */}
      {/* A list item component with an image. Creates a DOM element of the following structure. */}
      <ImageGalleryItem />
    </ul>
  );
};
