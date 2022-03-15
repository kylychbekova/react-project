import React from "react";
import {Link} from "react-router-dom";
import classes from './../Dialogues.module.css'

const DialoguesItem = (props) =>{
    let path="/dialogues/" + props.id;
    return(
        <div className={classes.dialogue}>
            <Link to={path}>{props.name}</Link>
        </div>
    )
}


export default DialoguesItem;