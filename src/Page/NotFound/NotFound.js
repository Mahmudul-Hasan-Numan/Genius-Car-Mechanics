import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/NotFound/notFound.PNG';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='notFound'>
            <h1 className='outside-track'>Sorry, You are outside of track</h1>
            <img src={notFound} alt="" />
            <br />
            <Link to='/home'><button className='btn btn-primary mt-5'>Back Home</button></Link>
        </div>
    );
};

export default NotFound;