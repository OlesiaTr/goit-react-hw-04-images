// Core
import { useState, useEffect } from 'react';

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

// CONSTANTS
const PIXABAY_PER_PAGE = 12;

export const App = () => {
  const [searchName, setSearchName] = useState('');
  const [imgs, setImgs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (searchName === '') return;

    const getImgs = async () => {
      try {
        setIsLoading(true);

        const response = await PixabayAPI(searchName, currentPage);
        if (currentPage === 1)
          if (response.total > PIXABAY_PER_PAGE) setCurrentPage(2);

        const data = response.hits.map(
          ({ id, webformatURL, largeImageURL, tags }) => {
            return { id, webformatURL, largeImageURL, tags };
          }
        );

        setImgs(prev => [...prev, ...data]);
        setTotalPages(Math.ceil(response.totalHits / PIXABAY_PER_PAGE));
        setIsLoading(false);

        if (response.totalHits < 1)
          toast.error(
            'Sorry, we didn`t find any images according to your request.😖'
          );
      } catch {
        toast.error('Oops, something went wrong. Try reloading the page!🤨');
      }
    };

    getImgs();
  }, [currentPage, searchName]);

  const handleSubmit = searchName => {
    setSearchName(searchName);
    setImgs([]);
    setCurrentPage(1);
  };

  const onBtnClick = () => setCurrentPage(prevState => prevState + 1);

  return (
    <Layout>
      <Searchbar onSubmit={handleSubmit} />

      <ImageGallery data={imgs} />

      {imgs.length > PIXABAY_PER_PAGE &&
        totalPages !== currentPage &&
        !isLoading && <Button onClick={onBtnClick} />}

      {isLoading && <Loader />}

      <Toaster position="top-right" reverseOrder={false} />
      <GlobalStyle />
    </Layout>
  );
};
