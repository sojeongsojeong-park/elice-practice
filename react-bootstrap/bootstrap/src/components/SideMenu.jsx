import React from "react";

import { Nav } from "react-bootstrap";

import { Link } from "react-router-dom";

const SideMenu = () => {
  return (
    <Nav defaultActiveKey='/home' className='flex-column'>
      <Link to='/home'>Home</Link>
      <Link to='/about'>About</Link>
    </Nav>
  );
};

export default SideMenu;
