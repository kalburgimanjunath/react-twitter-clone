import React, { useState, useEffect } from 'react';
import PostFooter from './PostFooter';
export default function PostList({ title, posts, limit = 5 }) {
  const [newposts, setPosts] = useState();
  useEffect(() => {
    setTimeout(() => {
      fetch('https://dummyjson.com/posts')
        .then((res) => res.json())
        .then((result) => {
          console.log(result.posts);
          setPosts(result.posts);
        });
    }, 1000);
  }, [posts]);
  const POST = ({ item }) => {
    return (
      <>
        <h4>{item.title}</h4>
        <div>{item.body}</div>
      </>
    );
  };
  let count = 0;
  return (
    <div>
      {newposts &&
        newposts.length > 0 &&
        newposts.map((item, id) => {
          count++;
          if (count <= limit) {
            return (
              <div key={id} className="section">
                <POST item={item} />
                <PostFooter />
              </div>
            );
          }
        })}
    </div>
  );
}
