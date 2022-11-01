import { ClipboardIcon, RocketIcon } from "./components";

function App() {
  return (
    <div className="w-screen min-h-screen bg-gray-600 flex flex-col items-center">
      <header className="flex w-screen items-center justify-center gap-3 bg-gray-700 h-[12.5rem]">
        <RocketIcon />
        <h1 className="text-[2.5rem] items-start">
          <strong className="text-blue-500">to</strong>
          <strong className="text-purple-800">do</strong>
        </h1>
      </header>
      <section className="-mt-[1.69rem]">
        <form className="flex gap-2">
          <input
            className="w-[39.875rem] h-[3.375rem] p-4 rounded-lg bg-gray-500 border border-gray-700 text-gray-100 placeholder-gray-300 focus:outline-none focus:border-purple-800 "
            placeholder="Add new task"
          />
          <button
            type="button"
            title="Create new task"
            className="h-[3.25rem] px-4 flex bg-blue-800 rounded-lg text-gray-100 items-center justify-center gap-2 transition-colors hover:bg-blue-500 focus:outline-none focus:outline-purple-800"
          >
            <p className="text-sm font-bold">Create</p>
            <span className="text-lg border-2 border-gray-100 rounded-full p-[0.125rem] leading-3">
              +
            </span>
          </button>
        </form>
        <section className="mt-16 mb-12">
          <header className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2 font-bold">
              <p className=" text-blue-500">Task created</p>
              <span className="text-sm text-gray-100 bg-gray-400 rounded-full py-1 px-4">
                10
              </span>
            </div>
            <div className="flex items-center gap-2 font-bold">
              <p className=" text-purple-500">Completed</p>
              <span className="text-sm text-gray-100 bg-gray-400 rounded-full py-1 px-4">
                2 de 5
              </span>
            </div>
          </header>
          <div className="w-full h-[15.25rem] flex flex-col items-center justify-center border-t border-gray-400 rounded-lg text-gray-300 px-6 py-16">
            <ClipboardIcon />
            <b className="mt-4">You don't have any tasks registered yet.</b>
            <p>Create tasks and organize your to-do items</p>
          </div>
        </section>
      </section>
    </div>
  );
}

export default App;
