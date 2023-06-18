import React from 'react';
import { NavLink } from "react-router-dom";

import Subheading from "../Helper/Headings/Subheading";
import BodyCard from "../Helper/BodyCard/BodyCard";

import classes from "./Blogs.module.css";

import tech from "../../Images/tech.jpg";
import travel from "../../Images/travel.jpg";
import health from "../../Images/health.jpeg";

const Blogs = () => {
  return (
    <>
      <div className={classes["main-blog"]}>
        <h1>Blogs</h1>
      </div>
      <BodyCard className={classes.category}>
        <Subheading>
          <span>S</span>elect <span>C</span>ategory
        </Subheading>
        <div className={classes.links}>
          <NavLink to="/blogs/tech" data="#Technology">
            <img src={tech} alt="technology" />  
          </NavLink>
          <NavLink to="/blogs/travel" data="#Travel">
            <img src={travel} alt="technology" />  
          </NavLink>
          <NavLink to="/blogs/health" data="#Health">
            <img src={health} alt="technology" />  
          </NavLink>
        </div>
      </BodyCard>
    </>
  )
}

export default Blogs;