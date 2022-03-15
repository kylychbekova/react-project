import React from "react";
import classes from './Section.module.css'
import MyPost from "./MyPost";




const Section = (props) => {
    let posts = [
        {id: 1, message: 'Lorem ipsum was purposefully designed to have no meaning', likesCount: 12},
        {id: 2, message: 'Lorem ipsum was purposefully designed to have no meaning', likesCount: 23},

    ]
    return(
      <div className={classes.section}>
          <div>
            <img src='https://i.pinimg.com/736x/ef/d5/f1/efd5f1655b081632f136632cb1acb950.jpg'/>
          </div>
          <div>Pages</div>

          <MyPost posts={posts}/>
    </div>

          )
}


export default Section