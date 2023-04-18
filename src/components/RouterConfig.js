import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Dashboard } from '../pages/';
export const RouterConfig = ({ posts }) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard posts={posts} />}></Route>
        <Route path="/" exact element={<Home />}></Route>
      </Routes>
    </>
  );
};
