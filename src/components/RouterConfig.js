import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Dashboard } from '../pages/';
import { PrivateRouter } from './PrivateRoutes';
export const RouterConfig = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        {/* <PrivateRouter posts={}/> */}
        <Route path="/dashboard" exact element={<Home />}></Route>
      </Routes>
    </>
  );
};
