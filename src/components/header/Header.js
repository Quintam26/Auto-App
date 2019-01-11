import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
              <li>
                <Link to="/search">Search</Link>
              </li>
            </ul>
          </nav>
        </section>
      </div>
    );
  }
}

export default Header;