import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Profile } from '../pages/';
export const PrivateRouter = ({ posts }) => {
  return (
    <>
      <Routes>
        <Route path="/profile" element={<Profile posts={posts} />}></Route>
      </Routes>
    </>
  );
};
