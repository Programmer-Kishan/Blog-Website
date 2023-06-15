import React, { useState } from 'react';

import classes from './Navbar.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);

    const handleClick = () => {
        console.log("Hello")
        setShowMenu(!showMenu);
    }

  return (
    <>
        <nav className={classes.navbar}>
            <h2>UpdateKnowledge</h2>
            <ul className={showMenu ? `${classes.menu} ${classes['mobile-links']}` : classes.menu}>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Blogs</a></li>
                <li><a href='#'>News</a></li>
                <li><a href='#'>Events</a></li>
                <li><a href='#'>Jobs</a></li>
            </ul>
            <div className={classes["mobile-menu"]} onClick={handleClick}>
                <FontAwesomeIcon icon={faBars} />
            </div>
        </nav>
    </>
  )
}

export default Navbar