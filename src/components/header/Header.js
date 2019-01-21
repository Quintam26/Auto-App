import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
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
                <NavLink exact activeClassName="active" to="/">Home</NavLink>
              </li>
              <li>
                <NavLink exact activeClassName="active" to="/about" >About</NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;