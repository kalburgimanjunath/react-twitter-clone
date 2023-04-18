import React, { useState, useEffect } from 'react';
import {
  Header,
  Sidebar,
  Footer,
  PostHeader,
  PostList,
  Widgets,
} from '../components/';
import './dashboard.css';
export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="asidebar">
        <Header />
        <Sidebar />
      </div>
      <div className="post-contents">
        <PostHeader title={'Home'} />
        <PostList title="Posts" />
      </div>
      <div className="rightasidebar">
        <Widgets title="Trends for you">
          <PostList title="trending worldwide" limit="2" />
        </Widgets>
        <Widgets title="Trends for you">
          <PostList title="Who to follow" limit="2" />
        </Widgets>
      </div>
    </div>
  );
}
