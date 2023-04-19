import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
export default function Sidebar() {
  const sidebar = [
    {
      id: 1,
      name: 'Home',
      title: 'Home',
      link: '/',
    },
    {
      id: 2,
      name: 'Explore',
      title: 'Explore',
      link: '/explore',
    },
    {
      id: 3,
      name: 'Notification',
      title: 'Notification',
      link: '/notification',
    },
    {
      id: 4,
      name: 'Messages',
      title: 'Messages',
      link: '/messages',
    },
    {
      id: 5,
      name: 'Bookmarks',
      title: 'Bookmarks',
      link: '/bookmarks',
    },
    {
      id: 6,
      name: 'Lists',
      title: 'Lists',
      link: '/lists',
    },
    {
      id: 7,
      name: 'Profile',
      title: 'Profile',
      link: '/profile',
    },
    {
      id: 8,
      name: 'more',
      title: 'more',
      link: '/more',
    },
  ];
  const SideMenuItem = ({ name, link, iconComponent }) => {
    return (
      <div className="sidebar-item">
        <Link to={`.${link}`}>
          {iconComponent}
          {name}
        </Link>
      </div>
    );
  };
  return (
    <div className="sidebar">
      {sidebar &&
        sidebar.map((item, id) => {
          return (
            <>
              <SideMenuItem
                name={item.name}
                key={item.id}
                link={item.link}
                iconComponent={<h4>{item.name}</h4>}
              />
            </>
          );
        })}
      <button type="button">Tweet</button>
    </div>
  );
}
