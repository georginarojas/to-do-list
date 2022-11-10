import { createContext, ReactNode, useContext, useState } from "react";
import { Task } from "../models-types";

interface TasksProviderProps {
  children: ReactNode;
}

interface TasksContextData {
  taskList: Task[];
  toggleTaskDone: (id: string) => void;
  deleteTask: (id: string) => void;
  addNewTask: (description: string) => void;
}

export const TasksContext = createContext<TasksContextData>(
  {} as TasksContextData
);

// mockTaskList
const mockTaskList: Task[] = [
  {
    id: "111",
    description: "Any task 1",
    hasDone: true,
  },
  {
    id: "222",
    description: "Any task 2",
    hasDone: false,
  },
  {
    id: "333",
    description: "Any task 3",
    hasDone: false,
  },
];

export const TasksProvider = ({ children }: TasksProviderProps) => {
  const [taskList, setTaskList] = useState<Task[] | []>(mockTaskList);

  const toggleTaskDone = (id: string) => {
    const index = taskList.findIndex((task) => task.id === id);
    taskList[index].hasDone = !taskList[index].hasDone;

    setTaskList([...taskList]);
  };

  const deleteTask = (id: string) => {
    const newTaskList = taskList.filter((task) => task.id !== id);

    setTaskList(newTaskList);
  };

  const addNewTask = (description: string) => {
    const id = Math.random().toString(36)
    const newTask: Task  ={
        id,
        description,
        hasDone: false
    };

    setTaskList([...taskList, newTask]);
  };

  return (
    <TasksContext.Provider value={{ taskList, toggleTaskDone, deleteTask, addNewTask}}>
      {children}
    </TasksContext.Provider>
  );
};

export function useTasks() {
  const context = useContext(TasksContext);
  return context;
}
