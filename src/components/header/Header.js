import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';

class Header extends Component {

  render() {
    return (
      <div className={styles.header}>
        <nav>
          <ul className="topnav">
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
      </div>
    );
  }
}

export default Header;