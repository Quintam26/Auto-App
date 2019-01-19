import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';

class Header extends Component {

  render() {

    return (
      <div className={styles.header}>
        <nav className="topnav">
          <div className="header-container">
            <h2 className="logo"><a>MQM</a></h2>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;