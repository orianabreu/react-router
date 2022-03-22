import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function SinglePost() {
    const [postInfo, setPostInfo] = useState({
        title: "",
        userId: "",
        body: ""
    });

    const { postId } = useParams();

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/" + postId)
        .then(response => response.json())
        .then(response => setPostInfo(response))
        // return () => {
        //     cleanup
        // };
    }, [postId]);

    const { title, userId, body } = postInfo;
  return (
    <div>
        <h2>{title}</h2>
        <p>Escrito por: {userId}</p>
        <p>{body}</p>
    </div>
  )
}
