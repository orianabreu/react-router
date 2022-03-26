import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

export default function Post({ id, title, userId }) {
  const darkTheme = useTheme();

  const containerStyles = {
    borderColor: darkTheme ? "lightgray" : "darkblue"
  }
  
  return (
    <div className='post-container' style={containerStyles}>
      <Link to={`/single-post/${id}`}>
        <h4>
          {id}: {title}
        </h4>
        <p>Escrito por: {userId}</p>
      </Link>
    </div>
  );
}
