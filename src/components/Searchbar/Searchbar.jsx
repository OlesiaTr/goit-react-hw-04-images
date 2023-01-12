// Core
import { useState } from 'react';

// Utils
import { MdImageSearch } from 'react-icons/md';
import PropTypes from 'prop-types';

// Styles
import { Header, SearchForm, SearchBtn, SearchInput } from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [searchName, setSearchName] = useState('');

  const handleInputChange = e =>
    setSearchName(e.currentTarget.value.toLowerCase());

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(searchName);
  };

  return (
    <Header>
      <SearchForm onSubmit={handleSubmit}>
        <SearchBtn type="submit">
          <MdImageSearch />
        </SearchBtn>

        <SearchInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleInputChange}
        />
      </SearchForm>
    </Header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
