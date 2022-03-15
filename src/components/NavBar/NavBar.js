import React from "react";
import {Link} from "react-router-dom";
import classes from './NavBar.module.css'



const NavBar = () => {
    return (

        <nav className={classes.nav}>
            <div className={classes.item}>
                <Link to='/section'>Profile</Link>
            </div>
            <div className= {classes.item}  >
                <Link to='/dialogues'>Message</Link>
            </div>
            <div className={classes.item}>
                <a>News</a>
            </div>
            <div className={classes.item}>
                <a>Music</a>
            </div>
            <div className={classes.item}>
                <a>Settings</a>
            </div>

        </nav>
    )
}

export default NavBar;