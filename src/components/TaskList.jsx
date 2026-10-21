import { useContext} from "react";
import { TasksContext, TasksDispatchContext } from "./TaskContext.js";
import { FaTrash } from "react-icons/fa";
function Task({ task }) {
  //const [isEditing, setIsEditing] = useState(false);
  const dispatch = useContext(TasksDispatchContext);
   
  return (
    <div className="task">
        <label className="task-label">
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
            <span className={task.done ? "task-text done":"task-text"}>{task.text}</span>   
        </label>
      <button className="delete-btn"
        onClick={() => {
        dispatch({
          type: 'deleted',
          id: task.id});
      }}>
        <FaTrash/>
      </button>
    </div>
  );
}

export default function TaskList() {
    const tasks=useContext(TasksContext);
    return (
        <ul className="task-list">
            {tasks.map (task=> (
                <li key={task.id}>
                    <Task task={task} />
                </li>
            ))}
        </ul>
    );
}