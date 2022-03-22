import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Post from "../../components/Post/Post";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const baseURL = "https://jsonplaceholder.typicode.com";

  useEffect(() => {
    let mounted = true;
    fetch(baseURL + "/posts")
      .then((response) => response.json())
      .then(
        (response) => {
          setPosts(response);
        },
        (error) => {
          setError(error);
        }
      );

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <>
      {error && <p>Error: {error.message}</p>}
      <h1>Post del blog:</h1>
      <div className='posts-wrapper'>
        {posts.map((post) => {
          return (
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              userId={post.userId}
            />
          );
        })}
      </div>
    </>
  );
}
