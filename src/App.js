import React, { useState, useEffect } from 'react';
import './style.css';
import { RouterConfig } from './components/RouterConfig';
export default function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((result) => setPosts(result));
    }, 3000);
  }, [posts]);
  return (
    <div>
      <RouterConfig posts={posts} />
    </div>
  );
}
