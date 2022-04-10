import React from 'react';
import { useParams } from 'react-router-dom';
import './Booking.css';

const Booking = () => {
    const { serviceName } = useParams()
    return (
        <div className='booking'>
            <h1>Booking for <span className='text-info'>{serviceName}</span> </h1>
        </div>
    );
};

export default Booking;