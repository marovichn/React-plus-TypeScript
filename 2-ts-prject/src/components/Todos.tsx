import React from "react";
import Todo from "../models/todo";

const Todos: React.FC<{ children: React.ReactNode; items: Todo[] }> = (
  props
) => {
  return (
    <ul>
      {props.items.map((i) => (
        <li key={i.id}>{i.text}</li>
      ))}
      <li>Learn TypeScript</li>
    </ul>
  );
};

export default Todos;
