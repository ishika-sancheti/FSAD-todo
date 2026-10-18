//provides the current list of tasks
import { createContext } from "react";
//null is passed b/c actual values will be provided by taskapp 
export const TasksContext=createContext(null);
export const TasksDispatchContext=createContext(null);