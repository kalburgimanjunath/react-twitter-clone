import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Profile, Posts } from '../pages/';
export const PrivateRouter = ({ posts }) => {
  return (
    <React.Fragment>
      {/* <Routes> */}
      <Route path="/explore" element={<Profile posts={posts} />}></Route>
      <Route path="/notification" element={<Profile posts={posts} />}></Route>
      <Route path="/messages" element={<Profile posts={posts} />}></Route>
      <Route path="/bookmarks" element={<Profile posts={posts} />}></Route>
      <Route path="/lists" element={<Profile posts={posts} />}></Route>
      <Route path="/profile" element={<Profile posts={posts} />}></Route>
      <Route path="/more" element={<Profile posts={posts} />}></Route>
      <Route path={`/posts/:id`} element={<Posts />}></Route>
      {/* </Routes> */}
    </React.Fragment>
  );
};
