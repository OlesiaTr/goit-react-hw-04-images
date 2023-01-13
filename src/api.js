// Utils
import axios from 'axios';

// Setups
axios.defaults.baseURL = 'https://pixabay.com/api';

const params = {
  key: `${process.env.REACT_APP_PIXABAY}`,
  colors: 'black',
  orientation: 'horizontal',
  image_type: 'photo',
  safesearch: 'true',
  per_page: 12,
};

// HTTP requests
export const PixabayAPI = async (q, page) => {
  const { data } = await axios.get('/', { params: { q, page, ...params } });
  return data;
};
