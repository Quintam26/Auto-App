import React, { Component } from 'react';
import styles from './Contact.css';

class Contact extends Component {

  render() {

    return (
      <div className={styles.contact}>
      
        <div className="contact-image">
          <section className="contact-form">
            <div className="container">
              <h1 className="c-heading"><span className="main-text">Contact</span> Us</h1>
              <p className="contact-p">Please fill out the form below to contact us</p>

              <form action="sub">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" id="name" placeholder="Enter Name" required/>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" 
                    placeholder="Enter Email" required/>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea name="message" id="message" placeholder="Enter a Message"/>
                </div>

                <button type="submit"className="contact-btn">Submit</button>
              </form>

            </div>
          </section>

          <section className="contact-info">
            <div className="container">
              <div className="box-bk">
                <i className="fas fa-globe-americas fa-3x"></i>
                <h3>Location</h3>
                <p>Gresham, Oregon</p>
              </div>
              <div className="box-bk">
                <i className="fas fa-phone fa-3x"></i>
                <h3>Phone Number</h3>
                <p>541-288-8519</p>
              </div>
              <div className="box-bk">
                <i className="fas fa-envelope fa-3x"></i>
                <h3>Email Address</h3>
                <p>Pyrros2000@gmail.com</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Contact;