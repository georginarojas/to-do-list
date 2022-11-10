import {
  AddNewTask,
  Checkbox,
  ClipboardIcon,
  Header,
  TrashIcon,
} from "./components";
import { useTasks } from "./context-api/use-tasks";
import { Task } from "./models-types";

function App() {
  const { taskList, toggleTaskDone, deleteTask } = useTasks();
  const tasksCompleted = taskList.filter((task) => task.hasDone === true);

  const handleChangeTaskStatus = (id: string) => {
    toggleTaskDone(id);
  };

  const handleDeleteTask = (id: string) => {
    deleteTask(id);
  };

  return (
    <div className="w-screen min-h-screen bg-gray-600 flex flex-col items-center">
      <Header />
      <section className="-mt-[1.69rem] w-[46rem] box-border">
        <AddNewTask />
        <section className="mt-16 mb-12">
          <header className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2 font-bold">
              <p className=" text-blue-500">Task created</p>
              <span className="text-sm text-gray-100 bg-gray-400 rounded-full py-1 px-4">
                {taskList.length}
              </span>
            </div>
            <div className="flex items-center gap-2 font-bold">
              <p className=" text-purple-500">Completed</p>
              <span className="text-sm text-gray-100 bg-gray-400 rounded-full py-1 px-4">
                {tasksCompleted.length} de {taskList.length}
              </span>
            </div>
          </header>
          {taskList.length === 0 ? (
            <div className="w-full h-[15.25rem] flex flex-col items-center justify-center border-t border-gray-400 rounded-lg text-gray-300 px-6 py-16">
              <ClipboardIcon />
              <b className="mt-4">You don't have any tasks registered yet.</b>
              <p>Create tasks and organize your to-do items</p>
            </div>
          ) : (
            <div className="grid gap-y-3">
              {taskList.map((task: Task) => (
                <div
                  key={task.id}
                  className="w-full min-h-[4.5rem] flex items-start justify-between gap-7 border-gray-400 rounded-lg bg-gray-500 p-4"
                >
                  <Checkbox
                    onChange={() => handleChangeTaskStatus(task.id)}
                    task={task}
                  />
                  <button
                    onClick={() => handleDeleteTask(task.id)}
                    className="mt-1 mr-2 text-0 focus:outline-none focus:outline-purple-800"
                  >
                    <TrashIcon />
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>
      </section>
    </div>
  );
}

export default App;
