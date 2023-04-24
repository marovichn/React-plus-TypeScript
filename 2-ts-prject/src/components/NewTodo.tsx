import { useRef } from "react";
import classes from "./NewTodo.module.css";
import { useContext } from "react";
import { TodosContext } from "../store/todos-context";

const NewTodo: React.FC = () => {
  const ctx = useContext(TodosContext);
  const todoInput = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredText = todoInput.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    ctx.addTodo(enteredText);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="text">Todo Text</label>
      <input ref={todoInput} type="text" id="text" />
      <button>Add Todo</button>
    </form>
  );
};
export default NewTodo;
