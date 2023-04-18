import React, { useState, useEffect } from 'react';
export default function PostList({ title, posts }) {
  // const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   fetch('https://dummyjson.com/posts')
  //     .then((res) => res.json())
  //     .then((result) => setPosts(result));
  // }, [posts]);

  const Post = ({ items }) => {
    return (
      items &&
      items.map((item, id) => {
        return <div key={id}>{item.title}</div>;
      })
    );
  };

  return (
    <div>
      <div>{title}</div>
      {posts &&
        posts.length > 0 &&
        posts.map((item, id) => {
          return <Post items={item.posts} key={id} />;
        })}
    </div>
  );
}
