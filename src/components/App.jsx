// Core
import { Component } from 'react';

// Utils
import toast, { Toaster } from 'react-hot-toast';

// API
import { PixabayAPI } from './../api';

// Styles
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';

// Components
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Button } from './Button';
import { Loader } from './Loader';

export class App extends Component {
  state = {
    searchName: '',
    imgs: [],
    currentPage: 1,
    totalPages: null,
    error: null,
    isLoading: false,
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.searchName !== this.state.searchName ||
      prevState.currentPage !== this.state.currentPage
    )
      this.getImgs();
  }

  getImgs = async () => {
    try {
      this.setState({ isLoading: true, error: null });

      const { searchName, currentPage, imgs } = this.state;

      const response = await PixabayAPI(searchName, currentPage);
      const data = response.hits.map(
        ({ id, webformatURL, largeImageURL, tags }) => {
          return { id, webformatURL, largeImageURL, tags };
        }
      );

      this.setState({
        imgs: [...imgs, ...data],
        isLoading: false,
      });

      if (response.totalHits < 1)
        toast.error(
          'Sorry, we didn`t find any images according to your request.😖'
        );
    } catch {
      toast.error('Oops, something went wrong. Try reloading the page!🤨');
    }
  };

  handleSubmit = searchName => {
    this.setState({
      searchName,
      imgs: [],
      currentPage: 1,
    });
  };

  render() {
    return (
      <Layout>
        <Searchbar onSubmit={this.handleSubmit} />

        {/* A list of image cards. Creates a DOM element of the following structure. */}
        <ImageGallery />

        {/* Pressing the Load more button should load the next batch of Images and rendered with the previous ones. The button should be rendered only when there are some loaded images. If the image array is empty, the button is not rendered. */}
        <Button />

        {/* Spinner component, displays while images are being loaded.  */}
        <Loader />

        <Toaster position="bottom-right" reverseOrder={false} />
        <GlobalStyle />
      </Layout>
    );
  }
}
