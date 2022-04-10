import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { img, price, name, description } = service;
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h4>Price: BDT {price}</h4>
            <p>{description}</p>
            <Link to={`/booking/${name}`}><button>Booking {name}</button></Link>
        </div>
    );
};

export default Service;