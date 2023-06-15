import React from 'react';

import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
        <h2>UpdateKnowledge</h2>
        <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Blogs</a></li>
            <li><a href='#'>News</a></li>
            <li><a href='#'>Events</a></li>
            <li><a href='#'>Jobs</a></li>
        </ul>
    </nav>
  )
}

export default Navbar