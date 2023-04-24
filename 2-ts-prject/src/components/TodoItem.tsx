import React from "react";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  onDelete: () => void;
  key: string;
  text: string;
}> = (props) => {
  return (
    <li onClick={props.onDelete} className={classes.item}>
      {props.text}
    </li>
  );
};
export default TodoItem;
