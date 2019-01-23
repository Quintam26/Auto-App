import React, { Component } from 'react';
import styles from './About.css';

class About extends Component {

  render() {
    
    return (
      <div className={styles.about}>
      
        <section className="about-info">
          <div className="about-container">
            <div className="info-left">
              <h1 className="l-heading"><span className="main-text">About</span> AutoSearch</h1>
              <p>If you only read the books that everyone else is reading, you can only think what everyone else is thinking.</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio voluptates repudiandae ea quod fugit, dignissimos rem temporibus deleniti laudantium vitae amet voluptatibus unde animi omnis tempore excepturi corporis sint corrupti!</p>
            </div>

            <div className="info-right">
              <img src={require('../../assets/open.png')}/>
            </div>
          </div>
        </section>

        <div className="clr"/>

        <section className="tests">
          <div className="test-container">
            <h2 className="about-heading">Automotive Perfection</h2>
            <div className="test1">
              <img src={require('../../assets/merc2.png')}/>
              <p>2017 MERC AMG</p>
            </div>
            <div className="test2">
              <img src={require('../../assets/bmw2.png')}/>
              <p>2019 BMW M4</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default About;