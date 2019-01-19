import React, { Component } from 'react';
import styles from './Home.css';

class Home extends Component {

  render() {

    return (
      <div className={styles.home}>
        <div className="home-container">
          <div className="home-content">
            <h2>AutoSearch App</h2>
            <p>Getting something on the page</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;