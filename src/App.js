import React, { useState, useEffect } from 'react';
import './style.css';
import { RouterConfig } from './components/RouterConfig';
import { getAllPosts } from './services/postService';
export default function App() {
  // const [posts, setPosts] = useState(null);
  // useEffect(() => {
  //   // setPosts(getAllPosts());
  // }, [posts]);
  // console.log(posts);
  return (
    <div>
      <RouterConfig />
    </div>
  );
}
