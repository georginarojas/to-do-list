import { FC } from "react";
import { Task } from "../models-types";
import "./Checkbox-styles.css";

interface Props {
  task: Task;
  onChange: () => void;
}

const Checkbox: FC<Props> = ({ task, onChange }: Props) => {
  return (
    <label
      htmlFor="task"
      className={task.hasDone ? "checkbox__label--checked" : "checkbox__label"}
    >
      <input
        type="checkbox"
        name="task"
        checked={task.hasDone}
        className={ task.hasDone ? "checkbox__input--checked" : "checkbox__input" }
        onChange={() => onChange()}
      />
      <p className={task.hasDone ? "checkbox__p--checked" : ""}>
        {task.description}
      </p>
    </label>
  );
};

export default Checkbox;
