import React from 'react';
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
        <PostList title="content" />
      </div>
      <div className="rightasidebar">
        <Widgets title="Trends for you" />
      </div>
    </div>
  );
}
