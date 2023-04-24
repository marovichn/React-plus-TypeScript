import Todo from "../models/todo";
import React, { useState } from "react";

type Context = {
  items: Todo[];
  addTodo: (arg: string) => void;
  removeTodo: (arg: string) => void;
};

export const TodosContext = React.createContext<Context>({
  items: [],
  addTodo: (text: string) => {},
  removeTodo: (id: string) => {},
});

const ProvideTodos: React.FC<{ children: any }> = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const submitHandler = (data: string) => {
    setTodos((p) => [new Todo(data), ...p]);
  };

  const deleteHandler = (todoId: string) => {
    setTodos((p) => {
      return p.filter((todo) => todo.id !== todoId);
    });
  };

  const contextValue: Context = {
    items: todos,
    addTodo: submitHandler,
    removeTodo: deleteHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};
export default ProvideTodos;
