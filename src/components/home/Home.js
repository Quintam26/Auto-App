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
              <p>Find The One</p>
              <Link to="/search" className="start-btn">Start</Link>
            </div>
          </div>
        </div>

        <section className="home-info" id="bg-dark">
          <div className="info-img"></div>
          <div className="info-content">
            <h2><span className="main-text">The Need</span> for Speed</h2>
            <p>What sets these - and all - racers apart from less daredevilish mortals is their complete lack of fear and their joy of doing something on the edge. They love to speed because it is dangerous. You will never know the feeling of a driver when winning a race. The helmet hides feelings that cannot be understood.</p>
            <Link to="/about" className="read-btn">Read More</Link>
          </div>
        </section>

        <section className="features">
          <div className="box">
            <i className="fas fa-globe-americas fa-3x"></i>
            <h3>Search The World</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, perferendis.</p>
          </div>
          <div className="box bg-ex">
            <i className="fab fa-phoenix-framework fa-3x"></i>
            <h3>Exotic Brands</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, perferendis.</p>
          </div>
          <div className="box">
            <i className="fas fa-flag-checkered fa-3x"></i>
            <h3>Race Forever</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, perferendis.</p>
          </div>
        </section>
      </div>        
    );
  }
}

export default Home;