import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './UserDetails.css';
const UserDetails = () => {
    const [user, setUser] = useState([]);
    const {userID} = useParams();
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)
        .then(res => res.json())
        .then(data => setUser(data))
    },[])
    return (
        <div className='userDetails-container'>
            <h1>This is user Details: {userID}</h1>
            <h1>{user.name}</h1>
            <p>{user.phone}</p>
            <p>{user.website}</p>
            <p>{user.company?.name}</p>
        </div>
    );
};

export default UserDetails;