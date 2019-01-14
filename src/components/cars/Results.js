import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import qs from 'query-string';
import Cars from './Cars';
import Paging from '../paging/Paging';
import { search as searchCars } from '../../services/marketcheckApi';

class Results extends Component {

  state = {
    cars: null,
    num_found: 0,
    perPage: 10,
    loading: false,
    error: null
  };

  static propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.searchCars();
  }

  componentDidUpdate({ location }) {
    const { page: oldPage } = qs.parse(location.search);
    const { search: oldSearch } = qs.parse(location.search);
    if(oldSearch !== this.searchTerm || oldPage !== this.searchPage) this.searchCars();
  }

  handlePage = paging => {
    this.setState(paging, () => {
      const { perPage } = this.state;
      const search = this.searchTerm;
      const { page } = paging;
      const { history } = this.props;
      history.push({
        search: qs.stringify({ search, page, perPage })
      });
    });
  };

  get searchPage() {
    const { location } = this.props;
    const { page } = qs.parse(location.search);
    return page;
  }

  get searchTerm() {
    const { location } = this.props;
    const { search } = qs.parse(location.search);
    return search;
  }

  searchCars() {
    const { perPage } = this.state;
    const page = parseInt(this.searchPage);
    const search = this.searchTerm;
    if(!search) return;

    this.setState({
      loading: true,
      error: null
    });
    
    searchCars({ search }, { page, perPage })
      .then(
        ({ listings, num_found, }) => {
          this.setState({ cars: listings, num_found, page });
        },
        err => {
          this.setState({ error: err.message });
        }
      )
      .then(() => {
        this.setState({ loading: false });
      });
  }

  render() {

    const { cars, loading, error } = this.state;
    const { perPage, num_found } = this.state;
    const { searchTerm } = this;

    return (
      <section>
        {(loading || error) &&
        <section className="notifications">
          {loading && <div>Loading...</div>}
          {error && <div>{error}</div>}      
        </section>
        }

        {searchTerm &&
          <Fragment>
            <p>Searching for &quot;{searchTerm}&quot;</p>
            <Paging
              page={+this.searchPage}
              perPage={perPage}
              num_found={parseInt(num_found)}
              onPage={this.handlePage}
            />
          </Fragment>
        }
        <div>
          {cars
            ? <Cars cars={cars}/>
            : <p>Please enter your search</p>
          }
        </div>
      </section>
    );
  }
}

export default Results;