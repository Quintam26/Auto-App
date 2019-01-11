import React, { Component } from 'react';
// import qs from 'query-string';
// import PropTypes from 'prop-types';

class Search extends Component {

  state = {
    search: ''
  };

  render() {
    return (
      <form className="search-form">
        <label>
          Search for:&nbsp;
          <input/>
        </label>
        <button>Search</button>
      </form>
    );
  }
}

export default Search;