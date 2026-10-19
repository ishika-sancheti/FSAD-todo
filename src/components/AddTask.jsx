import { useContext, useState } from "react";
import {TasksDispatchContext} from './TaskContext.js'

export default function AddTask({onAddTask}) {
    const [text, setText]=useState('');
    const dispatch=useContext(TasksDispatchContext);
    return(
            <form onSubmit={e=>{
                e.preventDefault();
                setText("");
                dispatch({
                    type:'added',
                    id: nextId++,
                    text: text
                });
            }}>
                <input 
                    placeholder="Enter a to-do..."
                    id="textbox"
                    value={text}                                  //input - displays the current state in the input
                    onChange={e => setText(e.target.value)}       //controlling the input - updating the state
                />
            </form>
    )
}
let nextId=3;