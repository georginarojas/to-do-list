import { FC } from "react";
import { Checkbox, TrashIcon } from ".";

const TaskList: FC = () => {
  return (
    <>
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
      {/* <div className="w-full h-[15.25rem] flex flex-col items-center justify-center border-t border-gray-400 rounded-lg text-gray-300 px-6 py-16">
            <ClipboardIcon />
            <b className="mt-4">You don't have any tasks registered yet.</b>
            <p>Create tasks and organize your to-do items</p>
          </div> */}

      <div className="grid gap-y-3">
        <div className="w-full min-h-[4.5rem] flex items-start justify-between gap-7 border-gray-400 rounded-lg bg-gray-500 p-4">
          <Checkbox
            checked={true}
            onChange={() => {}}
            task={{
              id: "123",
              description:
                "Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor",
            }}
          />
          <button className="mt-1 mr-2 text-0 focus:outline-none focus:outline-purple-800">
            <TrashIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default TaskList
