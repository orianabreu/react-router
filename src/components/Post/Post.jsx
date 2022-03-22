import React from "react";
import { Link } from "react-router-dom";

export default function Post({ id, title, userId }) {
  return (
    <div className='post-container'>
      <Link to={`/singlePost/${id}`}>
        <h4>
          {id}: {title}
        </h4>
        <p>Escrito por: {userId}</p>
      </Link>
    </div>
  );
}
