import React from "react";
import classes from './Section.module.css'
const Post = (props) => {
    return(

            <div>

                <div>
                    <img src='https://th.bing.com/th/id/R.cf047a0c7524e707a00269ff689dbbdb?rik=1pNlTD1Rn5qxdw&pid=ImgRaw&r=0'/>
                    {props.message}
                </div>
                    <div>
                    <img className={classes.icon} src='https://images.vexels.com/media/users/3/223246/isolated/preview/a5e1b4a04c71beac7b6d7537dd007b35-like-icon-flat-by-vexels.png'/>
                    {props.likesCount}
                </div>

            </div>


    )
}


export default Post;