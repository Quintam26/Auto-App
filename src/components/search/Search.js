import React, { Component } from 'react';
import qs from 'query-string';
import PropTypes from 'prop-types';

class Search extends Component {

  state = {
    search: ''
  };

  static propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  };

  componentDidMount() {
    const { location } = this.props;
    const { search = '' } = qs.parse(location.search);
    
    this.setState({ search });
  }

  handleChangeSearch = ({ target }) => {
    this.setState({ search: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { search } = this.state;
    if(!search) return;

    const { history } = this.props;
    history.push({
      pathname: '/search',
      search: qs.stringify({ search, page: 1 })
    });
    this.setState({ search: '' });
  };

  render() {
    const { search } = this.state;
    console.log(search);

    return (
      <form className="search-form" onSubmit={event => this.handleSubmit(event)}>
        <label>
          Search for:&nbsp;
          <input name="name" value={search} onChange={this.handleChangeSearch}/>
        </label>
        <button>Search</button>
      </form>
    );
  }
}

export default Search;