import { ChangeEvent, FC, FormEvent, useState } from "react";
import { useTasks } from "../context-api/use-tasks";

const AddNewTask: FC = () => {
  const { addNewTask } = useTasks();
  const [newTask, setNewTask] = useState("");

  const handleChangeNewTask = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setNewTask(e.target.value);
  };

  const handleSubmitNewTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNewTask(newTask);
    setNewTask("");
  };

  return (
    <form
      className="flex justify-between gap-2"
      onSubmit={(e) => handleSubmitNewTask(e)}
    >
      <input
        className="w-5/6 h-[3.375rem] p-4 rounded-lg bg-gray-500 border border-gray-700 text-gray-100 placeholder-gray-300 focus:outline-none focus:border-purple-800 "
        placeholder="Add new task"
        onChange={(e) => handleChangeNewTask(e)}
        value={newTask}
      />
      <button
        type="submit"
        title="Create new task"
        className="h-[3.25rem] w-1/6 flex bg-blue-800 rounded-lg text-gray-100 items-center justify-center gap-2 transition-colors hover:bg-blue-500 focus:outline-none focus:ring focus:ring-purple-800"
      >
        <p className="text-sm font-bold">Create</p>
        <span className="text-lg border-2 border-gray-100 rounded-full p-[0.125rem] leading-3">
          +
        </span>
      </button>
    </form>
  );
};

export default AddNewTask;
