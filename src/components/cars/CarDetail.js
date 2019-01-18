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

    const { inventory_type, heading, vin, vdp_url, media, dealer } = car;

    return (
      <div>
        <h2>{heading}</h2>
        {
          media.photo_links.map((image, i) => 
            <img src={media.photo_links[i]} image={image} key={i}/>)
        }
        <p>Inventory Type: {inventory_type}</p><p>VIN: {vin}</p>
        <a href={vdp_url}>{vdp_url}</a>
        <p>Dealer Name: {dealer.name}</p>
        <p>Address: {dealer.street}, {dealer.city} {dealer.state}</p>
        <p>Phone: {dealer.phone}</p>
      </div>
    );
  }
}

export default CarDetail;