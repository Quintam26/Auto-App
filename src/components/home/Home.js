import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';

class Home extends Component {

  render() {

    return (
      <div className={styles.home}>
        <div className="showcase">
          <div className="home-container">
            <div className="home-content">
              <h1><span className="main-text">AutoSearch</span> App</h1>
              <p>Find the car of your dreams</p>
              <Link to="/search" className="start-btn">Start</Link>
            </div>
          </div>
        </div>
      </div>        
    );
  }
}

export default Home;