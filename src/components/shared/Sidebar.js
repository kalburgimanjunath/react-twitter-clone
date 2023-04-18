import React from 'react';
import './Sidebar.css';
export default function Sidebar() {
  const sidebar = [
    {
      id: 1,
      name: 'Home',
      title: 'Home',
    },
    {
      id: 2,
      name: 'Explore',
      title: 'Explore',
    },
    {
      id: 3,
      name: 'Notification',
      title: 'Notification',
    },
    {
      id: 4,
      name: 'Messages',
      title: 'Messages',
    },
    {
      id: 5,
      name: 'Bookmarks',
      title: 'Bookmarks',
    },
    {
      id: 6,
      name: 'Lists',
      title: 'Lists',
    },
    {
      id: 7,
      name: 'Profile',
      title: 'Profile',
    },
    {
      id: 8,
      name: 'more',
      title: 'more',
    },
  ];
  const SideMenuItem = ({ name, iconComponent }) => {
    return (
      <div className="sidebar-item">
        {iconComponent}
        {name}
      </div>
    );
  };
  return (
    <div className="sidebar">
      {sidebar &&
        sidebar.map((item) => {
          return (
            <>
              <SideMenuItem
                name={item.name}
                key={item.id}
                iconComponent={<h4>{item.name}</h4>}
              />
            </>
          );
        })}
      <button type="button">Tweet</button>
    </div>
  );
}
