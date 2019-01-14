import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Paging extends Component {

  static propTypes = {
    page: PropTypes.number,
    perPage: PropTypes.number,
    num_found: PropTypes.number,
    onPage: PropTypes.func.isRequired
  };

  handlePage(increment) {
    const { page, onPage } = this.props;
    onPage({ page: page + increment });
  }

  render() {
    const { num_found, page, perPage } = this.props;
    
    if(!num_found) return <div>No results found, try another search</div>;

    const totalPages = Math.ceil(num_found / perPage);
    return (
      <div>
        <span>Page {page} of {totalPages}</span>
        &nbsp;
        <button onClick={() => this.handlePage(-1)}>&lt; Prev</button>
        <button onClick={() => this.handlePage(+1)}>Next &gt;</button>
      </div>
    );
  }
}