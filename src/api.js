// Utils
import axios from 'axios';

// Setups
axios.defaults.baseURL = 'https://pixabay.com/api/';

// Pagination and HTTP requests
export default class PixabayAPI {
  #query = '';
  #page = 1;
  #totalPages = 0;
  #perPage = 40;
  #params = {
    params: {
      key: '30710573-e458c9ee67a489b748e6ca0b4',
      colors: 'black',
      orientation: 'horizontal',
      image_type: 'photo',
      safesearch: 'true',
      per_page: 40,
    },
  };
}
