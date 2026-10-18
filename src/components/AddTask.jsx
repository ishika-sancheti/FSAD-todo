import { useState } from "react";

export default function AddTask({onAddTask}) {
    const [text, setText]=useState('');
    return(
            <form onSubmit={e =>{
                e.preventDefault();
                onAddTask(text);
                setText("");
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