import React, { useEffect, useState, } from 'react';
import './postDetail.css'
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';
import Divider from '@material-ui/core/Divider';

const PostDetail = () => {

    const {postId} = useParams();
    const [clickedPost, setClickedPost] = useState({})
    const { title, userId, id, body } = clickedPost; 
    const [comments, setComments] = useState([]);

    useEffect( () => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then( res => res.json())
        .then( data => setClickedPost(data));
        
    }, []);
    useEffect( () => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then( res => res.json())
        .then( data => setComments(data));        
    }, [])

    return (
        <div>
            <div className="full-post-container">
                <h2>{title}</h2>
                <small style={{marginRight: '10px'}}>User ID: <strong>{userId}</strong></small>
                <small>Post ID: <strong>{id}</strong> </small>
                <Divider />
                <p className="full-post">{body}</p>
            </div>
            <div className="all-comments-container">
                {
                    comments.map( comment => <Comment key={comment.id}  commentContent={comment}></Comment> )
                }
            </div>
        </div>
    );
};

export default PostDetail;