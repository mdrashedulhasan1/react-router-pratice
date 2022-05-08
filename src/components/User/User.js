import React from 'react';
import { NavLink } from 'react-router-dom';
import './User.css';
const User = (props) => {
    const {id, name, phone, website, address} = props.user;
    return (
        <div className='user-container'>
        <h1>{id}</h1>
            <h1 className='name-color'>I am {name}</h1>
            <p>Call Me: {phone}</p>
            <a href="">{website}</a>
            <p>{address.city}</p>
            <NavLink to={`/userDetails/${id}`}>Details Info</NavLink>
        </div>
    );
};

export default User;