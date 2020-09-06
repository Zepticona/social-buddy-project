import React, { useEffect, useState,  } from 'react';
import './comment.css'
import Avatar from '@material-ui/core/Avatar';

const Comment = (props) => {
    const { id, name, email, body } = props.commentContent;
    const [images, setImages] = useState([]);
    
    useEffect( () => {
        const accessKey = 'CE4NWygPRTPyL7TP-_PdOJdneyJqSZUcHosvBm5ShS4';
        fetch(`https://api.unsplash.com/search/photos?query=man&client_id=${accessKey}`)
        .then( res => res.json() )
        .then( data => {
            const imageUrls = data.results.map( img => img.urls.thumb);
            setImages(imageUrls);
        } )
    }, [])

    // Generate an id for selecting images from the images array, based on the id recieved from the props.
    let initialId, temporaryId, renewdId = id;
    if ( id => 10 && id <= 500) {
        if ( id % 10 === 0 ) {
            renewdId = 3;
            console.log(renewdId);
        } else {
            initialId = id/10;
            temporaryId = (initialId - Math.floor(initialId));
            renewdId = Math.round(temporaryId * 10);
        }
    } 


    return (
        <div className="comments-container">
            <div className="commentor">
                <Avatar className="user-dp" alt="User Avatar" src={images[renewdId]} />
                <h2>{name}</h2>
            </div>
            <div className="comment">                
                <p>{body}</p>
                <p><strong>Contact:</strong> {email}</p>
            </div>
        </div>
    );
};

export default Comment;