import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCar } from '../../services/marketcheckApi';

class CarDetail extends Component {

  state = {
    car: null
  };

  static propTypes = {
    match: PropTypes.object.isRequired
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    getCar(id)
      .then(car => {
        this.setState({ car });
      })
      .catch(console.log());
  }

  render() {
    const { car } = this.state;
    if(!car) return null;

    const { id, heading, vin, vdp_url, carfax_clean_title } = car;
    console.log(heading);

    return (
      <div>
        <h2>{heading}</h2>
        <h3>Id: {id}</h3><h3>VIN: {vin}</h3>
        <p>{vdp_url}</p>
        <p>Clean Title: {carfax_clean_title}</p>
      </div>
    );
  }
}

export default CarDetail;