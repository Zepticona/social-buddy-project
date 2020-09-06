import React, { useEffect, useState, useContext } from 'react';
import Post from '../Post/Post';
import './home.css'
import { PostContext } from '../../App';


const Home = () => {

    const posts = useContext(PostContext);

    return (
        <div className="home-container">
            {
                posts.map( post => <Post key={post.id} postInfo={post}></Post>)
            }
        </div>
    );
};

export default Home;