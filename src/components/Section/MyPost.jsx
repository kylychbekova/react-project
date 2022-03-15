 import React from "react";
 import Post from "./Post";
 import classes from './Section.module.css'

const MyPost = (props) => {

    let postElements = props.posts.map(post => <Post  message={post.message} likesCount={post.likesCount} /> )
    let newPostElement = React.createRef();
    let addPost = () =>{
        let text = newPostElement.current.value;
        alert(text);
    }
    return(

        <div className={classes.myPost}>
            <div className={classes.heading}>My posts</div>
            <div>
            <textarea ref={newPostElement} className={classes.textarea}>New post</textarea>
                <button onClick= {addPost} className={classes.button}>Add post</button>
          </div>
            {postElements}
          </div>

    )
}


export default MyPost;