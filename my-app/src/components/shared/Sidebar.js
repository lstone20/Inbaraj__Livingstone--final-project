import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { useLocation } from 'react-router-dom';
import './Sidebar.css';

export default props => {
  let IsAuth = sessionStorage.getItem('IsAuth')
  useLocation();
  return (
    <div className="menu-bg">
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/resume">
        Resume
      </a>
      <a className="menu-item" href="/contact">
        Contact Me
      </a>
      <a className="menu-item" href="/portfolio">
        Portfolio
      </a>
      <a className="menu-item-admin" href="/submissions">
        {IsAuth ? "Submissions" : "Admin Login"}
      </a>
      {IsAuth && 
        <a className="menu-item-admin" href="/createuser">
          Create New Users
        </a>
      }
    </Menu>
    </div>
  );
};
