import { FC } from "react";
import { CheckIcon } from ".";
import { Task } from "../models-types";
import "./Checkbox-styles.css";

interface Props {
  checked: boolean;
  task: Task;
  onChange: (id: string) => void;
}

const Checkbox: FC<Props> = ({ checked, task, onChange }: Props) => {
  return (
    <label htmlFor="task" className={checked ? "checkbox__label--checked" : "checkbox__label"}>
      <input
        type="checkbox"
        name="task"
        className="sr-only"
        onChange={() => {
          onChange(task.id);
        }}
      />
      <span
        aria-hidden="true"
        className={checked ? "checkbox__span--checked" : "checkbox__span"}
      >
        <CheckIcon color={checked ? "#fff" : "#262626"} size={"12px"} />
      </span>
      {task.description}
    </label>
  );
};

export default Checkbox;
