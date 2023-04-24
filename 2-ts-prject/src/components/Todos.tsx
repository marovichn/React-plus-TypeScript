import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

const Todos: React.FC<{
  onDelete: (todoId: string) => void;
  children: React.ReactNode;
  items: Todo[];
}> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((i) => (
        <TodoItem
          onDelete={() => {
            props.onDelete(i.id);
          }}
          text={i.text}
          key={i.id}
        />
      ))}
    </ul>
  );
};

export default Todos;
