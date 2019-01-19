import React, { Component } from 'react';
import styles from './About.css';

class About extends Component {

  render() {
    return (
      <div className={styles.about}>
        <section className="about-info">
          <div className="about-container">
            <div className="info-left">
              <h1><span className="main-text">About</span> AutoSearch</h1>
              <p>If you only read the books that everyone else is reading, you can only think what everyone else is thinking.</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio voluptates repudiandae ea quod fugit, dignissimos rem temporibus deleniti laudantium vitae amet voluptatibus unde animi omnis tempore excepturi corporis sint corrupti!</p>
            </div>

            <div className="info-right">
              <div className="image">

              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default About;