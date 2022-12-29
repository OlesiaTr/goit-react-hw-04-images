// Core
import { Component } from 'react';

// Utils
import { MdImageSearch } from 'react-icons/md';
import PropTypes from 'prop-types';

// Styles
import { Header, SearchForm, SearchBtn, SearchInput } from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    searchName: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleInputChange = e => {
    this.setState({
      searchName: e.currentTarget.value.toLowerCase(),
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.searchName);
  };

  render() {
    return (
      <Header>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchBtn type="submit">
            <MdImageSearch />
          </SearchBtn>

          <SearchInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInputChange}
          />
        </SearchForm>
      </Header>
    );
  }
}
