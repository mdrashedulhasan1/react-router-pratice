import React from 'react';
import { NavLink } from 'react-router-dom';
import './Post.css';
const Post = (props) => {
    const {id, title, body} = props.post;
    return (
        <div className='post-container'>
            <h1>{id}</h1>
            <p className='post-title-color'>{title}</p>
            <p>{body}</p>
            <NavLink to={`/postDetails/${id}`}>Visit Details Info</NavLink>
        </div>
    );
};

export default Post;