import { useContext} from "react";
import { TasksContext, TasksDispatchContext } from "./TaskContext.js";

function Task({ task }) {
  //const [isEditing, setIsEditing] = useState(false);
  const dispatch = useContext(TasksDispatchContext);
   
  return (
    <div>
      <input
        type="checkbox"
        checked={task.done}
        onChange={e => {
          dispatch({
            type: 'changed',
            task: {
              ...task,
              done: e.target.checked}
          });
        }}
      />
      <span>{task.text}</span>
      <button onClick={() => {
        dispatch({
          type: 'deleted',
          id: task.id});
      }}>
        Delete
      </button>
    </div>
  );
}

export default function TaskList() {
    const tasks=useContext(TasksContext);
    return (
        <ul>
            {tasks.map (task=> (
                <li key={task.id}>
                    <Task task={task} />
                </li>
            ))}
        </ul>
    );
}