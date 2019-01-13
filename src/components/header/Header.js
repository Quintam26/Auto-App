import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Search from '../search/Search';

class Header extends Component {

  render() {
    return (
      <div>
        <section className="header-container">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
        </section>

        <section className="search-container">
          <Route component={Search}/>
        </section>
      </div>
    );
  }
}

export default Header;