import React from 'react';
import PostComments from './PostComments';
export default function PostHeader({ title }) {
  return (
    <div className="section">
      <h4>{title}</h4>
      <PostComments />
    </div>
  );
}
