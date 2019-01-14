import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Car extends Component {

  static propTypes = {
    car: PropTypes.object.isRequired
  };

  render() {
    const { car } = this.props;
    const { id, price, miles, /*build,*/ heading, media } = car;

    return (
      <li>
        <Link to={`/car/${id}`}>
          {media.photo_links[0] !== 'N/A'
            ? <img src={media.photo_links[0]}/>
            : <img src="N/A"/>}
          <h3>{heading}</h3>
          {/* <p>Year: {build.year}</p><p>Make: {build.make}</p><p>Model: {build.model}</p> */}
          <p>Price: {price}</p>
          <p>Miles: {miles}</p>
        </Link>
      </li>
    );
  }
}