import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";

const Todos: React.FC<{ children: React.ReactNode; items: Todo[] }> = (
  props
) => {
  return (
    <ul>
      {props.items.map((i) => (
        <TodoItem text={i.text} key={i.id} />
      ))}
      <li>Learn TypeScript</li>
    </ul>
  );
};

export default Todos;
