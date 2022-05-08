import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './PostDetails.css';
const PostDetails = () => {
    const {postID} = useParams();
    const [post, setPost] = useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`)
        .then(res => res.json())
        .then(data => setPost(data))
    },[])
    console.log(post);
    return (
        <div className='details-post-container'>
            <h1>{post.id}</h1>
            <p className='single-post-title-color'>{post.title}</p>
            <p>{post.body}</p>
        </div>
    );
};

export default PostDetails;