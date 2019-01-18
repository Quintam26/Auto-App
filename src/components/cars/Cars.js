import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Car from './Car';
import styles from './Cars.css';

class Cars extends Component {

  static propTypes = {
    cars: PropTypes.arrayOf(Object)
  };

  render() {
    const { cars } = this.props;

    return (
      <ul className={styles.cars}>
        {cars.map((car, i) => (
          <Car key={i} car={car}/>
        ))}
      </ul>
    );
  }
}

export default Cars;