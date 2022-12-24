import React from "react";
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <NavLink type='btn' to='/' className={({ isActive }) => (isActive ? 'link active' : 'link')}>
        Fill Form
      </NavLink>
      <NavLink type='btn' to='/enrolled' className={({ isActive }) => (isActive ? 'link active' : 'link')}>
        Enrolled Users
      </NavLink>
    </nav>
  );
};

export default Navbar;
