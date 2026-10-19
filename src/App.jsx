import AddTask from './components/AddTask.jsx';
import TaskList from './components/TaskList.jsx'
import {TasksContext, TasksDispatchContext} from './components/TaskContext.js'
import { useReducer } from "react";

let nextId=3;
const initialTasks=[
    {id:0, text:'Master React', done:true},
    {id:1, text:'Learn Redux', done:false},
    {id:3, text:'Learn MicroFrontends', done:false}
]

function tasksReducer(tasks, action) {          
    //instruction for what to do w the task - action
    //tasks - current task list
    console.log();
    switch(action.type) {
        case 'added':{
            return [...tasks, {             //returns an array containing all existing tasks + new tasks defined as below
                id:nextId++,
                text:action.text,
                done:false
            }];
        }
        case 'changed':{
            tasks.map(t => {                     //goes thru the tasks & creates a new array
                if (t.id==action.task.id){       //matches id and finds out if this is the task we want to change
                    return action.task.id;
                }
                else {
                    return t;           //other tasks remain unchanged
                }
            })
        }
        case 'deleted':{
            return tasks.filter(t=>
                t.id!==action.id        //creates a new array w every task except the one matching the id in action
            )
        }
        default: {
            throw Error('unknown action: ' + action.type);
        }
    }
}

export default function TaskApp() {
    const [tasks, dispatch]=useReducer(tasksReducer, initialTasks);
    function handleAddTask(text) {
        dispatch( { type:'added', id:nextId++, text:text});
    }
    function handleChangeTask(task) {
        dispatch({type:'changed', task: task, id: task.id});
    }
    function handleDeleteTask(task){
        dispatch({type:'deleted', task:task, id: task.id});
    }
    
    return (
        <div className="todo-input-container">
            <TasksContext value={tasks}>
                <TasksDispatchContext value={dispatch}>
                    <h1>FSAD To Do App</h1>
                    <AddTask/>
                    <TaskList /> 
                </TasksDispatchContext>
            </TasksContext>
        </div>
    ); 
}


   


