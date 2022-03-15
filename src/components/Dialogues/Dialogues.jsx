import React from "react";
import classes from './Dialogues.module.css'
import Message from "./Messages/Message";
import DialoguesItem from "./DialoguesItem/DialoguesItem";



 const Dialogues =(props) =>{

    let dialogues =[
         {id: 1, name: 'Timur'},
         {id: 2, name: 'Marina'},
         {id: 3, name: 'Luna'},
         {id: 4, name: 'Munara'},
         {id: 5, name: 'Sanzhar'},
         {id: 6, name: 'Azamat'}

     ]
       let  messages =[
         {id: 1, message: "Hello"},
         {id: 2, message: "Hello"},
         {id: 3, message: "What are doing?"},
         {id: 4, message: "I'm reading a book"},
         {id: 5, message: "What plans for the evening?"},
         {id: 6, message: "Nothing."}

     ]
     let dialoguesElements = dialogues.map( dialogue => <DialoguesItem name={dialogue.name} id={dialogue.id}/>);

     let messagesElements = messages.map(message => <Message message={message.message} id={message.id}/> )
    return(
        <div className={classes.dialogue}>
            <div className={classes.dialogueItem}>
                {
                    dialoguesElements
                }
            </div>
            <div className={classes.messages}>
                {
                    messagesElements
                }
            </div>
        </div>
    )
 }


export default Dialogues;