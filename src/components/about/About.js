import React, { Component } from 'react';
import styles from './About.css';

class About extends Component {

  render() {
    return (
      <div className={styles.about}>
        <div className="about-container">
          <div className="about-content">
            <h2>About</h2>
            <p>If you only read the books that everyone else is reading, you can only think what everyone else is thinking.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;