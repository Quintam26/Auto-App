import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCar } from '../../services/marketcheckApi';
import styles from './CarDetail.css';

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

    const { inventory_type, heading, vin, /*vdp_url*/media, dealer } = car;

    return (
      <div className={styles.carDetail}>
        <div className="detail-cont">
          {media.photo_links[0] !== 'N/A'
            ? <img className="car-image-list" src={media.photo_links[0]}/>
            : <img src='https://www.nationalpetregister.org/assets/img/no-photo.jpg'/>}
          {/* {
          media.photo_links.map((image, i) => 
            <img className="car-image-list" src={media.photo_links[i]} image={image} key={i}/>)
        } */}
          <h2>{heading}</h2>
          <p><strong>Inventory Type:</strong> {inventory_type}</p><p><strong>VIN:</strong> {vin}</p>
          {/* <a href={vdp_url}>{vdp_url}</a> */}
          <p><strong>Dealer Name:</strong> {dealer.name}</p>
          <p><strong>Address:</strong> {dealer.street}, {dealer.city} {dealer.state}</p>
          <p><strong>Phone:</strong> {dealer.phone}</p>
        </div>
      </div>
    );
  }
}

export default CarDetail;