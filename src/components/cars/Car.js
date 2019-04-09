import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Car.css';

export default class Car extends Component {

  static propTypes = {
    car: PropTypes.object.isRequired
  };

  render() {
    const { car } = this.props;
    const { id, price, miles, heading, media } = car;

    return (
      <li className={styles.car}>
        <Link to={`/car/${id}`}>
          {media.photo_links[0] !== 'N/A'
            ? <img src={media.photo_links[0]} style={{ 'width':'500px' }}/>
            : <img src="N/A"/>}
          <h3>{heading}</h3>
          <p><strong>Price:</strong> ${price}</p>
          <p><strong>Miles:</strong> {miles}</p>
        </Link>
      </li>
    );
  }
}