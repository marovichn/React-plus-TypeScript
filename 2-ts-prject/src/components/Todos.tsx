import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
import { useContext } from "react";
import { TodosContext } from "../store/todos-context";

const Todos: React.FC = () => {
  const ctx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {ctx.items.map((i) => (
        <TodoItem
          onDelete={() => {
            ctx.removeTodo(i.id);
          }}
          text={i.text}
          key={i.id}
        />
      ))}
    </ul>
  );
};

export default Todos;
