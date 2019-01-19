import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';

class Header extends Component {

  render() {

    return (
      <div className={styles.header}>
        <nav className="topnav">
          <div className="header-container">
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
          </div>
        </nav>

        <div className="showcase">
          <div className="home-container">
            <div className="home-content">
              <h2>AutoSearch App</h2>
              <p>Getting something on the page</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;