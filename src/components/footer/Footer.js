import React, { Component } from 'react';
import styles from './Footer.css';

class Footer extends Component {

  render() {

    return (
      <div className={styles.footer}>
        <footer className="main-footer">
          <p>AutoSearch MQ &copy; 2019, All Rights Reserved</p>
        </footer>
      </div>
    );
  }
}

export default Footer;