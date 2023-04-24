import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

const Todos: React.FC<{ children: React.ReactNode; items: Todo[] }> = (
  props
) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((i) => (
        <TodoItem text={i.text} key={i.id} />
      ))}
    </ul>
  );
};

export default Todos;
