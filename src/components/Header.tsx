import { FC } from "react";
import { RocketIcon } from ".";

const Header: FC = () => {
  return (
    <header className="flex w-screen items-center justify-center gap-3 bg-gray-700 h-[12.5rem]">
      <RocketIcon />
      <h1 className="text-[2.5rem] items-start">
        <strong className="text-blue-500">to</strong>
        <strong className="text-purple-800">do</strong>
      </h1>
    </header>
  );
};

export default Header;
