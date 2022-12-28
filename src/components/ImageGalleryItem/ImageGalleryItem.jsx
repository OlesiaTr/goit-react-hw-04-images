// Components
import { Modal } from 'components/Modal';

export const ImageGalleryItem = () => {
  return (
    <li class="gallery-item">
      <img src="" alt="" />
      {/* When you click on a gallery item a modal window with a dark overlay and display a larger version of the image. The modal window should be closed. */}
      <Modal />
    </li>
  );
};
