import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Car extends Component {

  static propTypes = {
    car: PropTypes.object.isRequired
  };

  render() {
    const { car } = this.props;
    const { id, price, miles, year, make, model, photo_link } = car;

    return (
      <li>
        <Link to={`/car/${id}`}>
          {photo_link !== 'N/A'
            ? <img src={photo_link}/>
            : <img src="N/A"/>}
          <p>{year}</p><p>{make}</p><p>{model}</p>
          <p>{price}</p>
          <p>{miles}</p>
        </Link>
      </li>
    );
  }
}