// Utils
import { ToastContainer } from 'react-toastify';

// Styles
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';

// Components
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Button } from './Button';
import { Loader } from './Loader';

export const App = () => {
  return (
    <Layout>
      {/* The component takes one prop onSubmit - a function to pass the value of the input When the form is submitted. Creates a DOM element of the following structure. */}
      <Searchbar />

      {/* A list of image cards. Creates a DOM element of the following structure. */}
      <ImageGallery />

      {/* Pressing the Load more button should load the next batch of Images and rendered with the previous ones. The button should be rendered only when there are some loaded images. If the image array is empty, the button is not rendered. */}
      <Button />

      {/* Spinner component, displays while images are being loaded.  */}
      <Loader />
      <GlobalStyle />
    </Layout>
  );
};
