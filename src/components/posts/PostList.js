import React, { useState, useEffect } from 'react';
import PostFooter from './PostFooter';
export default function PostList({ title, posts, limit = 5 }) {
  const [newposts, setPosts] = useState();
  useEffect(() => {
    setTimeout(() => {
      fetch('https://dummyjson.com/posts')
        .then((res) => res.json())
        .then((result) => setPosts(result.posts));
    }, 1000);
  }, [posts]);

  return (
    <div>
      <div>{title}</div>
      {newposts &&
        newposts.length > 0 &&
        newposts.length == limit &&
        newposts.map((item, id) => {
          return (
            <div key={id}>
              <div>{item.title}</div>
              <div>{item.details}</div>
              <PostFooter />
            </div>
          );
        })}
    </div>
  );
}
