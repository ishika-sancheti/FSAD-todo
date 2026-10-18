import { useState } from "react";

function Task({task, onDelete, onChange}){
    let taskContent;
    taskContent=(
        <input
            value={task.text}
            onChange={e=> {
                onChange({ ...task, text: e.target.value});
            }}
        />
    );
    return (
        <label>
            <input 
                type="checkbox"
                checked={task.done}
                onChange={e =>{
                    onChange({
                        ...task, done:e.target.checked
                    });
                } }
            />
            {taskContent}
            <button onClick={()=> onDelete(task.id)}>Delete</button>
        </label>
    )
}

export default function TaskList({tasks, onDeleteTask, onChangeTask}) {
    return (
        <ul>
            {tasks.map (task=> (
                <li key={task.id}>
                    <Task
                        task={task}
                        onDelete={onDeleteTask}
                        onChange={onChangeTask}
                    />
                </li>
            )) }
        </ul>
    );
}